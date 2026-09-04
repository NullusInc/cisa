import { SponsorCarousel } from "@/components/sections/sponsors/SponsorCarousel";
import SectionTitle from "@/components/ui/SectionTitle";

export function SponsorsSection() {
  return (
    <section className="mt-44 mb-72">
      <div className="mb-2 sm:mb-6 mt-32 mx-6 sm:mx-8 lg:mx-18">
        <SectionTitle text="Membership" />
        <SectionTitle text="Discounts" />
      </div>
      <SponsorCarousel />
    </section>
  );
}
