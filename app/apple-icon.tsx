import { ImageResponse } from "next/og";

// iOS / Android home-screen icon — same lime "1" badge, scaled up.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f0f0f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            background: "#c6ff3d",
            border: "8px solid #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0f0f0f",
            fontSize: 110,
            fontWeight: 900,
            fontFamily: "system-ui, sans-serif",
            transform: "rotate(-5deg)",
          }}
        >
          1
        </div>
      </div>
    ),
    size,
  );
}
