import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal, { SectionHeader } from "@/components/Reveal";
import { COUNTRIES } from "@/data/site";

export function CountriesGrid({ limit }: { limit?: number }) {
  const items = limit ? COUNTRIES.slice(0, limit) : COUNTRIES;
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <Reveal key={c.slug} delay={i * 0.04}>
          <Link
            to="/countries"
            className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:shadow-luxe"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-ink shadow-soft backdrop-blur">
                <span className="text-base leading-none">{c.flag}</span> {c.name}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition group-hover:bg-emerald-gradient group-hover:text-primary-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export default function Countries() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Countries We Serve"
          title="A passport to the world's most loved destinations."
          subtitle="Study, work or wander — we have specialists for every popular destination."
        />
        <CountriesGrid />
      </div>
    </section>
  );
}
