import Link from "next/link";
import type { Supplement } from "@/data/supplements";
import { ficheGlyph } from "@/lib/ficheGlyph";

export default function SupplementCard({ supplement }: { supplement: Supplement }) {
  return (
    <Link href={`/dictionnaire/${supplement.slug}`} className="fiche-card">
      <div className="fc-top">
        <span className="fc-glyph" aria-hidden="true">
          {ficheGlyph(supplement.nom)}
        </span>
        <span className="fc-cat">{supplement.categorie}</span>
      </div>
      <div className="fc-name">{supplement.nom}</div>
      <p className="fc-summary">{supplement.resume}</p>
      <div className="fc-dose">
        <span>{supplement.dosage.recommande}</span>
      </div>
    </Link>
  );
}
