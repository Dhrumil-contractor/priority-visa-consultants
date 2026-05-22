import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SectionHeader } from "@/components/Reveal";
import { TOUR_PACKAGES } from "@/data/site";

export default function Packages({ limit }: { limit?: number }) {
  const items = limit ? TOUR_PACKAGES.slice(0, limit) : TOUR_PACKAGES;
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Tour Packages"
          title="Hand-picked international escapes — visa included."
          subtitle="Travel like you mean it. Premium itineraries with stays, flights and visa support handled for you."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group hover-lift overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-[11px] font-medium text-ink shadow-soft backdrop-blur">
                    <Calendar className="h-3 w-3" /> {p.duration}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <Link
                    to="/tour-packages"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    Explore package <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
