import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import founder from "@/assets/founder.jpg";

export default function Founder() {
  return (
    <section className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2.2rem] bg-emerald-gradient opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe">
                <img
                  src={founder}
                  alt="Varun Mehta, Founder of Priority Visa Consultancy"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white dark:bg-[#0c0c0cd1] absolute -bottom-6 left-6 right-4 rounded-2xl border border-border p-4 shadow-luxe sm:left-10 sm:right-auto">
                <p className="font-display text-lg font-bold text-ink">
                  Varun Mehta
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Founder & Visa Consultant
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-soft">
                <span className="h-1 w-1 rounded-full bg-gold" />
                Founder's Message
              </span>
              <h2 className="mt-5 font-display text-4xl text-balance text-ink sm:text-5xl">
                A promise of honest guidance, every step of the way.
              </h2>

              <div className="mt-6 rounded-3xl border border-border bg-secondary/60 p-7">
                <Quote className="h-6 w-6 text-gold" />
                <div className="mt-3 text-[16px] leading-relaxed text-foreground">
                  <b>Varun Mehta,</b> Founder & Proprietor of Priority Visa
                  Consultants, brings over 8 years of experience in the
                  immigration and visa industry, combined with valuable
                  firsthand experience of living in the United Kingdom. His
                  unique perspective allows him to understand both the technical
                  requirements of visa processes and the real-life challenges
                  faced by individuals moving abroad.
                </div>
                <div className="mt-3">
                  Driven by a commitment to integrity, transparency, and client
                  success, Varun has helped numerous students, professionals,
                  and travelers achieve their international goals. Under his
                  leadership, Priority Visa Consultants continues to provide
                  reliable, personalized, and result-oriented guidance for
                  study, work, visitor, and immigration pathways across major
                  destinations worldwide.
                </div>
                <div className="mt-3">
                  "Every successful journey abroad begins with the right
                  guidance, and we're committed to providing it."
                </div>
                <p className="mt-5 font-display text-xl italic text-primary">
                  — Varun Mehta
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Founder & Visa Consultant
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { v: "2,500+", l: "Consultations" },
                  { v: "25+", l: "Countries" },
                  { v: "98%", l: "Approval rate" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft"
                  >
                    <div className="font-display text-xl text-ink">{s.v}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
