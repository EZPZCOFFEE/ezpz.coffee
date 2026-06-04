import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@ark-ui/react", "@phosphor-icons/react"],
  },
  images: {
    // Allow quality props used on next/image (default config only allows [75] in Next 15+).
    qualities: [75, 80, 85, 100],
    // Cap max srcset width at 1920px — 3840 is unnecessary for any real viewport.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      // HTTP → HTTPS (Vercel passes x-forwarded-proto for plain-HTTP requests)
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-proto", value: "http" }],
        destination: "https://www.ezpz.coffee/:path*",
        permanent: true,
      },
      // Non-www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "ezpz.coffee" }],
        destination: "https://www.ezpz.coffee/:path*",
        permanent: true,
      },
      // Legacy / Shopify leftover pages
      { source: "/admin", destination: "/en", permanent: true },
      { source: "/search", destination: "/en", permanent: true },
      { source: "/wpm", destination: "/en", permanent: true },
      { source: "/cdn", destination: "/en", permanent: true },
      { source: "/b", destination: "/en", permanent: true },
      // Shopify password page leftover
      { source: "/password", destination: "/en", permanent: true },
      // Blog paths missing /en/ prefix
      { source: "/blog/:slug*", destination: "/en/blog/:slug*", permanent: true },
      // Custom coffee bag city/industry pages missing /en/ prefix
      { source: "/custom-coffee-bags-:slug*", destination: "/en/custom-coffee-bags-:slug*", permanent: true },
      // Catch-all: any path not already starting with a known prefix
      {
        source: "/:path((?!en|fr|api|_next|favicon|sitemap|robots|llms|manifest|opengraph|twitter).*)",
        destination: "/en/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
