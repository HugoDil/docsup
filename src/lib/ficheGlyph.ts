function normalize(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function tokenize(nom: string): string[] {
  return nom.split(/[\s-]+/).filter(Boolean);
}

/**
 * Separe un nom en {main, accent} quand le dernier mot est court (<=3
 * caracteres, ex. "Vitamine D" -> {main:"Vitamine", accent:"D"}) — sert a
 * la fois au glyphe decoratif et a l'italique d'accent du titre de fiche.
 */
export function splitAccent(nom: string): { main: string; accent?: string } {
  const tokens = tokenize(nom);
  if (tokens.length <= 1) return { main: nom };
  const last = tokens[tokens.length - 1];
  if (last.length > 3) return { main: nom };
  return { main: tokens.slice(0, -1).join(" "), accent: last };
}

/**
 * Courte abreviation decorative pour une fiche (ex. "Vitamine D" -> "D",
 * "Ashwagandha" -> "Ash") — pas des symboles chimiques reels.
 */
export function ficheGlyph(nom: string): string {
  const tokens = tokenize(nom);
  if (tokens.length === 0) return "?";
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
