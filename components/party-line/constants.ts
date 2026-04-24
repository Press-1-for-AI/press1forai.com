// Direction 2 — Neo-Brutalist Party Line color tokens
export const BG = "#0f0f0f";
export const INK = "#ffffff";
export const PINK = "#ff3b6b";
export const LIME = "#c6ff3d";
export const IRIS = "#8b5cff";
export const SUN = "#ffd93d";
export const CYAN = "#50dcff";

// Brutalist offset shadow box helper.
export const box = (color: string, offset = "8px") => ({
  border: `2px solid ${INK}`,
  boxShadow: `${offset} ${offset} 0 ${color}`,
  background: BG,
});
