"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/sectionContainer";
import { SectionTitle } from "@/components/ui/sectionTitle/SectionTitle";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import { fadeIn } from "@/utils/motionVariants";

export function Projects() {
  return (
    <Section id="projects" aria-label="Projects">
      <SectionContainer>
        <SectionTitle title="Projects" />
        <motion.div
          variants={fadeIn({ direction: "down" })}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
