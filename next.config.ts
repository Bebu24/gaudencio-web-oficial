import type { NextConfig } from "next";

// Encabezados de seguridad para todas las páginas.
// (Los archivos de /public y /_next/static los sirve Cloudflare directamente; ver public/_headers)
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

const nextConfig: NextConfig = {
  // No anunciar "X-Powered-By: Next.js"
  poweredByHeader: false,

  // Las imágenes se sirven tal cual desde /public (ya están optimizadas).
  // Evita depender del optimizador de imágenes de Next/Cloudflare Images.
  images: { unoptimized: true },

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
