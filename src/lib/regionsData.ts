export type Region = "FR" | "CA" | "US";

export interface RegionInfo {
  code: Region;
  label: string;
  drapeau: string;
  devise: string;
}

export const regions: RegionInfo[] = [
  { code: "FR", label: "France", drapeau: "🇫🇷", devise: "€" },
  { code: "CA", label: "Canada", drapeau: "🇨🇦", devise: "CA$" },
  { code: "US", label: "États-Unis", drapeau: "🇺🇸", devise: "US$" },
];
