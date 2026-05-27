import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Reveal, { SectionHeader } from "@/components/Reveal";
import { TESTIMONIALS } from "@/data/site";

export default function Stories() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () =>
    setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative bg-secondary/40 py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Success Stories"
          title="The journeys that make our work meaningful."
        />

        <Reveal>
          <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-luxe sm:p-12">
            <Quote className="h-8 w-8 text-gold" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45 }}
              >
                <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-ink">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {t.program} · {t.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Story ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === i ? "w-8 bg-primary" : "w-3 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-secondary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-gradient text-primary-foreground shadow-glow"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
