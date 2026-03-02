import Link from "next/link";
import { Code } from "lucide-react";

export function Header() {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-800 top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <span className="relative inline-block w-[190px] h-[28px] text-xl font-medium text-primary-dark dark:text-zinc-50">
                <span className="absolute inset-0 flex items-center transition-opacity duration-300 group-hover:opacity-0">
                  PV
                </span>

                <span className="absolute inset-0 flex items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Palina Vasilevich
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
