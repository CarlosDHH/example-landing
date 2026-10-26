import type { NextConfig } from "next";

/**
 * Landing estática: `npm run build` genera la carpeta `out/` lista para
 * subir a cualquier hosting (Vercel, Netlify, GitHub Pages, cPanel…).
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
