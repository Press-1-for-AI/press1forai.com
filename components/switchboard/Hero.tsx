"use client";

import { play } from "@/lib/sounds";
import { AMBER, AMBER_DIM, BG } from "./constants";
import Keypad from "./Keypad";

export default function Hero() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 0.8fr",
        gap: 60,
        padding: "80px 40px 120px",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 12,
            color: AMBER_DIM,
            letterSpacing: "0.3em",
            marginBottom: 24,
          }}
        >
          ◉ NOW CONNECTING · EXT. 2026
        </div>
        <h1
          style={{
            fontSize: "clamp(56px, 8vw, 124px)",
            lineHeight: 0.92,
            fontWeight: 800,
            margin: 0,
            letterSpacing: "-0.03em",
            textShadow: `0 0 30px ${AMBER}66, 0 0 60px ${AMBER}33`,
          }}
        >
          Press 1
          <br />
          <span style={{ color: AMBER_DIM }}>for</span> AI.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.5,
            marginTop: 32,
            maxWidth: 480,
            color: "#e8c27f",
          }}
        >
          Software with the intelligence of 2026 and the hold music of 1986. We
          build AI that works for you — and a shield that keeps it from working{" "}
          <em>against</em> you.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
          <button
            className="d1-cta"
            onClick={() => {
              play("dial");
              document
                .getElementById("d1-apps")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: AMBER,
              color: BG,
              border: "none",
              padding: "16px 28px",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.2em",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            ▶ Take the call
          </button>
          <button
            onClick={() => play("click")}
            style={{
              background: "transparent",
              color: AMBER,
              border: `1.5px solid ${AMBER_DIM}`,
              padding: "16px 28px",
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 800,
              letterSpacing: "0.2em",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            Leave a message
          </button>
        </div>
        <div
          style={{
            marginTop: 60,
            display: "flex",
            gap: 24,
            fontSize: 10,
            color: AMBER_DIM,
            letterSpacing: "0.2em",
          }}
        >
          <span>◉ SOC2 in progress</span>
          <span>◉ Human-in-loop</span>
          <span>◉ No data sold, ever</span>
        </div>
      </div>
      <div
        style={{
          border: `2px solid ${AMBER}`,
          padding: 24,
          background: "rgba(255,179,71,0.03)",
          boxShadow: `0 0 60px ${AMBER}22, inset 0 0 40px ${AMBER}11`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -12,
            left: 20,
            background: BG,
            padding: "0 10px",
            fontSize: 11,
            letterSpacing: "0.2em",
          }}
        >
          OPERATOR_CONSOLE.v1
        </div>
        <Keypad />
      </div>
    </section>
  );
}
