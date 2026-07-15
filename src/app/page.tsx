import Link from "next/link";
import SupplementCard from "@/components/SupplementCard";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";
import { categories, supplements } from "@/data/supplements";
import { categorieToSlug } from "@/lib/categorySlugs";

export default function Home() {
  const populaires = supplements.filter((s) => s.vedette).slice(0, 6);

  return (
    <div>
      {/* Hero — dark bookend */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 pb-14 pt-16 text-center sm:pt-24">
          <span className="inline-flex items-center gap-2 rounded-sm bg-lime-400 px-3 py-1 text-xs font-black uppercase tracking-wide text-zinc-950">
            {supplements.length} compléments référencés
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Comprendre les compléments alimentaires,{" "}
            <span className="text-lime-400">sans jargon</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Docsup explique les effets, les mythes et les dosages des vitamines, minéraux et
            autres compléments — que vous soyez sportif, végétarien, ou simplement curieux de
            combler une carence.
          </p>
          <div className="mt-9 flex justify-center gap-4">
            <Link
              href="/dictionnaire"
              className="rounded-sm bg-lime-400 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-zinc-950 transition-colors hover:bg-lime-300"
            >
              Explorer le dictionnaire
            </Link>
          </div>
        </div>

        {/* Stat strip */}
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/10 px-6">
            <Stat nombre={supplements.length} label="Compléments" />
            <Stat nombre={categories.length} label="Catégories" />
            <Stat nombre={100} suffixe="%" label="Gratuit" />
          </div>
        </div>
      </section>

      {/* Category nav */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {categories.map((c) => {
            const style = categoryStyles[c];
            const count = supplements.filter((s) => s.categorie === c).length;
            return (
              <Link
                key={c}
                href={`/dictionnaire?categorie=${categorieToSlug[c]}`}
                className="group flex flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-md ${style.solid} text-white transition-transform group-hover:scale-110`}
                >
                  <CategoryIcon categorie={c} className="h-7 w-7" />
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-50">
                  {c}
                </span>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {count} fiche{count > 1 ? "s" : ""}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Populaires */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            Les plus consultées
          </h2>
          <Link
            href="/dictionnaire"
            className="text-sm font-bold text-zinc-900 hover:text-lime-600 dark:text-zinc-50 dark:hover:text-lime-400"
          >
            Tout voir →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {populaires.map((s) => (
            <SupplementCard key={s.slug} supplement={s} />
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-lg bg-zinc-950 p-8 sm:p-10">
          <h2 className="text-2xl font-black tracking-tight text-white">
            Comment utiliser Docsup
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <Step
              numero="1"
              titre="Cherchez"
              texte="Trouvez un complément par nom, ou parcourez par catégorie : vitamines, minéraux, plantes..."
            />
            <Step
              numero="2"
              titre="Comprenez"
              texte="Effets réels, signes de carence, dosages recommandés et mythes démontés, en langage simple."
            />
            <Step
              numero="3"
              titre="Décidez"
              texte="Repartez avec une base fiable pour en discuter avec un professionnel de santé si besoin."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  nombre,
  suffixe = "",
  label,
}: {
  nombre: number;
  suffixe?: string;
  label: string;
}) {
  return (
    <div className="px-4 py-8 text-center first:pl-0 last:pr-0">
      <p className="text-3xl font-black text-lime-400 sm:text-4xl">
        {nombre}
        {suffixe}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function Step({ numero, titre, texte }: { numero: string; titre: string; texte: string }) {
  return (
    <div>
      <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-lime-400 text-sm font-black text-zinc-950">
        {numero}
      </span>
      <h3 className="mt-3 font-bold text-white">{titre}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{texte}</p>
    </div>
  );
}
