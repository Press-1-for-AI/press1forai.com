"use client";

import { useState } from "react";
import { play } from "@/lib/sounds";
import type { DtmfKey } from "@/lib/sounds";
import { AMBER, AMBER_DIM, BG } from "./constants";

const EXTENSIONS = [
  { key: "1", label: "1 Demo" },
  { key: "2", label: "2 Buy" },
  { key: "3", label: "3 Jobs" },
  { key: "4", label: "4 Press" },
] as const;

export default function DialSection() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [ext, setExt] = useState<DtmfKey>("1");
  const [msg, setMsg] = useState("");

  const reset = () => {
    setStep(0);
    setName("");
    setExt("1");
    setMsg("");
  };

  return (
    <section
      id="d1-dial"
      style={{
        padding: "100px 40px 80px",
        borderTop: `1px solid ${AMBER_DIM}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 24,
          marginBottom: 40,
        }}
      >
        <span style={{ fontSize: 12, color: AMBER_DIM, letterSpacing: "0.3em" }}>
          [04]
        </span>
        <h2 style={{ fontSize: 48, margin: 0, letterSpacing: "-0.02em" }}>
          DIAL IN<span style={{ color: AMBER_DIM }}>.</span>
        </h2>
      </div>
      <div style={{ maxWidth: 640 }}>
        <div
          style={{
            border: `1.5px solid ${AMBER}`,
            padding: 32,
            background: "rgba(255,179,71,0.03)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              color: AMBER_DIM,
              marginBottom: 24,
            }}
          >
            ◉ LEAVE A MESSAGE AT THE TONE · BEEEEP
          </div>
          {step === 0 && (
            <div style={{ display: "grid", gap: 16 }}>
              <label
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: AMBER_DIM,
                }}
              >
                YOUR NAME
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  background: "transparent",
                  border: `1px solid ${AMBER_DIM}`,
                  color: AMBER,
                  padding: 14,
                  fontFamily: "inherit",
                  fontSize: 16,
                }}
              />
              <label
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: AMBER_DIM,
                  marginTop: 8,
                }}
              >
                SELECT EXTENSION
              </label>
              <div style={{ display: "flex", gap: 8 }}>
                {EXTENSIONS.map((e) => (
                  <button
                    key={e.key}
                    onClick={() => {
                      setExt(e.key as DtmfKey);
                      play("dtmf", e.key as DtmfKey);
                    }}
                    style={{
                      flex: 1,
                      background: ext === e.key ? AMBER : "transparent",
                      color: ext === e.key ? BG : AMBER,
                      border: `1px solid ${AMBER}`,
                      padding: 12,
                      fontFamily: "inherit",
                      fontSize: 12,
                      letterSpacing: "0.15em",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    {e.label}
                  </button>
                ))}
              </div>
              <label
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: AMBER_DIM,
                  marginTop: 8,
                }}
              >
                MESSAGE
              </label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                rows={4}
                style={{
                  background: "transparent",
                  border: `1px solid ${AMBER_DIM}`,
                  color: AMBER,
                  padding: 14,
                  fontFamily: "inherit",
                  fontSize: 14,
                  resize: "none",
                }}
              />
              <button
                onClick={() => {
                  setStep(1);
                  play("ring");
                }}
                style={{
                  background: AMBER,
                  color: BG,
                  border: "none",
                  padding: "16px",
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.25em",
                  cursor: "pointer",
                  marginTop: 8,
                }}
              >
                ▶ TRANSMIT
              </button>
            </div>
          )}
          {step === 1 && (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📞</div>
              <div style={{ fontSize: 18, marginBottom: 8 }}>
                CONNECTED, {name.toUpperCase() || "CALLER"}.
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: AMBER_DIM,
                  letterSpacing: "0.2em",
                }}
              >
                WE&apos;LL RING YOU BACK WITHIN ONE BUSINESS DAY.
              </div>
              <button
                onClick={reset}
                style={{
                  marginTop: 24,
                  background: "transparent",
                  color: AMBER,
                  border: `1px solid ${AMBER_DIM}`,
                  padding: "10px 20px",
                  fontFamily: "inherit",
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  cursor: "pointer",
                }}
              >
                ← HANG UP
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
