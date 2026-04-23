"use client";

import { useMemo } from "react";
import { AMBER, AMBER_DIM } from "./constants";

export default function CableNet() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        x: 50 + (i % 8) * 100,
        y: 50 + Math.floor(i / 8) * 100,
        d: Math.random() * 2,
      })),
    [],
  );

  return (
    <svg
      viewBox="0 0 900 320"
      style={{ width: "100%", height: 320, display: "block" }}
    >
      <defs>
        <filter id="d1-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => {
          const dx = Math.abs(n.x - m.x);
          const dy = Math.abs(n.y - m.y);
          if (dx > 150 || dy > 150) return null;
          return (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke={AMBER_DIM}
              strokeWidth="0.5"
              opacity="0.5"
            />
          );
        }),
      )}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="3"
          fill={AMBER}
          filter="url(#d1-glow)"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur={`${2 + n.d}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
