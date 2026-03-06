"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function ToggleThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const isLight = resolvedTheme === "light";

  const toggleTheme = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Toggle ${isLight ? "dark" : "light"} mode`}
      className="transition duration-200 hover:scale-110 cursor-pointer"
    >
      <Image
        src={isLight ? "/icons/moon.svg" : "/icons/sun_2.svg"}
        alt={isLight ? "Toggle Dark Mode" : "Toggle Light Mode"}
        width={30}
        height={30}
      />
    </button>
  );
}
