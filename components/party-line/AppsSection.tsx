"use client";

import { play } from "@/lib/sounds";
import { BG, CYAN, INK, IRIS, LIME, PINK, SUN } from "./constants";

type Status = "live" | "beta" | "pre-alpha";

type App = {
  name: string;
  sub: string;
  blurb: string;
  color: string;
  num: string;
  bullets: string[];
  status: Status;
};

const APPS: App[] = [
  {
    name: "Anonyme",
    sub: "big-tech anonymizer",
    blurb:
      "confuse the algorithm. feed google, meta & co. just enough noise that their dossier on you goes fuzzy.",
    color: PINK,
    num: "01",
    bullets: ["algorithm confuser", "runs on a schedule", "keeps a receipt"],
    status: "live",
  },
  {
    name: "The Button Game",
    sub: "prompt-injection bootcamp",
    blurb:
      "a game that teaches your team how NOT to get tricked by sneaky prompts. it's more fun than it sounds.",
    color: IRIS,
    num: "02",
    bullets: ["100+ puzzles", "multiplayer mode", "real certs"],
    status: "beta",
  },
  {
    name: "Stockit",
    sub: "inventory hero · coming soon",
    blurb:
      "an AI that WILL reorder at 3am, negotiate with suppliers, and still make you look smart in standup. we're building it. get on the list.",
    color: SUN,
    num: "03",
    bullets: ["auto-reorder", "supplier chat", "nightly brief"],
    status: "pre-alpha",
  },
  {
    name: "Mineme",
    sub: "monetize your own data · coming soon",
    blurb:
      "pick exactly what you'll expose for AI training — and get paid for it. your data, your call, your cut.",
    color: LIME,
    num: "04",
    bullets: ["granular consent", "pay-per-expose", "walk away anytime"],
    status: "pre-alpha",
  },
  {
    name: "Tiny Limp",
    sub: "linux productivity for everyone · coming soon",
    blurb:
      "democratizing linux productivity apps for the masses. the power of penguin, finally without the PhD.",
    color: CYAN,
    num: "05",
    bullets: ["zero-config", "works for grandma", "still actually linux"],
    status: "pre-alpha",
  },
];

const STATUS_BG: Record<Status, string> = {
  live: LIME,
  beta: SUN,
  "pre-alpha": PINK,
};

function Card({ a, featured }: { a: App; featured: boolean }) {
  return (
    <div
      onMouseEnter={() => play("blip")}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translate(-4px, -4px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "none";
      }}
      style={{
        background: BG,
        color: INK,
        border: `3px solid ${INK}`,
        boxShadow: `10px 10px 0 ${a.color}`,
        padding: featured ? 36 : 24,
        transition: "transform 0.2s",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: a.color,
            color: BG,
            padding: "4px 10px",
            border: `2px solid ${INK}`,
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          #{a.num}
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.2em",
            color: INK,
            background: STATUS_BG[a.status],
            padding: "3px 8px",
            border: `2px solid ${INK}`,
          }}
        >
          ● {a.status.toUpperCase()}
        </span>
      </div>
      <h3
        style={{
          fontSize: featured ? 44 : 30,
          margin: "20px 0 4px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 0.95,
        }}
      >
        {a.name}
      </h3>
      <div
        style={{
          fontSize: 12,
          color: a.color,
          fontWeight: 700,
          marginBottom: 14,
        }}
      >
        {a.sub}
      </div>
      <p
        style={{
          fontSize: featured ? 16 : 14,
          lineHeight: 1.4,
          color: INK,
          marginBottom: 16,
          flex: 1,
        }}
      >
        {a.blurb}
      </p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 4,
        }}
      >
        {a.bullets.map((b) => (
          <li key={b} style={{ fontSize: 12, color: INK, fontWeight: 600 }}>
            → {b}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          play("chime");
        }}
        style={{
          marginTop: 20,
          width: "100%",
          background: a.color,
          border: `2px solid ${INK}`,
          color: BG,
          padding: "12px",
          fontWeight: 700,
          fontSize: 13,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        {a.status === "pre-alpha" ? "join waitlist →" : "try it →"}
      </button>
    </div>
  );
}

export default function AppsSection() {
  const featured = APPS.filter((a) => a.status !== "pre-alpha");
  const soon = APPS.filter((a) => a.status === "pre-alpha");

  return (
    <section
      id="d2-apps"
      style={{
        padding: "100px 32px",
        background: INK,
        color: BG,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 20,
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 18 }}>[ apps ]</span>
        <h2
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            margin: 0,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          five things
          <span style={{ background: PINK, color: INK, padding: "0 10px" }}>
            ...and counting.
          </span>
        </h2>
      </div>

      <div style={{ display: "grid", gap: 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {featured.map((a) => (
            <Card key={a.num} a={a} featured />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 16,
            marginTop: 24,
            paddingTop: 16,
            borderTop: `2px dashed ${PINK}`,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: PINK,
              color: INK,
              padding: "4px 12px",
              border: `2px solid ${INK}`,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.15em",
            }}
          >
            ⏳ ON THE LINE
          </span>
          <span style={{ fontSize: 14, color: INK, fontWeight: 600 }}>
            coming soon — get on the waitlist
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {soon.map((a) => (
            <Card key={a.num} a={a} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
