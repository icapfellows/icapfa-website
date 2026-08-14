import { Globe } from "lucide-react";
import type { FellowBusiness } from "@/data/businesses";

export function BusinessCard({ business }: { business: FellowBusiness }) {
  return (
    <article className="group relative flex flex-col gap-2 border border-maroon/10 bg-white p-6 shadow-[0_1px_2px_rgba(69,16,22,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-maroon/20 hover:shadow-[0_20px_36px_-16px_rgba(69,16,22,0.22)]">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-y-100"
      />
      <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">
        {business.sector}
      </span>
      <h3 className="font-display text-lg font-bold text-maroon">{business.name}</h3>
      <p className="text-sm font-semibold text-ink/70">{business.ownerName}</p>
      <p className="text-base leading-relaxed text-ink/70">{business.description}</p>
      {business.govContracting ? (
        <p className="text-xs text-ink/50">
          <span className="font-semibold text-ink/60">Government contracting: </span>
          {business.govContracting}
        </p>
      ) : null}
      {business.website ? (
        <a
          href={business.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          Visit website
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </article>
  );
}
