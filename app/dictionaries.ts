import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const has_locale = (locale: string): locale is Locale => locale in dictionaries;

export const get_dictionary = async (locale: Locale) => dictionaries[locale]();