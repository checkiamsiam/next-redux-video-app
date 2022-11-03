/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i3.ytimg.com" , "avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
