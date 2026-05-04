import Home from "@/views/home";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export const generateStaticParams = () =>
  [{ locale: "pl" }, { locale: "en" }] as { locale: Locale }[];

const HomePage = async ({ params }: HomePageProps) => {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "pl";
  const messages = await getDictionary(safeLocale);

  return <Home messages={messages} locale={safeLocale} />;
};

export default HomePage;
