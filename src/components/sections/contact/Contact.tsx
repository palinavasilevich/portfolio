"use client";

import { Section } from "@/components/ui/section";
import { SectionContainer } from "@/components/ui/sectionContainer";
import { SectionTitle } from "@/components/ui/sectionTitle/SectionTitle";
import { ContactForm } from "../../form/contactForm";
import { ContactInfo } from "./contactInfo";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motionVariants";

export function Contact() {
  return (
    <Section id="contact" aria-label="Contact">
      <SectionContainer>
        <SectionTitle title="Contact" />

        <p className="mb-10 text-center text-lg text-secondary max-w-xl mx-auto">
          Have a project in mind? <br />
          Let’s build something great together.
        </p>

        <motion.div
          variants={fadeIn({ direction: "left", delay: 0.2 })}
          className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start"
        >
          <ContactForm />
          <ContactInfo />
        </motion.div>
      </SectionContainer>
    </Section>
  );
}
