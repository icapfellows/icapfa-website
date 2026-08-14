# ICAP Fellows Association Website

Production website for the ICAP Fellows Association (ICAPFA) — the alumni
association for fellows of the Aspen Institute's International Career
Advancement Program (ICAP).

Built with Next.js (App Router), TypeScript, and Tailwind CSS. No database,
no authentication, no CMS — all content lives in plain TypeScript data files
under `src/data/`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint    # ESLint
npm run build   # production build
npm run start   # run the production build locally
```

## Editing Content

Every page pulls from data files in `src/data/` — edit these, not the
components, for day-to-day content changes:

| File | Controls |
|---|---|
| `site-config.ts` | Org name, tagline, **every external URL** (Member Login, Join, Donate, ICAP Aspen, etc.) — change a link once here and it updates everywhere |
| `navigation.ts` | Header and footer nav items |
| `impact.ts` | Homepage stat ("960+ Graduated Fellows") and the About page's "Our Impact" list |
| `organization.ts` | Who We Are, Mission/Vision, What We Do, Why It Matters, ICAP vs. ICAPFA copy |
| `events.ts` | Upcoming event placeholders and the photo collections shown in the community grid |
| `memorials.ts` | In Remembrance biography entries |
| `resources.ts` | Career & Resources sample listings |
| `businesses.ts` | Entrepreneurship showcase profiles (empty until real Fellow businesses are approved) |
| `contact.ts` | Contact form inquiry types + form backend config |

### Placeholder content still marked TBD

- **Upcoming events** (`events.ts`) — two placeholder entries with no real
  dates. Replace with confirmed events and set `needsConfirmation: false`.
- **Career & Resources listings** (`resources.ts`) — sample entries only,
  clearly marked `isSample: true`. Replace before launch.
- **Entrepreneurship profiles** (`businesses.ts`) — intentionally empty.
  Add real, approved Fellow business profiles here; the page shows an empty
  state until then.
- **Contact form backend** — no email service is connected yet. Set
  `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` in `.env.local` to a Formspree/Resend/
  etc. endpoint URL to make the form actually deliver mail (see
  `src/data/contact.ts`). Until then the form validates input but tells the
  user plainly that it isn't connected, rather than faking a success message.
- **Social links** (`site-config.ts` → `social`) — left empty per the source
  document ("TBD as we may not reactivate immediately"). Add real URLs here
  once available; the footer's "Coming soon" note disappears automatically
  once any link is set.
- **Contact email** (`site-config.ts` → `contactEmail`) — currently a
  placeholder inbox; confirm the real address before launch.

## Live Submission Forms

Three sections — **Job Postings** (Career & Resources), **Fellow Businesses**
(Entrepreneurship), and **Volunteer Opportunities** (Support Us) — are
designed to update themselves with no code changes or redeploys. Each reads
live from a Google Sheet fed by a Google Form. Until a Sheet is connected,
that section shows a "coming soon" empty state instead of an error.

### How it works

1. You create a Google Form with the fields listed below.
2. Form responses land automatically in a linked Google Sheet.
3. You share that Sheet as **"Anyone with the link" → Viewer** (this only
   allows reading, not editing — nobody can change the sheet from the URL).
4. You paste the Sheet's ID into `src/data/google-sheets.ts`.
5. The site fetches and displays whatever's in the sheet, live, every time
   someone visits the page. Add or delete a row in the sheet and the site
   reflects it — no code change, no redeploy, no need to contact a developer.

There's no moderation step built in — anything submitted through the form
appears on the site. If you want to review submissions before they go
live, don't link the Form directly to the Sheet the site reads; instead
route submissions to a holding sheet, then copy approved rows into the
live one.

**Getting the Sheet ID**: after creating the Sheet, look at its URL:
`https://docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`. Paste that
into the matching `sheetId` field in `src/data/google-sheets.ts`. Also check
the `gid` value in the URL (the number after `#gid=`) if the form responses
aren't on the sheet's first tab.

### Job Postings — Google Form fields

Use this exact wording for each question (the site matches the Form's
question text as the column header):

| Field | Type | Required? |
|---|---|---|
| Submitted By (Fellow Name & ICAP Year) | Short answer | Yes |
| Fellow Email | Short answer | Yes *(kept private — not shown on site, only for follow-up)* |
| Job Title | Short answer | Yes |
| Company | Short answer | Yes |
| Location | Short answer | Yes — instruct submitters to write "Remote" if applicable |
| Job Type | Multiple choice: Full-time / Part-time / Contract / Internship / Fellowship | Yes |
| Brief Description | Paragraph | Yes |
| Application Link or Email | Short answer | Yes |
| Application Deadline | Short answer or Date | No — left blank reads as open until filled |

### Fellow Businesses — Google Form fields

| Field | Type | Required? |
|---|---|---|
| Submitted By (Fellow Name & ICAP Year) | Short answer | Yes |
| Fellow Email | Short answer | Yes *(private)* |
| Business Name | Short answer | Yes |
| Sector / Industry | Short answer or dropdown | Yes |
| Short Description | Paragraph | Yes |
| Website or Contact Link | Short answer | Yes |
| Government Contracting Experience | Paragraph | No — leave blank if not applicable |

### Volunteer Opportunities — Google Form fields

| Field | Type | Required? |
|---|---|---|
| Submitted By (Organization or Fellow Name & ICAP Year) | Short answer | Yes |
| Contact Email | Short answer | Yes *(private)* |
| Opportunity Title | Short answer | Yes |
| Description | Paragraph | Yes |
| Time Commitment | Multiple choice: One-time / Ongoing / Seasonal | Yes |
| Location | Short answer | Yes — "Remote" or "Hybrid" are fine |
| How to Get Involved | Short answer | Yes — a link or an email |
| Deadline | Short answer or Date | No |

## Replacing Images

All images live under `public/images/`, organized by folder (e.g.
`summer-2025/`, `remembrance/`, `community-2025/`). To swap a photo:

1. Add the new file to the relevant folder in `public/images/`.
2. Update the matching entry in `src/data/events.ts` (photo collections) or
   `src/data/memorials.ts` (memorial portraits) with the new filename.

The homepage hero photo is set directly in `src/components/Hero.tsx` via the
`HERO_IMAGE_SRC` constant — change that one path to swap it.

**Full-resolution originals**: the complete photo dump you provided (470
files, including HEIC photos and video clips that browsers can't display
directly) is preserved at `reference/original-photos/` — nothing was
deleted. The `.jpg` files used on the live site were auto-oriented, resized,
and compressed from that original set. If you want to use one of the HEIC
photos, convert it to `.jpg`/`.png` first (e.g. via Preview on Mac, or any
online HEIC converter), then drop it into `public/images/`.

**No logo file was found** anywhere in the uploaded photos — only event and
memorial photography. If you have the actual ICAP/ICAPFA logo file, add it
to `public/logo/` and it can be wired into the header in place of the
current text wordmark.

## Brand Colors

Defined as CSS variables in `src/app/globals.css` (`:root`), so the whole
site re-themes from one place. The corresponding Tailwind tokens are
`maroon` / `maroon-dark` / `gold` / `gold-dark` (see `tailwind.config.ts`):

```css
--color-maroon: #6E1423;
--color-maroon-dark: #3D0B12;
--color-gold: #C9A227;
--color-gold-dark: #7A5D14;
--color-bg-soft: #F6EFE2;
--color-bg-off: #FBF9F5;
--color-text: #241512;
```

`gold-dark` is a deeper bronze-gold used specifically for text/links on
white backgrounds — the vivid `gold` doesn't meet accessible contrast on
white, so it's reserved for use on dark maroon backgrounds and large
decorative elements. If you have the real ICAP/ICAPFA logo file, these
values can be recalibrated to match it exactly.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. In Vercel, "Add New Project" → import the repository. Vercel
   auto-detects Next.js; no build settings need to change.
3. Add any environment variables (e.g. `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`)
   under Project Settings → Environment Variables.
4. Deploy. Every push to the connected branch redeploys automatically.

## Connecting the GoDaddy Domain

1. In Vercel: Project → Settings → Domains → add `icapfellows.org` (and
   `www.icapfellows.org` if desired).
2. Vercel shows the DNS records to add. In GoDaddy: My Products → DNS →
   manage the domain, then:
   - For the root domain (`icapfellows.org`): add an **A record** pointing
     to the IP Vercel provides (typically `76.76.21.21`).
   - For `www`: add a **CNAME record** pointing to `cname.vercel-dns.com`.
3. Wait for DNS propagation (usually minutes, sometimes up to 24–48 hours),
   then Vercel will issue an SSL certificate automatically.
4. Update `canonicalUrl` in `src/data/site-config.ts` if the final domain
   differs from `https://icapfellows.org`.

## Project Structure

```
src/
  app/            Next.js App Router pages (one folder per route)
  components/     Reusable UI components
  data/           All editable site content (see table above)
  lib/            Small shared utilities
public/
  images/         Photos, organized by event/collection
  logo/           Logo assets (currently empty — see above)
reference/        Source document + original uploaded photos (not shipped to the live site)
```
