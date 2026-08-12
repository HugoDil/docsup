import { categories, type Categorie } from "@/data/supplements";

export function categoryIndex(categorie: Categorie): string {
  const i = categories.indexOf(categorie);
  return String(i + 1).padStart(2, "0");
}
