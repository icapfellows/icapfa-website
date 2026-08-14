interface CredibilityItem {
  label: string;
  detail: string;
}

/**
 * A horizontal row of real, document-backed credibility markers (recognition,
 * rankings, legal status) — distinct from the numeric ImpactStat pattern used
 * elsewhere, since these are qualitative facts rather than counts.
 */
export function CredibilityStrip({ items }: { items: CredibilityItem[] }) {
  return (
    <div className="grid gap-8 border-y border-maroon/15 py-8 sm:grid-cols-3 sm:divide-x sm:divide-maroon/15">
      {items.map((item) => (
        <div key={item.label} className="sm:px-8 sm:first:pl-0 sm:last:pr-0">
          <p className="font-display text-lg font-semibold leading-snug text-maroon">
            {item.label}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
