import { HeroSection } from "@/components/sections/hero/HeroSection";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { SponsorsSection } from "@/components/sections/sponsors/SponsorsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SponsorsSection />
    </>
  );
}
