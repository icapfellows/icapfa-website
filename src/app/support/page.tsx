import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { VolunteerOpportunities } from "@/components/VolunteerOpportunities";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Support Us",
  description:
    "Support the ICAP Fellows Association's programming, alumni engagement, and partnerships with a donation.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <section className="bg-maroon">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Support Us" title="Why Give" light />
        </div>
      </section>

      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/80">
                Donations support the ICAP Fellows Association&apos;s (ICAPFA)
                organizational initiatives, programming, alumni engagement,
                partnerships, and the continued strength of the ICAP community.
                As an all-volunteer 501(c)(3) nonprofit, ICAPFA relies on the
                generosity of Fellows and supporters to sustain its work.
              </p>

              <div className="mt-12 border border-gold/30 bg-surface-soft p-8">
                <h3 className="font-display text-xl font-bold text-maroon">Direct Donation</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-ink/70">
                  Give directly via PayPal or Venmo.
                </p>
                <div className="mt-5">
                  <CTAButton href={siteConfig.links.donate} variant="primary" external>
                    Donate via PayPal / Venmo
                  </CTAButton>
                </div>
              </div>

              <div className="mt-4 border-t border-maroon/15">
                <div className="border-b border-maroon/15 py-7">
                  <h3 className="font-display text-lg font-bold text-maroon">
                    Employer Matching
                  </h3>
                  <p className="mt-2 max-w-lg text-base leading-relaxed text-ink/70">
                    Some employers match charitable contributions. Check with
                    your employer&apos;s giving program to see whether your
                    donation to ICAPFA may be eligible for a match.
                  </p>
                </div>
                <div className="border-b border-maroon/15 py-7">
                  <h3 className="font-display text-lg font-bold text-maroon">GlobalGiving</h3>
                  <p className="mt-2 max-w-lg text-base leading-relaxed text-ink/70">
                    Additional giving options will be announced.
                  </p>
                </div>
              </div>
            </div>

            <Reveal from="right" className="relative hidden aspect-[3/4] overflow-hidden lg:block">
              <Image
                src="/images/summer-2025/summer-2025-2.jpg"
                alt="ICAPFA Fellows at a summer 2025 community gathering"
                fill
                sizes="30vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute left-0 top-0 h-10 w-1.5 bg-gold" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Give Your Time"
            title="Volunteer Opportunities"
            description="Ways organizations and Fellows are looking for help right now. New postings appear here automatically."
          />
          <div className="mt-10">
            <VolunteerOpportunities />
          </div>
        </div>
      </section>
    </>
  );
}
