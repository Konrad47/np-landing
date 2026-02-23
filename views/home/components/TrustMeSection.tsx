import { Section } from "../../../components/section/Section";
import { BulletList } from "../../../components/list/BulletList";

const trustPoints = [
  "Pierwszy punkt — np. wieloletnie doświadczenie w pracy z pacjentami.",
  "Drugi punkt — np. podejście oparte na dowodach naukowych (CBT).",
  "Trzeci punkt — np. bezpieczna, pełna szacunku relacja terapeutyczna.",
  "Czwarty punkt — np. indywidualne podejście do każdego klienta.",
];

export const TrustMeSection = () => {
  return (
    <Section background="off-white" spacing="normal">
      <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
        Czemu zaufać właśnie mnie?
      </h2>
      <BulletList items={trustPoints} className="mt-8" />
    </Section>
  );
};
