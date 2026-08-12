import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The pitch is entirely client-side, so publishing a static export avoids
  // server cold starts and lets Render serve it directly from its CDN.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
