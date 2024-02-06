/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.sre-its.com',
        pathname: '/static/**/*',
      },
      {
        protocol: 'https',
        hostname: 'api.sre-its.com',
        pathname: '/storage/**/*',
      },
    ],
  },
};

module.exports = nextConfig;
