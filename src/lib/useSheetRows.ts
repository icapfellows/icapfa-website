"use client";

import { useEffect, useState } from "react";
import { fetchSheetRows } from "@/lib/googleSheet";

type State =
  | { status: "not-configured" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; rows: Record<string, string>[] };

/** Loads and parses a Google Sheet's rows client-side, so the list stays live without a redeploy. */
export function useSheetRows(sheetId: string | null, gid = "0"): State {
  const [state, setState] = useState<State>(sheetId ? { status: "loading" } : { status: "not-configured" });

  useEffect(() => {
    if (!sheetId) {
      setState({ status: "not-configured" });
      return;
    }
    let cancelled = false;
    setState({ status: "loading" });
    fetchSheetRows(sheetId, gid)
      .then((rows) => {
        if (!cancelled) setState({ status: "ready", rows });
      })
      .catch((err) => {
        if (!cancelled) setState({ status: "error", message: err instanceof Error ? err.message : "Failed to load" });
      });
    return () => {
      cancelled = true;
    };
  }, [sheetId, gid]);

  return state;
}
