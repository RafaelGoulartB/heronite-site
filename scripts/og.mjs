// Draws the 1200x630 social cards in public/og/ (and public/og/<lang>/) from each page's headline and screenshot.
// Needs Chromium and ImageMagick: `npm run og`. Commit the results; the build does not run this.
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const out = join(root, 'public/og');
const shots = join(root, 'src/assets/screenshots');
const font = (pkg, file) => `file://${join(root, 'node_modules/@fontsource', pkg, 'files', file)}`;
const chromium = process.env.CHROMIUM ?? 'chromium';

const field = (text, name) => text.match(new RegExp(`^${name}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1];

// One card per feature page, guide and comparison, and per index page, in every language.
const langs = { en: '', 'pt-br': 'pt-br/', es: 'es/' };
const footers = {
  en: 'Free game launcher for Linux and Windows',
  'pt-br': 'Launcher de jogos grátis para Linux e Windows',
  es: 'Lanzador de juegos gratis para Linux y Windows',
};
const unHtml = (html) => html.replace(/<em>(.*?)<\/em>/g, '*$1*').replace(/<[^>]+>/g, '');
const cards = [];
for (const [lang, prefix] of Object.entries(langs)) {
  const dict = (await import(join(root, 'src/i18n', `${lang}.ts`))).default;
  for (const kind of ['features', 'guides', 'compare']) {
    const dir = join(root, 'src/content', kind, lang);
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const text = readFileSync(join(dir, file), 'utf8');
      cards.push({
        out: `${prefix}${file.replace('.md', '')}`,
        lang,
        eyebrow: field(text, 'eyebrow'),
        headline: field(text, 'headline'),
        shot: field(text, 'hero')?.split('/').pop() ?? 'collection.webp',
      });
    }
    const index = dict.indexes[kind];
    const shot = { features: 'collection.webp', guides: 'game-settings.webp', compare: 'console-home.webp' }[kind];
    cards.push({ out: `${prefix}${kind}`, lang, eyebrow: index.eyebrow, headline: index.headline, shot });
  }
  cards.push({ out: `${prefix}docs`, lang, eyebrow: dict.docs.documentation, headline: unHtml(dict.docs.index.headlineHtml), shot: 'wine-manager.webp' });
}

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const page = ({ lang, eyebrow, headline, shot }) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Rubik;font-weight:700;src:url(${font('rubik', 'rubik-latin-700-normal.woff2')})}
@font-face{font-family:Rubik;font-weight:600;src:url(${font('rubik', 'rubik-latin-600-normal.woff2')})}
@font-face{font-family:Cabin;font-weight:500;src:url(${font('cabin', 'cabin-latin-500-normal.woff2')})}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;background:#0a0d11;color:#eef2f6;font-family:Cabin;position:relative}
.bg{position:absolute;inset:-60px;background:url(file://${shots}/${shot}) center/cover;filter:blur(46px) saturate(1.5) brightness(.55)}
.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(7,9,12,.96) 0%,rgba(7,9,12,.85) 44%,rgba(7,9,12,.2) 100%)}
.shot{position:absolute;left:640px;top:84px;width:820px;border-radius:18px;border:1px solid rgba(255,255,255,.18);box-shadow:0 40px 90px rgba(0,0,0,.6);overflow:hidden}
.shot img{display:block;width:100%}
.copy{position:absolute;left:72px;top:64px;bottom:60px;width:560px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:14px;font:600 20px/1 Rubik;letter-spacing:.24em;color:#dfe6ec}
.brand img{width:44px;height:44px;border-radius:11px}
.eyebrow{margin-top:auto;display:flex;align-items:center;gap:14px;font:600 19px/1 Rubik;letter-spacing:.12em;text-transform:uppercase;color:#c6cfd8}
.eyebrow::before{content:"";width:34px;height:2px;background:currentColor;opacity:.7}
h1{margin-top:22px;font:700 ${headline.length > 55 ? 54 : 66}px/1.04 Rubik;letter-spacing:-.025em;text-wrap:balance}
h1 em{font-style:normal;color:#8fd3ea}
.foot{margin-top:auto;padding-top:34px;font:500 ${lang === "en" ? 22 : 19}px/1.3 Cabin;color:#a7b2be;white-space:nowrap}
.foot b{color:#8fd3ea;font-weight:500}
</style></head><body>
<div class="bg"></div><div class="shade"></div>
<div class="shot"><img src="file://${shots}/${shot}"></div>
<div class="copy">
  <div class="brand"><img src="file://${root}public/icon.png">HERONITE</div>
  <p class="eyebrow">${escape(eyebrow)}</p>
  <h1>${escape(headline).replace(/\*(.+?)\*/g, '<em>$1</em>')}</h1>
  <p class="foot"><b>heronite.app</b> · ${footers[lang]}</p>
</div>
</body></html>`;

mkdirSync(out, { recursive: true });
const tmp = mkdtempSync(join(tmpdir(), 'heronite-og-'));
for (const card of cards) {
  const name = card.out.replace('/', '-');
  const html = join(tmp, `${name}.html`);
  const png = join(tmp, `${name}.png`);
  mkdirSync(join(out, card.out, '..'), { recursive: true });
  writeFileSync(html, page(card));
  execFileSync(chromium, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    '--window-size=1200,630', '--virtual-time-budget=3000', `--screenshot=${png}`, `file://${html}`,
  ], { stdio: 'ignore' });
  execFileSync('magick', [png, '-strip', '-quality', '84', '-sampling-factor', '4:2:0', join(out, `${card.out}.jpg`)]);
  console.log(`og/${card.out}.jpg`);
}
rmSync(tmp, { recursive: true });
