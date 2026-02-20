export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

export const siteConfig = {
  name: "NP Landing",
  description: "Landing page — w przyszłości rozszerzony o dodatkowe funkcjonalności.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  navItems: [
    { href: "/o-nas", label: "O nas" },
    { href: "/kontakt", label: "Kontakt" },
  ] as NavItem[],
  links: {
    docs: "https://nextjs.org/docs",
    templates: "https://vercel.com/templates?framework=next.js",
  },
} as const;

export type SiteConfig = typeof siteConfig;
