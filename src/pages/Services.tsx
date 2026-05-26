import Services from "@/sections/Services";
import Process from "@/sections/Process";
import CtaBand from "@/sections/CTABand";
import { PageHero } from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="One team for every kind of visa."
        subtitle="Student, visitor, tourist, work, dependent, passport and tour packages — fully managed by senior advisors."
      />
      <Services />
      <Process />
      {/* <CtaBand /> */}
    </>
  );
}
