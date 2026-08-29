import { AboutSection } from "@/components/AboutSection";
import { Featured } from "@/components/Featured";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Featured />
    </>
  );
}
