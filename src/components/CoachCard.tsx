import { Globe, Linkedin, MapPin } from "lucide-react";
import type { Coach } from "@/data/coaches";

export function CoachCard({ coach }: { coach: Coach }) {
  return (
    <article className="flex flex-col gap-2 border border-maroon/10 bg-white p-6">
      <h3 className="font-display text-lg font-bold text-maroon">{coach.name}</h3>
      {coach.location ? (
        <span className="flex items-center gap-1.5 text-xs text-ink/60">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
          {coach.location}
        </span>
      ) : null}
      <p className="text-sm leading-relaxed text-ink/70">{coach.specialization}</p>
      {coach.offer ? (
        <p className="text-xs leading-relaxed text-ink/60">
          <span className="font-semibold text-gold-dark">Offer: </span>
          {coach.offer}
        </p>
      ) : null}
      <div className="mt-1 flex flex-wrap gap-4">
        {coach.website ? (
          <a
            href={coach.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            Website
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
        {coach.linkedin ? (
          <a
            href={coach.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
