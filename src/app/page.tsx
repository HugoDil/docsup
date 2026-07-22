import Link from "next/link";
import SupplementCard from "@/components/SupplementCard";
import Faq from "@/components/Faq";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";
import { categories, supplements } from "@/data/supplements";
import { categorieToSlug } from "@/lib/categorySlugs";

const features = [
  {
    icone: "recherche" as const,
    titre: "Recherche instantanée",
    texte: "Trouvez un complément par nom en quelques lettres, avec un aperçu direct de ses effets.",
  },
  {
    icone: "bouclier" as const,
    titre: "Mythes démontés",
    texte: "Chaque fiche compare une affirmation courante à ce que disent réellement les études.",
  },
  {
    icone: "balance" as const,
    titre: "Dosages vérifiés",
    texte: "Recommandé, maximum, et précautions à connaître — pas juste un chiffre isolé.",
  },
  {
    icone: "etiquette" as const,
    titre: "Comparateur de prix",
    texte: "Comparez plusieurs marques, du moins cher au plus cher, dans les boutiques de votre pays.",
  },
  {
    icone: "cadenas" as const,
    titre: "100% gratuit, sans compte",
    texte: "Tout le contenu est accessible librement, sans inscription ni paywall.",
  },
  {
    icone: "actualiser" as const,
    titre: "Mis à jour régulièrement",
    texte: "De nouveaux compléments et de nouvelles régions de prix ajoutés au fil du temps.",
  },
];

export default function Home() {
  const populaires = supplements.filter((s) => s.vedette).slice(0, 6);
  const magnesium = supplements.find((s) => s.slug === "magnesium")!;

  return (
    <div>
      {/* Hero — dark bookend avec halo lumineux */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-lime-500/20 via-emerald-500/15 to-transparent blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-sm bg-lime-400 px-3 py-1 text-xs font-black uppercase tracking-wide text-zinc-950">
                {supplements.length} compléments référencés
              </span>
              <h1 className="mx-auto mt-6 max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:mx-0">
                Comprendre les compléments alimentaires,{" "}
                <span className="text-lime-400">sans jargon</span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 lg:mx-0">
                Docsup explique les effets, les mythes et les dosages des vitamines, minéraux et
                autres compléments — que vous soyez sportif, végétarien, ou simplement curieux de
                combler une carence.
              </p>
              <div className="mt-9 flex justify-center gap-4 lg:justify-start">
                <Link
                  href="/dictionnaire"
                  className="rounded-sm bg-lime-400 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-zinc-950 transition-colors hover:bg-lime-300"
                >
                  Explorer le dictionnaire
                </Link>
              </div>
            </div>

            {/* Carte flottante — aperçu */}
            <div className="hidden justify-self-center lg:block">
              <div className="w-72 rotate-2 rounded-3xl bg-white p-5 shadow-[0_25px_50px_-12px_rgba(163,230,53,0.25)] transition-transform hover:rotate-0">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${categoryStyles[magnesium.categorie].solid} text-white`}
                  >
                    <CategoryIcon categorie={magnesium.categorie} className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-black text-zinc-900">{magnesium.nom}</p>
                    <p className="text-xs text-zinc-500">{magnesium.categorie}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl bg-zinc-50 p-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                    Dosage recommandé
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-800">
                    {magnesium.dosage.recommande}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-xl bg-lime-50 p-3">
                  <span className="text-xs font-black uppercase tracking-wide text-lime-700">
                    Moins cher
                  </span>
                  <span className="font-black text-zinc-900">6,15€</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/10 px-6">
            <Stat nombre={supplements.length} label="Compléments" />
            <Stat nombre={categories.length} label="Catégories" />
            <Stat nombre={100} suffixe="%" label="Gratuit" />
          </div>
        </div>
      </section>

      {/* Le problème */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-wide text-lime-600 dark:text-lime-400">
              Le problème
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-zinc-900 dark:text-zinc-50">
              La plupart des sites sur les compléments vendent quelque chose.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Classements sponsorisés, avis payés, dosages présentés pour flatter une marque plutôt
            que pour informer... Docsup ne vend aucun complément. Le contenu explique ce que dit
            la recherche, démonte les mythes marketing, et le comparateur de prix trie
            uniquement du moins cher au plus cher — jamais de classement payé pour apparaître en
            premier.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Tout ce qu&apos;il faut, rien de plus.
        </h2>
        <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
          Conçu pour rester simple à consulter — pas un jargon scientifique qui demande un
          diplôme pour le comprendre.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.titre} className="group">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-500 transition-all group-hover:bg-lime-400 group-hover:text-zinc-950 dark:bg-zinc-900 dark:text-zinc-400">
                <FeatureIcon nom={f.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-black text-zinc-900 dark:text-zinc-50">{f.titre}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {f.texte}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category nav */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
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
      <section className="mx-auto max-w-5xl px-6 pb-20">
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

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Questions fréquentes
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Tout ce qu&apos;il faut savoir avant de commencer.
        </p>
        <div className="mt-8">
          <Faq />
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-lg bg-zinc-950 p-10 text-center sm:p-14">
          <h2 className="text-3xl font-black tracking-tight text-white">
            Prêt à comprendre vos compléments ?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-400">
            {supplements.length} fiches, gratuites, sans compte, sans jargon.
          </p>
          <Link
            href="/dictionnaire"
            className="mt-7 inline-block rounded-sm bg-lime-400 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-zinc-950 transition-colors hover:bg-lime-300"
          >
            Explorer le dictionnaire
          </Link>
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

const featurePaths: Record<string, React.ReactNode> = {
  recherche: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  bouclier: <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Zm-1.5 11.5L8 11l1.4-1.4 1.1 1.1L14.6 7l1.4 1.4Z" />,
  balance: (
    <>
      <path d="M12 3v18M6 7h12M6 7l-3 6a3.5 3.5 0 0 0 6 0Zm12 0l-3 6a3.5 3.5 0 0 0 6 0Z" />
    </>
  ),
  etiquette: (
    <>
      <path d="M3 3h8l10 10-8 8L3 11Z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  cadenas: (
    <>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0" />
    </>
  ),
  actualiser: (
    <>
      <path d="M4 4v5h5M20 20v-5h-5" />
      <path d="M5.5 15A8 8 0 0 0 20 12M18.5 9A8 8 0 0 0 4 12" />
    </>
  ),
};

function FeatureIcon({ nom, className }: { nom: keyof typeof featurePaths; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {featurePaths[nom]}
    </svg>
  );
}
