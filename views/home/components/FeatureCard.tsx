import { type ReactNode } from "react";
import { Button } from "../../../components/button/Button";
import { ImagePlaceholder } from "../../../components/image-container/ImagePlaceholder";

type FeatureCardProps = {
  title: string;
  /** Optional image override; if not provided, uses ImagePlaceholder */
  image?: ReactNode;
  href?: string;
  /** Override button label */
  buttonLabel?: string;
};

export const FeatureCard = ({
  title,
  image,
  href = "#",
  buttonLabel = "Dowiedz się więcej",
}: FeatureCardProps) => {
  return (
    <article className="flex flex-col rounded-lg bg-[var(--color-off-white)] shadow-sm">
      <div className="overflow-hidden rounded-t-lg">
        {image ?? (
          <ImagePlaceholder
            label={title}
            aspectRatio="4/3"
            className="!rounded-t-lg !rounded-b-none"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-sans text-lg font-semibold text-[var(--color-text)]">
          {title}
        </h3>
        <div className="mt-4 flex flex-1 items-end">
          <Button href={href} className="w-full sm:w-auto">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </article>
  );
};
