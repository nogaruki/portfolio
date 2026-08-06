// Regenerates the served images from scripts/profile-source.png.
//
// sharp is not a project dependency (it pulls a native binary and is only
// needed when the source photo changes). Install it on demand:
//
//   npm install --no-save sharp
//   node scripts/optimise-images.mjs
//
// The original 1000x1000 PNG weighed 1.25 MB and was the largest resource on
// the page by a wide margin; it is kept out of public/ so it never ships.

import sharp from "sharp";
import { statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const photo = join(root, "scripts", "profile-source.png");
const logo = join(root, "scripts", "favicon-source.png");
const publicDir = join(root, "public");

const kb = (p) => (statSync(p).size / 1024).toFixed(0) + " kB";

// The photo is displayed at 288px at most, so 576px covers 2x screens.
const SIZE = 576;

await sharp(photo)
  .resize(SIZE, SIZE, { fit: "cover", position: "top" })
  .webp({ quality: 82 })
  .toFile(join(publicDir, "profile.webp"));

// PNG fallback for the rare browser without WebP support.
await sharp(photo)
  .resize(SIZE, SIZE, { fit: "cover", position: "top" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(publicDir, "profile-576.png"));

// The favicon is the signature monogram: a wide, dark-stroke-on-transparent
// image. Left transparent it disappears in a dark browser tab strip, so it is
// contained in the square and flattened onto white, which reads in both.
for (const [size, name, pad] of [[32, "favicon-32.png", 2], [180, "apple-touch-icon.png", 14]]) {
  await sharp(logo)
    .resize(size - pad * 2, size - pad * 2, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, name));
}

for (const f of ["profile.webp", "profile-576.png", "favicon-32.png", "apple-touch-icon.png"]) {
  console.log("  ", f.padEnd(22), kb(join(publicDir, f)));
}
