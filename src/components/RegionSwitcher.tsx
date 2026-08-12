"use client";

import { regions, useRegion } from "@/lib/region";

export default function RegionSwitcher() {
  const { region, setRegion } = useRegion();
  const current = regions.find((r) => r.code === region) ?? regions[0];

  return (
    <label className="country">
      <span className="dot" aria-hidden="true" />
      <select
        value={current.code}
        onChange={(e) => setRegion(e.target.value as typeof region)}
        aria-label="Choisir votre pays"
        style={{
          border: "none",
          background: "transparent",
          font: "inherit",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        {regions.map((r) => (
          <option key={r.code} value={r.code}>
            {r.drapeau} {r.label}
          </option>
        ))}
      </select>
    </label>
  );
}
