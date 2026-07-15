import Link from "next/link";
import { cataloguePrix } from "@/data/prix";
import { getSupplementBySlug } from "@/data/supplements";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";

export const metadata = {
  title: "Catalogue de prix — Docsup",
  description:
    "Comparez les prix des compléments alimentaires les plus recherchés, du moins cher au plus cher, chez plusieurs marques et boutiques.",
};

export default function CataloguePage() {
  const entries = cataloguePrix
    .map((c) => ({ catalogue: c, supplement: getSupplementBySlug(c.slug) }))
    .filter((e) => e.supplement);

  return (
    <div>
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-lime-400 px-3 py-1 text-xs font-black uppercase tracking-wide text-zinc-950">
            {entries.length} compléments comparés
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
            Catalogue de prix
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Les compléments les plus recherchés, comparés entre plusieurs marques — du moins
            cher au plus cher.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map(({ catalogue, supplement }) => {
            const s = supplement!;
            const style = categoryStyles[s.categorie];
            const moinsCher = Math.min(...catalogue.produits.map((p) => p.prix));
            return (
              <Link
                key={s.slug}
                href={`/dictionnaire/${s.slug}#comparatif-prix`}
                className={`group flex flex-col rounded-lg border-2 border-transparent bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${style.border} ${style.glow} dark:bg-zinc-900`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${style.solid} text-white`}
                  >
                    <CategoryIcon categorie={s.categorie} className="h-6 w-6" />
                  </span>
                  <span className="text-right">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      À partir de
                    </span>
                    <span className="text-xl font-black text-zinc-900 dark:text-zinc-50">
                      {moinsCher.toFixed(2)}€
                    </span>
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">
                  {s.nom}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {catalogue.produits.length} produits comparés
                </p>
                <span className={`mt-4 text-sm font-bold ${style.text}`}>
                  Voir le comparatif →
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          D&apos;autres compléments seront ajoutés au catalogue progressivement.
        </p>
      </section>
    </div>
  );
}
