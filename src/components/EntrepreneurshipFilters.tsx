"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BusinessCard } from "@/components/BusinessCard";
import { EmptyState } from "@/components/EmptyState";
import { useSheetRows } from "@/lib/useSheetRows";
import { googleSheets } from "@/data/google-sheets";
import type { FellowBusiness } from "@/data/businesses";

/**
 * Column headers here must match the Google Form's question text exactly —
 * see README "Live Submission Forms" for the recommended wording.
 */
const FIELDS = {
  submittedBy: "Submitted By (Fellow Name & ICAP Year)",
  businessName: "Business Name",
  sector: "Sector / Industry",
  description: "Short Description",
  website: "Website or Contact Link",
  govContracting: "Government Contracting Experience",
};

/**
 * Search + sector filter UI for the Entrepreneurship showcase. Combines any
 * manually-curated entries from src/data/businesses.ts with live rows from
 * the Google Sheet submission feed — with nothing in either, it shows the
 * "no profiles yet" empty state.
 */
export function EntrepreneurshipFilters({ businesses: staticBusinesses }: { businesses: FellowBusiness[] }) {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("all");
  const { sheetId, gid } = googleSheets.fellowBusinesses;
  const sheetState = useSheetRows(sheetId, gid);

  const liveBusinesses: FellowBusiness[] = useMemo(() => {
    if (sheetState.status !== "ready") return [];
    return sheetState.rows
      .filter((row) => row[FIELDS.businessName])
      .map((row, i) => ({
        id: `sheet-${i}-${row[FIELDS.businessName]}`,
        name: row[FIELDS.businessName],
        ownerName: row[FIELDS.submittedBy] || "ICAP Fellow",
        sector: row[FIELDS.sector] || "Other",
        description: row[FIELDS.description] || "",
        website: row[FIELDS.website] || undefined,
        govContracting: row[FIELDS.govContracting] || undefined,
      }));
  }, [sheetState]);

  const businesses = useMemo(
    () => [...staticBusinesses, ...liveBusinesses],
    [staticBusinesses, liveBusinesses]
  );

  const sectors = useMemo(
    () => Array.from(new Set(businesses.map((b) => b.sector))).sort(),
    [businesses]
  );

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const matchesSector = sector === "all" || b.sector === sector;
      const matchesQuery =
        query.trim() === "" ||
        `${b.name} ${b.ownerName} ${b.description}`.toLowerCase().includes(query.toLowerCase());
      return matchesSector && matchesQuery;
    });
  }, [businesses, query, sector]);

  const isLoading = sheetState.status === "loading";

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-maroon/40"
            aria-hidden="true"
          />
          <label htmlFor="business-search" className="sr-only">
            Search business profiles
          </label>
          <input
            id="business-search"
            type="search"
            placeholder="Search by name, owner, or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={businesses.length === 0}
            className="w-full rounded border border-maroon/20 bg-white py-2.5 pl-9 pr-4 text-sm disabled:cursor-not-allowed disabled:bg-surface-off"
          />
        </div>
        <div>
          <label htmlFor="business-sector" className="sr-only">
            Filter by sector
          </label>
          <select
            id="business-sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            disabled={businesses.length === 0}
            className="rounded border border-maroon/20 bg-white px-4 py-2.5 text-sm disabled:cursor-not-allowed disabled:bg-surface-off"
          >
            <option value="all">All sectors</option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-40 animate-pulse border border-maroon/10 bg-surface-soft" />
          ))}
        </div>
      ) : businesses.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="No business profiles yet"
            description="This showcase is ready for Fellow-owned businesses and government-contracting profiles. Check back soon, or reach out via the Contact page if you'd like to submit a profile."
          />
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="No matching profiles"
            description="Try a different search term or sector."
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      )}
    </div>
  );
}
