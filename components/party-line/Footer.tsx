import { BG, INK } from "./constants";

export default function Footer() {
  return (
    <footer
      style={{
        background: BG,
        color: INK,
        padding: 32,
        borderTop: `2px solid ${INK}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 700 }}>
        © 2026 press 1 for ai · all rights unreserved
      </span>
      <span style={{ fontSize: 14, fontWeight: 700 }}>
        made with caffeine + mild paranoia ★
      </span>
    </footer>
  );
}
