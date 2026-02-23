import { Footer } from "@/components/footer/Footer";
import {
  HeroSection,
  IntroTextSection,
  AboutMeSection,
  TrustMeSection,
  WhoIWorkWithSection,
  HelpSupportSection,
  CallToActionWaveSection,
} from "./components";

const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)] font-sans text-[var(--color-text)]">
      <HeroSection />
      <main>
        <IntroTextSection />
        <AboutMeSection />
        <TrustMeSection />
        <WhoIWorkWithSection />
        <HelpSupportSection />
        <CallToActionWaveSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
