/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production" ? "https://chae-dahee.github.io/" : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  assetPrefix: prefix,
  images: {
    unoptimized: true,
    loader: "imgix",
    path: "/",
  },
};

export default nextConfig;
