import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",
  // No server to run the optimizer — required for `next/image` under `output: "export"`.
  images: { unoptimized: true },
};

export default nextConfig;
