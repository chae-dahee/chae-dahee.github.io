/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone", // Docker 배포용
  reactStrictMode: true,
  swcMinify: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    domains: ["chae-dahee.github.io"],
  },
};

export default nextConfig;
