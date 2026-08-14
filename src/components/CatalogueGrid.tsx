"use client";

import Link from "next/link";
import type { CataloguePrix } from "@/data/prix";
import type { Supplement } from "@/data/supplements";
import { regions, useRegion } from "@/lib/region";
import { categoryIndex } from "@/lib/categoryIndex";
import BoutiqueLink from "@/components/BoutiqueLink";

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
      produitsRegion: [...e.catalogue.produits]
        .filter((p) => p.region === region)
        .sort((a, b) => a.prix - b.prix),
    }))
    .filter((e) => e.produitsRegion.length > 0)
    .map((e, i) => ({ ...e, idx: i + 1 }));

  if (disponibles.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "var(--muted)", padding: "48px 0" }}>
        Pas encore de prix relevés pour {infoRegion.label}. Choisissez une autre région dans le
        sélecteur en haut de page.
      </p>
    );
  }

  return (
    <div>
      {disponibles.map(({ catalogue, supplement, idx, produitsRegion }) => (
        <div key={supplement.slug} className="cat-card">
          <div className="cat-card-head">
            <div className="idx">{String(idx).padStart(2, "0")}</div>
            <div className="name">
              {supplement.nom}
              <span className="sub">
                {supplement.dosage.recommande} · {categoryIndex(supplement.categorie)} {supplement.categorie}
              </span>
            </div>
            <div className="cheapest">
              Le moins cher
              <span className="p">
                {produitsRegion[0].prix.toFixed(2)}
                {infoRegion.devise}
              </span>
            </div>
            <Link href={`/dictionnaire/${supplement.slug}`} style={{ color: "var(--muted)", textDecoration: "none" }}>
              Fiche →
            </Link>
          </div>
          <div className="cat-card-body">
            {produitsRegion.slice(0, 4).map((p, i) => (
              <BoutiqueLink
                key={`${p.boutique}-${p.marque}-${p.nom}-${p.contenance}-${i}`}
                boutique={p.boutique}
                url={p.url}
                className={`shop-cell${i === 0 ? " best" : ""}`}
              >
                <div className="sname">{p.boutique}</div>
                <div className="sform">
                  {p.marque} · {p.contenance}
                </div>
                <div className="sprice">
                  {p.prix.toFixed(2)}
                  {infoRegion.devise}
                </div>
              </BoutiqueLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
