import { cataloguePrix, type CataloguePrix } from "@/data/prix";
import { getSupplementBySlug, type Supplement } from "@/data/supplements";
import CatalogueGrid from "@/components/CatalogueGrid";
import MoleculeArt from "@/components/MoleculeArt";

export const metadata = {
  title: "Catalogue de prix",
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
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/10 to-transparent blur-3xl"
        />
        <MoleculeArt className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-violet-300">
            {entries.length} compléments comparés
          </span>
          <h1 className="mx-auto mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.1] text-zinc-50 sm:text-5xl">
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

        <p className="mt-10 text-center text-sm text-zinc-500">
          D&apos;autres compléments et régions seront ajoutés au catalogue progressivement.
        </p>
      </section>
    </div>
  );
}
