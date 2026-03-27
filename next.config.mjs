import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@ark-ui/react", "@phosphor-icons/react"],
  },
};

export default withNextIntl(nextConfig);
