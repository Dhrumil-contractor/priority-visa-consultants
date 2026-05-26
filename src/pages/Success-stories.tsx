import { useState } from "react";
import { Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { TESTIMONIALS } from "@/data/site";
import Reveal from "@/components/Reveal";
import CtaBand from "@/sections/CTABand";

const FILTERS = ["All", "USA", "UK", "Canada"] as const;

export default function StoriesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const items =
    filter === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.country === filter);

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="The journeys that make us proud."
        subtitle="Each visa is a chapter. Here are a few of the ones we've helped write."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  filter === f
                    ? "border-transparent bg-emerald-gradient text-primary-foreground shadow-glow"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 0.04}>
                <article className="hover-lift h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        className="h-3.5 w-3.5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="font-display text-base text-ink">
                        {t.name}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {t.program}
                      </p>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-foreground">
                      {t.country}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <CtaBand /> */}
    </>
  );
}
