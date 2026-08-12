import Link from "next/link";
import Faq from "@/components/Faq";
import { categoryIndex } from "@/components/CategoryIcon";
import { PrixBottle, PrixPopRow } from "@/components/PrixInline";
import { categories, supplements } from "@/data/supplements";
import { cataloguePrix } from "@/data/prix";
import { regions } from "@/lib/regionsData";
import { categorieToSlug } from "@/lib/categorySlugs";

const principes = [
  {
    titre: "Zéro lien affilié",
    texte: "Aucune boutique ne nous rémunère. Ni pour être listée, ni pour être classée en tête.",
  },
  {
    titre: "Tri par prix, point.",
    texte: "Le comparateur ordonne du moins cher au plus cher — jamais selon un accord commercial.",
  },
  {
    titre: "Information et commerce séparés",
    texte:
      "Le dictionnaire dit ce que la recherche dit. Le catalogue dit combien ça coûte. Les deux ne se contaminent pas.",
  },
  {
    titre: "Gratuit, sans compte",
    texte: "Pas de mur, pas de newsletter forcée, pas de pistage publicitaire.",
  },
];

const boutiques = new Set(cataloguePrix.flatMap((c) => c.produits.map((p) => p.boutique))).size;

export default function Home() {
  const vedette = supplements.filter((s) => s.vedette);
  const phare = supplements.find((s) => s.slug === "vitamine-d") ?? vedette[0];

  return (
    <div>
      {/* Hero */}
      <section className="hero grain">
        <div className="hero-eyebrow">
          <span className="pip" aria-hidden="true" />
          {supplements.length} fiches · {boutiques} boutiques comparées · sans lien affilié
        </div>
        <h1>
          Ce qu&apos;il faut <em>vraiment</em> savoir
          <br />
          avant d&apos;acheter un complément.
        </h1>
        <p className="lead">
          Un dictionnaire indépendant de la vitamine D à l&apos;ashwagandha. Résumé, bienfaits, dosage,
          sources, mythes — et le prix réel dans plusieurs boutiques, trié uniquement du moins cher au
          plus cher.
        </p>
        <div className="hero-ctas">
          <Link href="/dictionnaire" className="cta-primary">
            Ouvrir le dictionnaire <span className="mono">→</span>
          </Link>
          <Link href="/catalogue" className="cta-ghost">
            Comparer les prix
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="num">{supplements.length}</div>
            <div className="lbl">fiches</div>
          </div>
          <div className="stat">
            <div className="num">{cataloguePrix.length}</div>
            <div className="lbl">comparés en prix</div>
          </div>
          <div className="stat">
            <div className="num">{regions.length}</div>
            <div className="lbl">pays · {regions.map((r) => r.code).join(" · ")}</div>
          </div>
          <div className="stat">
            <div className="num">
              0<span style={{ color: "var(--muted)", fontSize: 22 }}> €</span>
            </div>
            <div className="lbl">sponsors</div>
          </div>
        </div>

        {phare && (
          <div className="hero-obj">
            <div className="hero-halo" aria-hidden="true" />
            <div className="bottle-wrap">
              <div className="bottle">
                <div className="bottle-cap" />
                <div className="bottle-neck" />
                <div className="bottle-body">
                  <div className="bottle-label">
                    <div className="kicker">DOCSUP · {phare.categorie.toUpperCase()}</div>
                    <div className="name">{phare.nom}</div>
                    <div className="dose">
                      {phare.dosage.recommande}
                      <PrixBottle slug={phare.slug} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Manifeste */}
      <div className="manifest">
        <div className="col-l">
          <div className="num">01 — Principe</div>
          <h2 className="headline">
            La quasi-totalité des sites sur les compléments <em>vendent</em> quelque chose.
            <br />
            Nous, non.
          </h2>
        </div>
        <div className="principles">
          {principes.map((p, i) => (
            <div key={p.titre} className="principle">
              <div className="idx">→ {String(i + 1).padStart(2, "0")}</div>
              <div>
                <h4>{p.titre}</h4>
                <p>{p.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Catégories */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">02 — Explorer</div>
            <h3 className="section-title">
              Cinq familles, <em>{supplements.length} fiches</em>.
            </h3>
          </div>
          <p className="section-sub">
            Chaque famille rassemble des molécules ou plantes qui partagent une mécanique proche. On
            commence par la famille, on descend jusqu&apos;au composé, on regarde les preuves et les doses.
          </p>
        </div>
        <div className="cats">
          {categories.map((c) => {
            const count = supplements.filter((s) => s.categorie === c).length;
            return (
              <Link key={c} href={`/dictionnaire?categorie=${categorieToSlug[c]}`} className="cat">
                <div className="cat-tag">{categoryIndex(c)}</div>
                <div>
                  <div className="cat-count">{String(count).padStart(2, "0")}</div>
                </div>
                <div className="cat-name">{c}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Plus consultés */}
      <section id="populaires" className="section">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">03 — Les plus consultés</div>
            <h3 className="section-title">
              Ce que les gens cherchent, <em>en ce moment</em>.
            </h3>
          </div>
          <p className="section-sub">
            Une sélection de fiches parmi les plus complètes du dictionnaire. Aucun paiement pour
            apparaître ici.
          </p>
        </div>
        <div className="pop">
          {vedette.map((s, i) => (
            <Link key={s.slug} href={`/dictionnaire/${s.slug}`} className="pop-row">
              <span className="r-idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <div className="r-name">
                  {s.nom}
                  <div className="sub">{s.resume}</div>
                </div>
              </div>
              <span className="r-tag">{s.categorie}</span>
              <span className="r-dose">{s.dosage.recommande}</span>
              <span className="r-price">
                <PrixPopRow slug={s.slug} />
              </span>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">04 — Questions honnêtes</div>
            <h3 className="section-title">
              Ce qu&apos;on vous doit <em>avant</em> que vous cliquiez.
            </h3>
          </div>
        </div>
        <div className="faq">
          <div>
            <p style={{ maxWidth: 340, fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}>
              Docsup n&apos;est pas un site médical. On documente, on référence, on compare — vous
              décidez avec votre médecin.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </div>
  );
}
