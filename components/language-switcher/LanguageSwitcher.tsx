"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    plLabel: string;
    enLabel: string;
    groupAria: string;
    plLinkAria: string;
    enLinkAria: string;
  };
};

export const LanguageSwitcher = ({ locale, labels }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const pathLocale =
    segments[0] && isLocale(segments[0]) ? (segments[0] as Locale) : locale;
  const restSegments =
    pathLocale === segments[0] ? segments.slice(1) : segments;
  const rest = restSegments.length ? `/${restSegments.join("/")}` : "";

  const plHref = `/pl${rest}`;
  const enHref = `/en${rest}`;

  return (
    <nav
      className="flex items-center gap-2 rounded-md bg-black/25 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-off-white)] backdrop-blur-sm md:text-sm"
      aria-label={labels.groupAria}
    >
      <Link
        href={plHref}
        className={`rounded px-1.5 py-0.5 transition-colors hover:bg-white/10 ${
          pathLocale === "pl" ? "bg-white/15 underline decoration-1 underline-offset-2" : ""
        }`}
        hrefLang="pl"
        aria-current={pathLocale === "pl" ? "page" : undefined}
        aria-label={labels.plLinkAria}
      >
        {labels.plLabel}
      </Link>
      <span className="opacity-50" aria-hidden>
        |
      </span>
      <Link
        href={enHref}
        className={`rounded px-1.5 py-0.5 transition-colors hover:bg-white/10 ${
          pathLocale === "en" ? "bg-white/15 underline decoration-1 underline-offset-2" : ""
        }`}
        hrefLang="en"
        aria-current={pathLocale === "en" ? "page" : undefined}
        aria-label={labels.enLinkAria}
      >
        {labels.enLabel}
      </Link>
    </nav>
  );
};
