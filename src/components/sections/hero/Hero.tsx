"use client";

import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/sectionContainer";
import { HeroIntro } from "./heroIntro";
import { HeroImage } from "./heroImage/HeroImage";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

export function Hero() {
  return (
    <Section
      id="home"
      animateOnMount
      className="min-h-screen flex items-center"
    >
      <SectionContainer>
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24"
        >
          <HeroImage />
          <motion.div variants={fadeIn({ direction: "left", delay: 0.4 })}>
            <HeroIntro />
          </motion.div>
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
