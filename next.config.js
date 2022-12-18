/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://aster-woad.vercel.app/:path*',
      }
    ]
  }
}

module.exports = nextConfig

