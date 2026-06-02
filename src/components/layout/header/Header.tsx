"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import { navigationLinks } from "@/data/navigationLink";
import { LogoLink } from "./LogoLink";

const ToggleThemeButton = dynamic(
  () => import("@/components/ui/toggleThemeButton"),
  { ssr: false },
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full bg-background shadow-md dark:shadow-sm dark:bg-gray-900 dark:shadow-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <LogoLink />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ToggleThemeButton />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="p-2 rounded-lg text-secondary dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-background dark:bg-gray-900 px-4 pb-3">
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-secondary hover:text-primary transition-colors dark:text-zinc-400 dark:hover:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
