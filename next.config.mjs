/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production" ? "https://chae-dahee.github.io/" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
