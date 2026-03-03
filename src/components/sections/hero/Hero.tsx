import { Section } from "@/components/layout/section";
import { SectionContainer } from "@/components/layout/sectionContainer";
import { HeroIntro } from "./heroIntro";
import { HeroImage } from "./heroImage/HeroImage";

export function Hero() {
  return (
    <Section
      id="home"
      reveal={false}
      className="min-h-screen flex items-center"
    >
      <SectionContainer>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <HeroImage />

          <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <HeroIntro />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}
