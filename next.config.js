/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/2021/07/20/14/59/iron-man-6480952_960_720.jpg",
      },
    ],
  },
};

module.exports = nextConfig;
