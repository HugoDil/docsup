"use client";

import { createContext, useContext, useEffect, useState } from "react";

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

const STORAGE_KEY = "docsup-region";

function deviner(): Region {
  if (typeof navigator === "undefined") return "FR";
  const langue = navigator.language?.toLowerCase() ?? "";
  if (langue.endsWith("-ca") || langue === "ca") return "CA";
  if (langue.endsWith("-us") || langue === "us") return "US";
  return "FR";
}

const RegionContext = createContext<{
  region: Region;
  setRegion: (r: Region) => void;
}>({ region: "FR", setRegion: () => {} });

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>("FR");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Region | null;
    setRegionState(stored ?? deviner());
  }, []);

  function setRegion(r: Region) {
    setRegionState(r);
    window.localStorage.setItem(STORAGE_KEY, r);
  }

  return (
    <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}
