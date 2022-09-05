/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
        allowFutureImage: true
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/farmer-pro-pipes' : '',
}

module.exports = nextConfig
