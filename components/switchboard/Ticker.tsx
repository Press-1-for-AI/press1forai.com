"use client";

import { AMBER, AMBER_DIM } from "./constants";

const ITEMS = [
  "PRESS 1 FOR SMARTER INVENTORY",
  "PRESS 2 TO DISAPPEAR FROM BIG TECH",
  "PRESS 3 TO PLAY THE BUTTON GAME",
  "PRESS 9 IF YOU HEAR A DEEPFAKE",
  "PRESS ★ TO JOIN THE UPRISING",
];

export default function Ticker() {
  return (
    <div
      style={{
        borderTop: `1px solid ${AMBER_DIM}`,
        borderBottom: `1px solid ${AMBER_DIM}`,
        padding: "14px 0",
        overflow: "hidden",
        background: "rgba(255,179,71,0.04)",
      }}
    >
      <div
        className="d1-ticker"
        style={{
          display: "flex",
          gap: 60,
          whiteSpace: "nowrap",
          fontSize: 14,
          letterSpacing: "0.3em",
          fontWeight: 700,
        }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} style={{ color: i % 2 ? AMBER_DIM : AMBER }}>
            ◉ {t}
          </span>
        ))}
      </div>
    </div>
  );
}
