import clsx from "clsx";
import { ReactNode } from "react";

type ThemeVariant = "primary" | "secondary";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: ThemeVariant;
  "aria-label"?: string;
}

const themeVariants: Record<ThemeVariant, string> = {
  primary: "bg-transparent dark:bg-bg-dark",
  secondary: "bg-transparent dark:bg-zinc-900/95",
};

export function Section({
  id,
  children,
  className,
  variant = "primary",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={clsx(
        "py-20 transition-colors-custom",
        themeVariants[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}
