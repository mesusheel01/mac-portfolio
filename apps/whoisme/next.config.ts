import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  serverExternalPackages: ['@repo/db', '@prisma/client', 'prisma'],
};

export default nextConfig;
