"use client";

import { regions, useRegion } from "@/lib/region";

export default function RegionSwitcher() {
  const { region, setRegion } = useRegion();
  const current = regions.find((r) => r.code === region) ?? regions[0];

  return (
    <select
      value={current.code}
      onChange={(e) => setRegion(e.target.value as typeof region)}
      aria-label="Choisir votre pays"
      className="cursor-pointer rounded-sm border border-zinc-700 bg-zinc-900 px-2 py-1 text-xs font-semibold text-zinc-300"
    >
      {regions.map((r) => (
        <option key={r.code} value={r.code}>
          {r.drapeau} {r.label}
        </option>
      ))}
    </select>
  );
}
