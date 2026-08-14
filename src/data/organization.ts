/**
 * Long-form organizational copy shared between the homepage and About page.
 * Wording is taken directly from the source document; only light editing
 * for web readability has been applied. Do not change organizational
 * meaning without client approval.
 */

export const whoWeAre = {
  heading: "Who We Are",
  body: "The ICAP Fellows Association (ICAPFA) is an all-volunteer, 501(c)(3) nonprofit organization committed to promoting mid-career professionals from historically underrepresented racial and ethnic groups into senior leadership roles in international affairs. ICAPFA exists to sustain the impact of the International Career Advancement Program (ICAP) long after the retreat ends — offering support, community, and opportunity for over 900 ICAP Fellows across the globe.",
};

export const missionAndVision = {
  missionHeading: "Our Mission",
  missionIntro: "To foster a professional community that:",
  missionPoints: [
    "Elevates diverse talent in foreign policy and global affairs",
    "Supports ICAP Fellows in career advancement",
    "Champions inclusive leadership at the highest levels",
  ],
  visionHeading: "Our Vision",
  visionBody:
    "A global affairs community in which leadership — across diplomacy, foreign policy, government, nonprofit organizations, and the private sector — reflects the full range of backgrounds and experience of the people it serves.",
};

export interface WhatWeDoPillar {
  id: string;
  heading: string;
  points: string[];
}

export const whatWeDo: WhatWeDoPillar[] = [
  {
    id: "elevate",
    heading: "Elevate Our Fellows",
    points: [
      "Showcase achievements and amplify the work of ICAP Fellows via social media, newsletters, and events",
      "Provide professional development opportunities, job search support, and insider career insights",
      "Feature Fellows on high-visibility panels and foreign policy forums",
    ],
  },
  {
    id: "inspire",
    heading: "Inspire the ICAP Fellows Association",
    points: [
      "Expand partnerships with like-minded organizations",
      "Co-host the Conference on Diversity in International Affairs (CDIA)",
      "Host national networking events like “First Fridays”",
      "Grow donor support and build out our membership database",
    ],
  },
  {
    id: "support",
    heading: "Support ICAP Aspen",
    points: [
      "Provide fundraising and strategic support to ensure future cohorts attend ICAP",
      "Strengthen alumni engagement and mentorship between new and senior Fellows",
      "Host orientation events and welcome programming for new ICAP Aspen participants",
    ],
  },
];

export const whyItMatters = {
  heading: "Why Inclusive Leadership Matters",
  quote: "Inclusive leadership isn't just a moral imperative — it's a strategic one.",
  body: "Studies confirm that leadership representing the full range of backgrounds and experiences leads to more effective and innovative decision-making. ICAP and ICAPFA are leading the charge to diversify senior leadership in global policy, diplomacy, and international organizations. Our Fellows go on to become U.S. Ambassadors, NGO Directors, CEOs, and senior government officials — and the ICAP Fellows Association helps them get there.",
};

// Real, document-backed recognition markers — used by CredibilityStrip.
// Kept distinct from the homepage Impact strip's "Congressional Recognition"
// stat so the two sections don't repeat the same fact back to back.
export const credibilityMarkers = [
  {
    label: "Top 10 Ethnic Diversity Network",
    detail: "Named by The Economist's Global Diversity List.",
  },
  {
    label: "501(c)(3) Nonprofit",
    detail: "All-volunteer, independent alumni association.",
  },
  {
    label: "Growing Membership Database",
    detail: "Launched a new Fellows Membership Database in 2023.",
  },
];

// ICAP Aspen vs. ICAPFA distinction, used on the homepage overview section
// and the About page.
export const icapVsIcapfa = {
  icapAspen: {
    heading: "ICAP Aspen",
    body: "The International Career Advancement Program (ICAP) is the leadership-development program connected with the University of Denver's Josef Korbel School of International Studies.",
    linkLabel: "Visit ICAP Aspen",
  },
  icapfa: {
    heading: "ICAP Fellows Association",
    body: "ICAPFA is the independent, all-volunteer 501(c)(3) alumni association that sustains the community and supports Fellows after the program ends.",
  },
};
