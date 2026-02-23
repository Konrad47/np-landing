import { Section } from "../../../components/section/Section";
import { Button } from "../../../components/button/Button";

export const IntroTextSection = () => {
  return (
    <Section background="off-white" spacing="large">
      <div className="mx-auto max-w-3xl text-center">
        <blockquote className="font-sans text-lg leading-relaxed text-[var(--color-text)] md:text-xl md:leading-loose">
          &ldquo;Tu wpisz cytat lub misję — miejsce na główne przesłanie. Tekst
          może być dłuższy i wieloliniowy.&rdquo;
        </blockquote>
        <footer className="mt-6">
          <p className="font-sans font-medium text-[var(--color-text)]">
            Natalia Prusek
          </p>
          <p className="mt-1 font-sans text-sm text-[var(--color-text-muted)]">
            Psycholożka, Psychoterapeutka CBT
          </p>
        </footer>
        <div className="mt-10">
          <Button href="#rezerwacja">Zarezerwuj wizytę</Button>
        </div>
      </div>
    </Section>
  );
};
