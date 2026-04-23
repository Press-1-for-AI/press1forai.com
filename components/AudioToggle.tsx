"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { isMuted, play, setMuted } from "@/lib/sounds";

type Theme = "amber" | "neon" | "iris";
type Position = "top-right" | "top-left" | "bottom-right";

const themes: Record<
  Theme,
  {
    bg: string;
    border: string;
    fg: string;
    glow: string;
    font: string;
  }
> = {
  amber: {
    bg: "rgba(20,14,6,0.85)",
    border: "#ffb347",
    fg: "#ffb347",
    glow: "0 0 20px rgba(255,179,71,0.5)",
    font: "monospace",
  },
  neon: {
    bg: "#000",
    border: "#fff",
    fg: "#fff",
    glow: "6px 6px 0 #ff3b6b",
    font: "system-ui",
  },
  iris: {
    bg: "rgba(20,20,40,0.6)",
    border: "rgba(255,255,255,0.2)",
    fg: "#fff",
    glow: "0 8px 32px rgba(120,80,255,0.3)",
    font: "system-ui",
  },
};

const positions: Record<Position, CSSProperties> = {
  "top-right": { top: 20, right: 20 },
  "top-left": { top: 20, left: 20 },
  "bottom-right": { bottom: 20, right: 20 },
};

export default function AudioToggle({
  theme = "amber",
  position = "top-right",
}: {
  theme?: Theme;
  position?: Position;
}) {
  // SSR-safe: start muted until hydrated, then sync to persisted state.
  const [muted, setLocalMuted] = useState(true);

  useEffect(() => {
    setLocalMuted(isMuted());
  }, []);

  const toggle = () => {
    const next = !muted;
    setLocalMuted(next);
    setMuted(next);
    if (!next) play("chime");
  };

  const t = themes[theme];
  const pos = positions[position];

  return (
    <button
      onClick={toggle}
      aria-pressed={!muted}
      aria-label={muted ? "Turn sound on" : "Turn sound off"}
      style={{
        position: "fixed",
        ...pos,
        zIndex: 9999,
        background: t.bg,
        color: t.fg,
        border: `1.5px solid ${t.border}`,
        borderRadius: theme === "neon" ? 0 : 999,
        padding: "10px 16px",
        fontFamily: t.font,
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        cursor: "pointer",
        boxShadow: t.glow,
        display: "flex",
        alignItems: "center",
        gap: 8,
        backdropFilter: "blur(12px)",
      }}
    >
      <span style={{ fontSize: 14 }}>{muted ? "🔇" : "🔊"}</span>
      {muted ? "Sound off" : "Sound on"}
    </button>
  );
}
