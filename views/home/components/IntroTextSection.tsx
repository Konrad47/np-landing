import { Section } from "../../../components/section/Section";
import { Button } from "../../../components/button/Button";
import type { Messages } from "@/lib/i18n/messages";

type IntroTextSectionProps = {
  intro: Messages["intro"];
};

export const IntroTextSection = ({ intro }: IntroTextSectionProps) => {
  return (
    <Section id="booking" background="off-white" spacing="large">
      <div className="mx-auto max-w-3xl text-center">
        <blockquote className="font-sans text-lg leading-relaxed text-[var(--color-text)] md:text-xl md:leading-loose">
          &ldquo;{intro.quote}&rdquo;
        </blockquote>
        <footer className="mt-6">
          <p className="font-sans font-medium text-[var(--color-text)]">
            {intro.name}
          </p>
          <p className="mt-1 font-sans text-sm text-[var(--color-text-muted)]">
            {intro.role}
          </p>
        </footer>
        <div className="mt-10">
          <Button href="#booking">{intro.cta}</Button>
        </div>
      </div>
    </Section>
  );
};
