/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/((?!preview-12345).*)', // всё кроме preview-12345
        destination: '/maintenance',
        permanent: false,
      },
    ]
  },
}
module.exports = nextConfig
