import { Section } from "../../../components/section/Section";
import { BulletList } from "../../../components/list/BulletList";
import type { Messages } from "@/lib/i18n/messages";

type TrustMeSectionProps = {
  trust: Messages["trust"];
};

export const TrustMeSection = ({ trust }: TrustMeSectionProps) => {
  return (
    <Section background="off-white" spacing="normal">
      <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
        {trust.title}
      </h2>
      <BulletList items={trust.items} className="mt-8" />
    </Section>
  );
};
