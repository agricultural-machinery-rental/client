/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    domains: ['agropark.acceleratorpracticum.ru'],
  },
};

module.exports = nextConfig;
