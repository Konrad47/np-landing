import { type ButtonHTMLAttributes, type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-lg bg-[var(--color-button)] px-6 py-3 text-[var(--color-off-white)] font-medium transition-colors hover:bg-[var(--color-button-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-button)] focus:ring-offset-2 focus:ring-offset-[var(--color-off-white)]",
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const style = variantStyles[variant];

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={`${style} ${className}`} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${style} ${className}`}
      {...(props as ButtonAsButton)}
    >
      {children}
    </button>
  );
};
