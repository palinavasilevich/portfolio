"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/sectionContainer";
import { SectionTitle } from "@/components/ui/sectionTitle/SectionTitle";
import { skills } from "@/data/skills";
import { SkillCard } from "./SkillCard/SkillCard";
import { fadeIn } from "@/utils/motionVariants";

export function Skills() {
  return (
    <Section id="skills" aria-label="Skills">
      <SectionContainer>
        <SectionTitle title="Skills" />
        <motion.div
          variants={fadeIn({ direction: "down" })}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map(({ name, icon }, index) => (
            <SkillCard key={name} name={name} icon={icon} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
