"use client";

import Link from "next/link";

import dynamic from "next/dynamic";
import { navigationLinks } from "@/data/navigationLink";
import { LogoLink } from "./LogoLink";

const ToggleThemeButton = dynamic(
  () => import("@/components/ui/toggleThemeButton"),
  { ssr: false },
);

export function Header() {
  return (
    <header className="fixed top-0 z-40 w-full bg-background shadow-md dark:shadow-sm dark:bg-gray-900 dark:shadow-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <LogoLink />

          <div className="flex justify-between items-center gap-3">
            {navigationLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-secondary hover:text-primary transition-colors duration-custom dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {label}
              </Link>
            ))}
            <ToggleThemeButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
