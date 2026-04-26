"use server";

import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  inquiry: string;
  subject: string;
  message: string;
}

export async function contact(
  payload: ContactPayload
): Promise<{ success: boolean; error?: string }> {
  const { name, email, inquiry, subject, message } = payload;

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — email not sent");
    return { success: false, error: "Email service is not configured." };
  }

  const resend = new Resend(apiKey);

  const html = `
    <table style="font-family:sans-serif;font-size:15px;color:#111;max-width:600px;width:100%">
      <tr><td style="padding:8px 0"><strong>Name:</strong> ${name}</td></tr>
      <tr><td style="padding:8px 0"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px 0"><strong>Inquiry type:</strong> ${inquiry || "—"}</td></tr>
      <tr><td style="padding:8px 0"><strong>Subject:</strong> ${subject}</td></tr>
      <tr><td style="padding:24px 0 8px"><strong>Message:</strong></td></tr>
      <tr><td style="padding:0;white-space:pre-wrap;line-height:1.6">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td></tr>
    </table>
  `;

  const { error } = await resend.emails.send({
    from: "EZPZ Contact Form <contact@ezpz.coffee>",
    to: "help@ezpz.coffee",
    replyTo: email,
    subject: `[Contact] ${subject}`,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true };
}
