"use client";

import type { ReactNode } from "react";
import { AMBER, BG, SCAN } from "./constants";

export default function CRTWrap({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        background: BG,
        color: AMBER,
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        minHeight: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 50,
          backgroundImage: `repeating-linear-gradient(0deg, ${SCAN} 0 2px, transparent 2px 4px)`,
          mixBlendMode: "overlay",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 49,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
      <div
        className="d1-flicker"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 48,
          background: "rgba(255,179,71,0.015)",
        }}
      />
      {children}
    </div>
  );
}
