export interface FellowBusiness {
  id: string;
  name: string;
  ownerName: string;
  sector: string;
  description: string;
  website?: string;
  govContracting?: string;
}

/**
 * Manually-curated businesses (kept empty — do not invent entries). Live
 * submissions from the Google Form/Sheet feed (see src/data/google-sheets.ts)
 * are merged in on top of this list at render time in EntrepreneurshipFilters.
 * Use this array only if staff want to hand-add a profile outside the form.
 */
export const fellowBusinesses: FellowBusiness[] = [];
