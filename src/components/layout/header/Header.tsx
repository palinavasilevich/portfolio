"use client";

import Link from "next/link";

import { Code } from "lucide-react";
import dynamic from "next/dynamic";
import { NAVIGATION_ITEMS } from "@/constants";

const ToggleThemeButton = dynamic(
  () => import("@/components/ui/toggleThemeButton"),
  { ssr: false },
);

export function Header() {
  return (
    <header className="shadow-md dark:shadow-sm dark:bg-gray-900 dark:shadow-slate-800 top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link
            href="#home"
            aria-label="Go to home section"
            className="group flex items-center gap-2"
          >
            <Code
              className="w-5 h-5 text-secondary dark:text-zinc-300"
              aria-hidden="true"
            />

            <span className="relative inline-block w-47 h-7 text-xl font-medium text-primary-dark dark:text-zinc-50">
              <span className="absolute inset-0 flex items-center transition-opacity duration-300 group-hover:opacity-0">
                PV
              </span>

              <span className="absolute inset-0 flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Palina Vasilevich
              </span>
            </span>
          </Link>

          <div className="flex justify-between items-center gap-2">
            {NAVIGATION_ITEMS.map(({ href, label }) => (
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
