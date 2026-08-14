/**
 * Homepage impact strip + About page "Our Impact" content.
 *
 * The homepage headline stat and the About page's alumni figure are tracked
 * separately (per client instruction) since they've historically differed
 * slightly — update each here as the real counts change.
 */

export const homepageHeadlineStat = {
  value: "985",
  label: "Graduated Fellows",
};

// Non-numerical, document-supported impact statements shown alongside the
// headline stat on the homepage. No figures invented beyond what the source
// document states.
export const homepageImpactStatements = [
  {
    label: "Global Alumni Network",
    description: "ICAP Fellows serving across sectors worldwide.",
  },
  {
    label: "Leadership Across Sectors",
    description:
      "Fellows go on to serve as U.S. Ambassadors, NGO directors, CEOs, and senior government officials.",
  },
  {
    label: "Congressional Recognition",
    description:
      "Recognized in U.S. Congressional legislation as a premier leadership initiative.",
  },
];

// Full "Our Impact" list for the About page.
export const aboutImpact = [
  "Nearly 1,000 ICAP Alumni across sectors",
  "Recognized in U.S. Congressional legislation as a premier leadership initiative",
  "Named a Top 10 Ethnic Diversity Network by The Economist's Global Diversity List",
  "Created and launched a new Fellows Membership Database in 2023",
  "Increased social media visibility and institutional partnerships",
  "Hosted dynamic events to engage and uplift the global ICAP community",
];
