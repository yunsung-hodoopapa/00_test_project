/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['localhost', 'img.29cm.co.kr'],
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname); // 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
