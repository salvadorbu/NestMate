/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ar.rdcpix.com',
      },
      {
        protocol: 'https',
        hostname: 'ap.rdcpix.com',
      },
    ],
  },
};

export default nextConfig;