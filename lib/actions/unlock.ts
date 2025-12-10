"use server";

import { cookies } from "next/headers";

import { SITE_PASSWORD } from "@/lib/consts";

const UNLOCK_COOKIE_NAME = "site-unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

interface UnlockResult {
  success: boolean;
  error?: string;
}

export async function unlockSite(formData: FormData): Promise<UnlockResult> {
  const password = formData.get("password");

  if (typeof password !== "string" || !password.trim()) {
    return { success: false, error: "Password is required" };
  }

  if (password !== SITE_PASSWORD) {
    return { success: false, error: "Incorrect password" };
  }

  const cookieStore = await cookies();
  cookieStore.set(UNLOCK_COOKIE_NAME, "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return { success: true };
}
