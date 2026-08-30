import { AboutSection } from "@/components/sections/about/AboutSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { SponsorsSection } from "@/components/sections/sponsors/SponsorsSection";
import { Footer } from "@/components/Footer";
import { Featured } from "@/components/Featured";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Featured />
      <SponsorsSection />
      <Footer />
    </>
  );
}
