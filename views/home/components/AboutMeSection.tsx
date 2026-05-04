import { Section } from "../../../components/section/Section";
import { TwoColumnLayout } from "../../../components/container/TwoColumnLayout";
import { ImagePlaceholder } from "../../../components/image-container/ImagePlaceholder";
import type { Messages } from "@/lib/i18n/messages";

type AboutMeSectionProps = {
  about: Messages["about"];
};

export const AboutMeSection = ({ about }: AboutMeSectionProps) => {
  return (
    <Section background="off-white" spacing="large">
      <div className="relative">
        <TwoColumnLayout
          imageSide="left"
          left={
            <ImagePlaceholder
              label={about.imageLabel}
              aspectRatio="3/4"
            />
          }
          right={
            <div>
              <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
                {about.title}
              </h2>
              <div className="mt-6 space-y-4 font-sans text-[var(--color-text)] leading-relaxed">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          }
        />
      </div>
    </Section>
  );
};
