import Link from "next/link";
import { Code } from "lucide-react";

export function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md dark:shadow-sm dark:shadow-slate-800 top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link
            href="#home"
            aria-label="Go to home section"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
          >
            <Code
              className="w-5 h-5 text-secondary dark:text-zinc-300"
              aria-hidden="true"
            />
            <span className="text-xl font-medium text-primary-dark dark:text-zinc-50">
              PV
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
