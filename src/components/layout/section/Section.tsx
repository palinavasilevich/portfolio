"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import clsx from "clsx";

type AnimationVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scale";
interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  reveal?: boolean;
  "aria-label"?: string;
}

const variants = {
  fadeUp: { opacity: 0, y: 60 },
  fadeLeft: { opacity: 0, x: -60 },
  fadeRight: { opacity: 0, x: 60 },
  scale: { opacity: 0, scale: 0.95 },
};

export function Section({
  id,
  children,
  className,
  variant = "fadeUp",
  reveal = true,
  "aria-label": ariaLabel,
}: SectionProps) {
  if (!reveal) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      initial={variants[variant]}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={clsx(className)}
    >
      {children}
    </motion.section>
  );
}
