import Reveal from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-luxe-gradient">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-soft">
            <span className="h-1 w-1 rounded-full bg-gold" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 font-display text-[2.4rem] leading-[1.05] text-balance text-ink sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.18}>
          <div className="divider-gold mx-auto mt-7" />
        </Reveal>
      </div>
    </section>
  );
}
