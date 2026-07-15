import type { Categorie } from "@/data/supplements";

export const categorieToSlug: Record<Categorie, string> = {
  Vitamine: "vitamine",
  Minéral: "mineral",
  "Acide gras": "acide-gras",
  "Plante & adaptogène": "plante",
  Autre: "autre",
};

export const slugToCategorie: Record<string, Categorie> = Object.fromEntries(
  Object.entries(categorieToSlug).map(([categorie, slug]) => [slug, categorie as Categorie])
);
