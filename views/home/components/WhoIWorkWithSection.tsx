import { Section } from "../../../components/section/Section";
import { TwoColumnLayout } from "../../../components/container/TwoColumnLayout";
import { ImagePlaceholder } from "../../../components/image-container/ImagePlaceholder";
import { BulletList } from "../../../components/list/BulletList";

const workWithPoints = [
  "Dorośli doświadczający lęku, depresji lub kryzysów życiowych.",
  "Osoby szukające wsparcia w budowaniu relacji i asertywności.",
  "Klienci pracujący nad stresem i wypaleniem zawodowym.",
  "Inne grupy — dostosuj listę do swoich specjalizacji.",
];

export const WhoIWorkWithSection = () => {
  return (
    <Section background="off-white" spacing="normal">
      <TwoColumnLayout
        imageSide="left"
        left={
          <div>
            <h2 className="font-serif text-3xl font-medium text-[var(--color-text)] md:text-4xl">
              Z kim pracuję?
            </h2>
            <BulletList items={workWithPoints} className="mt-8" />
          </div>
        }
        right={
          <ImagePlaceholder
            label="Obraz — spokojna scena (np. woda, natura)"
            aspectRatio="4/3"
          />
        }
      />
    </Section>
  );
};
