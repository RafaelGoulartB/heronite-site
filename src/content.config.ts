import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Feature pages, guides and comparisons share one shape: a hero, a Markdown body,
// and optional highlight tiles, questions and related links around it.
const articleSchema = ({ image }: SchemaContext) =>
  z.object({
    // <title>: keep it under ~60 characters, with the search phrase first.
    title: z.string(),
    // Meta description: 120 to 160 characters that make someone click.
    description: z.string(),
    eyebrow: z.string(),
    // The H1. Wrap the words to colour in *asterisks*.
    headline: z.string(),
    lead: z.string(),
    // Short name and one line for cards and menus.
    navLabel: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    hero: image().optional(),
    heroAlt: z.string().optional(),
    highlights: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    updated: z.coerce.date(),
    og: z.string().optional(),
  });

const features = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/features' }),
  schema: articleSchema,
});
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: articleSchema,
});
const compare = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/compare' }),
  schema: articleSchema,
});

export const docSections = ['Start', 'Guides', 'Reference', 'Contribute'] as const;

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    // Shorter name for the sidebar, when the title is long.
    navLabel: z.string().optional(),
    description: z.string(),
    section: z.enum(docSections),
    order: z.number(),
    updated: z.coerce.date(),
  }),
});

export const collections = { features, guides, compare, docs };
