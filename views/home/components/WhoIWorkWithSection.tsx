import { Section } from "../../../components/section/Section";
import { TwoColumnLayout } from "../../../components/container/TwoColumnLayout";
import { ImagePlaceholder } from "../../../components/image-container/ImagePlaceholder";
import { BulletList } from "../../../components/list/BulletList";
import type { Messages } from "@/lib/i18n/messages";

type WhoIWorkWithSectionProps = {
  who: Messages["who"];
};

export const WhoIWorkWithSection = ({ who }: WhoIWorkWithSectionProps) => {
  return (
    <Section background="off-white" spacing="normal">
      <TwoColumnLayout
        imageSide="left"
        left={
          <div>
            <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
              {who.title}
            </h2>
            <BulletList items={who.items} className="mt-8" />
          </div>
        }
        right={
          <ImagePlaceholder
            label={who.imageLabel}
            aspectRatio="4/3"
          />
        }
      />
    </Section>
  );
};
