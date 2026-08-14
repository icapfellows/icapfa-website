/**
 * Fetches a Google Sheet's published CSV export at request time (client
 * side), so new form submissions show up on the live site without a
 * redeploy — no database, no CMS, just a Sheet the site reads from.
 *
 * Setup per sheet (see README "Live Submission Forms" for the full walkthrough):
 *   1. Create a Google Form with the recommended fields for that section.
 *   2. Point its responses at a new Google Sheet.
 *   3. In the Sheet: File → Share → General access → "Anyone with the link" → Viewer.
 *   4. Copy the CSV export URL (see getSheetCsvUrl below) into src/data/google-sheets.ts.
 */

export function getSheetCsvUrl(sheetId: string, gid = "0"): string {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

/** Minimal CSV parser — handles quoted fields, embedded commas, and escaped quotes (""). */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && next === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

/** Parses a Google Sheets CSV export into an array of objects keyed by header row. */
export function parseSheetRows(csvText: string): Record<string, string>[] {
  const rows = parseCsv(csvText);
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).map((row) => {
    const record: Record<string, string> = {};
    headers.forEach((header, i) => {
      record[header] = (row[i] ?? "").trim();
    });
    return record;
  });
}

export async function fetchSheetRows(sheetId: string, gid = "0"): Promise<Record<string, string>[]> {
  const res = await fetch(getSheetCsvUrl(sheetId, gid), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Sheet fetch failed (${res.status}). Check that it's shared as "Anyone with the link — Viewer".`);
  }
  const text = await res.text();
  return parseSheetRows(text);
}
