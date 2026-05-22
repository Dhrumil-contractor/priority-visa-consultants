import Reveal, { SectionHeader } from "@/components/Reveal";
import { PROCESS_STEPS } from "@/data/site";

export default function Process() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Visa Process" title="A clear, five-step path to your approval." />
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.06}>
                <div className="relative h-full rounded-3xl border border-border bg-card p-6 shadow-soft hover-lift">
                  <div className="relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-gradient font-display text-lg text-primary-foreground shadow-glow">
                    {s.step}
                  </div>
                  <h3 className="font-display text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
