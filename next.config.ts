import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/py/:path*",
        destination: "http://127.0.0.1:8090/api/:path*",
      },
    ];
  },
};

export default nextConfig;
