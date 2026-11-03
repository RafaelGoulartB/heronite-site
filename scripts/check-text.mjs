// Fails the build when a page shows "[object Object]", which is what an object rendered
// as text looks like, for example a translation key that points to a section instead of
// a label. Run after `astro build`.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(html|xml)$/.test(name)) files.push(path);
  }
};
walk(dist);

const needle = '[object Object]';
let problems = 0;
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (let at = text.indexOf(needle); at !== -1; at = text.indexOf(needle, at + needle.length)) {
    const around = text.slice(Math.max(0, at - 80), at + needle.length + 20).replace(/\s+/g, ' ');
    console.log(`${relative(dist, file)}: ${needle} in …${around}…`);
    problems++;
  }
}
console.log(problems ? `${problems} problem(s) in ${files.length} files` : `No ${needle} in ${files.length} files`);
process.exit(problems ? 1 : 0);
