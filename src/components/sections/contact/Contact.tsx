"use client";

import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/sectionContainer";
import { SectionTitle } from "@/components/layout/sectionTitle/SectionTitle";
import { ContactForm } from "./contactForm";

export function Contact() {
  return (
    <Section id="contact" aria-label="Contact">
      <SectionContainer>
        <SectionTitle title="Contact" />

        <p className="mb-8 text-center text-2xl">
          Let&apos;s create something amazing together
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />

          <div className="space-y-8">
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
