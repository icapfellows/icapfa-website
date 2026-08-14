import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { EntrepreneurshipFilters } from "@/components/EntrepreneurshipFilters";
import { fellowBusinesses } from "@/data/businesses";
import { entrepreneurshipResources } from "@/data/entrepreneurshipResources";

export const metadata: Metadata = {
  title: "Entrepreneurship",
  description:
    "The Fellows Entrepreneurship & Contracting Showcase spotlights ICAP Fellow-owned businesses and government-contracting expertise.",
  alternates: { canonical: "/entrepreneurship" },
};

export default function EntrepreneurshipPage() {
  return (
    <>
      <section className="bg-maroon">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Entrepreneurship"
            title="Fellows Entrepreneurship & Contracting Showcase"
            description="A dedicated space spotlighting Fellow-owned businesses and government-contracting expertise across the ICAP network."
            light
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <EntrepreneurshipFilters businesses={fellowBusinesses} />
        </div>
      </section>

      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Helpful Resources" title="Entrepreneurship & Consulting Resources" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(
              entrepreneurshipResources.reduce<Record<string, typeof entrepreneurshipResources>>((acc, r) => {
                (acc[r.category] ??= []).push(r);
                return acc;
              }, {})
            ).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-display text-base font-bold text-maroon">{category}</h3>
                <ul className="mt-3 space-y-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1 text-sm font-semibold text-gold-dark hover:text-maroon"
                      >
                        {item.name}
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink/60">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
