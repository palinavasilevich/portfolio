import { FaDownload } from "react-icons/fa";

export function DownloadCVButton() {
  return (
    <a
      href="/CV_Palina_Vasilevich_Frontend_Developer.pdf"
      download
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-300 dark:bg-orange-700/50
                                   text-secondary dark:text-zinc-300 hover:bg-orange-400 dark:hover:bg-orange-700/80
                                   transition-colors"
    >
      <FaDownload className="w-5 h-5" />
      <span>DOWNLOAD MY CV</span>
    </a>
  );
}
