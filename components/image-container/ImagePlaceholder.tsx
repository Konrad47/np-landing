import { type ReactNode } from "react";

type ImagePlaceholderProps = {
  /** Optional label for screen readers / placeholder text */
  label?: string;
  /** Aspect ratio as string e.g. "4/3", "1/1", "16/9" */
  aspectRatio?: "4/3" | "1/1" | "16/9" | "3/4";
  className?: string;
  children?: ReactNode;
};

const aspectMap = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
  "3/4": "aspect-[3/4]",
} as const;

export const ImagePlaceholder = ({
  label = "Zdjęcie",
  aspectRatio = "4/3",
  className = "",
  children,
}: ImagePlaceholderProps) => {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${aspectMap[aspectRatio]} w-full overflow-hidden rounded-lg bg-[var(--color-beige-light)] flex items-center justify-center ${className}`}
    >
      {children ?? (
        <span className="text-sm text-[var(--color-text-muted)]">
          {label}
        </span>
      )}
    </div>
  );
};
