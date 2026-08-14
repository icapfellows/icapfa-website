import { upcomingSheetEvents, pastSheetEvents } from "@/data/sheetEvents";

export interface UpcomingEvent {
  id: string;
  title: string;
  dateLabel: string;
  description: string;
  /** True until a confirmed date/venue is supplied. Drives the "Details coming soon" badge. */
  needsConfirmation: boolean;
  registrationLink?: string;
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40);
}

// Sourced from "Career Resources for ICAP Fellows.xlsx" — Events, Panels,
// and Workshops tab. Entries still marked "Pending" in the sheet keep
// needsConfirmation: true and show "Details to be confirmed" instead of a date.
export const upcomingEvents: UpcomingEvent[] = upcomingSheetEvents.map((e) => ({
  id: slugify(e.title),
  title: e.title,
  dateLabel: e.needsConfirmation ? "Date to be announced" : `${e.dateText}${e.time ? ` · ${e.time}` : ""}`,
  description: e.speakers ? `Speakers: ${e.speakers.replace(/\n/g, ", ")}` : "Details to follow.",
  needsConfirmation: e.needsConfirmation,
  registrationLink: e.regLink || undefined,
}));

export interface PastEvent {
  id: string;
  title: string;
  dateLabel: string;
  speakers: string;
  link?: string;
}

export const pastEvents: PastEvent[] = pastSheetEvents.map((e) => ({
  id: slugify(e.title),
  title: e.title,
  dateLabel: `${e.dateText}${e.time ? ` · ${e.time}` : ""}`,
  speakers: e.speakers.replace(/\n/g, ", "),
  link: e.regLink || undefined,
}));

export interface PhotoCollection {
  id: string;
  title: string;
  description: string;
  /** Folder under public/images/ this collection pulls from. */
  folder: string;
  /**
   * Image file names inside that folder, relative to public/images/{folder}/.
   * Left empty until real photos are uploaded — components render a neutral
   * placeholder tile instead of a broken image when this is empty.
   */
  images: { file: string; alt: string }[];
}

// Community photo feature (homepage) + Events & Community past-highlights grid.
export const photoCollections: PhotoCollection[] = [
  {
    id: "conference-2026",
    title: "2026 Conference on Expanding Access to International Affairs",
    description:
      "Highlights from the conference bringing together Fellows and partners working to expand access to international affairs careers.",
    folder: "conference-2026",
    images: [
      { file: "conference-1.jpg", alt: "Panel session at the 2026 Conference on Expanding Access to International Affairs" },
    ],
  },
  {
    id: "global-kids-2026",
    title: "2026 Global Kids Event",
    description: "Fellows engaging with the next generation through the Global Kids program.",
    folder: "global-kids-2026",
    images: [
      { file: "global-kids-8.jpg", alt: "Fellows on a panel with Global Kids program students" },
      { file: "global-kids-1.jpg", alt: "Fellows speaking with Global Kids program students" },
      { file: "global-kids-4.jpg", alt: "Student artwork at the Global Kids program site" },
    ],
  },
  {
    id: "summer-2025",
    title: "Summer 2025 Recap",
    description: "A look back at ICAPFA community moments from summer 2025.",
    folder: "summer-2025",
    images: [
      { file: "summer-2025-1.jpg", alt: "ICAPFA Fellows at a summer 2025 community gathering" },
      { file: "summer-2025-2.jpg", alt: "ICAPFA Fellows at a summer 2025 community gathering" },
      { file: "summer-2025-3.jpg", alt: "ICAPFA Fellows at a summer 2025 community gathering" },
      { file: "summer-2025-4.jpg", alt: "ICAPFA Fellows at a summer 2025 community gathering" },
    ],
  },
  {
    id: "moises-mendoza",
    title: "Remembering Moises Mendoza",
    description: "Photos shared in memory of Moises Mendoza, ICAP 2022.",
    folder: "moises-mendoza",
    images: [{ file: "moises-1.jpg", alt: "Portrait of Moises Mendoza" }],
  },
  {
    // Real 2025 event photos that don't correspond to the specific 2026
    // events named in the source document (those haven't happened yet /
    // no photos exist for them). Kept as its own collection rather than
    // mislabeled into conference-2026 or global-kids-2026.
    id: "community-2025",
    title: "ICAPFA Community, 2025",
    description:
      "Moments from ICAPFA gatherings in 2025, including the DC-area Annual Picnic and the ICAP Aspen retreat.",
    folder: "community-2025",
    images: [
      { file: "annual-picnic-2.jpg", alt: "ICAPFA Fellows at the 2025 Annual Picnic in Washington, D.C." },
      { file: "annual-picnic-3.jpg", alt: "ICAPFA Fellows at the 2025 Annual Picnic in Washington, D.C." },
      { file: "icap-2025-1.jpg", alt: "ICAP Fellows at a 2025 program event" },
      { file: "cohort-2021-group.jpg", alt: "ICAP 2021 cohort group photo" },
    ],
  },
];

// Every real photo across all collections, flattened — used by PhotoCarousel3D
// to let visitors browse everything in one place rather than just the lead
// image per collection.
export const allPhotos = photoCollections.flatMap((collection) =>
  collection.images.map((image) => ({
    src: `/images/${collection.folder}/${image.file}`,
    alt: image.alt,
  }))
);
