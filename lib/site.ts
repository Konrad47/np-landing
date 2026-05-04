export const siteConfig = {
  name: "NP Landing",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;

export const routes = {
  about: "/o-nas",
  contact: "/kontakt",
} as const;

export type SiteConfig = typeof siteConfig;
