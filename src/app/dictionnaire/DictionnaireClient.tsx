"use client";

import { useEffect, useMemo, useState } from "react";
import SupplementCard from "@/components/SupplementCard";
import { categoryStyles } from "@/components/CategoryIcon";
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

  const groupes = useMemo(() => {
    if (categorie !== "Toutes") return null;
    return categories
      .map((c) => ({ categorie: c, items: resultats.filter((s) => s.categorie === c) }))
      .filter((g) => g.items.length > 0);
  }, [categorie, resultats]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="font-serif text-4xl font-normal text-zinc-50">Dictionnaire</h1>
      <p className="mt-2 text-zinc-400">
        {supplements.length} compléments référencés — effets, dosages, carences et mythes.
      </p>

      <div className="sticky top-[131px] z-10 -mx-6 mt-8 bg-[#0a0c10]/95 px-6 py-4 backdrop-blur-xl sm:top-[61px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un complément (ex: magnésium, fer...)"
            className="glass-panel w-full rounded-xl px-4 py-2 text-sm font-medium text-zinc-50 placeholder:text-zinc-500 placeholder:font-normal focus:border-violet-400/40 focus:outline-none sm:max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategorie("Toutes")}
              className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                categorie === "Toutes"
                  ? "bg-violet-700 text-white"
                  : "glass-panel text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Toutes
            </button>
            {categories.map((c) => {
              const style = categoryStyles[c];
              return (
                <button
                  key={c}
                  onClick={() => setCategorie(c)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                    categorie === c
                      ? `${style.bg} ${style.text}`
                      : "glass-panel text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {groupes ? (
        <div className="mt-8 space-y-12">
          {groupes.map((g) => (
            <div key={g.categorie}>
              <h2 className="mb-4 flex items-center gap-2 font-serif text-xl text-zinc-50">
                <span className={`h-2.5 w-2.5 rounded-full ${categoryStyles[g.categorie].dot}`} />
                {g.categorie}
                <span className="font-sans text-sm font-normal text-zinc-500">
                  ({g.items.length})
                </span>
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((s) => (
                  <SupplementCard key={s.slug} supplement={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resultats.map((s) => (
            <SupplementCard key={s.slug} supplement={s} />
          ))}
        </div>
      )}

      {resultats.length === 0 && (
        <p className="mt-12 text-center text-zinc-500">
          Aucun complément ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}
