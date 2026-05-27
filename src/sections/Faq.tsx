import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal, { SectionHeader } from "@/components/Reveal";
import { FAQS } from "@/data/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Questions, answered honestly." />
        <div className="mt-14 divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-[17px] text-ink">
                    {f.q}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition ${isOpen ? "rotate-45 bg-emerald-gradient text-primary-foreground" : ""}`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
