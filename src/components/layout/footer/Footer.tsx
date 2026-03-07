import { FaGithub } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-secondary dark:text-zinc-400">
        <span>
          © <time dateTime={String(currentYear)}>{currentYear}</time> Palina
          Vasilevich
        </span>

        <span className="hidden md:inline">•</span>

        <a
          href="https://github.com/palinavasilevich/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View portfolio repository on GitHub"
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <FaGithub className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
