"use client";

import { useEffect, useMemo, useState } from "react";
import SupplementCard from "@/components/SupplementCard";
import { categories, supplements, type Categorie } from "@/data/supplements";
import { slugToCategorie } from "@/lib/categorySlugs";

export default function DictionnaireClient() {
  const [query, setQuery] = useState("");
  const [categorie, setCategorie] = useState<Categorie | "Toutes">("Toutes");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categorieParam = params.get("categorie");
    const matched = categorieParam ? slugToCategorie[categorieParam] : undefined;
    if (matched) setCategorie(matched);
  }, []);

  const resultats = useMemo(() => {
    const q = query.trim().toLowerCase();
    return supplements.filter((s) => {
      const matchCategorie = categorie === "Toutes" || s.categorie === categorie;
      const matchQuery =
        q === "" ||
        s.nom.toLowerCase().includes(q) ||
        s.resume.toLowerCase().includes(q) ||
        (s.nomsAlternatifs ?? []).some((n) => n.toLowerCase().includes(q));
      return matchCategorie && matchQuery;
    });
  }, [query, categorie]);

  return (
    <div>
      <div className="dict-head">
        <div className="section-eyebrow">Dictionnaire · A → Z</div>
        <h1 className="dict-title">
          Chaque complément,
          <br />
          <em>ce qu&apos;il fait vraiment</em>.
        </h1>
        <div className="dict-meta">
          <span>{supplements.length} FICHES</span>
          <span>{categories.length} CATÉGORIES</span>
        </div>
      </div>

      <div className="dict-controls">
        <div className="search">
          <span style={{ color: "var(--muted)" }}>⌕</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un complément — ex. magnésium, ashwagandha, B12…"
          />
        </div>
        <div className="filter-pills">
          <button
            className={`pill${categorie === "Toutes" ? " on" : ""}`}
            onClick={() => setCategorie("Toutes")}
          >
            Tout · {supplements.length}
          </button>
          {categories.map((c) => {
            const count = supplements.filter((s) => s.categorie === c).length;
            return (
              <button
                key={c}
                className={`pill${categorie === c ? " on" : ""}`}
                onClick={() => setCategorie(c)}
              >
                {c} · {count}
              </button>
            );
          })}
        </div>
      </div>

      <div className="dict-grid">
        {resultats.map((s) => (
          <SupplementCard key={s.slug} supplement={s} />
        ))}
      </div>

      {resultats.length === 0 && (
        <p style={{ textAlign: "center", color: "var(--muted)", padding: "48px 0" }}>
          Aucun complément ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}
