import clsx from "clsx";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div
      className={clsx(
        "max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
