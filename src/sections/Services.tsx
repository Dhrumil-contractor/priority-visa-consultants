import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  GraduationCap,
  Plane,
  MapPin,
  Briefcase,
  Users,
  BookOpen,
  Compass,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import Reveal, { SectionHeader } from "@/components/Reveal";
import { SERVICES } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  Plane,
  MapPin,
  Briefcase,
  Users,
  BookOpen,
  Compass,
  MessageCircle,
};

export default function Services() {
  return (
    <section className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Every visa, handled with the same premium care."
          subtitle="From student permits to luxury tour packages — one team, one case manager, one beautiful experience."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Compass;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  to="/services"
                  className="group hover-lift relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft"
                >
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-gradient text-primary-foreground shadow-glow">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-ink">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/15 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
