export type ResourceCategory =
  | "Job Postings"
  | "Career Transition Guides"
  | "Career Coaching"
  | "Professional Development";

export interface Resource {
  id: string;
  category: ResourceCategory;
  title: string;
  summary: string;
  /** Always true for now — this file only ships illustrative sample structure. */
  isSample: true;
}

export const resourceCategories: ResourceCategory[] = [
  "Job Postings",
  "Career Transition Guides",
  "Career Coaching",
  "Professional Development",
];

/**
 * SAMPLE CONTENT ONLY. The source document describes this as a potential
 * self-post hub, but no content-management workflow or real submissions
 * have been selected yet. These entries exist to demonstrate the intended
 * layout and must not be presented as real job postings, guides, or
 * coaching announcements. Replace with real, approved content — and remove
 * the "Sample" badge in ResourceCard — before launch.
 */
export const sampleResources: Resource[] = [
  {
    id: "sample-job-posting",
    category: "Job Postings",
    title: "Sample listing: Foreign Affairs Officer",
    summary:
      "Placeholder entry showing how a Fellow- or partner-submitted job posting will appear once the submission workflow is in place.",
    isSample: true,
  },
  {
    id: "sample-transition-guide",
    category: "Career Transition Guides",
    title: "Sample guide: Moving from Government to the Private Sector",
    summary:
      "Placeholder entry showing how a sector-transition guide will appear once real guides are contributed by Fellows or staff.",
    isSample: true,
  },
  {
    id: "sample-coaching",
    category: "Career Coaching",
    title: "Sample announcement: Fellow-led coaching office hours",
    summary:
      "Placeholder entry showing how career coaching announcements from Fellows or partners will appear.",
    isSample: true,
  },
  {
    id: "sample-professional-development",
    category: "Professional Development",
    title: "Sample opportunity: Panel and forum speaking opportunities",
    summary:
      "Placeholder entry showing how professional development opportunities, such as panels and forums, will appear.",
    isSample: true,
  },
];
