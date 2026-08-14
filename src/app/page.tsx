import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ImpactStat } from "@/components/ImpactStat";
import { EventCard } from "@/components/EventCard";
import { PhotoGrid } from "@/components/PhotoGrid";
import { MembershipBanner } from "@/components/MembershipBanner";
import { DonationBanner } from "@/components/DonationBanner";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { homepageHeadlineStat, homepageImpactStatements } from "@/data/impact";
import { icapVsIcapfa, whatWeDo, credibilityMarkers } from "@/data/organization";
import { upcomingEvents, photoCollections } from "@/data/events";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Impact strip — angled top edge breaks the flat hero/section seam */}
      <section
        className="relative bg-maroon-dark pt-6"
        style={{ clipPath: "polygon(0 1.5rem, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="mx-auto max-w-container px-4 pb-14 pt-8 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-white/15 lg:grid-cols-4">
              <ImpactStat
                value={homepageHeadlineStat.value}
                label={homepageHeadlineStat.label}
                emphasis
              />
              {homepageImpactStatements.map((stat) => (
                <ImpactStat key={stat.label} label={stat.label} description={stat.description} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credibility strip — quiet trust markers bridging the bold stats band into the page */}
      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-10 sm:px-6 lg:px-8">
          <Reveal>
            <CredibilityStrip items={credibilityMarkers} />
          </Reveal>
        </div>
      </section>

      {/* ICAP Aspen vs ICAPFA overview — asymmetric, overlapping panels instead of a 50/50 grid */}
      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Two Organizations, One Mission"
            title="ICAP Aspen and the ICAP Fellows Association"
            description="ICAP Aspen and ICAPFA work together, but they are distinct organizations with different roles."
          />
          <div className="mt-14 grid gap-0 md:grid-cols-[1fr_1.15fr] md:items-center">
            <Reveal from="left" className="border border-maroon/15 bg-white p-8 sm:p-10 md:mr-[-2.5rem] md:pr-16">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold-dark">
                The Program
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-maroon">
                {icapVsIcapfa.icapAspen.heading}
              </h3>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-ink/80">
                {icapVsIcapfa.icapAspen.body}
              </p>
              <div className="mt-6">
                <CTAButton href={siteConfig.links.icapAspen} variant="ghost" external>
                  {icapVsIcapfa.icapAspen.linkLabel}
                </CTAButton>
              </div>
            </Reveal>
            <Reveal
              from="right"
              delay={120}
              className="relative z-10 bg-maroon p-8 shadow-[0_24px_48px_-20px_rgba(69,16,22,0.45)] sm:p-10 md:py-14 md:pl-16"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold">
                The Community
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-white">
                {icapVsIcapfa.icapfa.heading}
              </h3>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-white/80">
                {icapVsIcapfa.icapfa.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do — colored bento tiles, echoing the NSPE reference site's
          flat-color card grid rather than a plain editorial list. */}
      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Three ways ICAPFA advances the mission" />
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {whatWeDo.map((pillar, i) => {
              const tileClasses = ["bg-maroon text-white", "bg-gold-dark text-white", "bg-brown text-white"][i];
              return (
                <Reveal key={pillar.id} delay={i * 90} className={tileClasses}>
                  <div className="flex h-full flex-col gap-5 p-8 sm:p-10">
                    <span className="font-display text-2xl italic text-white/50">0{i + 1}</span>
                    <h3 className="font-display text-2xl font-bold leading-snug">{pillar.heading}</h3>
                    <ul className="mt-1 list-disc space-y-3 pl-5 marker:text-white/40">
                      {pillar.points.map((point) => (
                        <li key={point} className="max-w-[52ch] text-sm leading-relaxed text-white/85">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming highlights — one featured, one secondary, not a matched pair */}
      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Upcoming Highlights" title="Events and news from ICAPFA" />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            {upcomingEvents.slice(0, 2).map((event, i) => (
              <Reveal key={event.id} delay={i * 100} from={i === 0 ? "left" : "right"}>
                <EventCard event={event} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community photo feature */}
      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Community" title="Fellows in Action" />
          <div className="mt-12">
            <Reveal>
              <PhotoGrid collections={photoCollections} />
            </Reveal>
          </div>
        </div>
      </section>

      <MembershipBanner />
      <DonationBanner />
    </>
  );
}
