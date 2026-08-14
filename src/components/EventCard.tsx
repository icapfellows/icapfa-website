import { CalendarClock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { UpcomingEvent } from "@/data/events";

export function EventCard({
  event,
  featured = false,
}: {
  event: UpcomingEvent;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden border border-maroon/10 bg-white p-7 shadow-[0_1px_2px_rgba(69,16,22,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-maroon/20 hover:shadow-[0_20px_36px_-16px_rgba(69,16,22,0.22)]",
        featured && "sm:p-9"
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-maroon/[0.06] text-maroon">
          <CalendarClock className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold text-gold-dark">{event.dateLabel}</span>
      </div>
      <h3
        className={cn(
          "font-display font-bold text-maroon",
          featured ? "text-2xl" : "text-xl"
        )}
      >
        {event.title}
      </h3>
      <p className="max-w-[52ch] text-base leading-relaxed text-ink/70">{event.description}</p>
      {event.needsConfirmation ? (
        <span className="mt-1 inline-flex w-fit items-center rounded-full border border-gold/40 bg-gold/[0.08] px-3 py-1 text-xs font-semibold text-gold-dark">
          Details to be confirmed
        </span>
      ) : null}
      {event.registrationLink ? (
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
        >
          Register
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </article>
  );
}
