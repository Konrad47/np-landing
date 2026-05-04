import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/path";
import type { Messages } from "@/lib/i18n/messages";
import { routes } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
  messages: Messages;
};

export const SiteHeader = ({ locale, messages }: SiteHeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div
        className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 pt-6 sm:px-6 lg:px-8"
        style={{ maxWidth: "72rem" }}
      >
        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-sm font-medium text-[var(--color-off-white)]/95"
          aria-label={messages.nav.aria}
        >
          <Link
            href={withLocale(locale, "/")}
            className="hover:underline hover:underline-offset-4"
          >
            {messages.nav.home}
          </Link>
          <Link
            href={withLocale(locale, routes.about)}
            className="hover:underline hover:underline-offset-4"
          >
            {messages.nav.about}
          </Link>
          <Link
            href={withLocale(locale, routes.contact)}
            className="hover:underline hover:underline-offset-4"
          >
            {messages.nav.contact}
          </Link>
        </nav>
        <LanguageSwitcher locale={locale} labels={messages.language} />
      </div>
    </header>
  );
};
