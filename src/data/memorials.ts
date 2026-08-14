export interface Memorial {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** File under public/images/remembrance/, or null to show an initials placeholder. */
  photo: string | null;
  externalLink?: { label: string; href: string };
}

/**
 * Full biography text is taken verbatim (lightly formatted for the web)
 * from the source document. Do not alter meaning or add unverified detail.
 * Photos are not yet available locally for any entry — each renders the
 * MemorialProfile component's initials placeholder until a real portrait is
 * added to public/images/remembrance/.
 */
export const memorials: Memorial[] = [
  {
    id: "emita-samuels",
    name: "Emita Samuels",
    role: "Associate Director of ICAP",
    photo: null,
    bio: "Emita Samuels was vital to the inception, development, and long-term success of ICAP, serving as Associate Director until her passing on December 30, 2020. Originally from Panama and later a U.S. citizen, she used her BA and MA in Education from the University of Denver to fuel a distinguished 40-year career in higher education administration. Her work across institutions, including the Josef Korbel School of International Studies and the Community College of Denver, consistently championed access for underrepresented students. Married to Dr. Tom Rowe, Emita is remembered with deep respect for her lifelong dedication to student success and her foundational leadership within the ICAP family.",
  },
  {
    id: "ruth-davis",
    name: "Ambassador Ruth Davis",
    role: "Founding Senior Advisor",
    photo: "ruth-davis.jpg",
    bio: "Ambassador Davis was instrumental to the creation and longevity of ICAP. Beginning with the initial consultations at the State Department in 1996, she served as a central advisor, champion, and a regular presence at the Aspen sessions for 22 years. Even when health challenges prevented her from attending in person, her dedicated guidance remained steadfast. ICAP owes an immense debt of gratitude to Ambassador Davis for her foundational role in the program's history.",
    externalLink: {
      label: "Read her AFSA Foreign Service Trailblazer profile",
      href: "https://afsa.org/foreign-service-trailblazer-ambassador-ruth-davis",
    },
  },
  {
    id: "moises-mendoza",
    name: "Moises Mendoza",
    role: "ICAP 2022",
    photo: "moises-mendoza.jpg",
    bio: "Moises Mendoza is remembered with deep affection and respect across the ICAP network. An exceptional leader dedicated to international service, Moises exemplified the excellence, camaraderie, and purpose of the fellows community. The impact of his intellect, kindness, and vibrant spirit continues to resonate deeply within the organization. ICAP honors his memory and remains profoundly grateful for the lasting legacy of his friendship and contributions.",
  },
  {
    id: "benny-garcia",
    name: "Benny Garcia",
    role: "ICAP 1998",
    photo: "benny-garcia.jpg",
    bio: "ICAP honors the life and legacy of Benny Garcia (Class of 1998), who passed away after a brave battle with pancreatic cancer. Known for his infectious spirit, humor, and deep dedication to the fellows community, Benny brought an unmatched warmth to the organization. He is deeply missed, and his memory remains a vital part of the ICAP history.",
  },
];
