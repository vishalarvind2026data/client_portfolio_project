import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // If USE_PYTHON_BACKEND=true is set during local dev, proxy to local FastAPI port 8090.
  // In production / Vercel, requests are handled natively by Next.js API routes.
  ...(process.env.USE_PYTHON_BACKEND === "true"
    ? {
        async rewrites() {
          return [
            {
              source: "/api/py/:path*",
              destination: "http://127.0.0.1:8090/api/:path*",
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
