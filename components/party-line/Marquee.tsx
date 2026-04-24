"use client";

import { BG, INK, LIME } from "./constants";

const ITEMS = [
  "press 1 → anonyme",
  "press 2 → the button game",
  "press 3 → stockit",
  "press 4 → mineme",
  "press 5 → tiny limp",
  "press ★ → join us",
];

export default function Marquee() {
  const tripled = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      style={{
        background: LIME,
        borderTop: `2px solid ${INK}`,
        borderBottom: `2px solid ${INK}`,
        padding: "18px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="d2-marquee"
        style={{
          display: "flex",
          gap: 40,
          whiteSpace: "nowrap",
          fontWeight: 700,
          fontSize: 22,
          color: BG,
          letterSpacing: "-0.01em",
        }}
      >
        {tripled.map((t, i) => (
          <span key={i}>★ {t}</span>
        ))}
      </div>
    </div>
  );
}
