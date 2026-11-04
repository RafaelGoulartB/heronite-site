import { localize, type Locale } from '../i18n/locales';

const escapes: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (c) => escapes[c]);

/** A headline with the stars that once marked its accent words removed. */
export const plain = (text: string) => text.replace(/\*/g, '');

/** Inline Markdown for short strings (FAQ answers): links, `code` and **bold**. Site links move to `lang`. */
export const inlineMarkdown = (text: string, lang: Locale = 'en') =>
  escapeHtml(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => `<a href="${localize(lang, href)}">${label}</a>`);

/** Removes Markdown from a string, for JSON-LD. */
export const stripMarkdown = (text: string) =>
  text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
