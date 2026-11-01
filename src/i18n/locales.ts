// The site's languages. English lives at the root, the others under /pt-br/ and /es/.
export const locales = ['en', 'pt-br', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const otherLocales = locales.filter((l) => l !== defaultLocale) as Exclude<Locale, 'en'>[];

export const localeInfo: Record<Locale, { name: string; short: string; htmlLang: string; og: string; date: string }> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en', og: 'en_US', date: 'en-US' },
  'pt-br': { name: 'Português (Brasil)', short: 'PT', htmlLang: 'pt-BR', og: 'pt_BR', date: 'pt-BR' },
  es: { name: 'Español', short: 'ES', htmlLang: 'es', og: 'es_ES', date: 'es' },
};

const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** The language of a URL path, from its first segment. */
export const localeOf = (pathname: string): Locale => {
  const first = pathname.split('/')[1] ?? '';
  return isLocale(first) ? first : defaultLocale;
};

/** A path without its language prefix: `/pt-br/docs/faq/` becomes `/docs/faq/`. */
export const basePath = (pathname: string) => {
  const lang = localeOf(pathname);
  return lang === defaultLocale ? pathname : pathname.slice(lang.length + 1) || '/';
};

/** A site path in a language: `localize('es', '/download/')` is `/es/download/`. */
export const localize = (lang: Locale, path: string) => {
  if (lang === defaultLocale || !path.startsWith('/') || path.startsWith('//')) return path;
  return `/${lang}${path}`;
};

/** Every language version of a path, for hreflang links and the language menu. */
export const alternatesFor = (path: string, available: readonly Locale[] = locales) =>
  Object.fromEntries(available.map((l) => [l, localize(l, path)])) as Partial<Record<Locale, string>>;

/** The social card of a page in a language: `/og/stores.jpg`, `/og/pt-br/stores.jpg`. */
export const ogImage = (lang: Locale, name: string) => (lang === defaultLocale ? `/og/${name}.jpg` : `/og/${lang}/${name}.jpg`);

export const formatDate = (lang: Locale, date: Date) =>
  date.toLocaleDateString(localeInfo[lang].date, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
