import { socialLinks } from "@/data/socialLinks";
import Link from "next/link";

export function SocialLinks() {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {socialLinks.map(({ href, icon: Icon, name }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name} profile`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-colors text-secondary bg-zinc-100 dark:bg-zinc-700/50 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700/80"
        >
          <Icon className="w-5 h-5 dark:text-zinc-300" />
          <span>{name}</span>
        </Link>
      ))}
    </div>
  );
}
