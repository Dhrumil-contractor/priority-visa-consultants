import { useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { COUNTRIES } from "@/data/site";
import { CountriesGrid } from "@/sections/Countries";
import CtaBand from "@/sections/CTABand";

export default function CountriesPage() {
  const [q, setQ] = useState("");
  const filtered = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <PageHero
        eyebrow="Countries"
        title="Where would you like to go?"
        subtitle="Premium guidance across the world's most sought-after destinations."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-soft">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search countries…"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div> */}
          {filtered.length > 0 ? (
            <CountriesGrid />
          ) : (
            <p className="mt-16 text-center text-sm text-muted-foreground">
              No countries match "{q}".
            </p>
          )}
        </div>
      </section>

      {/* <CtaBand /> */}
    </>
  );
}
