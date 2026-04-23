"use client";

import { useEffect, useState } from "react";
import { play } from "@/lib/sounds";
import type { DtmfKey } from "@/lib/sounds";
import { AMBER, AMBER_DIM, BG } from "./constants";

const KEYS: DtmfKey[] = [
  "1", "2", "3",
  "4", "5", "6",
  "7", "8", "9",
  "*", "0", "#",
];

const LETTERS: Record<string, string> = {
  "1": "AI",
  "2": "ABC",
  "3": "DEF",
  "4": "GHI",
  "5": "JKL",
  "6": "MNO",
  "7": "PQRS",
  "8": "TUV",
  "9": "WXYZ",
};

const MESSAGES = [
  "> booting operator…",
  "> dial tone acquired.",
  "> press 1 to begin.",
];

export default function Keypad() {
  const [pressed, setPressed] = useState<DtmfKey | null>(null);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setPhase((p) => (p + 1) % MESSAGES.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  const press = (key: DtmfKey) => {
    setPressed(key);
    play("dtmf", key);
    setDisplay((d) => (d + key).slice(-16));
    setTimeout(() => setPressed(null), 200);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div
        style={{
          border: `1px solid ${AMBER_DIM}`,
          padding: "14px 18px",
          background: "rgba(255,179,71,0.04)",
          fontSize: 14,
          minHeight: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: AMBER_DIM }}>{MESSAGES[phase]}</span>
        <span style={{ color: AMBER, letterSpacing: "0.3em" }}>
          {display || "________"}
          <span className="d1-cursor">█</span>
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
        }}
      >
        {KEYS.map((k) => (
          <button
            key={k}
            onClick={() => press(k)}
            className="d1-key"
            style={{
              aspectRatio: "1.3 / 1",
              background: pressed === k ? AMBER : "transparent",
              color: pressed === k ? BG : AMBER,
              border: `1.5px solid ${AMBER}`,
              fontFamily: "inherit",
              fontSize: 36,
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.08s",
              boxShadow:
                pressed === k
                  ? `0 0 24px ${AMBER}`
                  : "inset 0 0 0 2px rgba(255,179,71,0.05)",
              position: "relative",
            }}
          >
            {k}
            <span
              style={{
                position: "absolute",
                bottom: 6,
                right: 8,
                fontSize: 9,
                color: pressed === k ? BG : AMBER_DIM,
                letterSpacing: "0.1em",
              }}
            >
              {LETTERS[k] ?? ""}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
