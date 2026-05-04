import { Section } from "../../../components/section/Section";
import { FeatureCard } from "./FeatureCard";
import type { Messages } from "@/lib/i18n/messages";

type HelpSupportSectionProps = {
  help: Messages["help"];
  featureCard: Messages["featureCard"];
};

export const HelpSupportSection = ({
  help,
  featureCard,
}: HelpSupportSectionProps) => {
  return (
    <Section background="beige-light" spacing="large">
      <h2 className="text-center font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
        {help.title}
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {help.features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            href={feature.href}
            buttonLabel={featureCard.learnMore}
          />
        ))}
      </div>
      <p className="mt-10 text-center font-sans text-sm text-[var(--color-text-muted)]">
        {help.disclaimer}
      </p>
    </Section>
  );
};
