import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Vercel, leave output unset (default SSR/SSG) to support API routes.
  // Set no basePath or assetPrefix unless deploying under a subpath.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
