// Packs the covers of the home page's cover wall (src/data/wall.ts) into one image, so the page
// loads a single small file instead of four whole screenshots. Run `npm run wall` after changing
// the covers or their screenshots, and commit src/assets/wall.webp and src/data/wall.json.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const { wallRows, wallShots } = await import(join(root, 'src/data/wall.ts'));

// Covers are shown up to 206px tall; 260px keeps them sharp on 1.25x screens.
const height = 260;
const maxWidth = 2048;
const gap = 2;
// The screenshots are 1920px wide and the coordinates are for their 1280px copy.
const scale = 1920 / 1280;

const covers = [...new Set(wallRows.flat())];
const placed = {};
const parts = [];
let x = 0;
let y = 0;
for (const cover of covers) {
  const [shot, ...box] = cover.split(' ');
  const [cx, cy, cw, ch] = box.map(Number);
  const width = Math.round((cw / ch) * height);
  if (x + width > maxWidth) {
    x = 0;
    y += height + gap;
  }
  const input = await sharp(join(root, 'src/assets/screenshots', `${wallShots[shot]}.webp`))
    .extract({ left: Math.round(cx * scale), top: Math.round(cy * scale), width: Math.round(cw * scale), height: Math.round(ch * scale) })
    .resize(width, height)
    .toBuffer();
  parts.push({ input, left: x, top: y });
  placed[cover] = [x, y, width, height];
  x += width + gap;
}
const atlasWidth = Math.max(...Object.values(placed).map(([px, , w]) => px + w));
const atlasHeight = y + height;

await sharp({ create: { width: atlasWidth, height: atlasHeight, channels: 3, background: '#07090c' } })
  .composite(parts)
  .webp({ quality: 86 })
  .toFile(join(root, 'src/assets/wall.webp'));
writeFileSync(join(root, 'src/data/wall.json'), JSON.stringify({ width: atlasWidth, height: atlasHeight, covers: placed }, null, 2) + '\n');
console.log(`${covers.length} covers in a ${atlasWidth}x${atlasHeight} image`);
