import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Ideafest-Product-Intelligence",
  assetPrefix: "/Ideafest-Product-Intelligence/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
