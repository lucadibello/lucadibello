/**
 * Color palette for the website.
 *
 * These values are mirrored as Tailwind CSS theme tokens in app.css
 * via @theme so they can be used in utility classes (e.g. `bg-viridian`).
 *
 * This module exists for the rare cases where you need the raw hex
 * value in TypeScript (inline styles, third-party libs, etc.).
 */
export const palette = {
  viridian: "#6B9080",
  cambridge_blue: "#A4C3B2",
  mint_green: "#CCE3DE",
  azure: "#EAF4F4",
  mint_cream: "#F6FFF8",
} as const;
