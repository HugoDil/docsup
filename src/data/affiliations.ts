/**
 * Configuration des liens affiliés par boutique.
 *
 * ÉTAT : les codes sont vides tant que Hugo ne s'est pas inscrit aux
 * programmes. Sans code, les liens boutique restent quand même
 * cliquables (renvoi vers la homepage du revendeur ou l'URL produit)
 * mais Docsup ne touche aucune commission.
 *
 * PROGRAMMES À SOUSCRIRE (personnel à Hugo, Claude ne peut pas créer
 * les comptes) — voir doc/AFFILIATIONS.md pour les URLs d'inscription :
 *
 *   FR — Newpharma, Nutrimuscle, Fitnessboutique, Pharma-gdd
 *   CA — Shop Santé, Popeye's, Well.ca, Jean Coutu, iHerb, Vitasave
 *   US — iHerb, Vitamin Shoppe, Life Extension, GNC
 *
 * iHerb utilise le même code rcode sur ca.iherb.com et iherb.com — un
 * seul programme couvre les deux régions.
 */

export interface AffiliationConfig {
  /** URL de la homepage du revendeur (fallback si un produit n'a pas d'URL) */
  homepage: string;
  /**
   * Fonction qui prend l'URL d'origine (produit ou homepage) et renvoie
   * l'URL wrappée avec le tag affilié. Retourne l'URL inchangée si le
   * code n'est pas encore configuré.
   */
  wrap: (url: string) => string;
}

/** Ajoute un paramètre de query string sans écraser un existant du même nom. */
function withParam(url: string, key: string, value: string | undefined): string {
  if (!value) return url;
  try {
    const u = new URL(url);
    if (!u.searchParams.has(key)) u.searchParams.set(key, value);
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * Codes affiliés — remplacer les chaînes vides par les vrais codes une
 * fois inscrit à chaque programme. Chaque code est nominatif (compte
 * bancaire/fiscal de Hugo) : ne jamais partager, ne jamais commiter
 * un code d'un compte tiers.
 */
const CODES = {
  iherb: "", // ex. "ABC123" — utilisé pour rcode=…
  newpharma: "", // ID Awin partenaire
  nutrimuscle: "", // ref= ou tracking Effiliation
  fitnessboutique: "",
  pharmagdd: "",
  shopsante: "",
  popeyes: "",
  wellca: "", // Rakuten Advertising
  jeancoutu: "",
  vitasave: "",
  vitaminshoppe: "", // Impact.com
  lifeextension: "", // CJ Affiliate
  gnc: "", // CJ Affiliate
};

const NOOP = (url: string) => url;

export const affiliations: Record<string, AffiliationConfig> = {
  // === FR ===
  Newpharma: {
    homepage: "https://www.newpharma.fr/",
    wrap: (url) => withParam(url, "utm_source", CODES.newpharma || undefined),
  },
  Nutrimuscle: {
    homepage: "https://www.nutrimuscle.com/",
    wrap: (url) => withParam(url, "ref", CODES.nutrimuscle || undefined),
  },
  Fitnessboutique: {
    homepage: "https://www.fitnessboutique.com/",
    wrap: (url) => withParam(url, "aff", CODES.fitnessboutique || undefined),
  },
  "Pharma-gdd": {
    homepage: "https://www.pharma-gdd.com/",
    wrap: (url) => withParam(url, "aff", CODES.pharmagdd || undefined),
  },

  // === CA ===
  "Shop Santé": {
    homepage: "https://shopsante.ca/",
    wrap: (url) => withParam(url, "ref", CODES.shopsante || undefined),
  },
  "Popeye's Suppléments": {
    homepage: "https://www.popeyescanada.com/",
    wrap: (url) => withParam(url, "ref", CODES.popeyes || undefined),
  },
  "Well.ca": {
    homepage: "https://well.ca/",
    wrap: (url) => withParam(url, "ranMID", CODES.wellca || undefined),
  },
  "Jean Coutu": {
    homepage: "https://www.jeancoutu.com/",
    wrap: (url) => withParam(url, "ref", CODES.jeancoutu || undefined),
  },
  Vitasave: {
    homepage: "https://vitasave.ca/",
    wrap: (url) => withParam(url, "ref", CODES.vitasave || undefined),
  },

  // === US ===
  "Vitamin Shoppe": {
    homepage: "https://www.vitaminshoppe.com/",
    wrap: (url) => withParam(url, "irclickid", CODES.vitaminshoppe || undefined),
  },
  "Life Extension": {
    homepage: "https://www.lifeextension.com/",
    wrap: (url) => withParam(url, "sourcecode", CODES.lifeextension || undefined),
  },
  GNC: {
    homepage: "https://www.gnc.com/",
    wrap: (url) => withParam(url, "cm_mmc", CODES.gnc || undefined),
  },

  // === Multi-région ===
  iHerb: {
    homepage: "https://www.iherb.com/",
    wrap: (url) => withParam(url, "rcode", CODES.iherb || undefined),
  },
};

/**
 * Renvoie l'URL affiliée à ouvrir pour une entrée de prix donnée.
 * - Si le produit a une URL directe : la wrappée.
 * - Sinon : la homepage de la boutique wrappée.
 * - Si la boutique n'est pas dans la config : retourne null (pas de lien).
 */
export function affiliationLink(boutique: string, url?: string): string | null {
  const cfg = affiliations[boutique];
  if (!cfg) return null;
  return cfg.wrap(url ?? cfg.homepage);
}

/**
 * Vrai si un vrai code affilié est configuré pour cette boutique.
 * Détermine si le lien doit porter rel="sponsored".
 */
export function isMonetized(boutique: string): boolean {
  const url = affiliationLink(boutique, undefined);
  if (!url) return false;
  return url !== affiliations[boutique].homepage;
}
