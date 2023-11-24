/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.sre-its.com',
        pathname: '/static/**/*',
      },
    ],
  },
};

module.exports = nextConfig;
