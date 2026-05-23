import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Plane, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { COUNTRIES } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-luxe-gradient">
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-soft backdrop-blur"
          >
            <Sparkles className="h-3 w-3 text-gold" />
            Trusted by 8,500+ travellers
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-[2.6rem] leading-[1.05] tracking-tight text-balance text-ink sm:text-6xl lg:text-[4.2rem]"
          >
            Your{" "}
            <em className="not-italic bg-emerald-gradient bg-clip-text text-transparent">
              global journey
            </em>
            <br className="hidden sm:block" /> starts here.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted-foreground"
          >
            Helping students, tourists and professionals achieve their international dreams with
            honest, premium visa guidance — country by country, document by document.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/free-counselling"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/countries"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Explore Countries
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-xs text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
              <span className="ml-1">4.9 on Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-primary" />
              98% success rate
            </div>
          </motion.div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border bg-card shadow-luxe"
          >
            <img
              src={hero}
              alt="Traveller with passport at a sunlit airport gate"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/30 to-transparent" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute  top-10 w-56 rounded-2xl border border-border p-3.5 shadow-luxe"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-gradient text-primary-foreground">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Visa Approved
                  </p>
                  <p className="text-sm font-medium text-ink">Canada · Study Permit</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass absolute -right-1 top-1/2 w-44 rounded-2xl border border-border p-3.5 shadow-luxe"
            >
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Next flight
              </p>
              <p className="mt-1 font-display text-base text-ink">BLR → YYZ</p>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                <Plane className="h-3 w-3" />
                Air Canada · 14:20
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="glass absolute -bottom-1 left-6 flex w-64 items-center gap-3 rounded-2xl border border-border p-3.5 shadow-luxe"
            >
              <div className="flex -space-x-1.5">
                {COUNTRIES.slice(0, 4).map((c) => (
                  <span
                    key={c.slug}
                    className="grid h-8 w-8 place-items-center rounded-full border-2 border-background bg-card text-base"
                  >
                    {c.flag}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  25+ destinations
                </p>
                <p className="text-sm font-medium text-ink">One trusted team</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
