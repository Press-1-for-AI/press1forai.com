import { ImageResponse } from "next/og";
import { BG, INK, LIME } from "@/components/party-line/constants";

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
          background: BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            background: LIME,
            border: `8px solid ${INK}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: BG,
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
