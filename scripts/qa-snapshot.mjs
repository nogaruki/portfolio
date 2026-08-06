// Development helper. Writes dist/__qa.html and dist/en/__qa.html: copies of
// the prerendered pages with animations and smooth scrolling neutralised, and
// the hero's min-height released, so a headless screenshot captures the settled
// layout of the whole page rather than a mid-animation frame.
//
//   npm run build && node scripts/qa-snapshot.mjs
//
// The copies land in dist/ and are wiped by the next build, so they never ship.
// Note that headless Chrome enforces a minimum window width of 500px, so a
// narrower --window-size crops the render instead of shrinking the viewport.

import { readFileSync, writeFileSync } from "node:fs";

const INJECT = `<style id="qa-override">
  html { scroll-behavior: auto !important; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
  main > section:first-child { min-height: 0 !important; }
</style></head>`;

for (const [src, out] of [
  ["dist/index.html", "dist/__qa.html"],
  ["dist/en/index.html", "dist/en/__qa.html"],
]) {
  writeFileSync(out, readFileSync(src, "utf8").replace("</head>", INJECT));
  console.log("wrote", out);
}
