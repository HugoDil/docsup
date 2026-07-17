import type { Region } from "@/lib/region";

export interface ProduitPrix {
  marque: string;
  nom: string;
  contenance: string;
  prix: number;
  prixBarre?: number;
  boutique: string;
  region: Region;
}

export interface CataloguePrix {
  slug: string;
  dateReleve: string;
  produits: ProduitPrix[];
}

export const cataloguePrix: CataloguePrix[] = [
  {
    slug: "vitamine-d",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Solgar", nom: "Vitamine D3 1000IU/25µg", contenance: "90 comprimés", prix: 11.69, boutique: "Newpharma", region: "FR" },
      { marque: "Deba", nom: "Vitamine D3 Forte", contenance: "flacon 20ml", prix: 14.99, prixBarre: 16.52, boutique: "Newpharma", region: "FR" },
      { marque: "Granions", nom: "Vitamine D3 2000UI 4 Mois", contenance: "30 comprimés à croquer", prix: 14.89, prixBarre: 17.82, boutique: "Newpharma", region: "FR" },
      { marque: "Newpharma", nom: "Vitamine D3 3000 UI", contenance: "180 gélules", prix: 20.45, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "XPN", nom: "Vitamine D3 2000iu", contenance: "120 gélules", prix: 14.99, boutique: "Shop Santé", region: "QC" },
      { marque: "NIH", nom: "Vitamine D3", contenance: "120 gélules", prix: 15.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Nova Pharma", nom: "Vitamine D3", contenance: "240 gélules", prix: 21.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Vitamine D3", contenance: "300 gélules", prix: 24.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "magnesium",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Nat&Form", nom: "Bisglycinate De Magnésium", contenance: "90 gélules", prix: 8.99, boutique: "Newpharma", region: "FR" },
      { marque: "Arkopharma", nom: "Arkomag Magnésium Vitamine B6", contenance: "120 gélules", prix: 6.15, prixBarre: 9.36, boutique: "Newpharma", region: "FR" },
      { marque: "Mag2", nom: "24H Nervosité/Fatigue", contenance: "3x40 comprimés", prix: 15.65, boutique: "Newpharma", region: "FR" },
      { marque: "Newpharma", nom: "Magnésium + Vitamine B6", contenance: "120 gélules", prix: 17.35, boutique: "Newpharma", region: "FR" },
      { marque: "Granions", nom: "Magnésium Marin + Bisglycinate 360mg", contenance: "180 comprimés (format éco 6 mois)", prix: 15.19, prixBarre: 21.8, boutique: "Newpharma", region: "FR" },
      { marque: "Nutergia", nom: "Ergymag", contenance: "180 gélules", prix: 25.89, prixBarre: 39.71, boutique: "Newpharma", region: "FR" },
      { marque: "NHCO Nutrition", nom: "Magnésium Amino Chélaté", contenance: "84 gélules", prix: 21.89, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "XPN", nom: "Mag-4", contenance: "90 capsules", prix: 19.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Believe Supplements", nom: "Vitamine B6 + Magnesium", contenance: "120 capsules", prix: 21.24, prixBarre: 24.99, boutique: "Shop Santé", region: "QC" },
      { marque: "XPN", nom: "Magnésium Glycinate", contenance: "120 capsules", prix: 24.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Nova Pharma", nom: "Mg-Pro Complexe de Magnésium", contenance: "90 capsules", prix: 24.99, boutique: "Shop Santé", region: "QC" },
      { marque: "ATP Lab", nom: "Synermag", contenance: "90 capsules", prix: 27.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Magnésium", contenance: "150 capsules", prix: 34.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "omega-3",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Newpharma", nom: "Oméga 3 EPA 210mg/DHA 140mg", contenance: "90 gélules", prix: 17.79, boutique: "Newpharma", region: "FR" },
      { marque: "Nutrimuscle", nom: "Oméga 3 Epax®", contenance: "60 capsules", prix: 17.95, boutique: "Nutrimuscle", region: "FR" },
      { marque: "Arkopharma", nom: "Arkogélules Oméga 3 Origine Marine", contenance: "180 gélules", prix: 16.19, prixBarre: 22.49, boutique: "Newpharma", region: "FR" },
      { marque: "Nutri&Co", nom: "Oméga3 Huile De Poissons Sauvages EPAX", contenance: "120 gélules", prix: 19.89, boutique: "Newpharma", region: "FR" },
      { marque: "Granions", nom: "Oméga 3 1000mg Cerveau/Cœur/Vision", contenance: "60 capsules", prix: 19.65, prixBarre: 24.78, boutique: "Newpharma", region: "FR" },
      { marque: "Nutergia", nom: "Ergy 3", contenance: "180 gélules", prix: 27.99, prixBarre: 37.72, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "Nova Pharma", nom: "Oméga 3", contenance: "180 gélules", prix: 24.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Oméga 3", contenance: "180 gélules", prix: 24.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Allmax", nom: "Omega-3 Ultra", contenance: "180 capsules", prix: 24.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Believe Supplements", nom: "Omega-3", contenance: "120 gélules", prix: 31.44, prixBarre: 36.99, boutique: "Shop Santé", region: "QC" },
      { marque: "XPN", nom: "Omega-3 EPA+DHA", contenance: "120 gélules", prix: 33.99, boutique: "Shop Santé", region: "QC" },
      { marque: "AKTIV", nom: "Omega 3", contenance: "120 capsules", prix: 49.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "creatine",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Nutrimuscle", nom: "Créatine (Creapure®) en gélules", contenance: "90 gélules (30 doses)", prix: 14.95, boutique: "Nutrimuscle", region: "FR" },
      { marque: "Nutrimuscle", nom: "Créatine (Creapure®) en poudre", contenance: "90 g (30 doses)", prix: 16.95, boutique: "Nutrimuscle", region: "FR" },
      { marque: "QNT", nom: "Creatine Monohydrate 3000mg", contenance: "200 comprimés", prix: 16.19, prixBarre: 18.86, boutique: "Newpharma", region: "FR" },
      { marque: "Nutri&Co", nom: "Créatine Monohydrate Creapure 100% Pure", contenance: "300 g poudre", prix: 29.99, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "Basic", nom: "Creatine", contenance: "300 g", prix: 9.99, prixBarre: 17.99, boutique: "Popeye's Suppléments", region: "QC" },
      { marque: "Believe Supplements", nom: "Créatine Micronisée", contenance: "300 g", prix: 15.29, prixBarre: 17.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Essentiel Créatine", contenance: "500 g", prix: 18.99, prixBarre: 39.99, boutique: "Shop Santé", region: "QC" },
      { marque: "PVL", nom: "100% Pure Creatine", contenance: "300 g", prix: 19.99, boutique: "Popeye's Suppléments", region: "QC" },
      { marque: "TC Nutrition", nom: "Créatine", contenance: "450 g", prix: 29.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Allmax", nom: "Creatine Monohydrate", contenance: "400 g", prix: 29.99, boutique: "Popeye's Suppléments", region: "QC" },
      { marque: "Nova Pharma", nom: "Créatine", contenance: "500 g", prix: 34.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "proteine-en-poudre",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "QNT", nom: "Light Digest Whey Protein", contenance: "500 g", prix: 16.29, prixBarre: 19.9, boutique: "Newpharma", region: "FR" },
      { marque: "Nutrimuscle", nom: "Isolate Native Whey Mix - Musclewhey", contenance: "1 kg", prix: 27.95, boutique: "Nutrimuscle", region: "FR" },
      { marque: "Purasana", nom: "Protéines Whey 80% Bio", contenance: "400 g", prix: 22.99, prixBarre: 26.82, boutique: "Newpharma", region: "FR" },
      { marque: "Nutri&Co", nom: "Protéines Whey Isolat Native 94%", contenance: "1 kg", prix: 57.99, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "Shop Santé", nom: "Protéine Whey", contenance: "1 lb", prix: 29.03, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Protéine Isolate", contenance: "1 lb", prix: 34.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Proteinco", nom: "Whey", contenance: "2.2 lbs", prix: 64.95, boutique: "Shop Santé", region: "QC" },
      { marque: "PVL", nom: "Whey Gold", contenance: "6 lbs", prix: 79.99, boutique: "Popeye's Suppléments", region: "QC" },
      { marque: "Yummy Sports", nom: "ISO 100% Protéine Isolate", contenance: "2 lbs", prix: 69.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Biox", nom: "Power Whey Complex", contenance: "5 lb", prix: 89.99, boutique: "Popeye's Suppléments", region: "QC" },
    ],
  },
  {
    slug: "vitamine-c",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "UPSA", nom: "Vitamine C 1000mg Adulte", contenance: "20 comprimés à croquer", prix: 4.9, boutique: "Newpharma", region: "FR" },
      { marque: "Nutrimuscle", nom: "Vitamine C Quali®C en gélules", contenance: "format standard", prix: 7.95, boutique: "Nutrimuscle", region: "FR" },
      { marque: "Granions", nom: "Vitamine C Liposomale 1000mg", contenance: "60 comprimés", prix: 11.65, prixBarre: 17.82, boutique: "Newpharma", region: "FR" },
      { marque: "Newpharma", nom: "Vitamine C 500mg", contenance: "120 gélules", prix: 16.93, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "XPN", nom: "Vitamine C", contenance: "180 capsules", prix: 21.99, boutique: "Shop Santé", region: "QC" },
      { marque: "ATP Lab", nom: "Syner-C", contenance: "90 capsules", prix: 25.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "ashwagandha",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Physalis", nom: "Ashwagandha Forte Bio", contenance: "30 comprimés", prix: 11.69, prixBarre: 15.42, boutique: "Newpharma", region: "FR" },
      { marque: "Arkopharma", nom: "Arkogélules Ashwagandha Bio", contenance: "60 gélules", prix: 15.19, prixBarre: 21.01, boutique: "Newpharma", region: "FR" },
      { marque: "Newpharma", nom: "Ashwagandha Bio 250mg", contenance: "90 gélules", prix: 17.82, boutique: "Newpharma", region: "FR" },
      { marque: "Solgar", nom: "Ashwagandha Root Extract", contenance: "60 gélules végétales", prix: 21.79, prixBarre: 28.22, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "Goli", nom: "Ashwagandha", contenance: "60 gummies", prix: 19.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Allmax", nom: "KSM66 Ashwagandha", contenance: "60 capsules", prix: 19.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Girl Power", nom: "HERcalm Ashwagandha", contenance: "60 jujubes", prix: 13.99, prixBarre: 22.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Ashwagandha", contenance: "150 capsules", prix: 39.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "vitamine-b12",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Lucovitaal", nom: "Vitamine B12 1000mcg", contenance: "60 comprimés", prix: 8.39, prixBarre: 10.94, boutique: "Newpharma", region: "FR" },
      { marque: "Solgar", nom: "Vitamine B12 100mcg", contenance: "100 comprimés", prix: 8.59, prixBarre: 9.8, boutique: "Newpharma", region: "FR" },
      { marque: "Newpharma", nom: "Vitamine B9 + B12", contenance: "90 gélules", prix: 12.65, boutique: "Newpharma", region: "FR" },
      { marque: "Solgar", nom: "Vitamine B12 1000mcg", contenance: "100 comprimés à croquer", prix: 13.75, prixBarre: 18.56, boutique: "Newpharma", region: "FR" },
      { marque: "Granions", nom: "Vitamine B12 Méthylcobalamine 1200µg", contenance: "180 comprimés", prix: 14.19, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "XPN", nom: "Pure B (complexe B12)", contenance: "90 capsules", prix: 22.99, boutique: "Shop Santé", region: "QC" },
      { marque: "ATP Lab", nom: "Methyl Syner-B (complexe B12)", contenance: "60 capsules", prix: 30.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Complexe B (dont B12)", contenance: "150 capsules", prix: 34.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "zinc",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Granions", nom: "Zinc 15mg Défenses Immunitaires", contenance: "60 gélules", prix: 8.16, prixBarre: 12.84, boutique: "Newpharma", region: "FR" },
      { marque: "PiLeJe", nom: "Forzinc", contenance: "60 comprimés", prix: 9.39, prixBarre: 12.84, boutique: "Newpharma", region: "FR" },
      { marque: "Pure", nom: "Zinc 22.5mg Bisglycinate De Zinc", contenance: "60 comprimés", prix: 9.75, prixBarre: 13.39, boutique: "Newpharma", region: "FR" },
      { marque: "Solgar", nom: "Zinc Picolinate 22mg", contenance: "100 comprimés", prix: 12.79, prixBarre: 15.88, boutique: "Newpharma", region: "FR" },
      { marque: "Newpharma", nom: "Zinc + Vitamine B6", contenance: "90 gélules", prix: 13.65, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "XPN", nom: "Pro Zinc", contenance: "90 capsules", prix: 12.99, boutique: "Shop Santé", region: "QC" },
      { marque: "NIH", nom: "Zinc Complete", contenance: "90 capsules", prix: 19.99, boutique: "Shop Santé", region: "QC" },
      { marque: "AKTIV", nom: "Zinc + Cuivre", contenance: "90 capsules", prix: 26.99, boutique: "Shop Santé", region: "QC" },
      { marque: "ATP Lab", nom: "Synerzinc", contenance: "90 capsules", prix: 27.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Zinc + Cuivre", contenance: "150 capsules", prix: 34.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
  {
    slug: "collagene",
    dateReleve: "15 juillet 2026",
    produits: [
      // France
      { marque: "Granions", nom: "Collagène Acide Hyaluronique Et Coenzyme Q10", contenance: "60 comprimés", prix: 13.29, prixBarre: 22.79, boutique: "Newpharma", region: "FR" },
      { marque: "Arkopharma", nom: "Collagène Articulation Et Muscles", contenance: "pot 260 g", prix: 16.19, boutique: "Newpharma", region: "FR" },
      { marque: "Granions", nom: "Multi Collagène+ 5 Types de Collagène Hydrolysé", contenance: "60 comprimés", prix: 16.85, boutique: "Newpharma", region: "FR" },
      { marque: "Vital Proteins", nom: "Collagène Peptides Non-Aromatisé", contenance: "pot 567 g", prix: 28.99, prixBarre: 49.65, boutique: "Newpharma", region: "FR" },
      // Québec
      { marque: "Shop Santé", nom: "Collagène Marin", contenance: "100 g", prix: 10.0, boutique: "Shop Santé", region: "QC" },
      { marque: "Yummy Sports", nom: "Collagène marin+", contenance: "435 g", prix: 26.99, prixBarre: 44.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Nova Pharma", nom: "Collagène Marin", contenance: "375 g", prix: 27.99, prixBarre: 44.99, boutique: "Shop Santé", region: "QC" },
      { marque: "Shop Santé", nom: "Collagène Marin + Acide Hyaluronique", contenance: "500 g", prix: 27.99, prixBarre: 49.99, boutique: "Shop Santé", region: "QC" },
      { marque: "AKTIV", nom: "Collagène", contenance: "345-420 g", prix: 49.99, boutique: "Shop Santé", region: "QC" },
    ],
  },
];

export function getPrixBySlug(slug: string): CataloguePrix | undefined {
  return cataloguePrix.find((c) => c.slug === slug);
}
