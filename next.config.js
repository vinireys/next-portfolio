/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubsercontent.com',
        port: '',
        pathname: '/u/**'
      }
    ]
  }
}

module.exports = nextConfig
