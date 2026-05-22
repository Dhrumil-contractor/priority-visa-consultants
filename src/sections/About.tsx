import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal, { SectionHeader } from "@/components/Reveal";
import { STATS } from "@/data/site";

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/([\d,]+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(target * eased);
      setDisplay(current.toLocaleString() + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function About() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="About Priority Visa"
          title="A consultancy built on honesty, expertise and care."
          subtitle="For over a decade, we've helped Indian families turn international ambitions into landings. Our promise is simple — clear advice, premium service, no shortcuts."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:shadow-luxe">
                <div className="font-display text-4xl text-ink">
                  <Counter value={s.value} />
                </div>
                <div className="mt-1 h-px w-10 bg-gold opacity-70" />
                <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-border bg-secondary/60 p-8 lg:p-10">
              <h3 className="font-display text-2xl text-ink">Our mission</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                To make global mobility accessible, transparent and stress-free — by pairing every
                traveller with a senior advisor who treats their case like their own.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:p-10">
              <h3 className="font-display text-2xl text-ink">Our vision</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                To be India's most trusted name for international visas — measured not by volume,
                but by the lives we help launch across borders.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
