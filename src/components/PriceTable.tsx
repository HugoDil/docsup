"use client";

import type { CataloguePrix } from "@/data/prix";
import { regions, useRegion } from "@/lib/region";
import BoutiqueLink from "@/components/BoutiqueLink";

export default function PriceTable({ catalogue }: { catalogue: CataloguePrix }) {
  const { region } = useRegion();
  const infoRegion = regions.find((r) => r.code === region) ?? regions[0];
  const produits = catalogue.produits
    .filter((p) => p.region === region)
    .sort((a, b) => a.prix - b.prix);
  const moinsCher = produits[0];

  if (produits.length === 0) {
    return (
      <div>
        <h6>Prix {infoRegion.label} · trié ↓</h6>
        <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.5 }}>
          Pas encore de prix relevés pour {infoRegion.label} pour ce complément. Essayez une
          autre région dans le sélecteur en haut de la page.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h6>Prix {infoRegion.label} · trié ↓</h6>
      {produits.map((p, i) => (
        <BoutiqueLink
          key={`${p.boutique}-${p.marque}-${p.nom}-${p.contenance}-${i}`}
          boutique={p.boutique}
          url={p.url}
          className={`price-row${p === moinsCher ? " best" : ""}`}
        >
          <div>
            <div className="shop">
              {p.marque} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {p.boutique}</span>
            </div>
            <div className="per">
              {p.nom} · {p.contenance}
            </div>
          </div>
          <div className="price">
            {p.prixBarre && (
              <span style={{ marginRight: 6, color: "var(--muted)", textDecoration: "line-through" }}>
                {p.prixBarre.toFixed(2)}
                {infoRegion.devise}
              </span>
            )}
            {p.prix.toFixed(2)}
            {infoRegion.devise}
          </div>
        </BoutiqueLink>
      ))}
      <p className="fiche-note" style={{ paddingTop: 16, borderTop: "1px solid var(--line-2)" }}>
        Mis à jour le {catalogue.dateReleve} · liens affiliés déclarés
      </p>
    </div>
  );
}
