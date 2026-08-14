import type { Metadata } from "next";
import Image from "next/image";
import { Users, Briefcase, CalendarCheck, BookUser } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Membership benefits for ICAP Fellows, including network access, professional development, and the Member Directory.",
  alternates: { canonical: "/members" },
};

const benefits = [
  {
    icon: Users,
    title: "Access to the Fellows Network",
    description:
      "Connect with ICAP Fellows across sectors, regions, and cohorts throughout your career.",
  },
  {
    icon: Briefcase,
    title: "Community & Professional Development",
    description:
      "Take part in programming designed to support your growth in international affairs.",
  },
  {
    icon: CalendarCheck,
    title: "Member-Only Events & Materials",
    description:
      "Log into the Member Portal for exclusive events, Zoom links, and event recordings.",
  },
  {
    icon: BookUser,
    title: "Directory Access",
    description: "Search the Fellows directory through the Member Portal.",
  },
];

export default function MembersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-maroon">
        <Image
          src="/images/community-2025/cohort-2021-group.jpg"
          alt="ICAP Fellows from the 2021 cohort"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon via-maroon/85 to-maroon/60" />
        <div className="relative mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Members"
            title="Membership Benefits"
            description="Everything the ICAP Fellows Association (ICAPFA) offers Fellows who join."
            light
          />
        </div>
      </section>

      <section className="overflow-x-hidden bg-white">
        <div className="mx-auto max-w-container px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="border-t border-maroon/15">
                {benefits.map(({ icon: Icon, title, description }, i) => (
                  <Reveal key={title} delay={i * 80}>
                    <div className="flex gap-5 border-b border-maroon/15 py-6">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-maroon/[0.06] text-maroon">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-maroon">{title}</h3>
                        <p className="mt-1.5 text-base leading-relaxed text-ink/70">
                          {description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton href={siteConfig.links.newMember} variant="primary" external>
                  New Member: Join ICAPFA
                </CTAButton>
                <CTAButton href={siteConfig.links.memberLogin} variant="ghost" external>
                  Update Profile / Member Login
                </CTAButton>
              </div>
            </div>

            <Reveal from="right" className="relative hidden aspect-[4/5] overflow-hidden lg:block">
              <Image
                src="/images/community-2025/icap-2025-1.jpg"
                alt="ICAP Fellows connecting at a program event"
                fill
                sizes="35vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="absolute left-0 top-0 h-10 w-1.5 bg-gold" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-surface-soft">
        <div className="mx-auto max-w-container px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-maroon">Member Directory</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">
              The Fellows directory is available to active members through the
              Member Portal. Search and connect with fellow ICAP alumni once
              logged in.
            </p>
            <div className="mt-6 flex justify-center">
              <CTAButton href={siteConfig.links.memberLogin} variant="primary" external>
                Members Only: Log In to Search the Directory
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
