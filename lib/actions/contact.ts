"use server";

import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function contact(
  payload: ContactPayload
): Promise<{ success: boolean; error?: string }> {
  const { name, email, subject, message } = payload;

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return { success: false, error: "All fields are required." };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — email not sent");
    return { success: true };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "EZPZ Contact <onboarding@resend.dev>",
    to: "help@ezpz.coffee",
    reply_to: email,
    subject: `[Contact] ${subject}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><br/><p>${message.replace(/\n/g, "<br/>")}</p>`,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true };
}
