/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yandex-images.clstorage.net",
      },
      {
        protocol: "https",
        hostname: "s3.futlab.ru",
      },
      {
        protocol: "https",
        hostname: "www.vippng.com",
      },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
