import en, { type Dict } from './en';
import ptBr from './pt-br';
import es from './es';
import type { Locale } from './locales';

export * from './locales';
export type { Dict };

const dicts: Record<Locale, Dict> = { en, 'pt-br': ptBr, es };

/** The interface text for a language. */
export const useText = (lang: Locale) => dicts[lang];

/** Fills `{name}` placeholders: `fill('Version {v}', { v: '1.0' })`. */
export const fill = (text: string, vars: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? String(vars[key]) : match));
