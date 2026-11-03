// How many stars Heronite has on GitHub, for the button in the header. The build asks GitHub; when
// that fails it falls back to src/data/stars.json, which `npm run releases` refreshes. The page then
// asks GitHub again in the browser, so the count stays current between deploys.
import snapshot from '../data/stars.json';

const api = 'https://api.github.com/repos/RafaelGoulartB/Heronite';

const load = async (): Promise<number> => {
  try {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(api, {
      headers: { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
    const { stargazers_count } = (await response.json()) as { stargazers_count: number };
    return stargazers_count;
  } catch (error) {
    console.warn(`[stars] using the saved count: ${(error as Error).message}`);
    return snapshot.stars;
  }
};

let cached: Promise<number> | undefined;

/** The repository's star count. Fetched once per build. */
export const stars = () => (cached ??= load());

/** 68 stays 68, 1234 becomes 1.2K (1,2 mil in Portuguese). */
export const formatStars = (count: number, htmlLang: string) =>
  new Intl.NumberFormat(htmlLang, { notation: 'compact', maximumFractionDigits: 1 }).format(count);
