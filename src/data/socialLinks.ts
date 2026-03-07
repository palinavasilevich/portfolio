import { IconType } from "react-icons";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export type SocialLink = {
  name: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    icon: SiGmail,
    name: "Gmail",
    href: "mailto:palina.vasilevich@gmail.com",
  },
  {
    icon: FaTelegram,
    name: "Telegram",
    href: "https://t.me/palinavasilevich",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/palinavasilevich",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/palina-vasilevich/",
  },
];
