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
      {
        source: "/:path*",
        has: [{ type: "host", value: "ezpz.coffee" }],
        destination: "https://www.ezpz.coffee/:path*",
        permanent: true,
      },
      { source: "/admin", destination: "/en", permanent: true },
      { source: "/search", destination: "/en", permanent: true },
      { source: "/wpm", destination: "/en", permanent: true },
      { source: "/cdn", destination: "/en", permanent: true },
      { source: "/b", destination: "/en", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
