// Saves Heronite's GitHub releases to src/data/releases.json, the copy the build falls back on
// when it cannot reach GitHub. Run it now and then (`npm run releases`) and commit the file.
import { writeFileSync } from 'node:fs';

const token = process.env.GITHUB_TOKEN;
const response = await fetch('https://api.github.com/repos/RafaelGoulartB/Heronite/releases?per_page=100', {
  headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
});
if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
const keep = (r) => ({
  tag_name: r.tag_name,
  name: r.name,
  published_at: r.published_at,
  html_url: r.html_url,
  body: r.body,
  draft: r.draft,
  prerelease: r.prerelease,
  assets: r.assets.map((a) => ({ name: a.name, size: a.size, download_count: a.download_count })),
});
const releases = (await response.json()).map(keep);
writeFileSync(new URL('../src/data/releases.json', import.meta.url), JSON.stringify(releases, null, 1) + '\n');
console.log(`Saved ${releases.length} releases`);
