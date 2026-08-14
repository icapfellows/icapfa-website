"use client";

import { HandHeart, MapPin, ArrowUpRight } from "lucide-react";
import { useSheetRows } from "@/lib/useSheetRows";
import { EmptyState } from "@/components/EmptyState";
import { googleSheets } from "@/data/google-sheets";

/**
 * Column headers here must match the Google Form's question text exactly —
 * see README "Live Submission Forms" for the recommended wording.
 */
const FIELDS = {
  submittedBy: "Submitted By (Organization or Fellow Name & ICAP Year)",
  title: "Opportunity Title",
  description: "Description",
  timeCommitment: "Time Commitment",
  location: "Location",
  getInvolved: "How to Get Involved",
  deadline: "Deadline",
};

export function VolunteerOpportunities() {
  const { sheetId, gid } = googleSheets.volunteerOpportunities;
  const state = useSheetRows(sheetId, gid);

  if (state.status === "not-configured") {
    return (
      <EmptyState
        icon={HandHeart}
        title="Volunteer opportunities coming soon"
        description="Organizations and Fellows will be able to post volunteer opportunities here once the submission form is connected."
      />
    );
  }

  if (state.status === "loading") {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {[0, 1].map((i) => (
          <div key={i} className="h-36 animate-pulse border border-maroon/10 bg-surface-soft" />
        ))}
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <EmptyState
        icon={HandHeart}
        title="Couldn't load volunteer opportunities"
        description="This section's Sheet may not be shared publicly yet. See README for setup steps."
      />
    );
  }

  if (state.rows.length === 0) {
    return (
      <EmptyState
        icon={HandHeart}
        title="No open opportunities right now"
        description="Check back soon, or be the first to submit one."
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {state.rows.map((row, i) => {
        const link = row[FIELDS.getInvolved] || "";
        const isEmail = link.includes("@") && !link.startsWith("http");
        const href = isEmail ? `mailto:${link}` : link;

        return (
          <article key={`${row[FIELDS.title]}-${i}`} className="flex flex-col gap-3 border border-maroon/10 bg-white p-6">
            <div>
              {row[FIELDS.timeCommitment] ? (
                <span className="text-xs font-bold uppercase tracking-wide text-gold-dark">
                  {row[FIELDS.timeCommitment]}
                </span>
              ) : null}
              <h3 className="mt-1 font-display text-lg font-bold text-maroon">
                {row[FIELDS.title]}
              </h3>
            </div>

            {row[FIELDS.location] ? (
              <span className="flex items-center gap-1 text-xs text-ink/60">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {row[FIELDS.location]}
              </span>
            ) : null}

            {row[FIELDS.description] ? (
              <p className="text-sm leading-relaxed text-ink/70">{row[FIELDS.description]}</p>
            ) : null}

            <p className="mt-auto text-xs text-ink/50">
              Posted by {row[FIELDS.submittedBy] || "an ICAPFA partner"}
            </p>

            {href ? (
              <a
                href={href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-maroon"
              >
                Get Involved
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
