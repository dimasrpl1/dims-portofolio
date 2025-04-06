/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'zfhloklwwkriufdxiloz.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
