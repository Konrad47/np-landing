import { type ReactNode } from "react";

const SECTION_MAX_WIDTH = "72rem"; 

type SectionProps = {
  children: ReactNode;
  background?: "off-white" | "beige-light" | "wave";
  spacing?: "normal" | "large";
  className?: string;
};

const bgMap = {
  "off-white": "bg-[var(--color-off-white)]",
  "beige-light": "bg-[var(--color-beige-light)]",
  wave: "bg-[var(--color-wave)]",
} as const;

const spacingMap = {
  normal: "py-16 md:py-20",
  large: "py-20 md:py-28",
} as const;

export const Section = ({
  children,
  background = "off-white",
  spacing = "normal",
  className = "",
}: SectionProps) => {
  return (
    <section
      className={`${bgMap[background]} ${spacingMap[spacing]} ${className}`}
    >
      <div
        className="mx-auto w-full px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: SECTION_MAX_WIDTH }}
      >
        {children}
      </div>
    </section>
  );
};
