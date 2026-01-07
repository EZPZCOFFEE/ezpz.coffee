import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/i18n/types";
import { getPasswordWallEnabled } from "@/lib/data/get-site-settings";

const UNLOCK_COOKIE_NAME = "site-unlocked";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default async function middleware(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  // Skip static assets
  const isStaticAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname.startsWith("/favicon");

  if (isStaticAsset) {
    return NextResponse.next();
  }

  // Check if on password page
  const isPasswordPage = locales.some(
    (locale) => pathname === `/${locale}/password` || pathname === "/password"
  );

  console.log("[middleware] Processing request:", { pathname, isPasswordPage });

  // Fetch password wall setting from Shopify (cached for 60s)
  console.log("[middleware] Fetching password wall enabled setting...");
  const siteLocked = await getPasswordWallEnabled();
  console.log("[middleware] Password wall enabled:", siteLocked);

  // Site lock logic
  if (siteLocked && !isPasswordPage) {
    const isUnlocked = request.cookies.get(UNLOCK_COOKIE_NAME)?.value === "true";

    if (!isUnlocked) {
      const pathnameLocale = locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
      );
      const locale = pathnameLocale ?? defaultLocale;

      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/password`;
      return NextResponse.redirect(url);
    }
  }

  // If on password page but site is unlocked, redirect to home
  if (!siteLocked && isPasswordPage) {
    const pathnameLocale = locales.find(
      (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    const locale = pathnameLocale ?? defaultLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  // Handle GET requests with i18n routing
  if (request.method === "GET") {
    return intlMiddleware(request);
  }

  // CSRF protection for non-GET requests
  const originHeader = request.headers.get("Origin");
  const hostHeader = request.headers.get("Host");
  if (originHeader === null || hostHeader === null) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  let origin: URL;
  try {
    origin = new URL(originHeader);
  } catch {
    return new NextResponse(null, {
      status: 403,
    });
  }
  if (origin.host !== hostHeader) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|monitoring).*)",
};
