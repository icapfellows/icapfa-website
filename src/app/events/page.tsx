import type { Metadata } from "next";
import { LogIn } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { PhotoGrid } from "@/components/PhotoGrid";
import { PhotoCarousel3D } from "@/components/PhotoCarousel3D";
import { CTAButton } from "@/components/CTAButton";
import { upcomingEvents, pastEvents, photoCollections, allPhotos } from "@/data/events";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Events & Community",
  description:
    "Public ICAPFA events and community photo highlights, plus member-only events accessible through the Member Portal.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-maroon">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Events & Community"
            title="Connecting Fellows around the world"
            description="The ICAP Fellows Association (ICAPFA) hosts public and member-only events year-round."
            light
          />
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="mx-auto max-w-container px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 border border-gold/30 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <LogIn className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
              <p className="text-base leading-relaxed text-ink/80 sm:text-base">
                Active ICAPFA members can log into the Member Portal to access
                exclusive member events, Zoom links, and event recordings.
              </p>
            </div>
            <CTAButton href={siteConfig.links.memberLogin} variant="primary" external className="flex-shrink-0">
              Member Login
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Upcoming"
            title="Public Events"
            description="Open to everyone — no membership required. Members get additional exclusive events, Zoom links, and recordings through the Member Portal above."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Past Programming" title="Event History" />
          <div className="mt-10 divide-y divide-maroon/10 border-t border-maroon/10">
            {pastEvents.map((event) => (
              <div key={event.id} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="font-display text-base font-bold text-maroon">{event.title}</h3>
                  {event.speakers ? (
                    <p className="mt-0.5 text-sm text-ink/60">{event.speakers}</p>
                  ) : null}
                </div>
                <span className="flex-shrink-0 text-sm text-ink/50">{event.dateLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Past Highlights" title="Community Photo Highlights" />
          <div className="mt-10">
            <PhotoGrid collections={photoCollections} />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Browse the Gallery" title="Every photo, in one place" />
          <div className="mt-10">
            <PhotoCarousel3D photos={allPhotos} />
          </div>
        </div>
      </section>
    </>
  );
}
