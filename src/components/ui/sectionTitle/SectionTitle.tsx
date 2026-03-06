import cn from "@/utils/class-merge";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl text-center font-medium text-primary-dark dark:text-zinc-50 pb-12",
        className,
      )}
    >
      {title}
    </h2>
  );
}
