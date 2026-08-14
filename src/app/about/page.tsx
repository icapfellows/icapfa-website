import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { PullQuote } from "@/components/PullQuote";
import {
  whoWeAre,
  missionAndVision,
  whatWeDo,
  whyItMatters,
  icapVsIcapfa,
} from "@/data/organization";
import { aboutImpact } from "@/data/impact";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the ICAP Fellows Association's mission, vision, and impact — and how ICAPFA relates to ICAP Aspen.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon">
        <Image
          src="/images/community-2025/annual-picnic-3.jpg"
          alt="ICAP Fellows at the 2025 Annual Picnic"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/90 to-maroon/70" />
        <div className="relative mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="About the ICAP Fellows Association"
            light
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-maroon">{whoWeAre.heading}</h2>
              <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink/80">
                {whoWeAre.body}
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold text-maroon">
                {missionAndVision.missionHeading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                {missionAndVision.missionIntro}
              </p>
              <ul className="mt-4 space-y-3">
                {missionAndVision.missionPoints.map((point) => (
                  <li key={point} className="flex gap-2.5 text-base leading-relaxed text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-dark" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-display text-3xl font-bold text-maroon">
                {missionAndVision.visionHeading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/80">
                {missionAndVision.visionBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="How ICAPFA advances the mission" />
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {whatWeDo.map((pillar) => (
              <div key={pillar.id}>
                <h3 className="font-display text-lg font-bold text-maroon">{pillar.heading}</h3>
                <ul className="mt-4 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="text-base leading-relaxed text-ink/70">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 pt-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold-dark">
              {whyItMatters.heading}
            </p>
            <PullQuote>{whyItMatters.quote}</PullQuote>
          </Reveal>
        </div>
      </section>

      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto max-w-container px-4 pb-24 pt-14 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal from="left" className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/community-2025/icap-2025-4.jpg"
                alt="ICAP Fellows at a program event"
                fill
                sizes="40vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute left-0 top-0 h-10 w-1.5 bg-gold" />
            </Reveal>
            <Reveal from="right" delay={100}>
              <p className="max-w-[60ch] text-lg leading-relaxed text-ink/80">
                {whyItMatters.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-maroon-dark">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Impact" title="What ICAPFA has accomplished" light />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {aboutImpact.map((item) => (
              <li key={item} className="flex gap-3 text-base text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="overflow-x-hidden bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Two Organizations, One Mission"
            title="ICAP Aspen and ICAPFA"
            description="These are two distinct organizations working toward the same goal."
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
    </>
  );
}
