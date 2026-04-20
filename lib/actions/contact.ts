"use server";

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
    console.log(`[contact] From: ${name} <${email}> | Subject: ${subject}\n\n${message}`);
    return { success: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "EZPZ Contact <onboarding@resend.dev>",
      to: ["help@ezpz.coffee"],
      reply_to: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><br/><p>${message.replace(/\n/g, "<br/>")}</p>`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[contact] Resend error:", res.status, body);
    return { success: false, error: "Failed to send message. Please try again." };
  }

  return { success: true };
}
