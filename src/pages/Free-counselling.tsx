import { Calendar, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { COMPANY, COUNTRIES, SERVICES } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function CounsellingPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Counselling"
        title="Book your free visa consultation."
        subtitle="A senior advisor will personally review your profile and recommend the best path — at no cost, with zero pressure."
      />

      <section className="pt-14 pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-border bg-card p-8 shadow-luxe"
            >
              <p className="font-display text-2xl text-ink">
                Tell us about you
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll call you back within one business day.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" placeholder="Aanya Sharma" />
                <Field label="Phone" placeholder="+91 98765 43210" />
                <Field label="Email" placeholder="you@email.com" type="email" />
                <Select
                  label="Service interest"
                  options={SERVICES.map((s) => s.title)}
                />
                <Select
                  label="Country interest"
                  options={COUNTRIES.map((c) => c.name)}
                />
                <Field label="Preferred date" type="date" />
              </div>

              <label className="mt-4 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Anything we should know?
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your goals, timeline, concerns…"
              />

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
                <Calendar className="h-4 w-4" /> Book my free consultation
              </button>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-primary" /> Your details
                stay private. We never spam.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <ContactTile
                icon={Phone}
                title="Call us"
                lines={[COMPANY.phone, "Mon–Sat, 10am – 7pm IST"]}
                cta={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                ctaLabel="Call now"
              />
              <ContactTile
                icon={MessageCircle}
                title="WhatsApp"
                lines={["Instant answers from a senior advisor"]}
                cta={`https://wa.me/${COMPANY.whatsapp}`}
                ctaLabel="Open WhatsApp"
              />
              <div className="rounded-3xl border border-border bg-secondary/60 p-6">
                <p className="font-display text-xl text-ink">What to expect</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Honest profile evaluation",
                    "Best country & visa recommendation",
                    "Document checklist tailored to you",
                    "Clear, fixed-fee proposal — only if you proceed",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function Select({
  label,
  options,
}: {
  label: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
        <option>Select an option</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function ContactTile({
  icon: Icon,
  title,
  lines,
  cta,
  ctaLabel,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  cta: string;
  ctaLabel: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
      <div className="flex gap-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-gradient text-primary-foreground shadow-glow">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-lg text-ink">{title}</p>
          {lines.map((l) => (
            <p key={l} className="text-sm text-muted-foreground">
              {l}
            </p>
          ))}
        </div>
      </div>
      <a
        href={cta}
        className="self-center rounded-full border border-border bg-secondary px-4 py-2 text-xs font-medium text-foreground transition hover:bg-foreground hover:text-background"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
