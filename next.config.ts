import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Yemigo-downloads',
  assetPrefix: '/Yemigo-downloads/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
