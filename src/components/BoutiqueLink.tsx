import type { ReactNode } from "react";
import { affiliationLink, isMonetized } from "@/data/affiliations";

/**
 * Enveloppe un nom de boutique dans un lien affilié quand la boutique
 * est référencée dans src/data/affiliations.ts. Fallback en texte brut
 * si la boutique n'est pas configurée.
 *
 * Les liens vers un programme d'affiliation portent rel="sponsored"
 * (recommandation Google : divulgation publicitaire au moteur), plus
 * nofollow noopener noreferrer et target=_blank standard.
 */
export default function BoutiqueLink({
  boutique,
  url,
  className,
  children,
}: {
  boutique: string;
  url?: string;
  className?: string;
  children: ReactNode;
}) {
  const href = affiliationLink(boutique, url);
  if (!href) return <span className={className}>{children}</span>;
  const rel = isMonetized(boutique)
    ? "sponsored nofollow noopener noreferrer"
    : "noopener noreferrer";
  return (
    <a href={href} target="_blank" rel={rel} className={className}>
      {children}
    </a>
  );
}
