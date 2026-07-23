"use client";

import Link from "next/link";
import type { CataloguePrix } from "@/data/prix";
import type { Supplement } from "@/data/supplements";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";
import { regions, useRegion } from "@/lib/region";

export default function CatalogueGrid({
  entries,
}: {
  entries: { catalogue: CataloguePrix; supplement: Supplement }[];
}) {
  const { region } = useRegion();
  const infoRegion = regions.find((r) => r.code === region) ?? regions[0];

  const disponibles = entries
    .map((e) => ({
      ...e,
      produitsRegion: e.catalogue.produits.filter((p) => p.region === region),
    }))
    .filter((e) => e.produitsRegion.length > 0);

  if (disponibles.length === 0) {
    return (
      <p className="glass-panel rounded-2xl p-6 text-center text-zinc-400">
        Pas encore de prix relevés pour {infoRegion.label}. Choisissez une autre région dans le
        menu en haut de la page.
      </p>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {disponibles.map(({ catalogue, supplement, produitsRegion }) => {
        const style = categoryStyles[supplement.categorie];
        const moinsCher = Math.min(...produitsRegion.map((p) => p.prix));
        return (
          <Link
            key={supplement.slug}
            href={`/dictionnaire/${supplement.slug}#comparatif-prix`}
            className={`glass-panel group flex flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.05] ${style.border}`}
          >
            <div className="flex items-start justify-between gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.text}`}
              >
                <CategoryIcon categorie={supplement.categorie} className="h-6 w-6" />
              </span>
              <span className="text-right">
                <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500">
                  À partir de
                </span>
                <span className="font-serif text-xl text-zinc-50">
                  {moinsCher.toFixed(2)}
                  {infoRegion.devise}
                </span>
              </span>
            </div>
            <h3 className="mt-4 font-serif text-lg text-zinc-50">{supplement.nom}</h3>
            <p className="mt-1.5 text-sm text-zinc-400">
              {produitsRegion.length} produits comparés · {infoRegion.label}
            </p>
            <span className={`mt-4 text-sm font-medium ${style.text}`}>
              Voir le comparatif →
            </span>
          </Link>
        );
      })}
    </div>
  );
}
