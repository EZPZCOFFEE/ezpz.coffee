import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "@/i18n/types";

export default function middleware(request: NextRequest): NextResponse {
  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale,
  });

  if (request.method === "GET") {
    return handleI18nRouting(request);
  }

  const originHeader = request.headers.get("Origin");
  // NOTE: You may need to use `X-Forwarded-Host` instead
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

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next|monitoring).*)",
};
