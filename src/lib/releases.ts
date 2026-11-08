// Heronite's GitHub releases, for the changelog, the version shown on the site and the download count.
// The build asks GitHub for fresh data; when that fails (no network, rate limit), it falls back to
// the copy in src/data/releases.json, so a deploy never breaks because of the API. `npm run releases` refreshes it.
import snapshot from '../data/releases.json';

export interface Release {
  tag: string;
  name: string;
  date: string;
  url: string;
  body: string;
  /** Downloads of the packages, not counting the .minisig, .zsync and SHA256SUMS files the updaters fetch. */
  downloads: number;
  assets: { name: string; size: number }[];
}

const api = 'https://api.github.com/repos/RafaelGoulartB/Heronite/releases?per_page=100';
// SHA256SUMS has no extension, so it needs its own match; its .minisig is caught by the extension.
const updaterFiles = /(\.(minisig|zsync|sig|sha256)|SHA256SUMS)$/;

type ApiRelease = {
  tag_name: string;
  name: string | null;
  published_at: string;
  html_url: string;
  body: string | null;
  draft: boolean;
  prerelease: boolean;
  assets: { name: string; size: number; download_count: number }[];
};

export const fromApi = (list: ApiRelease[]): Release[] =>
  list
    .filter((r) => !r.draft && !r.prerelease)
    .map((r) => {
      const packages = r.assets.filter((a) => !updaterFiles.test(a.name));
      return {
        tag: r.tag_name,
        name: r.name || r.tag_name,
        date: r.published_at,
        url: r.html_url,
        body: r.body ?? '',
        downloads: packages.reduce((sum, a) => sum + a.download_count, 0),
        assets: packages.map((a) => ({ name: a.name, size: a.size })),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

const load = async (): Promise<Release[]> => {
  try {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(api, {
      headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
    const releases = fromApi(await response.json());
    if (releases.length === 0) throw new Error('no releases');
    return releases;
  } catch (error) {
    console.warn(`[releases] using the saved copy: ${(error as Error).message}`);
    return fromApi(snapshot as ApiRelease[]);
  }
};

let cached: Promise<Release[]> | undefined;

/** Every published release, newest first. Fetched once per build. */
export const releases = () => (cached ??= load());

export const latest = async () => (await releases())[0];

export const totalDownloads = async () => (await releases()).reduce((sum, r) => sum + r.downloads, 0);

/** The version without the `v`: `v1.0.0` becomes `1.0.0`. */
export const version = (release: Release) => release.tag.replace(/^v/, '');

/**
 * The part of a release's notes worth showing on the changelog: the notes start at their first
 * heading, and the download table and the closing "star it" line are already elsewhere on the site.
 */
export const notes = (release: Release) => {
  let body = release.body.replace(/\r\n/g, '\n');
  const firstHeading = body.search(/^#{1,3} /m);
  if (firstHeading > 0) body = body.slice(firstHeading);
  body = body.replace(/^#{1,3} [^\n]*Download[^\n]*\n[\s\S]*?(?=^#{1,3} |(?![\s\S]))/m, '');
  body = body.replace(/^\*\*Enjoying Heronite\?\*\*[^\n]*\n?/m, '');
  return body.trim();
};
