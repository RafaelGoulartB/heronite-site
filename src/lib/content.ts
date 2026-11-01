import { getCollection, type CollectionEntry } from 'astro:content';
import { docSections } from '../content.config';

export type ArticleKind = 'features' | 'guides' | 'compare';
export type Article = CollectionEntry<ArticleKind>;

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

export const articles = async (kind: ArticleKind) => (await getCollection(kind)).sort(byOrder);

export const articleUrl = (kind: ArticleKind, id: string) => `/${kind}/${id}/`;

export const docs = async () => {
  const all = await getCollection('docs');
  return docSections.map((section) => ({
    section,
    pages: all.filter((d) => d.data.section === section).sort(byOrder),
  }));
};

export const docUrl = (id: string) => `/docs/${id}/`;

/** Every article and doc by URL, so `related` lists can name any page on the site. */
export const pagesByUrl = async () => {
  const map = new Map<string, { title: string; summary: string; kind: ArticleKind | 'docs'; entry?: Article }>();
  for (const kind of ['features', 'guides', 'compare'] as const) {
    for (const entry of await getCollection(kind)) {
      map.set(articleUrl(kind, entry.id), { title: entry.data.navLabel, summary: entry.data.summary, kind, entry });
    }
  }
  for (const entry of await getCollection('docs')) {
    map.set(docUrl(entry.id), { title: entry.data.navLabel ?? entry.data.title, summary: entry.data.description, kind: 'docs' });
  }
  return map;
};
