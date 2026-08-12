import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupplementBySlug, supplements } from "@/data/supplements";
import { getPrixBySlug } from "@/data/prix";
import PriceTable from "@/components/PriceTable";
import { PrixFicheQuick } from "@/components/PrixInline";
import { categorieToSlug } from "@/lib/categorySlugs";
import { ficheGlyph, splitAccent } from "@/lib/ficheGlyph";

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

  const catalogue = getPrixBySlug(supplement.slug);
  const similaires = supplements
    .filter((s) => s.categorie === supplement.categorie && s.slug !== supplement.slug)
    .slice(0, 3);
  const { main, accent } = splitAccent(supplement.nom);

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

  const quick = [
    { lbl: "Dose recommandée", val: supplement.dosage.recommande },
    { lbl: "Limite supérieure", val: supplement.dosage.maximum },
  ];
  const quickCols = catalogue ? 3 : 2;

  const toc = [
    { id: "description", label: "01 · Description" },
    ...(supplement.bienfaits.length > 0 ? [{ id: "bienfaits", label: "02 · Bienfaits" }] : []),
    { id: "dosage", label: "03 · Dosage" },
    ...(supplement.sourcesAlimentaires.length > 0
      ? [{ id: "sources", label: "04 · Sources alimentaires" }]
      : []),
    ...(supplement.mythes.length > 0 ? [{ id: "mythes", label: "05 · Mythes" }] : []),
    ...(similaires.length > 0 ? [{ id: "similaires", label: "06 · Similaires" }] : []),
  ];

  return (
    <div className="fiche">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="fiche-hero grain" style={!catalogue ? { gridTemplateColumns: "1fr" } : undefined}>
        <div>
          <nav className="fiche-breadcrumb">
            <Link href="/dictionnaire">Dictionnaire</Link>
            <span className="sep">/</span>
            <Link href={`/dictionnaire?categorie=${categorieToSlug[supplement.categorie]}`}>
              {supplement.categorie}
            </Link>
            <span className="sep">/</span>
            <span style={{ color: "var(--ink)" }}>{supplement.nom}</span>
          </nav>
          <div className="section-eyebrow">
            {ficheGlyph(supplement.nom)} · {supplement.categorie}
          </div>
          <h1 className="fiche-name">
            {main} {accent && <em>{accent}</em>}
          </h1>
          {supplement.nomsAlternatifs && supplement.nomsAlternatifs.length > 0 && (
            <div className="fiche-latin">{supplement.nomsAlternatifs.join(" · ")}</div>
          )}
          <p className="fiche-lede">{supplement.resume}</p>
          <div className="fiche-quick" style={{ gridTemplateColumns: `repeat(${quickCols}, 1fr)` }}>
            {quick.map((q) => (
              <div key={q.lbl}>
                <div className="lbl">{q.lbl}</div>
                <div className="val">{q.val}</div>
              </div>
            ))}
            {catalogue && <PrixFicheQuick slug={supplement.slug} />}
          </div>
        </div>
        {catalogue && (
          <aside className="fiche-aside">
            <PriceTable catalogue={catalogue} />
          </aside>
        )}
      </div>

      <div className="fiche-body">
        <nav className="fiche-toc">
          <h6>Sommaire</h6>
          {toc.map((t) => (
            <a key={t.id} href={`#${t.id}`}>
              {t.label}
            </a>
          ))}
        </nav>

        <div className="fiche-content">
          <div className="fiche-section" id="description">
            <h3>01 — Description</h3>
            <p>
              <span className="drop">{supplement.description.charAt(0)}</span>
              {supplement.description.slice(1)}
            </p>
          </div>

          {supplement.bienfaits.length > 0 && (
            <div className="fiche-section" id="bienfaits">
              <h3>02 — Bienfaits documentés</h3>
              <div className="benefits">
                {supplement.bienfaits.map((b, i) => (
                  <div key={b} className="benefit">
                    <div className="idx">→ {String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <h5>{b}</h5>
                    </div>
                  </div>
                ))}
              </div>
              {supplement.signesDeCarence.length > 0 && (
                <p className="fiche-note">
                  Signes de carence possibles : {supplement.signesDeCarence.join(", ")}.
                </p>
              )}
            </div>
          )}

          <div className="fiche-section" id="dosage">
            <h3>03 — Dosage</h3>
            <table className="dose-table">
              <thead>
                <tr>
                  <th>Population</th>
                  <th>Recommandé</th>
                  <th>Limite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{supplement.publicConcerne.join(", ") || "Population générale"}</td>
                  <td className="big">{supplement.dosage.recommande}</td>
                  <td className="big">{supplement.dosage.maximum}</td>
                </tr>
              </tbody>
            </table>
            {supplement.dosage.remarque && (
              <p className="fiche-note">Remarque — {supplement.dosage.remarque}</p>
            )}
          </div>

          {supplement.sourcesAlimentaires.length > 0 && (
            <div className="fiche-section" id="sources">
              <h3>04 — Sources alimentaires</h3>
              <div className="food-sources">
                {supplement.sourcesAlimentaires.map((s) => (
                  <span key={s} className="food">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {supplement.mythes.length > 0 && (
            <div className="fiche-section" id="mythes">
              <h3>05 — Mythes</h3>
              {supplement.mythes.map((m) => (
                <div key={m.affirmation} className="myth">
                  <p className="claim">{m.affirmation}</p>
                  <span className="verdict">Faux</span>
                  <p>{m.realite}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {similaires.length > 0 && (
          <aside id="similaires">
            <h6
              style={{
                font: "500 10px var(--font-mono), monospace",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--muted)",
                margin: "0 0 16px",
              }}
            >
              À explorer aussi
            </h6>
            {similaires.map((s) => (
              <Link
                key={s.slug}
                href={`/dictionnaire/${s.slug}`}
                style={{
                  display: "block",
                  padding: "16px 0",
                  borderTop: "1px solid var(--line)",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>
                  {s.nom}
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{s.resume}</div>
              </Link>
            ))}
          </aside>
        )}
      </div>
    </div>
  );
}
