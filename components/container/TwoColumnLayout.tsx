import { type ReactNode } from "react";

type TwoColumnLayoutProps = {
  left: ReactNode;
  right: ReactNode;
  /** "image-left" = image ~40% left, content right; "image-right" = content left, image ~40% right */
  imageSide?: "left" | "right";
  className?: string;
};

export const TwoColumnLayout = ({
  left,
  right,
  imageSide = "left",
  className = "",
}: TwoColumnLayoutProps) => {
  const gap = "gap-8 lg:gap-12";
  const gridCols =
    imageSide === "left"
      ? "lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]"
      : "lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]";

  const leftNode = imageSide === "left" ? left : right;
  const rightNode = imageSide === "left" ? right : left;

  return (
    <div
      className={`grid grid-cols-1 items-center ${gridCols} ${gap} ${className}`}
    >
      <div className="min-w-0">{leftNode}</div>
      <div className="min-w-0">{rightNode}</div>
    </div>
  );
};
