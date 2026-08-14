"use client";

import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useSheetRows } from "@/lib/useSheetRows";
import { EmptyState } from "@/components/EmptyState";
import { googleSheets } from "@/data/google-sheets";

/**
 * Column headers here must match the Google Form's question text exactly —
 * Google Forms uses the question as the response sheet's column header.
 * See README "Live Submission Forms" for the exact recommended wording.
 */
const FIELDS = {
  submittedBy: "Submitted By (Fellow Name & ICAP Year)",
  jobTitle: "Job Title",
  company: "Company",
  location: "Location",
  jobType: "Job Type",
  description: "Brief Description",
  applyLink: "Application Link or Email",
  deadline: "Application Deadline",
};

export function JobPostingsBoard() {
  const { sheetId, gid } = googleSheets.jobPostings;
  const state = useSheetRows(sheetId, gid);

  if (state.status === "not-configured") {
    return (
      <EmptyState
        icon={Briefcase}
        title="Job board coming soon"
        description="This board will show job postings submitted by Fellows once the submission form is connected."
      />
    );
  }

  if (state.status === "loading") {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {[0, 1].map((i) => (
          <div key={i} className="h-40 animate-pulse border border-maroon/10 bg-surface-soft" />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <EmptyState
        icon={Briefcase}
        title="Couldn't load job postings"
        description="The job board's Sheet may not be shared publicly yet. See README for setup steps."
      />
    );
  }

  if (state.rows.length === 0) {
    return (
      <EmptyState
        icon={Briefcase}
        title="No open postings right now"
        description="Check back soon, or be the first Fellow to submit one."
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {state.rows.map((row, i) => {
        const applyLink = row[FIELDS.applyLink] || "";
        const isEmail = applyLink.includes("@") && !applyLink.startsWith("http");
        const href = isEmail ? `mailto:${applyLink}` : applyLink;

        return (
          <article
            key={`${row[FIELDS.jobTitle]}-${i}`}
            className="group relative flex flex-col gap-3 border border-maroon/10 bg-white p-6 shadow-[0_1px_2px_rgba(69,16,22,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-maroon/20 hover:shadow-[0_20px_36px_-16px_rgba(69,16,22,0.22)]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">
                {row[FIELDS.jobType] || "Opportunity"}
              </span>
              <h3 className="mt-1 font-display text-lg font-bold text-maroon">
                {row[FIELDS.jobTitle]}
              </h3>
              <p className="text-sm font-semibold text-ink/70">{row[FIELDS.company]}</p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60">
              {row[FIELDS.location] ? (
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {row[FIELDS.location]}
                </span>
              ) : null}
              {row[FIELDS.deadline] ? (
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  Apply by {row[FIELDS.deadline]}
                </span>
              ) : null}
            </div>

            {row[FIELDS.description] ? (
              <p className="text-sm leading-relaxed text-ink/70">{row[FIELDS.description]}</p>
            ) : null}

            <p className="mt-auto text-xs text-ink/50">
              Submitted by {row[FIELDS.submittedBy] || "an ICAP Fellow"}
            </p>

            {href ? (
              <a
                href={href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
              >
                Apply
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                {!isEmail ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
