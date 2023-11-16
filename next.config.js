/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '34.101.112.192',
        port: '',
        pathname: '/static/**/*',
      },
    ],
  },
};

module.exports = nextConfig;
