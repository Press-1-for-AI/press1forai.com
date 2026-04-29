import { ImageResponse } from "next/og";
import { BG, INK, LIME } from "@/components/party-line/constants";

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
          background: BG,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            background: LIME,
            border: `2px solid ${INK}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: BG,
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
