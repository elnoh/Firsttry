import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Ensures Next.js properly generates static files for Vercel
};

export default nextConfig;
