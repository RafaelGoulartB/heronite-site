// Saves Heronite's GitHub releases to src/data/releases.json and its star count to
// src/data/stars.json, the copies the build falls back on when it cannot reach GitHub. Run it now
// and then (`npm run releases`) and commit the files.
import { writeFileSync } from 'node:fs';

const token = process.env.GITHUB_TOKEN;
const github = async (path) => {
  const response = await fetch(`https://api.github.com/repos/RafaelGoulartB/Heronite${path}`, {
    headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
  });
  if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
  return response.json();
};
const save = (file, data) => writeFileSync(new URL(`../src/data/${file}`, import.meta.url), JSON.stringify(data, null, 1) + '\n');

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
const releases = (await github('/releases?per_page=100')).map(keep);
save('releases.json', releases);
console.log(`Saved ${releases.length} releases`);

const { stargazers_count: stars } = await github('');
save('stars.json', { stars });
console.log(`Saved ${stars} stars`);
