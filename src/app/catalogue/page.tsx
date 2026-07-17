import { cataloguePrix, type CataloguePrix } from "@/data/prix";
import { getSupplementBySlug, type Supplement } from "@/data/supplements";
import CatalogueGrid from "@/components/CatalogueGrid";

export const metadata = {
  title: "Catalogue de prix — Docsup",
  description:
    "Comparez les prix des compléments alimentaires les plus recherchés, du moins cher au plus cher, chez plusieurs marques et boutiques locales à votre pays.",
};

export default function CataloguePage() {
  const entries: { catalogue: CataloguePrix; supplement: Supplement }[] = [];
  for (const catalogue of cataloguePrix) {
    const supplement = getSupplementBySlug(catalogue.slug);
    if (supplement) entries.push({ catalogue, supplement });
  }

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
            cher au plus cher, dans les boutiques de votre région (sélecteur en haut de page).
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <CatalogueGrid entries={entries} />

        <p className="mt-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
          D&apos;autres compléments et régions seront ajoutés au catalogue progressivement.
        </p>
      </section>
    </div>
  );
}
