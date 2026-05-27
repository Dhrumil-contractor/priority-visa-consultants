import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { COMPANY, COUNTRIES } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your free visa consultation."
        subtitle="A Founder will personally review your profile and recommend the best path at no cost, with zero pressure."
      />

      <section className="pt-14 pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <Reveal>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-border bg-card p-8 shadow-luxe"
            >
              <p className="font-display text-2xl text-ink">
                Send us a message
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Input label="Name" placeholder="Your full name" />
                <Input label="Email" placeholder="you@email.com" type="email" />
                <Input label="Phone" placeholder="+91 98765 43210" />
                <SelectField
                  label="Country interest"
                  options={COUNTRIES.map((c) => c.name)}
                />
                <SelectField
                  label="Visa type"
                  options={[
                    "Student",
                    "Visitor",
                    "Tourist",
                    "Work",
                    "Dependent",
                    "Passport",
                  ]}
                />
                <Input
                  label="Best time to call"
                  placeholder="e.g. weekday evenings"
                />
              </div>

              <label className="mt-4 block text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell us a bit about your goal…"
              />

              <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
                Send message
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <OfficeCard />
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                className="flex items-center justify-between rounded-3xl bg-emerald-gradient p-6 text-primary-foreground shadow-luxe"
              >
                <div>
                  <p className="font-display text-xl">Chat on WhatsApp</p>
                  <p className="mt-1 text-sm text-primary-foreground/85 dark:text-white">
                    Instant replies from a senior advisor.
                  </p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/30">
                  <MessageCircle className="h-5 w-5" />
                </span>
              </a>

              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="relative aspect-[16/10]">
                  <iframe
                    title="Priority Visa Consultancy location"
                    src="https://www.google.com/maps?q=21.921150848885645,73.07426270969472&z=16&output=embed"
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <p className="text-sm text-muted-foreground">
                    Find us on the map
                  </p>
                  <div className="flex gap-2">
                    {[Instagram, Facebook, Linkedin].map((I, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition hover:bg-foreground hover:text-background"
                      >
                        <I className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function OfficeCard() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <p className="font-display text-xl text-ink">Get in touch</p>
      <div className="mt-4 space-y-3 text-sm">
        <p className="flex items-start gap-3">
          <Phone className="mt-0.5 h-4 w-4 text-primary" /> {COMPANY.phone}
        </p>
        <p className="flex items-start gap-3">
          <Mail className="mt-0.5 h-4 w-4 text-primary" /> {COMPANY.email}
        </p>
        <p className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-primary" /> {COMPANY.address}
        </p>
      </div>
    </div>
  );
}

function Input({
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

function SelectField({
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
