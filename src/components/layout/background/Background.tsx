import { useMemo, ReactNode } from "react";
import { generateStars, Star } from "./generateStars";

interface BackgroundProps {
  children: ReactNode;
  starCount?: number;
}

export default function Background({
  children,
  starCount = 100,
}: BackgroundProps): React.ReactElement {
  const stars: Star[] = useMemo(() => generateStars(starCount), [starCount]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-gray-900 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white dark:bg-gray-300 rounded-full opacity-70 animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
}
