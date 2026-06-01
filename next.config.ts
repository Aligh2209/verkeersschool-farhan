import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Geen static export — API routes nodig voor Mollie
  images: { unoptimized: true },
};

export default nextConfig;
