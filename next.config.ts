import type { NextConfig } from 'next';

const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
