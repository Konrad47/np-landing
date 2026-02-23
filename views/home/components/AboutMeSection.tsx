import { Section } from "../../../components/section/Section";
import { TwoColumnLayout } from "../../../components/container/TwoColumnLayout";
import { ImagePlaceholder } from "../../../components/image-container/ImagePlaceholder";

export const AboutMeSection = () => {
  return (
    <Section background="off-white" spacing="large">
      <div className="relative">
        <TwoColumnLayout
          imageSide="left"
          left={
            <ImagePlaceholder
              label="Portret Natalii Prusek"
              aspectRatio="3/4"
            />
          }
          right={
            <div>
              <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
                O mnie
              </h2>
              <div className="mt-6 space-y-4 font-sans text-[var(--color-text)] leading-relaxed">
                <p>
                  Tu wpisz krótki wstęp o sobie — wykształcenie, doświadczenie,
                  podejście do terapii. Możesz dodać kilka akapitów.
                </p>
                <p>
                  Kolejny akapit z informacjami o specjalizacjach, metodach
                  pracy lub wartościach, które przyświecają Twojej praktyce.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </Section>
  );
};
