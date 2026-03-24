import Link from "next/link";
import { Code } from "lucide-react";

export function LogoLink() {
  return (
    <Link
      href="#home"
      aria-label="Go to home section"
      className="group flex items-center gap-2"
    >
      <Code
        className="w-5 h-5 text-secondary dark:text-zinc-300 transition-transform duration-300 group-hover:rotate-12"
        aria-hidden="true"
      />

      <span className="relative inline-block w-47 h-7 overflow-hidden text-xl font-medium text-primary-dark dark:text-zinc-50">
        <span className="absolute inset-0 flex items-center transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
          PV
        </span>

        <span className="absolute inset-0 flex items-center translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Palina Vasilevich
        </span>
      </span>
    </Link>
  );
}
