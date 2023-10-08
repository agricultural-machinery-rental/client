/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  server: {
    port: 3000,
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(ts|tsx)?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/profile/info',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['bugaton4.acceleratorpracticum.ru'],
  },
};

module.exports = nextConfig;
