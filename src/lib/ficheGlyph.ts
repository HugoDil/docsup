function normalize(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/**
 * Courte abreviation decorative pour une fiche (ex. "Vitamine D" -> "D",
 * "Ashwagandha" -> "Ash") — pas des symboles chimiques reels.
 */
export function ficheGlyph(nom: string): string {
  const tokens = nom.split(/[\s-]+/).filter(Boolean);
  const last = tokens[tokens.length - 1];

  if (tokens.length > 1 && last.length <= 3) {
    if (/^\d+$/.test(last)) {
      const prevInitial = normalize(tokens[tokens.length - 2])
        .replace(/[^a-zA-Z]/g, "")
        .slice(0, 1)
        .toUpperCase();
      return `${prevInitial}${last}`;
    }
    return last.toUpperCase();
  }

  const base = normalize(tokens[0]).replace(/[^a-zA-Z]/g, "");
  return base.slice(0, 1).toUpperCase() + base.slice(1, 3).toLowerCase();
}
