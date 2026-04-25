import { ImageResponse } from "next/og";

// Tab/bookmark icon — the lime "1" badge from the nav, rotated -5deg.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 26,
            height: 26,
            background: "#c6ff3d",
            border: "2px solid #ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0f0f0f",
            fontSize: 20,
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
