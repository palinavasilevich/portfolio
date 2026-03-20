// import { SocialLinks } from "@/components/ui/socialLinks";

// export function ContactInfo() {
//   return (
//     <div className="flex flex-col items-center bg-white dark:bg-zinc-800/50 rounded-2xl p-8 pt-14 shadow-sm border border-gray-200 dark:border-zinc-700">
//       <h3 className="text-2xl font-bold mb-6 text-center">Connect With Me</h3>
//       <SocialLinks />
//     </div>
//   );
// }

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 mt-4">
        <a
          href="mailto:palina.vasilevich@gmail.com"
          className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
        >
          <FaEnvelope className="mt-1 text-lg" />

          <div>
            <div className="font-medium">Email</div>
            <div className="text-sm text-secondary">
              palina.vasilevich@gmail.com
            </div>
          </div>
        </a>

        <a
          href="https://github.com/palinavasilevich"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
        >
          <FaGithub className="mt-1 text-lg" />

          <div>
            <div className="font-medium">Github</div>
            <div className="text-sm text-secondary">
              github.com/palinavasilevich
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/palina-vasilevich/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
        >
          <FaLinkedin className="mt-1 text-lg" />

          <div>
            <div className="font-medium">LinkedIn</div>
            <div className="text-sm text-secondary">
              linkedin.com/in/palinavasilevich
            </div>
          </div>
        </a>
      </div>

      <div className="flex flex-col items-start gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 ">
        <div className="flex items-center gap-2">
          <MapPin />
          <span>Based in Bochum, Germany</span>
        </div>

        {/* <div className="flex items-center gap-2">
          <span className="text-green-500">●</span>
          <span>Open to opportunities</span>
        </div> */}
      </div>
    </div>
  );
}
