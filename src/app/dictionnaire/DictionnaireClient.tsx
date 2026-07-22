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
      <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">Dictionnaire</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {supplements.length} compléments référencés — effets, dosages, carences et mythes.
      </p>

      <div className="sticky top-[128px] z-10 -mx-6 mt-8 bg-zinc-50/95 px-6 py-4 backdrop-blur dark:bg-black/95 sm:top-[61px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un complément (ex: magnésium, fer...)"
            className="w-full rounded-md border-2 border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 placeholder:text-zinc-400 placeholder:font-normal focus:border-lime-500 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 sm:max-w-sm"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategorie("Toutes")}
              className={`rounded-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                categorie === "Toutes"
                  ? "bg-zinc-950 text-lime-400 dark:bg-lime-400 dark:text-zinc-950"
                  : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
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
                  className={`rounded-sm px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                    categorie === c
                      ? `${style.solid} text-white`
                      : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
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
              <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-zinc-900 dark:text-zinc-50">
                <span className={`h-3 w-3 rounded-xs ${categoryStyles[g.categorie].solid}`} />
                {g.categorie}
                <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
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
        <p className="mt-12 text-center text-zinc-500 dark:text-zinc-400">
          Aucun complément ne correspond à votre recherche.
        </p>
      )}
    </div>
  );
}
