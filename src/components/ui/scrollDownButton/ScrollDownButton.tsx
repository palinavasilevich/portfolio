"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ScrollDownButton() {
  return (
    <motion.a
      href="#projects"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.6,
      }}
      className="absolute bottom-16 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center text-muted-foreground transition-colors hover:text-foreground md:flex lg:bottom-12"
    >
      <span className="text-sm">Scroll Down</span>

      <Image
        src="/icons/rocket.svg"
        alt="Rocket icon indicating scroll down"
        width={56}
        height={56}
        className="md:w-20 md:h-20"
        priority
      />
    </motion.a>
  );
}
