"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import cn from "@/utils/class-merge";
import { containerVariants } from "@/utils/motionVariants";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  animateOnMount?: boolean;
}

export function Section({
  id,
  children,
  className,
  animateOnMount,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      variants={containerVariants()}
      initial="hidden"
      animate={animateOnMount ? "visible" : undefined}
      whileInView={!animateOnMount ? "visible" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      className={cn("py-16 scroll-mt-16", className)}
    >
      {children}
    </motion.section>
  );
}
