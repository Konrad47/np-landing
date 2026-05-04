import type { Locale } from "./config";

export const withLocale = (locale: Locale, path: string): string => {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
};
