import { HeroSection } from "@/components/sections/hero/HeroSection";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { SponsorCarousel } from "@/components/sections/sponsors/SponsorCarousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SponsorCarousel />
    </>
  );
}
