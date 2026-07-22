import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupplementBySlug, supplements } from "@/data/supplements";
import { getPrixBySlug } from "@/data/prix";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";
import SupplementCard from "@/components/SupplementCard";
import PriceTable from "@/components/PriceTable";
import { categorieToSlug } from "@/lib/categorySlugs";

export function generateStaticParams() {
  return supplements.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplement = getSupplementBySlug(slug);
  if (!supplement) return {};
  return {
    title: supplement.nom,
    description: supplement.resume,
    openGraph: { title: supplement.nom, description: supplement.resume },
  };
}

export default async function SupplementPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplement = getSupplementBySlug(slug);
  if (!supplement) notFound();

  const style = categoryStyles[supplement.categorie];
  const catalogue = getPrixBySlug(supplement.slug);
  const similaires = supplements
    .filter((s) => s.categorie === supplement.categorie && s.slug !== supplement.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DietarySupplement",
    name: supplement.nom,
    alternateName: supplement.nomsAlternatifs,
    description: supplement.description,
    category: supplement.categorie,
    recommendedIntake: supplement.dosage.recommande,
    maximumIntake: supplement.dosage.maximum,
    targetPopulation: supplement.publicConcerne.join(", "),
    safetyConsideration: supplement.dosage.remarque,
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <Link href="/dictionnaire" className="hover:text-zinc-900 dark:hover:text-white">
          Dictionnaire
        </Link>
        <span>›</span>
        <Link
          href={`/dictionnaire?categorie=${categorieToSlug[supplement.categorie]}`}
          className={`hover:underline ${style.text}`}
        >
          {supplement.categorie}
        </Link>
        <span>›</span>
        <span className="text-zinc-700 dark:text-zinc-300">{supplement.nom}</span>
      </nav>

      <div className="mt-5 flex items-start gap-4">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-md ${style.solid} text-white`}
        >
          <CategoryIcon categorie={supplement.categorie} className="h-8 w-8" />
        </span>
        <div>
          <span
            className={`inline-block w-fit rounded-sm px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${style.solid} text-white`}
          >
            {supplement.categorie}
          </span>
          <h1 className="mt-1.5 text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
            {supplement.nom}
          </h1>
          {supplement.nomsAlternatifs && supplement.nomsAlternatifs.length > 0 && (
            <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
              Aussi appelé : {supplement.nomsAlternatifs.join(", ")}
            </p>
          )}
        </div>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {supplement.description}
      </p>

      {/* En bref */}
      <div className={`mt-8 grid gap-4 rounded-lg border-2 bg-white p-6 dark:bg-zinc-900 sm:grid-cols-2 ${style.border.replace("hover:", "")}`}>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Dosage recommandé
          </p>
          <p className="mt-1 font-bold text-zinc-900 dark:text-zinc-50">
            {supplement.dosage.recommande}
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Qui est concerné
          </p>
          <p className="mt-1 text-zinc-700 dark:text-zinc-300">
            {supplement.publicConcerne[0]}
            {supplement.publicConcerne.length > 1 ? ", ..." : ""}
          </p>
        </div>
      </div>

      {/* Navigation rapide */}
      <nav className="mt-8 flex flex-wrap gap-2">
        {catalogue && (
          <a
            href="#comparatif-prix"
            className="rounded-sm bg-zinc-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            💶 Prix
          </a>
        )}
        <a href="#bienfaits" className="rounded-sm bg-zinc-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
          ✅ Bienfaits
        </a>
        <a href="#dosage" className="rounded-sm bg-zinc-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
          💊 Dosage
        </a>
        {supplement.mythes.length > 0 && (
          <a href="#mythes" className="rounded-sm bg-zinc-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
            🚫 Mythes
          </a>
        )}
      </nav>

      {catalogue && (
        <Section id="comparatif-prix" titre="Comparatif de prix" icone="💶">
          <PriceTable catalogue={catalogue} />
        </Section>
      )}

      <Section id="bienfaits" titre="Bienfaits" icone="✅">
        <ul className="list-disc space-y-1 pl-5">
          {supplement.bienfaits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Section>

      <Section id="carence" titre="Signes de carence possibles" icone="⚠️">
        <ul className="list-disc space-y-1 pl-5">
          {supplement.signesDeCarence.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section id="public" titre="Qui est le plus concerné ?" icone="👥">
        <ul className="list-disc space-y-1 pl-5">
          {supplement.publicConcerne.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </Section>

      <Section id="dosage" titre="Dosage" icone="💊">
        <dl className="space-y-2">
          <div>
            <dt className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Recommandé
            </dt>
            <dd>{supplement.dosage.recommande}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
              Maximum
            </dt>
            <dd>{supplement.dosage.maximum}</dd>
          </div>
          {supplement.dosage.remarque && (
            <p className="mt-2 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-900/20 dark:text-amber-200">
              {supplement.dosage.remarque}
            </p>
          )}
        </dl>
      </Section>

      <Section id="sources" titre="Sources alimentaires" icone="🥗">
        <ul className="list-disc space-y-1 pl-5">
          {supplement.sourcesAlimentaires.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      {supplement.mythes.length > 0 && (
        <Section id="mythes" titre="Mythes vs réalité" icone="🚫">
          <div className="space-y-4">
            {supplement.mythes.map((m) => (
              <div
                key={m.affirmation}
                className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <p className="text-sm font-semibold text-red-700 dark:text-red-400">
                  Mythe : {m.affirmation}
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  Réalité : {m.realite}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {similaires.length > 0 && (
        <section className="mt-14 border-t-2 border-zinc-200 pt-8 dark:border-zinc-800">
          <h2 className="mb-4 text-lg font-black text-zinc-900 dark:text-zinc-50">
            À lire aussi dans « {supplement.categorie} »
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {similaires.map((s) => (
              <SupplementCard key={s.slug} supplement={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Section({
  titre,
  icone,
  children,
  id,
}: {
  titre: string;
  icone: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="mt-8 scroll-mt-24">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-black text-zinc-900 dark:text-zinc-50">
        <span aria-hidden="true">{icone}</span> {titre}
      </h2>
      <div className="leading-relaxed text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}
