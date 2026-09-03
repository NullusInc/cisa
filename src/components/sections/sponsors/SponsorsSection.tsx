import { SponsorCarousel } from "@/components/sections/sponsors/SponsorCarousel";
import SectionTitle from "@/components/ui/SectionTitle";

export function SponsorsSection() {
  return (
    <section>
      <div className="my-2 sm:my-6 mx-6 sm:mx-8 lg:mx-18">
        <SectionTitle text="Membership" />
        <SectionTitle text="Discounts" />
      </div>
      <SponsorCarousel />
    </section>
  );
}
