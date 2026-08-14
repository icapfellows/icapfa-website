import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { JobPostingsBoard } from "@/components/JobPostingsBoard";
import { CareerResourceLinks } from "@/components/CareerResourceLinks";
import { CoachDirectory } from "@/components/CoachDirectory";
import { CTAButton } from "@/components/CTAButton";
import { careerResourceCategories } from "@/data/careerResourceLinks";
import { icapCoaches, openSourceCoaches } from "@/data/coaches";
import { googleSheets } from "@/data/google-sheets";

export const metadata: Metadata = {
  title: "Career & Resources",
  description:
    "A hub for job postings, career-transition guides, career coaching, and professional development opportunities for ICAP Fellows.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-maroon">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Career & Resources"
            title="Career & Resources Hub"
            description="A hub for job postings, sector-transition guides, and career coaching announcements."
            light
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-maroon">Job Postings</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
                Submitted directly by Fellows. New postings appear here automatically.
              </p>
            </div>
            <CTAButton
              href={googleSheets.jobPostings.formUrl}
              variant="ghost"
              external
              className="flex-shrink-0"
            >
              Submit a Job Posting
            </CTAButton>
          </div>
          <div className="mt-6">
            <JobPostingsBoard />
          </div>
        </div>
      </section>

      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-maroon">Community Resources</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
            Curated by Fellows. Linking a resource here doesn&apos;t mean ICAPFA
            endorses it — have something to add? Reach out via the Contact page.
          </p>
          <div className="mt-8">
            <CareerResourceLinks categories={careerResourceCategories} />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-maroon">ICAP Career Coaches</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
            Coaches directly affiliated with the ICAP community.
          </p>
          <div className="mt-8">
            <CoachDirectory coaches={icapCoaches} />
          </div>
        </div>
      </section>

      <section className="bg-surface-off">
        <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-bold text-maroon">
            Open-Source Coaching Opportunities
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
            A crowd-sourced list of outside coaches offering free or discounted
            sessions, largely for those affected by recent federal workforce
            and foreign-assistance changes.
          </p>
          <div className="mt-8">
            <CoachDirectory coaches={openSourceCoaches} />
          </div>
        </div>
      </section>
    </>
  );
}
