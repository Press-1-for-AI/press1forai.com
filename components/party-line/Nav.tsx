"use client";

import { play } from "@/lib/sounds";
import { BG, INK, LIME, PINK, SUN } from "./constants";

const LINKS: [string, string][] = [
  ["apps", PINK],
  ["shield", LIME],
  ["call", SUN],
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: BG,
        borderBottom: `2px solid ${INK}`,
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            background: LIME,
            border: `2px solid ${INK}`,
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
            color: BG,
            fontSize: 20,
            transform: "rotate(-5deg)",
          }}
        >
          1
        </div>
        <span
          style={{
            color: INK,
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.02em",
          }}
        >
          press 1 for ai
        </span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {LINKS.map(([label, color]) => (
          <a
            key={label}
            href={`#d2-${label}`}
            style={{
              color: INK,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              padding: "8px 14px",
              border: `2px solid ${INK}`,
              background: BG,
              textTransform: "lowercase",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = color;
              e.currentTarget.style.color = BG;
              play("softClick");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = BG;
              e.currentTarget.style.color = INK;
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
