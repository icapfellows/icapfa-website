"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CoachCard } from "@/components/CoachCard";
import { EmptyState } from "@/components/EmptyState";
import type { Coach } from "@/data/coaches";

export function CoachDirectory({ coaches }: { coaches: Coach[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return coaches;
    return coaches.filter((c) =>
      `${c.name} ${c.specialization} ${c.location}`.toLowerCase().includes(q)
    );
  }, [coaches, query]);

  return (
    <div>
      <div className="relative max-w-md">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-maroon/40"
          aria-hidden="true"
        />
        <label htmlFor="coach-search" className="sr-only">
          Search coaches by name, specialization, or location
        </label>
        <input
          id="coach-search"
          type="search"
          placeholder="Search by name, specialization, or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded border border-maroon/20 bg-white py-2.5 pl-9 pr-4 text-sm"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8">
          <EmptyState title="No matching coaches" description="Try a different search term." />
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((coach, i) => (
            <CoachCard key={`${coach.name}-${i}`} coach={coach} />
          ))}
        </div>
      )}
    </div>
  );
}
