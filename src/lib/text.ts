import { localize, type Locale } from '../i18n/locales';

const escapes: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const escapeHtml = (text: string) => text.replace(/[&<>"']/g, (c) => escapes[c]);

/** Turns `One shelf for *everything*` into HTML with the starred words in the accent colour. */
export const accent = (text: string) => escapeHtml(text).replace(/\*(.+?)\*/g, '<em>$1</em>');

/** The same text with the stars removed, for titles and alt text. */
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
