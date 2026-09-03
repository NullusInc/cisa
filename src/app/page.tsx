import { AboutSection } from "@/components/sections/about/AboutSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { SponsorsSection } from "@/components/sections/sponsors/SponsorsSection";
import { FeaturedSection } from "@/components/sections/featured/Featured";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <SponsorsSection />
    </>
  );
}
