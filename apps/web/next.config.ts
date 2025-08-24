/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./node_modules/.prisma/**/*', './node_modules/@prisma/**/*'],
    },
  },
};

export default nextConfig;
