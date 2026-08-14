/**
 * Sheet IDs for the three live, self-serve submission feeds. Each is fed by
 * a Google Form whose responses land in a Sheet — the site reads the Sheet
 * directly, so a new approved submission appears on the live site without
 * any code change or redeploy.
 *
 * To connect one:
 *   1. Create the Google Form (see README "Live Submission Forms" for the
 *      recommended field list per feed).
 *   2. Link its responses to a Google Sheet.
 *   3. In the Sheet: File → Share → General access → "Anyone with the link" → Viewer.
 *      (Required — without this the site can't read it. It does NOT let
 *      anyone edit the sheet, only view it.)
 *   4. Copy the Sheet ID from its URL:
 *      https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
 *   5. Paste it below. Leave as null to keep showing the empty state
 *      instead of a broken feed.
 */
export const googleSheets = {
  jobPostings: {
    sheetId: null as string | null,
    gid: "0",
  },
  fellowBusinesses: {
    sheetId: null as string | null,
    gid: "0",
  },
  volunteerOpportunities: {
    sheetId: null as string | null,
    gid: "0",
  },
};
