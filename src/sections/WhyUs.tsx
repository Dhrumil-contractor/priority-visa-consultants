import {
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  FileCheck,
  type LucideIcon,
} from "lucide-react";
import Reveal, { SectionHeader } from "@/components/Reveal";
import { WHY_US } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
  FileCheck,
};

export default function WhyUs() {
  return (
    <section className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Premium service. Honest advice. Proven results."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Sparkles;
            return (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="group hover-lift h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary ring-1 ring-border">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
