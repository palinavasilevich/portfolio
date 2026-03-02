import Background from "@/components/layout/background/Background";
import { Contact, Hero, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <Background>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </Background>
  );
}
