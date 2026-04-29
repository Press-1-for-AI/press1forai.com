import type { NextConfig } from "next";

// Defense-in-depth response headers. Each header limits a class of attack
// that doesn't currently apply to this static marketing site, but cheaply
// keeps the door closed if a future change ever opens one.
const SECURITY_HEADERS = [
  // Force HTTPS for a year on every browser that's hit the site once.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Block the site from being framed anywhere — kills clickjacking
  // (someone iframing the site over a credential prompt to phish).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers from MIME-sniffing responses (nosniff is required for
  // strict CSP behaviour anyway).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak full URLs to third-party origins on outbound clicks.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site doesn't use these device APIs — explicitly turn them off so
  // that any future iframe / dependency can't request them either.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=()",
  },
  // Content Security Policy — limits what scripts/styles/fonts/images/
  // connections the page can load. 'unsafe-inline' is required for both
  // scripts (Next.js hydration injects inline bootstrap scripts) and
  // styles (every component uses inline-style objects). Even a permissive
  // CSP blocks classes of injection cold.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "connect-src 'self' https://formspree.io",
      "form-action 'self' https://formspree.io",
      "frame-ancestors 'none'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
