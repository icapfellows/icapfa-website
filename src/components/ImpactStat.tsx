import { CountUpValue } from "@/components/CountUpValue";

export function ImpactStat({
  value,
  label,
  description,
  emphasis = false,
}: {
  value?: string;
  label: string;
  description?: string;
  /** The headline figure gets a larger, bolder treatment than the supporting stats. */
  emphasis?: boolean;
}) {
  return (
    <div className={emphasis ? "sm:pr-6" : "sm:pl-6"}>
      {value ? (
        <CountUpValue
          value={value}
          className="font-display text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl"
        />
      ) : null}
      <p
        className={
          value
            ? "mt-3 text-sm font-semibold uppercase tracking-[0.08em] text-gold"
            : "text-base font-bold leading-snug text-white"
        }
      >
        {label}
      </p>
      {description ? (
        <p className="mt-2 max-w-[26ch] text-sm leading-relaxed text-white/60">{description}</p>
      ) : null}
    </div>
  );
}
