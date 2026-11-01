import { getCollection, type CollectionEntry } from 'astro:content';
import { docSections } from '../content.config';
import { locales, localize, useText, type Locale } from '../i18n';

export type ArticleKind = 'features' | 'guides' | 'compare';
export type Article = CollectionEntry<ArticleKind>;
export type Doc = CollectionEntry<'docs'>;

// Entries live in a folder per language: `features/pt-br/stores.md` has the id `pt-br/stores`.
export const langOf = (entry: { id: string }) => entry.id.split('/')[0] as Locale;
export const slugOf = (entry: { id: string }) => entry.id.split('/').slice(1).join('/');

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

export const articles = async (kind: ArticleKind, lang: Locale) =>
  (await getCollection(kind, (e) => langOf(e) === lang)).sort(byOrder);

export const articleUrl = (kind: ArticleKind, slug: string, lang: Locale = 'en') => localize(lang, `/${kind}/${slug}/`);

export const docs = async (lang: Locale) => {
  const all = await getCollection('docs', (e) => langOf(e) === lang);
  return docSections.map((section) => ({
    section,
    pages: all.filter((d) => d.data.section === section).sort(byOrder),
  }));
};

export const docUrl = (slug: string, lang: Locale = 'en') => localize(lang, `/docs/${slug}/`);

/** Which languages have a page for this collection entry, so hreflang only names pages that exist. */
export const languagesWith = async (collection: ArticleKind | 'docs', slug: string) => {
  const all = await getCollection(collection);
  return locales.filter((l) => all.some((e) => langOf(e) === l && slugOf(e) === slug));
};

/**
 * Every article and doc in a language, by its English path, so `related` lists in any
 * language can name a page as `/features/stores/`.
 */
export const pagesByPath = async (lang: Locale) => {
  const text = useText(lang);
  const map = new Map<string, { href: string; title: string; summary: string; kind: ArticleKind | 'docs' | 'page'; entry?: Article }>();
  map.set('/download/', {
    href: localize(lang, '/download/'),
    title: text.article.downloadPageTitle,
    summary: text.article.downloadPageSummary,
    kind: 'page',
  });
  for (const kind of ['features', 'guides', 'compare'] as const) {
    for (const entry of await articles(kind, lang)) {
      const slug = slugOf(entry);
      map.set(`/${kind}/${slug}/`, { href: articleUrl(kind, slug, lang), title: entry.data.navLabel, summary: entry.data.summary, kind, entry });
    }
  }
  for (const entry of await getCollection('docs', (e) => langOf(e) === lang)) {
    const slug = slugOf(entry);
    map.set(`/docs/${slug}/`, { href: docUrl(slug, lang), title: entry.data.navLabel ?? entry.data.title, summary: entry.data.description, kind: 'docs' });
  }
  return map;
};
