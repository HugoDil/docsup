"use client";

import { regions, useRegion } from "@/lib/region";

export default function CountrySwitch() {
  const { region, setRegion } = useRegion();

  return (
    <div className="country-switch">
      {regions.map((r) => (
        <button
          key={r.code}
          className={region === r.code ? "on" : ""}
          onClick={() => setRegion(r.code)}
        >
          {r.drapeau} {r.label}
        </button>
      ))}
    </div>
  );
}
