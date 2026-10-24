import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/servicios/seguro-hogar",
        destination: "/servicios",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
