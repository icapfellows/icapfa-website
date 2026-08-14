import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Memorial } from "@/data/memorials";

function initialsFor(name: string): string {
  return name
    .split(" ")
    .filter((part) => /^[A-Z]/.test(part))
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function MemorialProfile({ memorial }: { memorial: Memorial }) {
  return (
    <article className="grid gap-8 border-t border-maroon/10 py-12 first:border-t-0 first:pt-0 sm:grid-cols-[200px_1fr]">
      <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-surface-soft">
        {memorial.photo ? (
          <Image
            src={`/images/remembrance/${memorial.photo}`}
            alt={`Portrait of ${memorial.name}`}
            fill
            sizes="200px"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center font-display text-3xl font-bold text-maroon/50"
            aria-hidden="true"
          >
            {initialsFor(memorial.name)}
          </div>
        )}
      </div>

      <div>
        <h2 className="font-display text-2xl font-bold text-maroon">{memorial.name}</h2>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold-dark">
          {memorial.role}
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80">
          {memorial.bio}
        </p>
        {memorial.externalLink ? (
          <a
            href={memorial.externalLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
          >
            {memorial.externalLink.label}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
