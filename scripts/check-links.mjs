// Checks every internal link and #anchor in the built site. Run after `npm run build`.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith('.html')) pages.push(path);
  }
};
walk(dist);

const ids = new Map();
const idsOf = (file) => {
  if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return ids.get(file);
};
const fileFor = (path) => {
  const clean = decodeURIComponent(path);
  if (clean.endsWith('/')) return join(dist, clean, 'index.html');
  return join(dist, clean);
};

let problems = 0;
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const from = '/' + relative(dist, page).replace(/index\.html$/, '');
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(href) || href.startsWith('//')) continue;
    const [withQuery, hash] = href.split('#');
    const path = withQuery.split('?')[0];
    const target = path ? fileFor(path.startsWith('/') ? path : new URL(path, `https://x${from}`).pathname) : page;
    if (path && !path.startsWith('/_astro/') && /\/[^/.]+$/.test(path)) {
      console.log(`${from}: ${href} has no trailing slash`);
      problems++;
    }
    if (!existsSync(target)) {
      console.log(`${from}: broken link ${href}`);
      problems++;
    } else if (hash && target.endsWith('.html') && !idsOf(target).has(decodeURIComponent(hash))) {
      console.log(`${from}: missing anchor ${href}`);
      problems++;
    }
  }
}
console.log(problems ? `${problems} problem(s) in ${pages.length} pages` : `All links fine in ${pages.length} pages`);
process.exit(problems ? 1 : 0);
