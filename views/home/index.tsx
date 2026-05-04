import { Footer } from "@/components/footer/Footer";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import {
  HeroSection,
  IntroTextSection,
  AboutMeSection,
  TrustMeSection,
  WhoIWorkWithSection,
  HelpSupportSection,
  CallToActionWaveSection,
} from "./components";

type HomeProps = {
  messages: Messages;
  locale: Locale;
};

const Home = ({ messages, locale }: HomeProps) => {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)] font-sans text-[var(--color-text)]">
      <HeroSection locale={locale} messages={messages} />
      <main>
        <IntroTextSection intro={messages.intro} />
        <AboutMeSection about={messages.about} />
        <TrustMeSection trust={messages.trust} />
        <WhoIWorkWithSection who={messages.who} />
        <HelpSupportSection help={messages.help} featureCard={messages.featureCard} />
        <CallToActionWaveSection cta={messages.cta} />
      </main>
      <Footer footer={messages.footer} />
    </div>
  );
};

export default Home;
