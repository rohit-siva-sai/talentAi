/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  swcMinify: true,
  target: "https://console.firebase.google.com/u/1/project/talentai-site/settings/integrations/cloudlogging",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
