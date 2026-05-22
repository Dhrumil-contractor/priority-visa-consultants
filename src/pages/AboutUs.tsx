import About from "@/sections/About";
import Founder from "@/sections/Founder";
import WhyUs from "@/sections/WhyUs";
import { PageHero } from "@/components/PageHero";

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A premium visa partner — built on trust, run with heart."
        subtitle="We're a senior-led team helping Indian travellers move across the world with clarity and confidence."
      />
      <About />
      <Founder />
      <WhyUs />
    </>
  );
}
