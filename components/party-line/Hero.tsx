"use client";

import { play } from "@/lib/sounds";
import { BG, INK, IRIS, LIME, PINK, SUN, box } from "./constants";

const STATS: { n: string; l: string; c: string }[] = [
  { n: "3", l: "apps shipped", c: PINK },
  { n: "0", l: "dark patterns", c: LIME },
  { n: "∞", l: "vibes", c: IRIS },
  { n: "24/7", l: "mild paranoia", c: SUN },
];

export default function Hero() {
  return (
    <section
      style={{
        padding: "60px 32px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        className="d2-spin-cw"
        style={{
          position: "absolute",
          top: 80,
          right: 60,
          width: 120,
          height: 120,
          background: IRIS,
          border: `2px solid ${INK}`,
        }}
      />
      <div
        aria-hidden
        className="d2-bob"
        style={{
          position: "absolute",
          top: 120,
          right: 220,
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: SUN,
          border: `2px solid ${INK}`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="d2-spin-ccw"
        style={{
          position: "absolute",
          top: 40,
          left: "45%",
          width: 60,
          height: 60,
          background: PINK,
          border: `2px solid ${INK}`,
          clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
        }}
      />

      <div
        style={{
          display: "inline-block",
          background: LIME,
          color: BG,
          padding: "6px 14px",
          border: `2px solid ${INK}`,
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: "0.1em",
          transform: "rotate(-2deg)",
          marginBottom: 24,
          position: "relative",
        }}
      >
        ⚡ now with 100% more audacity
      </div>

      <h1
        style={{
          fontSize: "clamp(64px, 11vw, 180px)",
          fontWeight: 700,
          lineHeight: 0.88,
          margin: 0,
          color: INK,
          letterSpacing: "-0.04em",
          position: "relative",
        }}
      >
        AI that&apos;s
        <br />
        <span
          style={{
            background: PINK,
            color: BG,
            padding: "0 12px",
            display: "inline-block",
            transform: "rotate(-1deg)",
          }}
        >
          actually
        </span>
        &nbsp;
        <em style={{ fontStyle: "italic", fontWeight: 700 }}>fun.</em>
      </h1>

      <p
        style={{
          fontSize: 22,
          lineHeight: 1.4,
          maxWidth: 620,
          marginTop: 40,
          color: INK,
          fontWeight: 500,
          position: "relative",
        }}
      >
        We build software that thinks faster than your group chat, and a
        security layer that&apos;s smarter than your crypto-bro cousin. Also:
        you&apos;re probably missing out. Just saying.
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 40,
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <button
          type="button"
          onClick={() => {
            play("boom");
            document
              .getElementById("d2-apps")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            ...box(PINK),
            color: INK,
            padding: "18px 32px",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "transform 0.15s",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translate(4px,4px)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "none";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "none";
          }}
        >
          → show me the goods
        </button>
        <button
          type="button"
          onClick={() => {
            play("click");
            document
              .getElementById("d2-call")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            background: LIME,
            border: `2px solid ${INK}`,
            color: BG,
            padding: "18px 32px",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: `8px 8px 0 ${INK}`,
          }}
        >
          book a demo ⚡
        </button>
      </div>

      <div
        style={{
          marginTop: 80,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          position: "relative",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              ...box(s.c, "6px"),
              padding: 20,
              background: BG,
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: s.c,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                fontSize: 13,
                color: INK,
                fontWeight: 600,
                marginTop: 6,
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
