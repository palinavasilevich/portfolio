"use client";

import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/sectionContainer";
import { HeroIntro } from "./heroIntro";
import { HeroImage } from "./heroImage/HeroImage";

import { motion } from "framer-motion";

import { SocialLinks } from "@/components/ui/socialLinks";
import { fadeIn } from "@/utils/motionVariants";
import { ScrollDownButton } from "@/components/ui/scrollDownButton";

export function Hero() {
  return (
    <Section
      id="home"
      animateOnMount
      className="min-h-screen flex items-center relative"
    >
      <SectionContainer>
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-14 lg:gap-24"
        >
          <HeroImage />
          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.4 })}
            className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <HeroIntro />
            <SocialLinks />
          </motion.div>
        </motion.div>
      </SectionContainer>
      <ScrollDownButton />
    </Section>
  );
}
