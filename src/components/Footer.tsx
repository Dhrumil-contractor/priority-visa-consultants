import { Link } from "react-router-dom";
import { Globe2, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { COMPANY, COUNTRIES, SERVICES, SOCIAL_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-secondary/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-gradient text-primary-foreground">
              <Globe2 className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-lg text-ink">Priority Visa Consultancy</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Honest, premium visa guidance for students, families and professionals reaching for
            their international dreams.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex w-full max-w-sm items-center gap-2 rounded-full border border-border bg-card p-1.5 pl-4 shadow-soft"
          >
            <Mail className="h-4 w-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Your email for visa news"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="rounded-full bg-emerald-gradient px-4 py-2 text-xs font-medium text-primary-foreground">
              Subscribe
            </button>
          </form>

          <div className="mt-6 flex gap-2">
            {[
              { Icon: Instagram, url: SOCIAL_LINKS.instagram },
              { Icon: Facebook, url: SOCIAL_LINKS.facebook },
              { Icon: Linkedin, url: SOCIAL_LINKS.linkedin },
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:text-primary"
                aria-label="Social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick links"
          links={[
            ["/about", "About"],
            ["/services", "Services"],
            ["/countries", "Countries"],
            ["/success-stories", "Success Stories"],
            ["/free-counselling", "Free Counselling"],
            ["/contact", "Contact"],
          ]}
        />

        <FooterCol
          title="Services"
          links={SERVICES.slice(0, 6).map((s) => ["/services", s.title] as const)}
        />

        <FooterCol
          title="Countries"
          links={COUNTRIES.map((c) => ["/countries", c.name] as const)}
        />
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center lg:px-8">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3 w-3" /> {COMPANY.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3 w-3" /> {COMPANY.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> Palej, Gujarat, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm uppercase tracking-[0.18em] text-ink">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="text-sm text-muted-foreground transition hover:text-primary">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
