"use server";

import { cookies } from "next/headers";

import { getSitePassword } from "@/lib/data/get-site-settings";

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

  console.log("[unlockSite] Fetching site password from Shopify...");
  const sitePassword = await getSitePassword();
  console.log("[unlockSite] Site password fetched:", {
    exists: !!sitePassword,
    length: sitePassword?.length ?? 0,
  });

  if (!sitePassword) {
    console.error("[unlockSite] Site password not configured in Shopify");
    return { success: false, error: "Site password not configured" };
  }

  const passwordMatch = password === sitePassword;
  console.log("[unlockSite] Password validation:", {
    match: passwordMatch,
    providedLength: password.length,
    expectedLength: sitePassword.length,
  });

  if (!passwordMatch) {
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
