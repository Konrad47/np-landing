import { type ReactNode } from "react";

type BulletListProps = {
  items: ReactNode[];
  className?: string;
};

export const BulletList = ({ items, className = "" }: BulletListProps) => {
  return (
    <ul
      className={`space-y-6 font-sans text-[var(--color-text)] leading-relaxed ${className}`}
    >
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-button)]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
