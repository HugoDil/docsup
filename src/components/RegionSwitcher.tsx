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
      className="glass-panel cursor-pointer rounded-lg px-2 py-1 text-xs font-medium text-zinc-300"
    >
      {regions.map((r) => (
        <option key={r.code} value={r.code}>
          {r.drapeau} {r.label}
        </option>
      ))}
    </select>
  );
}
