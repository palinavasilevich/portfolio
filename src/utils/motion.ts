import { Variants, Transition } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";

interface FadeInOptions {
  direction?: Direction;
  delay?: number;
  duration?: number;
  transition?: Transition;
}

export const fadeIn = ({
  direction,
  delay = 0,
  duration = 0.6,
  transition,
}: FadeInOptions = {}): Variants => {
  const distance = 40;

  const axis = direction === "left" || direction === "right" ? "x" : "y";

  const offset =
    direction === "left" || direction === "up" ? distance : -distance;

  return {
    hidden: {
      opacity: 0,
      ...(direction && { [axis]: offset }),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        ...transition,
      },
    },
  };
};

interface ContainerOptions {
  staggerChildren?: number;
  delayChildren?: number;
}

export const containerVariants = ({
  staggerChildren = 0.12,
  delayChildren = 0.1,
}: ContainerOptions = {}): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
