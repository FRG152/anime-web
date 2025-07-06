import type { NextConfig } from "next";

// https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256

const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: "anonymous",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.kitsu.app",
        port: "",
        pathname: "/anime/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
