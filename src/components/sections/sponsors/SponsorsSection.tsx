import { SponsorCarousel } from "@/components/sections/sponsors/SponsorCarousel";
import SectionTitle from "@/components/ui/SectionTitle";

export function SponsorsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="px-6 sm:px-8 lg:px-18">
        <SectionTitle text="Membership" />
        <SectionTitle text="Discounts" />
      </div>
      <SponsorCarousel />
    </section>
  );
}
