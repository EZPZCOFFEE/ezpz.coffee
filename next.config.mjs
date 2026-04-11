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
  },
};

export default withNextIntl(nextConfig);
