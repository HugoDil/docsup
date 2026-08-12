import { cataloguePrix, type CataloguePrix } from "@/data/prix";
import { getSupplementBySlug, type Supplement } from "@/data/supplements";
import CatalogueGrid from "@/components/CatalogueGrid";
import CountrySwitch from "@/components/CountrySwitch";

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
      <div className="cat-head grain">
        <div className="section-eyebrow">Catalogue · trié du moins cher au plus cher</div>
        <h1 className="cat-title">
          {entries.length} compléments vedettes,
          <br />
          <em>vrais prix chez les vraies boutiques</em>.
        </h1>
        <p className="cat-desc">
          Prix mis à jour manuellement. Aucun lien affilié. Le classement des boutiques est
          purement algorithmique : le moins cher apparaît en premier, point.
        </p>
        <CountrySwitch />
      </div>

      <div className="cat-grid">
        <CatalogueGrid entries={entries} />
        <p style={{ marginTop: 40, textAlign: "center", color: "var(--muted)", fontSize: 13 }}>
          D&apos;autres compléments et régions seront ajoutés au catalogue progressivement.
        </p>
      </div>
    </div>
  );
}
