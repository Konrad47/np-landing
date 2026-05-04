import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/i18n/html-lang";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const messages = await getDictionary(locale);

  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
};

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <HtmlLang locale={locale} />
      {children}
    </>
  );
};

export default LocaleLayout;
