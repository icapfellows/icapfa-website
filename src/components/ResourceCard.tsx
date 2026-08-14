import type { Resource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group relative flex flex-col gap-3 border border-maroon/10 bg-white p-6 shadow-[0_1px_2px_rgba(69,16,22,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-maroon/20 hover:shadow-[0_20px_36px_-16px_rgba(69,16,22,0.22)]">
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-y-100"
      />
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">
          {resource.category}
        </span>
        {resource.isSample ? (
          <span className="rounded-full bg-surface-soft px-2.5 py-0.5 text-xs font-semibold text-maroon/60">
            Sample
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-lg font-bold text-maroon">{resource.title}</h3>
      <p className="text-base leading-relaxed text-ink/70">{resource.summary}</p>
    </article>
  );
}
