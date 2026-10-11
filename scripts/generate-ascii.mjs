// Transforme public/profile.png (PNG à fond transparent) en données ASCII précalculées.
// Usage : npm run ascii            (utilise public/profile.png)
//         npm run ascii -- ma-photo.png
//
// Le résultat est écrit dans src/assets/asciiData.js : une liste de points
// [x, y, indexCaractère, opacité%] pour chaque taille d'affichage.
// Le navigateur n'a plus qu'à les dessiner et les animer, sans recalcul.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.resolve(root, process.argv[2] || "public/profile.png");
const output = path.join(root, "src/assets/asciiData.js");

const RAMP = " .:-=+*#%@";
const SIZES = [
  { key: 400, font: 7 },
  { key: 280, font: 5 },
  { key: 220, font: 5 },
];
const FIT = 0.92; // part du canevas occupée par la photo
const ALPHA_MIN = 0.5; // une cellule est gardée si elle est opaque à plus de 50 %

if (!fs.existsSync(input)) {
  console.error(`Fichier introuvable : ${input}`);
  process.exit(1);
}

const png = PNG.sync.read(fs.readFileSync(input));
const { width: sw, height: sh, data } = png;

function sampleCell(x0, y0, x1, y1) {
  const ix0 = Math.max(0, Math.floor(x0));
  const iy0 = Math.max(0, Math.floor(y0));
  const ix1 = Math.min(sw, Math.max(ix0 + 1, Math.ceil(x1)));
  const iy1 = Math.min(sh, Math.max(iy0 + 1, Math.ceil(y1)));
  let aSum = 0;
  let lSum = 0;
  let n = 0;
  for (let y = iy0; y < iy1; y++) {
    for (let x = ix0; x < ix1; x++) {
      const i = (y * sw + x) * 4;
      const a = data[i + 3] / 255;
      aSum += a;
      lSum += ((data[i] + data[i + 1] + data[i + 2]) / 3 / 255) * a;
      n++;
    }
  }
  if (n === 0 || aSum === 0) return null;
  return { alpha: aSum / n, brightness: lSum / aSum };
}

function buildSize({ key, font }) {
  const canvasW = key;
  const aspect = sh / sw;
  const canvasH = Math.round(Math.min(key * 1.4, Math.max(key * 0.8, key * aspect)));

  let drawH = canvasH * FIT;
  let drawW = drawH / aspect;
  if (drawW > canvasW * FIT) {
    drawW = canvasW * FIT;
    drawH = drawW * aspect;
  }
  const offX = (canvasW - drawW) / 2;
  const offY = (canvasH - drawH) / 2;
  const scale = sw / drawW; // pixels source par pixel canevas

  const colGap = font * 0.7;
  const rowGap = font * 1.1;

  const cells = [];
  for (let y = 0; y < canvasH; y += rowGap) {
    for (let x = 0; x < canvasW; x += colGap) {
      const cell = sampleCell(
        (x - offX) * scale,
        (y - offY) * scale,
        (x - offX + colGap) * scale,
        (y - offY + rowGap) * scale
      );
      if (cell && cell.alpha >= ALPHA_MIN && x >= offX && y >= offY) {
        cells.push({ x, y, b: cell.brightness });
      }
    }
  }

  // Étire la luminosité sur toute la rampe (percentiles 3 % et 97 %)
  const sorted = cells.map((c) => c.b).sort((a, b) => a - b);
  const lo = sorted[Math.floor(sorted.length * 0.03)] ?? 0;
  const hi = sorted[Math.floor(sorted.length * 0.97)] ?? 1;
  const span = Math.max(0.05, hi - lo);

  const particles = cells.map(({ x, y, b }) => {
    const n = Math.min(1, Math.max(0, (b - lo) / span));
    // indice 1 minimum : la silhouette reste visible même dans les zones sombres
    const c = 1 + Math.floor(n * (RAMP.length - 2));
    const a = Math.round(40 + n * 60);
    return [Number(x.toFixed(1)), Number(y.toFixed(1)), c, a];
  });

  return { w: canvasW, h: canvasH, font, particles };
}

const result = {};
for (const size of SIZES) result[size.key] = buildSize(size);

const file =
  `// Fichier généré par scripts/generate-ascii.mjs — ne pas modifier à la main.\n` +
  `export const ramp = ${JSON.stringify(RAMP)};\n` +
  `export const asciiData = ${JSON.stringify(result)};\n`;

fs.writeFileSync(output, file);
for (const s of SIZES) {
  console.log(`${s.key}px : ${result[s.key].particles.length} points`);
}
console.log(`Écrit : ${path.relative(root, output)}`);
