"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/sectionContainer";
import { SectionTitle } from "@/components/layout/sectionTitle/SectionTitle";
import { skills } from "@/data/skills";
import { SkillCard } from "./SkillCard/SkillCard";
import { fadeIn } from "@/utils/motion";

export function Skills() {
  return (
    <Section id="skills" aria-label="Skills">
      <SectionContainer>
        <SectionTitle title="Skills" />
        <motion.div
          variants={fadeIn({ direction: "down" })}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map(({ name, icon }) => (
            <SkillCard key={name} name={name} icon={icon} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
