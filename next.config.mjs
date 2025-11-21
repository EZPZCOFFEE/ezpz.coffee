/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["@ark-ui/react", "@phosphor-icons/react"],
  },
};

export default nextConfig;
