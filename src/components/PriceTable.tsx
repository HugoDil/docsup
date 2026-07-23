"use client";

import type { CataloguePrix } from "@/data/prix";
import { regions, useRegion } from "@/lib/region";

export default function PriceTable({ catalogue }: { catalogue: CataloguePrix }) {
  const { region } = useRegion();
  const infoRegion = regions.find((r) => r.code === region) ?? regions[0];
  const produits = catalogue.produits
    .filter((p) => p.region === region)
    .sort((a, b) => a.prix - b.prix);
  const moinsCher = produits[0];

  if (produits.length === 0) {
    return (
      <p className="glass-panel rounded-xl p-4 text-sm text-zinc-400">
        Pas encore de prix relevés pour {infoRegion.label} pour ce complément. Essayez une autre
        région dans le sélecteur en haut de la page.
      </p>
    );
  }

  return (
    <div>
      <div className="glass-panel overflow-x-auto rounded-2xl">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-white/[0.06] text-zinc-400">
            <tr>
              <th className="px-4 py-3 font-medium">Produit</th>
              <th className="px-4 py-3 font-medium">Contenance</th>
              <th className="px-4 py-3 font-medium">Boutique</th>
              <th className="px-4 py-3 text-right font-medium">Prix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {produits.map((p) => (
              <tr key={`${p.marque}-${p.nom}`} className={p === moinsCher ? "bg-violet-500/10" : ""}>
                <td className="px-4 py-3">
                  <span className="font-medium text-zinc-50">{p.marque}</span>{" "}
                  <span className="text-zinc-400">{p.nom}</span>
                  {p === moinsCher && (
                    <span className="ml-2 rounded-full bg-violet-700 px-1.5 py-0.5 text-xs font-medium uppercase text-white">
                      Moins cher
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-zinc-400">{p.contenance}</td>
                <td className="px-4 py-3 text-zinc-400">{p.boutique}</td>
                <td className="px-4 py-3 text-right">
                  {p.prixBarre && (
                    <span className="mr-2 text-zinc-500 line-through">
                      {p.prixBarre.toFixed(2)}
                      {infoRegion.devise}
                    </span>
                  )}
                  <span className="font-serif text-base text-zinc-50">
                    {p.prix.toFixed(2)}
                    {infoRegion.devise}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-zinc-500">
        Prix relevés le {catalogue.dateReleve} chez les revendeurs indiqués ({infoRegion.label}),
        hors frais de port — susceptibles d&apos;avoir changé depuis. Vérifiez le prix actuel
        avant achat.
      </p>
    </div>
  );
}
