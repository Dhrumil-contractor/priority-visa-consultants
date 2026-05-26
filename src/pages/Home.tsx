import { PageTransition } from "@/components/Reveal";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Founder from "@/sections/Founder";
import Services from "@/sections/Services";
import Countries from "@/sections/Countries";
import WhyUs from "@/sections/WhyUs";
import Process from "@/sections/Process";
import Stories from "@/sections/Stories";
import Packages from "@/sections/Packages";
import CtaBand from "@/sections/CTABand";
import Faq from "@/sections/Faq";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Services />
      {/* <Countries /> */}
      <WhyUs />
      <Process />
      <Stories />
      {/* <Packages limit={6} /> */}
      {/* <CtaBand /> */}
      <Faq />
    </PageTransition>
  );
}
