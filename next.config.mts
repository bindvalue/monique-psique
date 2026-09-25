import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  transpilePackages: ["maplibre-gl", "react-map-gl"],
  turbopack: {},
  outputFileTracingRoot: __dirname,

  images: {
    qualities: [75, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 420, 440, 540, 620],
  },
};

export default nextConfig;