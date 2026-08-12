"use client";

import { useMemo } from "react";
import { getPrixBySlug } from "@/data/prix";
import { regions, useRegion } from "@/lib/region";

export function usePrixMin(slug: string): { value: number; devise: string } | null {
  const { region } = useRegion();
  return useMemo(() => {
    const infoRegion = regions.find((r) => r.code === region) ?? regions[0];
    const catalogue = getPrixBySlug(slug);
    if (!catalogue) return null;
    const prix = catalogue.produits.filter((p) => p.region === region).map((p) => p.prix);
    if (prix.length === 0) return null;
    return { value: Math.min(...prix), devise: infoRegion.devise };
  }, [slug, region]);
}
