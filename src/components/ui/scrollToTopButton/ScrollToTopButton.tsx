"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import cn from "@/utils/class-merge";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  const baseStyles =
    "fixed bottom-8 right-8 p-3 bg-white dark:bg-zinc-800 shadow-lg dark:shadow-zinc-800/20 rounded-full text-secondary cursor-pointer";
  const interactionStyles =
    "hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700";
  const transitionStyles = "transition-all duration-300 group z-50";

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      className={cn(baseStyles, interactionStyles, transitionStyles)}
    >
      {/* <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" /> */}

      <Image
        src="/icons/space-rocket.svg"
        alt="Rocket icon indicating scroll to up"
        width={30}
        height={30}
        priority
      />
    </motion.button>
  );
}
