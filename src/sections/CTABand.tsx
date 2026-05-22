import { Link } from "react-router-dom";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] bg-emerald-gradient p-10 text-primary-foreground shadow-luxe sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-foreground/90 ring-1 ring-primary-foreground/20">
                  Free Consultation
                </span>
                <h2 className="mt-5 font-display text-4xl leading-[1.1] text-balance sm:text-5xl">
                  Book your free visa consultation today.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] text-primary-foreground/85">
                  Tell us where you want to go. We'll tell you, honestly, what it takes — and
                  whether we're the right team to get you there.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/free-counselling"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-medium text-primary shadow-glow"
                  >
                    Book Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-6 py-3.5 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/25 transition hover:bg-primary-foreground/15"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp us
                  </a>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-6 py-3.5 text-sm font-medium text-primary-foreground ring-1 ring-primary-foreground/25 transition hover:bg-primary-foreground/15"
                  >
                    <Phone className="h-4 w-4" /> Call now
                  </a>
                </div>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-3xl bg-primary-foreground/95 p-6 text-foreground shadow-luxe backdrop-blur sm:p-7"
              >
                <p className="font-display text-lg text-ink">Quick inquiry</p>
                <div className="mt-4 grid gap-3">
                  <input
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Full name"
                  />
                  <input
                    className="rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Phone number"
                  />
                  <select className="rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring">
                    <option>Country of interest</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>Australia</option>
                    <option>USA</option>
                    <option>Schengen Europe</option>
                  </select>
                  <button className="mt-1 rounded-xl bg-emerald-gradient px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow">
                    Request callback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
