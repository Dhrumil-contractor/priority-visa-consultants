import Packages from "@/sections/Packages";
import CtaBand from "@/sections/CTABand";
import { PageHero } from "@/components/PageHero";

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour Packages"
        title="Travel that feels truly cared for."
        subtitle="Premium itineraries with stays, flights and visa support — all in one place."
      />
      <Packages />
      <CtaBand />
    </>
  );
}
