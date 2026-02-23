import { Section } from "../../../components/section/Section";
import { FeatureCard } from "./FeatureCard";

const features = [
  { title: "Psychoterapia i Wsparcie", href: "#psychoterapia" },
  { title: "Blog", href: "#blog" },
  { title: "e-booki i szkolenia", href: "#ebooki" },
];

export const HelpSupportSection = () => {
  return (
    <Section background="beige-light" spacing="large">
      <h2 className="text-center font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
        W czym mogę Cię wesprzeć?
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            href={feature.href}
          />
        ))}
      </div>
      <p className="mt-10 text-center font-sans text-sm text-[var(--color-text-muted)]">
        Tu możesz dodać krótką informację dodatkową lub disclaimer.
      </p>
    </Section>
  );
};
