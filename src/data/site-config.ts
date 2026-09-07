/**
 * Single source of truth for organization identity, external URLs, and
 * site-wide settings. Every component and data file should import URLs from
 * here rather than hard-coding them, so a CRM/payment link change only has
 * to happen in one place.
 *
 * Source: reference/Site details, links and map (3).docx
 */

export const siteConfig = {
  orgName: "ICAP Fellows Association",
  orgAbbreviation: "ICAPFA",
  programName: "International Career Advancement Program",
  programAbbreviation: "ICAP",
  tagline: "Building Inclusive Leadership in International Affairs",

  // Canonical production domain (per client requirements). Update if the
  // final domain differs before launch.
  canonicalUrl: "https://icapfellows.org",

  // Legal / nonprofit status line used in the footer and Support page.
  nonprofitStatusLine:
    "ICAP Fellows Association (ICAPFA) is an all-volunteer, 501(c)(3) nonprofit organization.",

  contactEmail: "info@icapfellows.org",

  links: {
    // Neon CRM (member management platform)
    memberLogin: "https://icapaa.app.neoncrm.com/login",
    newMember: "https://icapaa.app.neoncrm.com/forms/newmember",

    // Payment
    donate: "https://www.paypal.com/donate/?hosted_button_id=N3H9VPGVWU6L2",

    // Partner organization (leadership-development program at the
    // University of Denver — distinct from the ICAPFA nonprofit).
    icapAspen: "https://icapaspen.org/",

    // In Remembrance page — Ambassador Ruth Davis tribute
    ruthDavisTribute:
      "https://afsa.org/foreign-service-trailblazer-ambassador-ruth-davis",
  },

  // Social links are intentionally empty. The source document marks these
  // "TBD as we may not reactivate immediately" — do not publish placeholder
  // social URLs. The footer shows a "Coming soon" notice until real handles
  // are supplied and added here.
  social: {
    linkedin: "",
    instagram: "",
    twitter: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
