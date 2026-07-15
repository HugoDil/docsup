export type Categorie =
  | "Vitamine"
  | "Minéral"
  | "Acide gras"
  | "Plante & adaptogène"
  | "Autre";

export interface Mythe {
  affirmation: string;
  realite: string;
}

export interface Dosage {
  recommande: string;
  maximum: string;
  remarque?: string;
}

export interface Supplement {
  slug: string;
  nom: string;
  nomsAlternatifs?: string[];
  categorie: Categorie;
  resume: string;
  description: string;
  bienfaits: string[];
  signesDeCarence: string[];
  publicConcerne: string[];
  dosage: Dosage;
  sourcesAlimentaires: string[];
  mythes: Mythe[];
  vedette?: boolean;
}

export const supplements: Supplement[] = [
  // ---------- VITAMINES ----------
  {
    slug: "vitamine-a",
    nom: "Vitamine A",
    nomsAlternatifs: ["Rétinol", "Bêta-carotène"],
    categorie: "Vitamine",
    resume: "Essentielle à la vision nocturne, à la peau et au système immunitaire.",
    description:
      "La vitamine A regroupe le rétinol (forme animale, directement active) et les caroténoïdes comme le bêta-carotène (forme végétale, convertie par le corps). Elle joue un rôle clé dans la vision, le renouvellement cellulaire de la peau et l'immunité.",
    bienfaits: [
      "Contribue au maintien d'une vision normale",
      "Participe au renouvellement de la peau et des muqueuses",
      "Soutient le système immunitaire",
    ],
    signesDeCarence: ["Difficultés de vision nocturne", "Peau sèche", "Infections fréquentes"],
    publicConcerne: [
      "Personnes ayant une alimentation très pauvre en légumes colorés ou en produits animaux",
      "Populations des pays en développement (carence encore fréquente)",
    ],
    dosage: {
      recommande: "700 à 900 µg ER/jour (équivalents rétinol)",
      maximum: "3000 µg ER/jour",
      remarque:
        "Le bêta-carotène végétal n'est pas toxique en excès ; le rétinol animal, lui, peut l'être à haute dose, notamment en début de grossesse.",
    },
    sourcesAlimentaires: ["Foie", "Carotte", "Patate douce", "Épinard", "Produits laitiers"],
    mythes: [
      {
        affirmation: "Manger beaucoup de carottes améliore la vue au-delà de la normale.",
        realite:
          "Le bêta-carotène prévient une carence et soutient une vision normale, mais n'améliore pas une vue déjà saine au-delà de ses capacités naturelles.",
      },
    ],
  },
  {
    slug: "vitamine-c",
    nom: "Vitamine C",
    nomsAlternatifs: ["Acide ascorbique"],
    categorie: "Vitamine",
    resume: "Antioxydant populaire, soutient l'immunité et l'absorption du fer.",
    description:
      "La vitamine C est un antioxydant hydrosoluble impliqué dans la synthèse du collagène, la cicatrisation et le fonctionnement du système immunitaire. C'est l'un des compléments les plus consommés au monde, souvent en automne et en hiver.",
    bienfaits: [
      "Contribue au fonctionnement normal du système immunitaire",
      "Participe à la formation normale du collagène (peau, gencives, vaisseaux)",
      "Améliore l'absorption du fer non-héminique quand pris ensemble",
      "Contribue à réduire la fatigue",
    ],
    signesDeCarence: ["Fatigue", "Gencives fragiles", "Cicatrisation lente", "Ecchymoses faciles"],
    publicConcerne: ["Fumeurs (besoins accrus)", "Personnes en convalescence", "Faible consommation de fruits et légumes frais"],
    dosage: {
      recommande: "80 à 110 mg/jour",
      maximum: "1000 mg/jour",
      remarque: "Au-delà de 1 g/jour, principalement éliminée dans les urines et peut causer des troubles digestifs.",
    },
    sourcesAlimentaires: ["Agrumes", "Kiwi", "Poivron", "Persil", "Cassis"],
    mythes: [
      {
        affirmation: "La vitamine C à haute dose empêche d'attraper un rhume.",
        realite:
          "Les études montrent au mieux une légère réduction de la durée des symptômes chez certains, mais pas une prévention fiable du rhume.",
      },
    ],
    vedette: true,
  },
  {
    slug: "vitamine-d",
    nom: "Vitamine D",
    nomsAlternatifs: ["Calciférol", "Vitamine du soleil"],
    categorie: "Vitamine",
    resume:
      "Essentielle à l'absorption du calcium et à la santé osseuse, souvent déficitaire en hiver.",
    description:
      "La vitamine D est une vitamine liposoluble produite naturellement par la peau exposée au soleil. Elle joue un rôle central dans l'absorption intestinale du calcium et du phosphore, la santé osseuse et le bon fonctionnement du système immunitaire. Dans les régions peu ensoleillées, une grande partie de la population est en carence, surtout en automne et en hiver.",
    bienfaits: [
      "Renforce la santé osseuse et dentaire",
      "Soutient le système immunitaire",
      "Contribue au maintien d'une fonction musculaire normale",
    ],
    signesDeCarence: [
      "Fatigue persistante",
      "Douleurs osseuses ou musculaires",
      "Infections plus fréquentes",
      "Baisse de moral en hiver",
    ],
    publicConcerne: [
      "Personnes vivant sous des latitudes peu ensoleillées",
      "Personnes âgées",
      "Peaux foncées en climat peu ensoleillé",
      "Personnes travaillant en intérieur",
    ],
    dosage: {
      recommande: "400 à 2000 UI/jour selon l'âge et l'exposition au soleil",
      maximum: "4000 UI/jour (sauf avis médical)",
      remarque:
        "Un dosage sanguin (25-OH vitamine D) permet d'ajuster précisément la dose avec un professionnel de santé.",
    },
    sourcesAlimentaires: [
      "Poissons gras (saumon, maquereau, sardine)",
      "Jaune d'œuf",
      "Produits laitiers enrichis",
      "Exposition au soleil",
    ],
    mythes: [
      {
        affirmation: "Il suffit de manger équilibré pour ne jamais manquer de vitamine D.",
        realite:
          "L'alimentation seule couvre rarement les besoins : la majorité de la vitamine D provient de la synthèse cutanée au soleil, difficile à obtenir en hiver.",
      },
      {
        affirmation: "Plus on en prend, mieux c'est.",
        realite:
          "La vitamine D est liposoluble et peut s'accumuler dans l'organisme : un excès prolongé peut provoquer une hypercalcémie.",
      },
    ],
    vedette: true,
  },
  {
    slug: "vitamine-e",
    nom: "Vitamine E",
    nomsAlternatifs: ["Tocophérol"],
    categorie: "Vitamine",
    resume: "Antioxydant liposoluble qui protège les cellules du stress oxydatif.",
    description:
      "La vitamine E regroupe plusieurs tocophérols dont l'alpha-tocophérol est le plus actif chez l'humain. C'est un antioxydant qui protège les membranes cellulaires contre les dommages oxydatifs.",
    bienfaits: [
      "Contribue à protéger les cellules contre le stress oxydatif",
      "Participe au fonctionnement normal du système immunitaire",
    ],
    signesDeCarence: ["Rare chez l'adulte sain", "Faiblesse musculaire", "Troubles de la coordination (carences sévères)"],
    publicConcerne: ["Personnes avec troubles de l'absorption des graisses", "Alimentation très pauvre en oléagineux et huiles végétales"],
    dosage: {
      recommande: "12 à 15 mg/jour",
      maximum: "300 mg/jour",
      remarque: "À haute dose et sur le long terme, peut interagir avec les traitements anticoagulants.",
    },
    sourcesAlimentaires: ["Huile de tournesol", "Amandes", "Noisettes", "Avocat"],
    mythes: [
      {
        affirmation: "La vitamine E en complément prévient les maladies cardiovasculaires.",
        realite:
          "Les grandes études cliniques n'ont pas confirmé de bénéfice de la supplémentation chez les personnes déjà bien nourries.",
      },
    ],
  },
  {
    slug: "vitamine-k",
    nom: "Vitamine K",
    nomsAlternatifs: ["K1 (phylloquinone)", "K2 (ménaquinone)"],
    categorie: "Vitamine",
    resume: "Indispensable à la coagulation sanguine et à la fixation du calcium sur l'os.",
    description:
      "La vitamine K existe sous deux formes principales : la K1, apportée par les légumes verts, essentielle à la coagulation, et la K2, produite par la flore intestinale et présente dans certains aliments fermentés, qui aide à diriger le calcium vers les os plutôt que les artères.",
    bienfaits: [
      "Contribue à une coagulation sanguine normale",
      "Participe au maintien d'une ossature normale",
    ],
    signesDeCarence: ["Saignements ou ecchymoses inhabituels", "Rare chez l'adulte sain"],
    publicConcerne: [
      "Nouveau-nés (supplémentation systématique à la naissance)",
      "Personnes sous traitement prolongé aux antibiotiques",
    ],
    dosage: {
      recommande: "70 à 90 µg/jour",
      maximum: "Aucune limite officielle établie pour la K1/K2 alimentaire",
      remarque:
        "Les personnes sous anticoagulants (type AVK) doivent garder un apport stable et consulter leur médecin avant toute supplémentation.",
    },
    sourcesAlimentaires: ["Chou vert, épinard", "Brocoli", "Natto (aliment fermenté, riche en K2)"],
    mythes: [
      {
        affirmation: "La vitamine K fait épaissir le sang.",
        realite:
          "Elle est nécessaire à une coagulation normale, ce qui est l'inverse d'un effet fluidifiant ou épaississant anormal.",
      },
    ],
  },
  {
    slug: "vitamine-b1",
    nom: "Vitamine B1",
    nomsAlternatifs: ["Thiamine"],
    categorie: "Vitamine",
    resume: "Participe à la transformation des glucides en énergie.",
    description:
      "La vitamine B1 est nécessaire au métabolisme énergétique, en particulier à partir des glucides, et au bon fonctionnement du système nerveux.",
    bienfaits: [
      "Contribue au métabolisme énergétique normal",
      "Participe au fonctionnement normal du système nerveux",
    ],
    signesDeCarence: ["Fatigue", "Irritabilité", "Fourmillements dans les jambes"],
    publicConcerne: ["Personnes ayant une consommation élevée d'alcool", "Régime très riche en aliments raffinés"],
    dosage: {
      recommande: "1,1 à 1,2 mg/jour",
      maximum: "Aucun seuil toxique établi (excès éliminés dans les urines)",
    },
    sourcesAlimentaires: ["Céréales complètes", "Légumineuses", "Porc", "Graines de tournesol"],
    mythes: [],
  },
  {
    slug: "vitamine-b2",
    nom: "Vitamine B2",
    nomsAlternatifs: ["Riboflavine"],
    categorie: "Vitamine",
    resume: "Contribue à la production d'énergie et à la santé de la peau et des yeux.",
    description:
      "La vitamine B2 participe aux réactions de production d'énergie cellulaire et au maintien de muqueuses, de la peau et de la vision normales.",
    bienfaits: [
      "Contribue au métabolisme énergétique normal",
      "Participe au maintien d'une peau et d'une vision normales",
    ],
    signesDeCarence: ["Gerçures aux coins de la bouche", "Yeux sensibles à la lumière", "Peau irritée"],
    publicConcerne: ["Sportifs à très gros volume d'entraînement", "Alimentation pauvre en produits laitiers et œufs"],
    dosage: {
      recommande: "1,3 à 1,6 mg/jour",
      maximum: "Aucun seuil toxique établi",
    },
    sourcesAlimentaires: ["Produits laitiers", "Œufs", "Abats", "Amandes"],
    mythes: [],
  },
  {
    slug: "vitamine-b3",
    nom: "Vitamine B3",
    nomsAlternatifs: ["Niacine", "Nicotinamide"],
    categorie: "Vitamine",
    resume: "Impliquée dans la production d'énergie et la santé de la peau.",
    description:
      "La vitamine B3 est essentielle au métabolisme énergétique et à la réparation de l'ADN. Elle peut être synthétisée en petite quantité par l'organisme à partir du tryptophane.",
    bienfaits: [
      "Contribue au métabolisme énergétique normal",
      "Participe au maintien d'une peau normale",
    ],
    signesDeCarence: ["Fatigue", "Peau qui réagit mal au soleil", "Troubles digestifs (carence sévère : pellagre)"],
    publicConcerne: ["Alimentation très déséquilibrée à base de maïs comme aliment de base"],
    dosage: {
      recommande: "14 à 16 mg/jour",
      maximum: "900 mg/jour (formes à libération prolongée) — à haute dose, rougeurs cutanées fréquentes",
      remarque: "Les fortes doses utilisées en contexte médical sont différentes des apports nutritionnels courants et nécessitent un suivi.",
    },
    sourcesAlimentaires: ["Viande", "Poisson", "Arachides", "Céréales complètes"],
    mythes: [],
  },
  {
    slug: "vitamine-b5",
    nom: "Vitamine B5",
    nomsAlternatifs: ["Acide pantothénique"],
    categorie: "Vitamine",
    resume: "Présente dans presque tous les aliments, carence quasi inexistante.",
    description:
      "La vitamine B5 doit son nom au grec 'partout' : elle est présente dans la quasi-totalité des aliments, ce qui rend une carence extrêmement rare chez l'humain.",
    bienfaits: [
      "Contribue au métabolisme énergétique normal",
      "Participe à la synthèse normale de certaines hormones",
    ],
    signesDeCarence: ["Extrêmement rare : fatigue, troubles digestifs en cas de dénutrition sévère"],
    publicConcerne: ["Situations de dénutrition globale sévère uniquement"],
    dosage: {
      recommande: "5 mg/jour",
      maximum: "Aucun seuil toxique établi",
    },
    sourcesAlimentaires: ["Champignons", "Avocat", "Œufs", "Céréales complètes"],
    mythes: [],
  },
  {
    slug: "vitamine-b6",
    nom: "Vitamine B6",
    nomsAlternatifs: ["Pyridoxine"],
    categorie: "Vitamine",
    resume: "Impliquée dans le métabolisme des protéines et la production de neurotransmetteurs.",
    description:
      "La vitamine B6 participe au métabolisme des acides aminés et à la fabrication de neurotransmetteurs comme la sérotonine. Elle est souvent associée au syndrome prémenstruel et à la fatigue.",
    bienfaits: [
      "Contribue à réduire la fatigue",
      "Participe à la régulation de l'activité hormonale",
      "Contribue au fonctionnement normal du système nerveux",
    ],
    signesDeCarence: ["Irritabilité", "Fatigue", "Engourdissements des extrémités (carence sévère)"],
    publicConcerne: ["Femmes sous contraceptifs oraux", "Personnes âgées"],
    dosage: {
      recommande: "1,3 à 1,7 mg/jour",
      maximum: "25 mg/jour en complément (au long cours)",
      remarque: "Des doses très élevées et prolongées (>50 mg/jour pendant des mois) ont été associées à des troubles nerveux réversibles.",
    },
    sourcesAlimentaires: ["Volaille", "Poisson", "Pomme de terre", "Banane"],
    mythes: [
      {
        affirmation: "La vitamine B6 est sans risque à n'importe quelle dose car c'est 'naturel'.",
        realite:
          "C'est l'une des rares vitamines hydrosolubles pour lesquelles un excès prolongé à haute dose a été lié à des neuropathies, d'où une limite de sécurité claire.",
      },
    ],
  },
  {
    slug: "vitamine-b8",
    nom: "Vitamine B8",
    nomsAlternatifs: ["Biotine", "Vitamine B7"],
    categorie: "Vitamine",
    resume: "Très populaire pour les cheveux et les ongles, souvent en excès dans les compléments beauté.",
    description:
      "La biotine participe au métabolisme des graisses, des glucides et des protéines, et intervient dans la synthèse de la kératine, ce qui explique sa popularité dans les compléments 'peau, cheveux, ongles'.",
    bienfaits: [
      "Contribue au maintien de cheveux et d'une peau normaux",
      "Participe au métabolisme énergétique normal",
    ],
    signesDeCarence: ["Perte de cheveux", "Éruptions cutanées (carence réelle rare)"],
    publicConcerne: ["Consommateurs réguliers de blanc d'œuf cru (contient une protéine qui bloque son absorption)"],
    dosage: {
      recommande: "40 à 50 µg/jour",
      maximum: "Aucun seuil toxique établi",
      remarque: "La biotine à haute dose peut fausser certains examens sanguins (thyroïde, marqueurs cardiaques) : à signaler avant une prise de sang.",
    },
    sourcesAlimentaires: ["Œuf cuit", "Foie", "Amandes", "Levure"],
    mythes: [
      {
        affirmation: "Prendre beaucoup de biotine fait pousser les cheveux plus vite chez tout le monde.",
        realite:
          "Elle n'aide que si la personne était réellement carencée ; chez une personne non carencée, l'effet sur la pousse des cheveux n'est pas démontré.",
      },
    ],
  },
  {
    slug: "vitamine-b9",
    nom: "Vitamine B9",
    nomsAlternatifs: ["Folate", "Acide folique"],
    categorie: "Vitamine",
    resume: "Cruciale avant et pendant la grossesse pour prévenir les malformations du fœtus.",
    description:
      "La vitamine B9 est essentielle à la division cellulaire et à la formation du tube neural du fœtus. Sa supplémentation est systématiquement recommandée en préconception et en début de grossesse.",
    bienfaits: [
      "Contribue à la croissance des tissus maternels pendant la grossesse",
      "Participe à la formation normale du sang",
      "Contribue à réduire la fatigue",
    ],
    signesDeCarence: ["Fatigue", "Anémie", "Risque accru de malformations du tube neural chez le fœtus"],
    publicConcerne: ["Femmes en projet de grossesse ou enceintes", "Personnes ayant une alimentation pauvre en légumes verts"],
    dosage: {
      recommande: "200 µg/jour (adulte), 400 µg/jour en préconception et grossesse",
      maximum: "1000 µg/jour",
    },
    sourcesAlimentaires: ["Légumes à feuilles vertes", "Légumineuses", "Foie", "Agrumes"],
    mythes: [
      {
        affirmation: "On peut commencer l'acide folique une fois la grossesse confirmée, cela suffit.",
        realite:
          "Le tube neural se forme dans les toutes premières semaines, souvent avant même que la grossesse soit détectée : la supplémentation est recommandée dès le projet de grossesse.",
      },
    ],
  },
  {
    slug: "vitamine-b12",
    nom: "Vitamine B12",
    nomsAlternatifs: ["Cobalamine"],
    categorie: "Vitamine",
    resume: "Indispensable au système nerveux, quasi absente de l'alimentation végétale.",
    description:
      "La vitamine B12 est nécessaire à la formation des globules rouges, au bon fonctionnement du système nerveux et à la synthèse de l'ADN. Elle est présente presque exclusivement dans les produits d'origine animale, ce qui en fait une supplémentation quasi systématique pour les personnes végétaliennes.",
    bienfaits: [
      "Contribue au fonctionnement normal du système nerveux",
      "Participe à la formation normale des globules rouges",
      "Contribue à réduire la fatigue",
    ],
    signesDeCarence: [
      "Fatigue et pâleur",
      "Fourmillements dans les mains ou les pieds",
      "Troubles de la mémoire ou de la concentration",
    ],
    publicConcerne: [
      "Personnes végétaliennes et végétariennes strictes",
      "Personnes âgées (absorption réduite)",
      "Personnes sous certains traitements (metformine, anti-acides)",
    ],
    dosage: {
      recommande: "2,4 µg/jour pour un adulte",
      maximum: "Aucun seuil toxique établi ; les excès sont éliminés par les reins",
      remarque:
        "Les végétaliens sont souvent orientés vers des doses hebdomadaires plus élevées (ex: 2000 µg/semaine) du fait d'une absorption imparfaite.",
    },
    sourcesAlimentaires: [
      "Viande, poisson, œufs",
      "Produits laitiers",
      "Aliments enrichis (certaines boissons végétales, levures nutritionnelles enrichies)",
    ],
    mythes: [
      {
        affirmation: "La spiruline et les algues sont de bonnes sources de B12.",
        realite:
          "Elles contiennent surtout des analogues de la B12 non actifs pour l'être humain, qui peuvent même fausser les dosages sanguins.",
      },
    ],
  },

  // ---------- MINÉRAUX ----------
  {
    slug: "calcium",
    nom: "Calcium",
    categorie: "Minéral",
    resume: "Le minéral le plus abondant du corps, pilier de la santé osseuse.",
    description:
      "Le calcium est indispensable à la structure des os et des dents, à la contraction musculaire et à la transmission nerveuse. Le corps le puise dans les os quand les apports sont insuffisants, ce qui fragilise le squelette à long terme.",
    bienfaits: [
      "Nécessaire au maintien d'une ossature normale",
      "Participe à une fonction musculaire normale",
      "Contribue à la coagulation sanguine normale",
    ],
    signesDeCarence: ["Crampes musculaires", "Ongles cassants", "Risque accru de fragilité osseuse à long terme"],
    publicConcerne: ["Personnes évitant les produits laitiers", "Femmes ménopausées", "Adolescents en croissance"],
    dosage: {
      recommande: "950 à 1000 mg/jour",
      maximum: "2500 mg/jour",
      remarque: "Mieux vaut répartir les apports sur la journée que prendre une grosse dose unique, pour une meilleure absorption.",
    },
    sourcesAlimentaires: ["Produits laitiers", "Choux", "Amandes", "Eaux minérales calciques", "Sardines avec arêtes"],
    mythes: [
      {
        affirmation: "Plus on prend de calcium en complément, plus les os sont solides.",
        realite:
          "Au-delà des besoins réels, l'excès de calcium en complément n'améliore pas la solidité osseuse et a été associé à un risque cardiovasculaire accru dans certaines études.",
      },
    ],
  },
  {
    slug: "zinc",
    nom: "Zinc",
    categorie: "Minéral",
    resume: "Minéral clé de l'immunité, de la peau et de la cicatrisation.",
    description:
      "Le zinc intervient dans plus de 200 réactions enzymatiques. Il est particulièrement connu pour son rôle dans l'immunité, la cicatrisation des plaies et la santé de la peau.",
    bienfaits: [
      "Contribue au fonctionnement normal du système immunitaire",
      "Participe au maintien d'une peau normale",
      "Contribue à la fertilité et à la reproduction normales",
    ],
    signesDeCarence: ["Infections fréquentes", "Cicatrisation lente", "Perte de goût ou d'odorat"],
    publicConcerne: ["Végétariens et végétaliens", "Personnes âgées", "Sportifs à forte transpiration"],
    dosage: {
      recommande: "8 à 11 mg/jour",
      maximum: "25 mg/jour en complément",
      remarque: "Un excès chronique de zinc peut interférer avec l'absorption du cuivre.",
    },
    sourcesAlimentaires: ["Huîtres", "Viande rouge", "Graines de courge", "Légumineuses"],
    mythes: [
      {
        affirmation: "Le zinc pris dès les premiers symptômes guérit le rhume.",
        realite:
          "Certaines études suggèrent une réduction modeste de la durée des symptômes sous certaines formes, mais ce n'est pas un traitement curatif.",
      },
    ],
  },
  {
    slug: "potassium",
    nom: "Potassium",
    categorie: "Minéral",
    resume: "Électrolyte essentiel à l'équilibre hydrique et au rythme cardiaque.",
    description:
      "Le potassium travaille en tandem avec le sodium pour réguler l'équilibre hydrique, la pression artérielle et la contraction musculaire, y compris celle du cœur.",
    bienfaits: [
      "Contribue au maintien d'une pression sanguine normale",
      "Participe au fonctionnement normal du système nerveux et musculaire",
    ],
    signesDeCarence: ["Faiblesse musculaire", "Crampes", "Fatigue", "Palpitations"],
    publicConcerne: ["Personnes sous diurétiques", "Fortes pertes digestives (vomissements, diarrhées)"],
    dosage: {
      recommande: "3400 à 3500 mg/jour (via l'alimentation, la supplémentation isolée est rarement nécessaire)",
      maximum: "La supplémentation en comprimé isolé nécessite un encadrement médical",
      remarque:
        "Un excès de potassium est dangereux pour le cœur, en particulier en cas d'insuffisance rénale : ne pas se supplémenter sans avis médical.",
    },
    sourcesAlimentaires: ["Banane", "Pomme de terre", "Légumineuses", "Épinard"],
    mythes: [],
  },
  {
    slug: "selenium",
    nom: "Sélénium",
    categorie: "Minéral",
    resume: "Oligo-élément antioxydant, essentiel en très petite quantité.",
    description:
      "Le sélénium est un oligo-élément qui participe à la défense antioxydante et au fonctionnement de la thyroïde. Les besoins sont faibles mais la marge entre carence et excès l'est aussi.",
    bienfaits: [
      "Contribue au fonctionnement normal de la thyroïde",
      "Participe à la protection des cellules contre le stress oxydatif",
    ],
    signesDeCarence: ["Fatigue", "Faiblesse musculaire", "Troubles thyroïdiens"],
    publicConcerne: ["Personnes vivant dans des régions aux sols pauvres en sélénium"],
    dosage: {
      recommande: "55 à 70 µg/jour",
      maximum: "300 µg/jour",
      remarque: "Deux ou trois noix du Brésil par jour peuvent suffire à couvrir les besoins : inutile de dépasser ces quantités.",
    },
    sourcesAlimentaires: ["Noix du Brésil", "Poisson", "Œufs", "Céréales complètes"],
    mythes: [
      {
        affirmation: "Le sélénium est sans danger car les besoins sont naturels et faibles.",
        realite:
          "C'est justement l'un des oligo-éléments où la marge entre dose bénéfique et dose toxique est la plus étroite ; l'excès chronique peut causer perte de cheveux et troubles digestifs.",
      },
    ],
  },
  {
    slug: "iode",
    nom: "Iode",
    categorie: "Minéral",
    resume: "Indispensable à la fabrication des hormones thyroïdiennes.",
    description:
      "L'iode est un composant essentiel des hormones thyroïdiennes, qui régulent le métabolisme de l'ensemble du corps. Une carence, même légère, peut affecter la thyroïde.",
    bienfaits: [
      "Contribue à la production normale d'hormones thyroïdiennes",
      "Participe au fonctionnement normal du métabolisme énergétique",
    ],
    signesDeCarence: ["Fatigue", "Prise de poids inexpliquée", "Goitre (gonflement du cou)"],
    publicConcerne: ["Femmes enceintes et allaitantes", "Personnes n'utilisant jamais de sel iodé ni de produits de la mer"],
    dosage: {
      recommande: "150 µg/jour (250 µg pendant la grossesse)",
      maximum: "600 µg/jour",
      remarque: "Un excès d'iode peut, comme une carence, perturber le fonctionnement thyroïdien : plus n'est pas toujours mieux.",
    },
    sourcesAlimentaires: ["Sel iodé", "Poissons et fruits de mer", "Produits laitiers", "Algues (avec prudence, très concentrées)"],
    mythes: [],
  },
  {
    slug: "cuivre",
    nom: "Cuivre",
    categorie: "Minéral",
    resume: "Oligo-élément impliqué dans la formation des globules rouges et du collagène.",
    description:
      "Le cuivre participe à la formation de l'hémoglobine, à la synthèse du collagène et à la défense antioxydante. Il doit rester en équilibre avec le zinc, avec lequel il est en compétition pour l'absorption.",
    bienfaits: [
      "Contribue au transport normal du fer dans l'organisme",
      "Participe au maintien de tissus conjonctifs normaux",
    ],
    signesDeCarence: ["Fatigue", "Anémie", "Fragilité osseuse (carence rare)"],
    publicConcerne: ["Personnes prenant de très fortes doses de zinc au long cours"],
    dosage: {
      recommande: "0,9 à 1,3 mg/jour",
      maximum: "5 mg/jour",
    },
    sourcesAlimentaires: ["Fruits de mer", "Abats", "Noix", "Chocolat noir"],
    mythes: [],
  },
  {
    slug: "manganese",
    nom: "Manganèse",
    categorie: "Minéral",
    resume: "Oligo-élément aux besoins couverts facilement par une alimentation variée.",
    description:
      "Le manganèse intervient dans le métabolisme des glucides et des lipides ainsi que dans la formation osseuse. Les carences sont exceptionnelles avec une alimentation normale.",
    bienfaits: [
      "Contribue au maintien d'une ossature normale",
      "Participe au métabolisme énergétique normal",
    ],
    signesDeCarence: ["Extrêmement rare chez l'humain"],
    publicConcerne: ["Situations de nutrition artificielle prolongée uniquement"],
    dosage: {
      recommande: "1,8 à 2,3 mg/jour",
      maximum: "11 mg/jour",
    },
    sourcesAlimentaires: ["Céréales complètes", "Légumineuses", "Thé", "Ananas"],
    mythes: [],
  },
  {
    slug: "chrome",
    nom: "Chrome",
    categorie: "Minéral",
    resume: "Souvent associé à la régulation de la glycémie, effets réels modestes.",
    description:
      "Le chrome trivalent est un oligo-élément parfois présenté comme un régulateur de la glycémie et un aide à la perte de poids. Les preuves scientifiques d'un effet notable restent limitées chez les personnes non carencées.",
    bienfaits: [
      "Contribue au maintien d'une glycémie normale (allégation autorisée sous conditions)",
    ],
    signesDeCarence: ["Très rare ; controverse même sur son caractère réellement essentiel"],
    publicConcerne: ["Peu de populations réellement carencées identifiées"],
    dosage: {
      recommande: "Aucun apport de référence officiel ferme (estimation ~25 à 35 µg/jour)",
      maximum: "1000 µg/jour en complément (usage court terme)",
    },
    sourcesAlimentaires: ["Brocoli", "Céréales complètes", "Levure de bière", "Viande"],
    mythes: [
      {
        affirmation: "Le chrome fait fondre la graisse et coupe la faim.",
        realite:
          "Les effets sur la perte de poids observés en études sont faibles à nuls chez la majorité des personnes ; ce n'est pas un brûle-graisse.",
      },
    ],
  },
  {
    slug: "magnesium",
    nom: "Magnésium",
    categorie: "Minéral",
    resume:
      "Impliqué dans plus de 300 réactions enzymatiques, souvent associé à la gestion du stress et du sommeil.",
    description:
      "Le magnésium est un minéral essentiel à la production d'énergie cellulaire, à la contraction musculaire, à la transmission nerveuse et à la régulation du rythme cardiaque. C'est l'un des compléments les plus recherchés pour la fatigue, le stress et les crampes musculaires.",
    bienfaits: [
      "Contribue à réduire la fatigue",
      "Participe au fonctionnement normal du système nerveux",
      "Aide à la relaxation musculaire",
      "Contribue à l'équilibre électrolytique",
    ],
    signesDeCarence: [
      "Crampes ou spasmes musculaires",
      "Fatigue et irritabilité",
      "Troubles du sommeil",
      "Maux de tête fréquents",
    ],
    publicConcerne: [
      "Personnes stressées ou en surmenage",
      "Sportifs (pertes accrues via la transpiration)",
      "Personnes ayant une alimentation faible en légumes verts et légumineuses",
    ],
    dosage: {
      recommande: "300 à 400 mg/jour pour un adulte",
      maximum: "350 mg/jour en complément isolé (au-delà, risque de troubles digestifs)",
      remarque:
        "Les formes bisglycinate ou citrate sont généralement mieux tolérées que l'oxyde de magnésium.",
    },
    sourcesAlimentaires: [
      "Oléagineux (amandes, noix de cajou)",
      "Légumineuses",
      "Chocolat noir",
      "Légumes verts à feuilles",
      "Eaux minérales riches en magnésium",
    ],
    mythes: [
      {
        affirmation: "Toutes les formes de magnésium se valent.",
        realite:
          "La biodisponibilité varie fortement selon la forme chimique ; l'oxyde de magnésium est mal absorbé et souvent laxatif à haute dose.",
      },
      {
        affirmation: "Le magnésium fait dormir instantanément.",
        realite:
          "Il peut favoriser la détente du système nerveux mais n'a pas d'effet sédatif direct comme un somnifère.",
      },
    ],
    vedette: true,
  },
  {
    slug: "fer",
    nom: "Fer",
    categorie: "Minéral",
    resume:
      "Minéral clé du transport de l'oxygène dans le sang, carence fréquente chez les femmes.",
    description:
      "Le fer est un composant essentiel de l'hémoglobine, la protéine des globules rouges qui transporte l'oxygène dans tout le corps. Une carence en fer est l'une des carences nutritionnelles les plus répandues au monde, en particulier chez les femmes menstruées, les femmes enceintes et les personnes suivant un régime végétarien strict.",
    bienfaits: [
      "Contribue au transport normal de l'oxygène dans l'organisme",
      "Participe à la réduction de la fatigue",
      "Contribue au fonctionnement normal du système immunitaire",
    ],
    signesDeCarence: [
      "Fatigue intense",
      "Pâleur",
      "Essoufflement à l'effort",
      "Ongles cassants, chute de cheveux",
    ],
    publicConcerne: [
      "Femmes réglées, en particulier avec règles abondantes",
      "Femmes enceintes",
      "Personnes végétariennes ou végétaliennes",
      "Sportifs d'endurance",
    ],
    dosage: {
      recommande: "8 à 18 mg/jour selon le sexe et l'âge (jusqu'à 27 mg pendant la grossesse)",
      maximum: "45 mg/jour en complément (sauf prescription médicale supérieure)",
      remarque:
        "La supplémentation en fer ne doit être commencée qu'après un bilan sanguin (ferritine), un excès de fer étant nocif.",
    },
    sourcesAlimentaires: [
      "Viandes rouges et abats",
      "Légumineuses",
      "Tofu",
      "Épinards (fer non-héminique, moins bien absorbé)",
    ],
    mythes: [
      {
        affirmation: "Les épinards sont une source de fer aussi efficace que la viande.",
        realite:
          "Le fer végétal (non-héminique) est beaucoup moins bien absorbé que le fer animal (héminique) ; l'associer à de la vitamine C améliore son absorption.",
      },
      {
        affirmation: "Se supplémenter en fer 'au cas où' est sans risque.",
        realite:
          "Un excès de fer peut être toxique pour le foie et n'est pas éliminé facilement par l'organisme ; une prise de sang préalable est recommandée.",
      },
    ],
  },

  // ---------- ACIDES GRAS ----------
  {
    slug: "omega-3",
    nom: "Oméga-3 (EPA/DHA)",
    nomsAlternatifs: ["Huile de poisson", "Acides gras essentiels"],
    categorie: "Acide gras",
    resume:
      "Acides gras essentiels au cœur et au cerveau, non produits naturellement par l'organisme.",
    description:
      "Les oméga-3, en particulier l'EPA et le DHA, sont des acides gras polyinsaturés essentiels que le corps ne peut pas synthétiser en quantité suffisante. Ils sont surtout connus pour leur rôle cardiovasculaire et cognitif, et sont largement étudiés en dehors du contexte sportif.",
    bienfaits: [
      "Contribue au fonctionnement normal du cœur",
      "Participe au maintien des fonctions cérébrales",
      "Contribue à une vision normale (DHA)",
    ],
    signesDeCarence: [
      "Peau sèche",
      "Difficultés de concentration",
      "Sécheresse oculaire",
    ],
    publicConcerne: [
      "Personnes consommant peu de poisson gras",
      "Végétariens et végétaliens (sources végétales moins riches en EPA/DHA)",
      "Personnes suivies pour la santé cardiovasculaire",
    ],
    dosage: {
      recommande: "250 à 500 mg d'EPA+DHA/jour",
      maximum: "3000 mg/jour d'EPA+DHA combinés",
      remarque:
        "À dose élevée, un avis médical est recommandé en cas de traitement anticoagulant.",
    },
    sourcesAlimentaires: [
      "Poissons gras (sardine, maquereau, saumon)",
      "Huile de lin et de colza (ALA, précurseur végétal)",
      "Noix",
      "Algues (source végétale directe de DHA)",
    ],
    mythes: [
      {
        affirmation: "L'huile de lin remplace totalement l'huile de poisson.",
        realite:
          "L'huile de lin apporte de l'ALA, que le corps convertit très peu efficacement en EPA/DHA actifs ; les sources marines ou d'algues restent plus directes.",
      },
    ],
    vedette: true,
  },
  {
    slug: "omega-6-gla",
    nom: "Oméga-6 (GLA)",
    nomsAlternatifs: ["Huile d'onagre", "Huile de bourrache", "Acide gamma-linolénique"],
    categorie: "Acide gras",
    resume: "Acide gras présent dans l'huile d'onagre, populaire pour l'équilibre hormonal féminin.",
    description:
      "Les oméga-6 sont des acides gras essentiels, mais l'alimentation occidentale moderne en apporte déjà largement assez, voire trop par rapport aux oméga-3. L'acide gamma-linolénique (GLA), présent dans l'huile d'onagre et de bourrache, est une exception étudiée spécifiquement pour le confort féminin et la peau.",
    bienfaits: [
      "Étudié pour un soutien du confort féminin (syndrome prémenstruel, ménopause)",
      "Contribue au maintien d'une peau normale",
    ],
    signesDeCarence: ["Carence isolée en GLA très rare avec une alimentation occidentale normale"],
    publicConcerne: ["Femmes avec syndrome prémenstruel marqué", "Peaux sèches ou sujettes à l'eczéma"],
    dosage: {
      recommande: "500 à 1000 mg d'huile titrée en GLA/jour",
      maximum: "3000 mg/jour",
      remarque: "Contrairement aux oméga-3, augmenter les oméga-6 en excès n'est pas souhaitable : ce complément cible spécifiquement le GLA, pas les oméga-6 en général.",
    },
    sourcesAlimentaires: ["Huile d'onagre", "Huile de bourrache", "Huile de chanvre (en moindre quantité)"],
    mythes: [
      {
        affirmation: "Comme les oméga-3, plus on prend d'oméga-6 en complément, mieux c'est.",
        realite:
          "L'alimentation moderne apporte déjà trop d'oméga-6 par rapport aux oméga-3 ; seul le GLA spécifique de l'onagre/bourrache présente un intérêt documenté en complément ciblé.",
      },
    ],
  },

  // ---------- PLANTES & ADAPTOGÈNES ----------
  {
    slug: "curcuma",
    nom: "Curcuma",
    nomsAlternatifs: ["Curcumine"],
    categorie: "Plante & adaptogène",
    resume: "Épice aux propriétés anti-inflammatoires, mais mal absorbée seule.",
    description:
      "Le curcuma est une épice traditionnelle dont le composant actif principal, la curcumine, est étudié pour ses propriétés anti-inflammatoires et antioxydantes. Sa faible absorption naturelle limite son efficacité sans combinaison adaptée.",
    bienfaits: [
      "Propriétés antioxydantes étudiées",
      "Utilisé traditionnellement pour le confort digestif et articulaire",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien anti-inflammatoire naturel", "Confort articulaire au quotidien"],
    dosage: {
      recommande: "500 à 1000 mg de curcumine/jour",
      maximum: "8 g/jour dans les études cliniques encadrées",
      remarque:
        "La curcumine seule est très peu absorbée : elle est généralement associée à de la pipérine (poivre noir) ou à une forme liposomale pour être efficace.",
    },
    sourcesAlimentaires: ["Curcuma en poudre", "Cuisine indienne et curry"],
    mythes: [
      {
        affirmation: "Manger du curry tous les jours a le même effet qu'un complément concentré.",
        realite:
          "Les quantités de curcumine dans l'alimentation courante sont bien plus faibles et bien moins bien absorbées que dans un complément formulé.",
      },
    ],
  },
  {
    slug: "ashwagandha",
    nom: "Ashwagandha",
    nomsAlternatifs: ["Withania somnifera", "Ginseng indien"],
    categorie: "Plante & adaptogène",
    resume: "Plante adaptogène traditionnelle, étudiée pour le stress et le sommeil.",
    description:
      "L'ashwagandha est une plante utilisée depuis des siècles en médecine ayurvédique, classée parmi les 'adaptogènes' — des plantes censées aider le corps à mieux gérer le stress. Des études récentes s'intéressent à son effet sur le cortisol et la qualité du sommeil.",
    bienfaits: [
      "Utilisée traditionnellement pour aider à la gestion du stress",
      "Étudiée pour son effet sur la qualité du sommeil",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes en période de stress", "Déconseillé en cas de grossesse ou de pathologie thyroïdienne sans avis médical"],
    dosage: {
      recommande: "300 à 600 mg d'extrait standardisé/jour",
      maximum: "1000 mg/jour dans les études cliniques",
      remarque: "Non recommandé pendant la grossesse ni en cas de maladie auto-immune sans avis médical.",
    },
    sourcesAlimentaires: ["Racine séchée en poudre ou en extrait (pas d'équivalent alimentaire courant)"],
    mythes: [
      {
        affirmation: "C'est un simple relaxant, sans effet mesurable sur les hormones.",
        realite:
          "Plusieurs études suggèrent un effet sur le taux de cortisol, l'hormone du stress ; ce n'est pas un effet 'placebo pur', mais les preuves restent à confirmer à plus grande échelle.",
      },
    ],
    vedette: true,
  },
  {
    slug: "ginseng",
    nom: "Ginseng",
    nomsAlternatifs: ["Panax ginseng"],
    categorie: "Plante & adaptogène",
    resume: "Racine traditionnelle asiatique associée à l'énergie et à la vitalité.",
    description:
      "Le ginseng (Panax ginseng) est une racine utilisée depuis des millénaires en médecine traditionnelle chinoise, souvent présentée comme un tonique général pour l'énergie et les performances cognitives.",
    bienfaits: [
      "Utilisé traditionnellement pour soutenir la vitalité et réduire la fatigue",
      "Étudié pour un effet potentiel sur les fonctions cognitives",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Périodes de fatigue passagère", "Déconseillé en cas d'hypertension non contrôlée sans avis médical"],
    dosage: {
      recommande: "200 à 400 mg d'extrait standardisé/jour",
      maximum: "Usage généralement limité à 2-3 mois consécutifs",
      remarque: "Peut interagir avec des traitements anticoagulants et certains antidépresseurs.",
    },
    sourcesAlimentaires: ["Racine séchée, souvent en infusion ou en extrait"],
    mythes: [
      {
        affirmation: "Le ginseng a un effet stimulant immédiat comme la caféine.",
        realite:
          "Son effet est plus progressif et s'inscrit dans un usage traditionnel de fond, pas comme un coup de fouet ponctuel.",
      },
    ],
  },
  {
    slug: "ginkgo-biloba",
    nom: "Ginkgo biloba",
    categorie: "Plante & adaptogène",
    resume: "L'une des plus anciennes espèces d'arbres, étudiée pour la microcirculation.",
    description:
      "Les extraits de feuilles de ginkgo biloba sont traditionnellement utilisés pour soutenir la microcirculation sanguine, notamment cérébrale, et sont parmi les extraits de plantes les plus étudiés au monde.",
    bienfaits: [
      "Utilisé traditionnellement pour soutenir la microcirculation",
      "Étudié pour un soutien ponctuel de la mémoire",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien de la concentration", "Déconseillé en association avec des anticoagulants sans avis médical"],
    dosage: {
      recommande: "120 à 240 mg d'extrait standardisé/jour",
      maximum: "240 mg/jour",
      remarque: "Peut augmenter le risque de saignement en association avec des anticoagulants ou avant une opération.",
    },
    sourcesAlimentaires: ["Aucune source alimentaire courante (extrait de feuille uniquement)"],
    mythes: [],
  },
  {
    slug: "spiruline",
    nom: "Spiruline",
    categorie: "Plante & adaptogène",
    resume: "Micro-algue très riche en protéines, souvent présentée comme un superaliment.",
    description:
      "La spiruline est une cyanobactérie (souvent appelée micro-algue) très riche en protéines, en fer et en antioxydants, largement mise en avant comme 'superaliment', notamment chez les végétariens et végétaliens.",
    bienfaits: [
      "Source concentrée de protéines végétales",
      "Apport intéressant en fer et en antioxydants",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Végétariens et végétaliens cherchant un complément de fer/protéines", "Sportifs"],
    dosage: {
      recommande: "1 à 3 g/jour",
      maximum: "10 g/jour",
      remarque: "Choisir une source contrôlée : la spiruline peut être contaminée par des métaux lourds si mal produite.",
    },
    sourcesAlimentaires: ["Poudre ou comprimés de spiruline"],
    mythes: [
      {
        affirmation: "La spiruline est une bonne source de vitamine B12.",
        realite:
          "Elle contient surtout des analogues inactifs de la B12 chez l'humain ; elle ne doit pas être comptée comme source fiable de B12.",
      },
    ],
  },
  {
    slug: "the-vert",
    nom: "Thé vert",
    nomsAlternatifs: ["EGCG", "Catéchines"],
    categorie: "Plante & adaptogène",
    resume: "Riche en antioxydants (catéchines), souvent utilisé en extrait concentré.",
    description:
      "Le thé vert est riche en catéchines, des antioxydants dont l'EGCG (épigallocatéchine gallate) est le plus étudié. Les extraits concentrés sont populaires dans les compléments minceur et antioxydants.",
    bienfaits: [
      "Apport en antioxydants (catéchines)",
      "Contient naturellement de la caféine, associée à un léger effet stimulant",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes recherchant un antioxydant naturel au quotidien"],
    dosage: {
      recommande: "300 à 400 mg d'extrait (catéchines)/jour, ou 3-4 tasses infusées",
      maximum: "800 mg d'extrait concentré/jour",
      remarque:
        "Les extraits très concentrés pris à jeun ont été associés, dans de rares cas, à des atteintes hépatiques : à prendre pendant un repas.",
    },
    sourcesAlimentaires: ["Thé vert infusé"],
    mythes: [
      {
        affirmation: "L'extrait de thé vert en gélule fait maigrir tout seul.",
        realite:
          "L'effet sur la perte de poids est faible et n'a de sens que combiné à une alimentation adaptée et de l'activité physique.",
      },
    ],
  },
  {
    slug: "rhodiola",
    nom: "Rhodiola rosea",
    nomsAlternatifs: ["Orpin rose", "Racine arctique"],
    categorie: "Plante & adaptogène",
    resume: "Plante adaptogène du Grand Nord, étudiée contre la fatigue liée au stress.",
    description:
      "La rhodiola est une plante qui pousse dans les régions arctiques et de montagne, traditionnellement utilisée en Scandinavie et en Russie pour améliorer la résistance à la fatigue physique et mentale en période de stress.",
    bienfaits: [
      "Utilisée traditionnellement pour lutter contre la fatigue liée au stress",
      "Étudiée pour un soutien de la vigilance et de la concentration",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes en période de surmenage", "Étudiants ou professionnels en période intense"],
    dosage: {
      recommande: "200 à 400 mg d'extrait standardisé (3 % rosavines)/jour",
      maximum: "680 mg/jour dans les études cliniques",
      remarque: "À prendre plutôt le matin ou en début de journée : peut avoir un léger effet stimulant qui gêne l'endormissement le soir.",
    },
    sourcesAlimentaires: ["Racine séchée en extrait (pas d'équivalent alimentaire courant)"],
    mythes: [],
  },
  {
    slug: "valeriane",
    nom: "Valériane",
    nomsAlternatifs: ["Valeriana officinalis"],
    categorie: "Plante & adaptogène",
    resume: "Plante traditionnelle utilisée pour favoriser l'endormissement.",
    description:
      "La valériane est l'une des plantes les plus utilisées traditionnellement en Europe pour favoriser le sommeil et détendre le système nerveux, sans effet de dépendance connu contrairement aux somnifères classiques.",
    bienfaits: [
      "Utilisée traditionnellement pour favoriser l'endormissement",
      "Contribue à une relaxation du système nerveux",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes ayant des difficultés d'endormissement occasionnelles"],
    dosage: {
      recommande: "300 à 600 mg d'extrait, 30 à 60 minutes avant le coucher",
      maximum: "600 mg/jour",
      remarque: "L'effet est souvent progressif : il peut nécessiter 2 à 4 semaines d'usage régulier pour être pleinement ressenti.",
    },
    sourcesAlimentaires: ["Racine séchée, souvent en tisane ou en extrait"],
    mythes: [
      {
        affirmation: "La valériane assomme comme un somnifère chimique.",
        realite:
          "Son effet est plus doux et progressif ; elle favorise la détente plutôt qu'elle ne provoque un endormissement forcé immédiat.",
      },
    ],
  },
  {
    slug: "passiflore",
    nom: "Passiflore",
    nomsAlternatifs: ["Fleur de la passion", "Passiflora incarnata"],
    categorie: "Plante & adaptogène",
    resume: "Plante calmante traditionnelle, souvent associée à la valériane.",
    description:
      "La passiflore est traditionnellement utilisée pour apaiser la nervosité et faciliter l'endormissement, souvent en association avec d'autres plantes comme la valériane ou l'aubépine.",
    bienfaits: [
      "Utilisée traditionnellement pour atténuer la nervosité passagère",
      "Contribue à favoriser l'endormissement",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes anxieuses ou nerveuses de façon passagère"],
    dosage: {
      recommande: "300 à 500 mg d'extrait sec/jour, ou en tisane le soir",
      maximum: "800 mg/jour",
    },
    sourcesAlimentaires: ["Parties aériennes séchées, en tisane ou en extrait"],
    mythes: [],
  },
  {
    slug: "melisse",
    nom: "Mélisse",
    nomsAlternatifs: ["Melissa officinalis", "Citronnelle"],
    categorie: "Plante & adaptogène",
    resume: "Plante de la famille de la menthe, traditionnellement digestive et apaisante.",
    description:
      "La mélisse est une plante aromatique utilisée depuis l'Antiquité pour ses vertus apaisantes sur le système nerveux et digestif, souvent en tisane après les repas ou en soirée.",
    bienfaits: [
      "Utilisée traditionnellement pour le confort digestif",
      "Contribue à réduire la tension nerveuse légère",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes sujettes aux ballonnements liés au stress", "Nervosité légère"],
    dosage: {
      recommande: "300 à 600 mg d'extrait sec/jour, ou en tisane",
      maximum: "900 mg/jour",
    },
    sourcesAlimentaires: ["Feuilles fraîches ou séchées, en tisane"],
    mythes: [],
  },
  {
    slug: "camomille",
    nom: "Camomille",
    nomsAlternatifs: ["Matricaria chamomilla"],
    categorie: "Plante & adaptogène",
    resume: "L'une des plantes les plus consommées au monde en tisane apaisante.",
    description:
      "La camomille (allemande ou romaine selon les variétés) est traditionnellement utilisée pour apaiser le système digestif et favoriser la détente, en particulier le soir.",
    bienfaits: [
      "Utilisée traditionnellement pour le confort digestif",
      "Contribue à la détente avant le sommeil",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Troubles digestifs légers", "Rituel du soir pour la détente"],
    dosage: {
      recommande: "1 à 3 tasses infusées/jour, ou 200 à 400 mg d'extrait",
      maximum: "Pas de limite stricte en usage traditionnel (tisane)",
      remarque: "Rares allergies croisées possibles chez les personnes allergiques aux astéracées (marguerites, ambroisie).",
    },
    sourcesAlimentaires: ["Fleurs séchées, en tisane"],
    mythes: [],
  },
  {
    slug: "millepertuis",
    nom: "Millepertuis",
    nomsAlternatifs: ["Hypericum perforatum", "Herbe de la Saint-Jean"],
    categorie: "Plante & adaptogène",
    resume: "Plante étudiée pour la déprime légère, mais aux interactions médicamenteuses majeures.",
    description:
      "Le millepertuis est une plante largement étudiée pour son effet sur les baisses de moral légères à modérées. Son point crucial : il interagit avec un très grand nombre de médicaments en accélérant leur élimination par le foie.",
    bienfaits: [
      "Étudié pour un soutien du tonus moral en cas de coup de moins bien passager",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Adultes en baisse de moral légère et passagère, en dehors de toute autre prise médicamenteuse"],
    dosage: {
      recommande: "300 mg d'extrait standardisé, 2 à 3 fois par jour",
      maximum: "1800 mg/jour",
      remarque:
        "Interactions majeures : réduit l'efficacité de la pilule contraceptive, des anticoagulants, de certains antidépresseurs et immunosuppresseurs. Ne jamais l'associer à un traitement sans avis médical ou pharmaceutique préalable.",
    },
    sourcesAlimentaires: ["Fleurs séchées, en extrait ou en tisane"],
    mythes: [
      {
        affirmation: "C'est une plante douce, donc sans danger à combiner avec d'autres traitements.",
        realite:
          "C'est l'une des plantes qui interagit avec le plus grand nombre de médicaments ; 'naturel' ne veut pas dire 'sans interaction'.",
      },
    ],
  },
  {
    slug: "griffonia-5-htp",
    nom: "Griffonia (5-HTP)",
    nomsAlternatifs: ["5-hydroxytryptophane", "Griffonia simplicifolia"],
    categorie: "Plante & adaptogène",
    resume: "Graine africaine riche en 5-HTP, précurseur de la sérotonine.",
    description:
      "Le griffonia est une plante africaine dont les graines sont riches en 5-HTP, un précurseur direct de la sérotonine, le neurotransmetteur associé à la régulation de l'humeur et du sommeil.",
    bienfaits: [
      "Étudié comme précurseur de la sérotonine",
      "Utilisé traditionnellement pour soutenir l'humeur et le sommeil",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Adultes en dehors de tout traitement agissant sur la sérotonine"],
    dosage: {
      recommande: "50 à 100 mg de 5-HTP/jour",
      maximum: "300 mg/jour",
      remarque:
        "Ne jamais associer à un antidépresseur (ISRS, IMAO...) : risque de syndrome sérotoninergique, potentiellement grave. Avis médical indispensable en cas de traitement en cours.",
    },
    sourcesAlimentaires: ["Graines de griffonia, en extrait uniquement (pas de source alimentaire courante)"],
    mythes: [],
  },
  {
    slug: "maca",
    nom: "Maca",
    nomsAlternatifs: ["Lepidium meyenii", "Ginseng péruvien"],
    categorie: "Plante & adaptogène",
    resume: "Racine andine traditionnellement utilisée pour l'énergie et la libido.",
    description:
      "La maca est une racine cultivée dans les hauts plateaux des Andes péruviennes, traditionnellement consommée comme aliment énergisant et pour soutenir la libido et la fertilité.",
    bienfaits: [
      "Utilisée traditionnellement pour soutenir l'énergie physique",
      "Étudiée pour un effet potentiel sur la libido",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes en baisse d'énergie générale", "Soutien de la libido"],
    dosage: {
      recommande: "1,5 à 3 g de poudre de racine/jour",
      maximum: "3,5 g/jour dans les études cliniques",
    },
    sourcesAlimentaires: ["Racine séchée en poudre, intégrable aux smoothies ou porridges"],
    mythes: [
      {
        affirmation: "La maca a un effet hormonal comparable à un traitement médical.",
        realite:
          "Elle ne contient pas d'hormones ; les effets rapportés sont indirects et plus modestes qu'un traitement hormonal.",
      },
    ],
  },
  {
    slug: "guarana",
    nom: "Guarana",
    nomsAlternatifs: ["Paullinia cupana"],
    categorie: "Plante & adaptogène",
    resume: "Graine amazonienne parmi les plus riches en caféine naturelle.",
    description:
      "Le guarana est une plante originaire d'Amazonie dont les graines sont exceptionnellement riches en caféine, souvent utilisée comme alternative 'naturelle' au café dans les compléments énergisants.",
    bienfaits: [
      "Contribue à augmenter la vigilance (grâce à sa teneur en caféine)",
      "Utilisé traditionnellement comme stimulant",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes recherchant un stimulant naturel", "Sportifs d'endurance"],
    dosage: {
      recommande: "200 à 800 mg de poudre/jour (soit environ 20 à 80 mg de caféine)",
      maximum: "En cumulant toutes les sources de caféine (café, thé, guarana), ne pas dépasser 400 mg de caféine/jour",
      remarque: "Le guarana n'est pas 'sans caféine' : la teneur doit se cumuler avec les autres sources caféinées de la journée.",
    },
    sourcesAlimentaires: ["Graines séchées, poudre ou extrait"],
    mythes: [
      {
        affirmation: "Le guarana est une alternative sans stimulant au café.",
        realite:
          "C'est en réalité l'une des plantes les plus concentrées en caféine naturelle, souvent plus que le café à poids égal.",
      },
    ],
  },
  {
    slug: "aloe-vera",
    nom: "Aloe vera",
    nomsAlternatifs: ["Aloès"],
    categorie: "Plante & adaptogène",
    resume: "Plante aux usages multiples, cutanés et digestifs.",
    description:
      "L'aloe vera est utilisé depuis des millénaires à la fois en application cutanée (gel) et en usage interne (jus), pour soutenir respectivement la peau et le confort digestif.",
    bienfaits: [
      "Utilisé traditionnellement pour apaiser la peau (usage externe)",
      "Étudié pour un soutien du confort digestif (usage interne, jus)",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Peaux irritées (usage externe)", "Confort digestif (usage interne, avec prudence)"],
    dosage: {
      recommande: "Jus d'aloe vera : selon indication du produit, généralement 10 à 30 mL/jour",
      maximum: "Suivre strictement les indications du fabricant",
      remarque: "Le jus d'aloe vera à base de latex (partie externe de la feuille) est un laxatif puissant et est interdit en usage interne prolongé dans plusieurs pays : privilégier les produits à base de gel purifié, sans aloïne.",
    },
    sourcesAlimentaires: ["Gel ou jus d'aloe vera transformé"],
    mythes: [],
  },
  {
    slug: "canneberge",
    nom: "Canneberge",
    nomsAlternatifs: ["Cranberry", "Vaccinium macrocarpon"],
    categorie: "Plante & adaptogène",
    resume: "Baie rouge nord-américaine étudiée pour le confort urinaire.",
    description:
      "La canneberge est étudiée depuis des décennies pour son rôle dans la prévention des infections urinaires récidivantes, grâce à des composés (proanthocyanidines) qui limiteraient l'adhésion de certaines bactéries à la paroi de la vessie.",
    bienfaits: [
      "Étudiée pour aider à réduire la récidive des inconforts urinaires",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Femmes sujettes aux infections urinaires récidivantes"],
    dosage: {
      recommande: "36 mg de proanthocyanidines (PAC)/jour",
      maximum: "72 mg de PAC/jour",
      remarque: "La canneberge est préventive, pas curative : en cas d'infection urinaire avérée avec fièvre ou douleur, consulter un médecin.",
    },
    sourcesAlimentaires: ["Jus de canneberge non sucré", "Baies séchées"],
    mythes: [
      {
        affirmation: "Boire du jus de canneberge soigne une infection urinaire en cours.",
        realite:
          "Son rôle est préventif sur les récidives, pas curatif sur une infection déjà installée, qui nécessite un traitement médical adapté.",
      },
    ],
  },
  {
    slug: "chardon-marie",
    nom: "Chardon-Marie",
    nomsAlternatifs: ["Silymarine", "Silybum marianum"],
    categorie: "Plante & adaptogène",
    resume: "Plante traditionnellement associée au soutien de la fonction hépatique.",
    description:
      "Le chardon-Marie contient de la silymarine, un complexe de composés étudié pour son rôle protecteur sur les cellules du foie, notamment en cas d'excès alimentaires ou d'exposition à des toxines.",
    bienfaits: [
      "Utilisé traditionnellement pour soutenir la fonction hépatique",
      "Propriétés antioxydantes étudiées",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes en période d'excès alimentaires ou d'alcool ponctuels", "Soutien hépatique général"],
    dosage: {
      recommande: "200 à 400 mg de silymarine/jour",
      maximum: "800 mg/jour",
    },
    sourcesAlimentaires: ["Graines de chardon-Marie, en extrait uniquement"],
    mythes: [
      {
        affirmation: "Le chardon-Marie permet de boire de l'alcool sans risque pour le foie.",
        realite:
          "Il peut soutenir la fonction hépatique mais ne neutralise pas les effets toxiques de l'alcool ; ce n'est pas un 'anti-dote'.",
      },
    ],
  },
  {
    slug: "boswellia",
    nom: "Boswellia",
    nomsAlternatifs: ["Encens indien", "Boswellia serrata"],
    categorie: "Plante & adaptogène",
    resume: "Résine traditionnelle indienne, souvent associée au curcuma pour les articulations.",
    description:
      "La résine de boswellia est utilisée en médecine ayurvédique traditionnelle et étudiée pour son effet sur le confort articulaire, souvent en complément du curcuma dans les formulations anti-inflammatoires naturelles.",
    bienfaits: [
      "Étudiée pour un soutien du confort articulaire",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien articulaire naturel"],
    dosage: {
      recommande: "300 à 500 mg d'extrait standardisé (65 % acides boswelliques), 2 à 3 fois/jour",
      maximum: "1500 mg/jour",
    },
    sourcesAlimentaires: ["Résine séchée, en extrait uniquement"],
    mythes: [],
  },
  {
    slug: "reishi",
    nom: "Reishi",
    nomsAlternatifs: ["Ganoderma lucidum", "Champignon de l'immortalité"],
    categorie: "Plante & adaptogène",
    resume: "Champignon médicinal asiatique, star de la tendance 'mushroom' bien-être.",
    description:
      "Le reishi est un champignon utilisé depuis des siècles en médecine traditionnelle chinoise, aujourd'hui populaire dans la tendance des 'champignons fonctionnels', étudié notamment pour son soutien à l'immunité et à la détente.",
    bienfaits: [
      "Utilisé traditionnellement pour soutenir le système immunitaire",
      "Étudié pour un effet relaxant sur le stress",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien immunitaire de fond"],
    dosage: {
      recommande: "1 à 1,5 g d'extrait sec/jour",
      maximum: "5 g/jour",
    },
    sourcesAlimentaires: ["Champignon séché ou en extrait (pas d'équivalent culinaire courant)"],
    mythes: [],
  },
  {
    slug: "cordyceps",
    nom: "Cordyceps",
    nomsAlternatifs: ["Cordyceps sinensis / militaris"],
    categorie: "Plante & adaptogène",
    resume: "Champignon d'altitude étudié pour l'endurance et l'oxygénation.",
    description:
      "Le cordyceps est un champignon traditionnellement récolté en haute altitude en Asie, étudié plus récemment pour son effet potentiel sur l'endurance à l'effort et l'utilisation de l'oxygène par les muscles.",
    bienfaits: [
      "Étudié pour un soutien de l'endurance à l'effort",
      "Utilisé traditionnellement comme tonique général",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Sportifs d'endurance", "Personnes en altitude"],
    dosage: {
      recommande: "1 à 3 g d'extrait sec/jour",
      maximum: "3 g/jour",
    },
    sourcesAlimentaires: ["Champignon séché ou en extrait"],
    mythes: [],
  },
  {
    slug: "baies-de-goji",
    nom: "Baies de goji",
    nomsAlternatifs: ["Lycium barbarum"],
    categorie: "Plante & adaptogène",
    resume: "Baie rouge présentée comme 'superaliment', preuves scientifiques modestes.",
    description:
      "Les baies de goji sont riches en antioxydants et vitamines, largement médiatisées comme 'superaliment'. Leurs bienfaits nutritionnels sont réels mais souvent comparables à ceux d'autres fruits rouges courants et moins coûteux.",
    bienfaits: [
      "Source d'antioxydants et de vitamine C",
      "Intégrable facilement à une alimentation variée",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant à diversifier leurs apports en antioxydants"],
    dosage: {
      recommande: "15 à 30 g de baies séchées/jour",
      maximum: "Pas de limite stricte établie, aliment courant",
    },
    sourcesAlimentaires: ["Baies séchées, à consommer telles quelles ou en infusion"],
    mythes: [
      {
        affirmation: "Les baies de goji sont bien plus riches en antioxydants que les fruits rouges locaux.",
        realite:
          "Des fruits rouges courants comme les myrtilles ou les cassis offrent un profil antioxydant comparable, pour un coût généralement bien inférieur.",
      },
    ],
  },
  {
    slug: "actee-a-grappes-noires",
    nom: "Actée à grappes noires",
    nomsAlternatifs: ["Cimicifuga", "Black cohosh"],
    categorie: "Plante & adaptogène",
    resume: "Plante nord-américaine traditionnellement utilisée contre les troubles de la ménopause.",
    description:
      "L'actée à grappes noires est une plante traditionnellement utilisée pour atténuer les symptômes inconfortables de la ménopause, notamment les bouffées de chaleur.",
    bienfaits: [
      "Utilisée traditionnellement pour atténuer les bouffées de chaleur de la ménopause",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Femmes ménopausées avec bouffées de chaleur"],
    dosage: {
      recommande: "40 mg d'extrait standardisé/jour",
      maximum: "40 mg/jour en usage prolongé (au-delà de 6 mois, avis médical recommandé)",
      remarque: "De très rares cas d'atteinte hépatique ont été rapportés : à éviter en cas d'antécédent de maladie du foie, et à signaler à son médecin en cas de jaunisse ou de troubles digestifs inhabituels.",
    },
    sourcesAlimentaires: ["Racine séchée, en extrait uniquement"],
    mythes: [
      {
        affirmation: "C'est un substitut hormonal naturel équivalent à un traitement hormonal de la ménopause.",
        realite:
          "Son mécanisme d'action n'est pas clairement hormonal et son efficacité, bien que documentée sur les bouffées de chaleur, reste plus modeste qu'un traitement hormonal substitutif.",
      },
    ],
  },
  {
    slug: "prele",
    nom: "Prêle",
    nomsAlternatifs: ["Equisetum arvense"],
    categorie: "Plante & adaptogène",
    resume: "Plante riche en silicium, populaire pour les cheveux, la peau et les ongles.",
    description:
      "La prêle des champs est une plante riche en silicium organique, un minéral impliqué dans la structure du collagène, ce qui explique sa popularité dans les compléments beauté pour cheveux, peau et ongles.",
    bienfaits: [
      "Étudiée pour un soutien de la solidité des cheveux et des ongles",
      "Apport en silicium, utile à la structure du collagène",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien beauté cheveux/peau/ongles"],
    dosage: {
      recommande: "300 à 900 mg d'extrait sec/jour, ou en tisane",
      maximum: "900 mg/jour",
      remarque: "Choisir un extrait pauvre en thuyone (composé potentiellement irritant à haute dose) et éviter un usage prolongé sans pause.",
    },
    sourcesAlimentaires: ["Parties aériennes séchées, en tisane ou en extrait"],
    mythes: [],
  },
  {
    slug: "echinacee",
    nom: "Échinacée",
    nomsAlternatifs: ["Echinacea purpurea"],
    categorie: "Plante & adaptogène",
    resume: "Plante nord-américaine parmi les plus utilisées pour soutenir l'immunité hivernale.",
    description:
      "L'échinacée est une plante traditionnellement utilisée en cure courte dès les premiers signes de refroidissement, pour soutenir les défenses naturelles de l'organisme.",
    bienfaits: [
      "Utilisée traditionnellement pour soutenir le système immunitaire",
      "Prise en cure courte dès les premiers symptômes de refroidissement",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Adultes en période hivernale, en cure courte"],
    dosage: {
      recommande: "300 à 500 mg d'extrait sec, 2 à 3 fois/jour, en cure de 10 jours",
      maximum: "Cures répétées non recommandées au-delà de 10 jours consécutifs sans pause",
      remarque: "Déconseillée en cas de maladie auto-immune ou de traitement immunosuppresseur, du fait de son action stimulante sur l'immunité.",
    },
    sourcesAlimentaires: ["Racine ou partie aérienne séchée, en extrait ou tisane"],
    mythes: [],
  },
  {
    slug: "propolis",
    nom: "Propolis",
    categorie: "Plante & adaptogène",
    resume: "Résine récoltée par les abeilles, traditionnellement utilisée pour la gorge.",
    description:
      "La propolis est une substance résineuse récoltée par les abeilles sur les bourgeons d'arbres, traditionnellement utilisée pour apaiser la gorge et soutenir les défenses naturelles en hiver.",
    bienfaits: [
      "Utilisée traditionnellement pour apaiser la gorge",
      "Propriétés antioxydantes étudiées",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Adultes en période hivernale"],
    dosage: {
      recommande: "300 à 500 mg d'extrait/jour, ou en spray/pastille selon besoin",
      maximum: "1000 mg/jour",
      remarque: "Produit de la ruche : à éviter en cas d'allergie connue aux produits d'abeille (pollen, miel, venin).",
    },
    sourcesAlimentaires: ["Produit de la ruche, non alimentaire au sens strict"],
    mythes: [],
  },
  {
    slug: "gelee-royale",
    nom: "Gelée royale",
    categorie: "Plante & adaptogène",
    resume: "Sécrétion nourricière des abeilles, présentée comme tonique général.",
    description:
      "La gelée royale est la sécrétion qui nourrit exclusivement la reine des abeilles. Elle est commercialisée comme tonique général, notamment en période de fatigue ou de changement de saison.",
    bienfaits: [
      "Utilisée traditionnellement comme tonique en période de fatigue",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Adultes en période de fatigue passagère ou de changement de saison"],
    dosage: {
      recommande: "500 mg à 1 g de gelée fraîche/jour, en cure de 3 à 4 semaines",
      maximum: "1 g/jour",
      remarque: "Produit de la ruche : à éviter en cas d'allergie connue aux produits d'abeille, et chez les personnes asthmatiques (risque de réaction).",
    },
    sourcesAlimentaires: ["Produit de la ruche, non alimentaire au sens strict"],
    mythes: [],
  },
  {
    slug: "ortie",
    nom: "Ortie",
    nomsAlternatifs: ["Urtica dioica"],
    categorie: "Plante & adaptogène",
    resume: "Plante traditionnelle aux usages multiples : articulations, minéraux, prostate.",
    description:
      "L'ortie est utilisée en tisane pour ses apports en minéraux et traditionnellement pour le confort articulaire, tandis que sa racine est spécifiquement étudiée pour le confort urinaire masculin lié à la prostate.",
    bienfaits: [
      "Utilisée traditionnellement pour le confort articulaire",
      "La racine est étudiée pour le confort urinaire lié à la prostate",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien articulaire naturel", "Hommes de plus de 50 ans (racine, confort urinaire)"],
    dosage: {
      recommande: "300 à 600 mg d'extrait de feuille ou de racine/jour, ou en tisane",
      maximum: "900 mg/jour",
    },
    sourcesAlimentaires: ["Feuilles séchées, en tisane ou en soupe (feuilles cuites)"],
    mythes: [],
  },
  {
    slug: "pepins-de-raisin",
    nom: "Pépins de raisin",
    nomsAlternatifs: ["Extrait de pépins de raisin", "Proanthocyanidines"],
    categorie: "Plante & adaptogène",
    resume: "Extrait riche en antioxydants, étudié pour la circulation.",
    description:
      "L'extrait de pépins de raisin est riche en proanthocyanidines, des antioxydants étudiés pour leur rôle sur la santé des vaisseaux sanguins et la circulation veineuse.",
    bienfaits: [
      "Propriétés antioxydantes étudiées",
      "Étudié pour un soutien de la circulation veineuse",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes avec sensation de jambes lourdes", "Recherche d'un antioxydant complémentaire"],
    dosage: {
      recommande: "100 à 300 mg d'extrait standardisé/jour",
      maximum: "300 mg/jour",
    },
    sourcesAlimentaires: ["Pépins de raisin (peu consommés tels quels), raisin entier avec pépins"],
    mythes: [],
  },
  {
    slug: "astragale",
    nom: "Astragale",
    nomsAlternatifs: ["Astragalus membranaceus"],
    categorie: "Plante & adaptogène",
    resume: "Racine adaptogène chinoise, traditionnellement utilisée pour l'immunité de fond.",
    description:
      "L'astragale est une racine utilisée depuis des siècles en médecine traditionnelle chinoise comme tonique de fond, notamment pour soutenir l'immunité sur la durée plutôt qu'en cure ponctuelle.",
    bienfaits: [
      "Utilisée traditionnellement pour soutenir l'immunité de fond",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien immunitaire au long cours"],
    dosage: {
      recommande: "250 à 500 mg d'extrait standardisé, 1 à 2 fois/jour",
      maximum: "1000 mg/jour",
      remarque: "Déconseillée en cas de maladie auto-immune ou de traitement immunosuppresseur, comme pour l'échinacée.",
    },
    sourcesAlimentaires: ["Racine séchée, en décoction ou en extrait"],
    mythes: [],
  },
  {
    slug: "bacopa-monnieri",
    nom: "Bacopa monnieri",
    nomsAlternatifs: ["Brahmi"],
    categorie: "Plante & adaptogène",
    resume: "Plante ayurvédique étudiée pour la mémoire et l'apprentissage.",
    description:
      "Le bacopa monnieri est une plante traditionnelle ayurvédique étudiée plus récemment pour son effet potentiel sur la mémoire et les capacités d'apprentissage, avec un usage généralement long avant d'observer un effet.",
    bienfaits: [
      "Étudié pour un soutien de la mémoire et de la concentration",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Étudiants ou personnes en période d'apprentissage intense", "Adultes cherchant un soutien cognitif"],
    dosage: {
      recommande: "300 mg d'extrait standardisé (50 % bacosides)/jour",
      maximum: "450 mg/jour",
      remarque: "Les effets rapportés en études apparaissent généralement après 8 à 12 semaines d'usage régulier, pas immédiatement.",
    },
    sourcesAlimentaires: ["Plante séchée, en extrait uniquement (pas d'équivalent alimentaire courant)"],
    mythes: [],
  },
  {
    slug: "safran",
    nom: "Safran",
    nomsAlternatifs: ["Crocus sativus"],
    categorie: "Plante & adaptogène",
    resume: "L'épice la plus chère au monde, étudiée pour l'humeur et l'appétit.",
    description:
      "Le safran, épice obtenue à partir des stigmates de crocus, est étudié en extrait concentré pour un possible soutien de l'humeur et une régulation de l'appétit émotionnel.",
    bienfaits: [
      "Étudié pour un soutien du tonus moral",
      "Étudié pour un effet sur l'appétit émotionnel",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes en légère baisse de moral passagère", "Grignotage émotionnel"],
    dosage: {
      recommande: "30 mg d'extrait standardisé/jour",
      maximum: "30 mg/jour dans les études cliniques disponibles",
      remarque: "À distinguer de l'épice culinaire : les doses étudiées utilisent un extrait concentré et standardisé, pas du safran de cuisine.",
    },
    sourcesAlimentaires: ["Épice culinaire (quantités bien plus faibles que les extraits concentrés)"],
    mythes: [],
  },
  {
    slug: "fenugrec",
    nom: "Fenugrec",
    nomsAlternatifs: ["Trigonella foenum-graecum"],
    categorie: "Plante & adaptogène",
    resume: "Graine traditionnellement utilisée pour la glycémie et l'allaitement.",
    description:
      "Le fenugrec est une graine traditionnellement utilisée pour soutenir une glycémie déjà normale et pour favoriser la lactation chez les femmes allaitantes. Il est aussi populaire, à tort, comme 'booster de testostérone'.",
    bienfaits: [
      "Étudié pour un soutien d'une glycémie déjà normale",
      "Utilisé traditionnellement pour soutenir la lactation",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Femmes allaitantes (sous supervision)", "Personnes surveillant leur glycémie"],
    dosage: {
      recommande: "5 à 6 g de graines/jour, ou 500 à 600 mg d'extrait",
      maximum: "6 g/jour",
      remarque: "Peut potentialiser l'effet de traitements contre le diabète : surveillance médicale recommandée en cas de traitement en cours.",
    },
    sourcesAlimentaires: ["Graines entières ou moulues, utilisées en cuisine indienne"],
    mythes: [
      {
        affirmation: "Le fenugrec augmente significativement la testostérone chez tout le monde.",
        realite:
          "Les études sur la testostérone sont peu nombreuses et aux résultats modestes et inconstants ; ce n'est pas un effet fiable ni comparable à un traitement hormonal.",
      },
    ],
  },
  {
    slug: "tribulus-terrestris",
    nom: "Tribulus terrestris",
    categorie: "Plante & adaptogène",
    resume: "Plante très marketée comme 'booster de testostérone', preuves faibles.",
    description:
      "Le tribulus terrestris est une plante largement commercialisée dans les compléments pour sportifs sous l'angle de la testostérone et de la libido, alors que les preuves scientifiques d'un effet réel sur la testostérone restent faibles chez l'humain en bonne santé.",
    bienfaits: [
      "Utilisé traditionnellement pour soutenir la libido",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes cherchant un soutien de la libido (effet variable et non garanti)"],
    dosage: {
      recommande: "250 à 750 mg d'extrait standardisé/jour",
      maximum: "1500 mg/jour",
    },
    sourcesAlimentaires: ["Fruits et racines séchées, en extrait uniquement"],
    mythes: [
      {
        affirmation: "Le tribulus terrestris augmente la testostérone comme une cure hormonale.",
        realite:
          "La grande majorité des études contrôlées ne montrent pas d'augmentation significative de la testostérone chez l'homme sain ; c'est l'un des compléments sportifs les plus surévalués marketing.",
      },
    ],
  },
  {
    slug: "gingembre",
    nom: "Gingembre",
    nomsAlternatifs: ["Zingiber officinale"],
    categorie: "Plante & adaptogène",
    resume: "Racine très courante, référence traditionnelle contre les nausées.",
    description:
      "Le gingembre est l'une des plantes les mieux documentées pour son effet sur les nausées, notamment celles liées au transport ou en début de grossesse, en plus de ses vertus digestives générales.",
    bienfaits: [
      "Étudié pour aider à réduire les nausées",
      "Utilisé traditionnellement pour le confort digestif",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes sujettes au mal des transports", "Femmes enceintes avec nausées (dans la limite des doses alimentaires usuelles, avis médical recommandé)"],
    dosage: {
      recommande: "1 à 1,5 g de racine séchée/jour",
      maximum: "4 g/jour",
      remarque: "À dose élevée et prolongée, peut avoir un léger effet anticoagulant : prudence en association avec des traitements fluidifiants ou avant une opération.",
    },
    sourcesAlimentaires: ["Racine fraîche ou séchée, infusion, cuisine asiatique"],
    mythes: [],
  },
  {
    slug: "ail",
    nom: "Ail",
    nomsAlternatifs: ["Allium sativum"],
    categorie: "Plante & adaptogène",
    resume: "Aliment-plante parmi les plus étudiés pour la santé cardiovasculaire.",
    description:
      "L'ail est à la fois un aliment courant et une plante médicinale largement étudiée, en particulier pour son rôle potentiel sur la pression artérielle et le cholestérol, souvent sous forme d'extrait vieilli ou standardisé.",
    bienfaits: [
      "Étudié pour un soutien d'une pression artérielle déjà normale",
      "Étudié pour un soutien du profil lipidique (cholestérol)",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes suivant leur santé cardiovasculaire au quotidien"],
    dosage: {
      recommande: "600 à 1200 mg d'extrait standardisé/jour, ou 1 à 2 gousses fraîches",
      maximum: "1200 mg/jour en extrait",
      remarque: "Peut augmenter le risque de saignement en association avec des anticoagulants ou avant une opération, comme le gingembre.",
    },
    sourcesAlimentaires: ["Gousses fraîches, très présentes dans l'alimentation courante"],
    mythes: [],
  },
  {
    slug: "vigne-rouge",
    nom: "Vigne rouge",
    nomsAlternatifs: ["Vitis vinifera"],
    categorie: "Plante & adaptogène",
    resume: "Plante de référence en France pour la sensation de jambes lourdes.",
    description:
      "La vigne rouge est l'une des plantes les plus utilisées en France pour soutenir la circulation veineuse et atténuer la sensation de jambes lourdes, en particulier en fin de journée ou en été.",
    bienfaits: [
      "Étudiée pour un soutien de la circulation veineuse",
      "Utilisée traditionnellement contre la sensation de jambes lourdes",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes avec sensation de jambes lourdes", "Métiers en station debout prolongée"],
    dosage: {
      recommande: "300 à 600 mg d'extrait de feuille standardisé/jour",
      maximum: "600 mg/jour",
    },
    sourcesAlimentaires: ["Feuilles séchées, en extrait ou en tisane"],
    mythes: [],
  },
  {
    slug: "marron-dinde",
    nom: "Marron d'Inde",
    nomsAlternatifs: ["Aesculus hippocastanum", "Escine"],
    categorie: "Plante & adaptogène",
    resume: "Graine étudiée pour renforcer la paroi des veines.",
    description:
      "Le marron d'Inde contient de l'escine, un composé étudié pour son effet tonifiant sur la paroi des veines, utilisé en complément de la sensation de jambes lourdes et du confort veineux.",
    bienfaits: [
      "Étudié pour un soutien du tonus veineux",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes avec inconfort veineux (jambes lourdes, sensation de gonflement)"],
    dosage: {
      recommande: "250 à 300 mg d'extrait standardisé (16-20 % escine), 2 fois/jour",
      maximum: "600 mg/jour",
      remarque: "Seule la graine transformée en extrait standardisé est utilisée : le marron cru est toxique et ne doit jamais être consommé tel quel.",
    },
    sourcesAlimentaires: ["Aucune : uniquement sous forme d'extrait transformé"],
    mythes: [],
  },
  {
    slug: "artichaut",
    nom: "Artichaut",
    nomsAlternatifs: ["Cynara scolymus"],
    categorie: "Plante & adaptogène",
    resume: "Plante traditionnelle pour le confort digestif et hépatique après les repas copieux.",
    description:
      "Les feuilles d'artichaut sont traditionnellement utilisées pour soutenir la digestion et la fonction hépatique, en particulier après des repas riches en graisses.",
    bienfaits: [
      "Utilisé traditionnellement pour le confort digestif",
      "Étudié pour un soutien de la fonction hépatique",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes avec digestion difficile après repas copieux"],
    dosage: {
      recommande: "300 à 600 mg d'extrait de feuille/jour",
      maximum: "1500 mg/jour",
    },
    sourcesAlimentaires: ["Feuilles séchées en extrait ; le cœur d'artichaut consommé en légume a un effet plus modeste"],
    mythes: [],
  },
  {
    slug: "reglisse",
    nom: "Réglisse",
    nomsAlternatifs: ["Glycyrrhiza glabra"],
    categorie: "Plante & adaptogène",
    resume: "Racine digestive traditionnelle, à utiliser en cures courtes.",
    description:
      "La réglisse est traditionnellement utilisée pour apaiser le confort digestif et la gorge. Sa consommation régulière et prolongée doit rester limitée en raison de son effet possible sur la tension artérielle.",
    bienfaits: [
      "Utilisée traditionnellement pour le confort digestif",
      "Utilisée traditionnellement pour apaiser la gorge",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes avec inconfort digestif ponctuel, en dehors de toute hypertension"],
    dosage: {
      recommande: "En cure courte, selon les indications du produit (souvent 2 à 4 semaines maximum)",
      maximum: "Consommation régulière déconseillée au-delà de quelques semaines sans pause",
      remarque: "Une consommation régulière et prolongée peut élever la tension artérielle et abaisser le potassium : déconseillée en cas d'hypertension, sans avis médical.",
    },
    sourcesAlimentaires: ["Racine séchée, bonbons et confiseries à la réglisse (souvent aromatisés, peu de racine réelle)"],
    mythes: [
      {
        affirmation: "Les bonbons à la réglisse contiennent assez de plante pour poser un risque.",
        realite:
          "La plupart des confiseries n'utilisent qu'un arôme et très peu de vraie racine ; le risque concerne surtout les extraits concentrés pris régulièrement sur plusieurs semaines.",
      },
    ],
  },
  {
    slug: "konjac",
    nom: "Konjac",
    nomsAlternatifs: ["Glucomannane"],
    categorie: "Plante & adaptogène",
    resume: "Fibre végétale très gonflante, utilisée pour la satiété.",
    description:
      "Le konjac est une plante dont le tubercule est riche en glucomannane, une fibre soluble qui gonfle fortement au contact de l'eau, utilisée pour favoriser la sensation de satiété dans le cadre d'un régime alimentaire.",
    bienfaits: [
      "Contribue à la perte de poids dans le cadre d'un régime hypocalorique (allégation encadrée, à dose définie)",
      "Favorise la sensation de satiété",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes dans une démarche de gestion du poids, en complément d'une alimentation adaptée"],
    dosage: {
      recommande: "1 g avant chaque repas principal, avec un grand verre d'eau",
      maximum: "3 g/jour",
      remarque: "Toujours prendre avec beaucoup d'eau et en position assise : le gonflement peut provoquer une gêne, voire un risque d'étouffement si pris sec ou allongé.",
    },
    sourcesAlimentaires: ["Tubercule transformé en poudre ou en gélules ; nouilles shirataki"],
    mythes: [
      {
        affirmation: "Le konjac fait maigrir sans changer son alimentation.",
        realite:
          "Il aide à réduire la faim, mais l'allégation officielle s'applique dans le cadre d'un régime hypocalorique, pas comme solution isolée.",
      },
    ],
  },
  {
    slug: "chlorella",
    nom: "Chlorella",
    categorie: "Plante & adaptogène",
    resume: "Micro-algue verte, cousine de la spiruline, riche en chlorophylle.",
    description:
      "La chlorella est une micro-algue d'eau douce, souvent comparée à la spiruline, mais dont la paroi cellulaire épaisse nécessite un traitement spécifique (éclatement) pour être bien digérée. Elle est riche en chlorophylle et en fer.",
    bienfaits: [
      "Source de fer et de chlorophylle",
      "Apport en protéines végétales",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Végétariens et végétaliens cherchant à diversifier leurs sources de fer"],
    dosage: {
      recommande: "2 à 3 g/jour",
      maximum: "10 g/jour",
      remarque: "Choisir une chlorella 'à paroi éclatée' pour une meilleure digestibilité, et une source contrôlée pour éviter les contaminants (comme pour la spiruline).",
    },
    sourcesAlimentaires: ["Poudre ou comprimés de chlorella"],
    mythes: [
      {
        affirmation: "La chlorella 'détoxifie' le corps des métaux lourds au quotidien.",
        realite:
          "Les preuves d'un effet détoxifiant significatif chez une personne en bonne santé sont très limitées ; le foie et les reins assurent déjà cette fonction naturellement.",
      },
    ],
  },

  // ---------- AUTRES ----------
  {
    slug: "creatine",
    nom: "Créatine",
    categorie: "Autre",
    resume:
      "L'un des compléments les plus étudiés scientifiquement pour la performance musculaire.",
    description:
      "La créatine est une molécule produite naturellement par le corps (foie, reins, pancréas) à partir d'acides aminés, et stockée principalement dans les muscles. Elle est surtout connue dans le monde sportif, mais fait aussi l'objet de recherches sur la fonction cognitive et le vieillissement.",
    bienfaits: [
      "Améliore la performance lors d'efforts brefs et intenses",
      "Favorise la prise de masse musculaire associée à l'entraînement",
      "Pistes de recherche sur la récupération cognitive",
    ],
    signesDeCarence: [
      "Pas de carence classique : la créatine est synthétisée par le corps et apportée par l'alimentation carnée",
    ],
    publicConcerne: [
      "Sportifs pratiquant la musculation ou des sports explosifs",
      "Végétariens et végétaliens (apports alimentaires naturellement plus faibles)",
      "Personnes âgées (pistes de recherche sur la masse musculaire)",
    ],
    dosage: {
      recommande: "3 à 5 g/jour de créatine monohydrate, en prise continue",
      maximum: "20 g/jour uniquement lors d'une phase de charge courte (5 à 7 jours)",
      remarque:
        "La phase de charge est optionnelle : une prise quotidienne de 3 à 5 g atteint la même saturation musculaire en 3 à 4 semaines.",
    },
    sourcesAlimentaires: [
      "Viande rouge",
      "Poisson",
      "Le corps humain (synthèse endogène)",
    ],
    mythes: [
      {
        affirmation: "La créatine est un stéroïde anabolisant.",
        realite:
          "Ce n'est pas une hormone mais une molécule naturelle également présente dans l'alimentation carnée ; elle est légale et l'un des compléments les plus documentés scientifiquement.",
      },
      {
        affirmation: "La créatine abîme les reins chez une personne en bonne santé.",
        realite:
          "Chez une personne sans pathologie rénale préexistante, les études disponibles ne montrent pas d'effet néfaste aux dosages usuels.",
      },
    ],
    vedette: true,
  },
  {
    slug: "proteine-en-poudre",
    nom: "Protéine en poudre",
    nomsAlternatifs: ["Whey", "Protéine végétale", "Isolat"],
    categorie: "Autre",
    resume: "Un aliment concentré en protéines, pas un produit magique.",
    description:
      "La protéine en poudre (whey de lait, ou végétale à base de pois, riz, soja...) est avant tout un aliment pratique et concentré en protéines, utile quand les apports alimentaires ne suffisent pas à couvrir les besoins, notamment chez les sportifs.",
    bienfaits: [
      "Aide à atteindre les apports protéiques quotidiens cibles",
      "Pratique après l'effort ou en cas d'appétit réduit",
      "Contribue au maintien et à la croissance de la masse musculaire (associé à l'exercice)",
    ],
    signesDeCarence: ["Pas de carence spécifique : c'est un apport en protéines, pas un nutriment isolé essentiel"],
    publicConcerne: ["Sportifs", "Personnes âgées à risque de perte musculaire", "Végétariens/végétaliens en phase de rattrapage protéique"],
    dosage: {
      recommande: "1,2 à 2,0 g de protéines/kg de poids corporel/jour (toutes sources alimentaires confondues)",
      maximum: "Au-delà de 2,2 g/kg/jour, le bénéfice supplémentaire est marginal pour la plupart des personnes",
      remarque: "La poudre ne remplace pas un repas complet : elle complète l'alimentation, elle ne s'y substitue pas entièrement.",
    },
    sourcesAlimentaires: ["Viande, poisson, œufs", "Légumineuses, tofu", "Produits laitiers"],
    mythes: [
      {
        affirmation: "La whey abîme les reins chez une personne en bonne santé.",
        realite:
          "Chez une personne aux reins sains, une consommation raisonnable de protéines (y compris en poudre) n'a pas montré d'effet néfaste dans les études disponibles.",
      },
    ],
  },
  {
    slug: "bcaa",
    nom: "BCAA",
    nomsAlternatifs: ["Acides aminés branchés", "Leucine, isoleucine, valine"],
    categorie: "Autre",
    resume: "Trois acides aminés essentiels, souvent redondants si l'apport en protéines est suffisant.",
    description:
      "Les BCAA (leucine, isoleucine, valine) sont trois acides aminés essentiels souvent vendus séparément pour la récupération musculaire. S'ils sont bien réels et essentiels, leur intérêt en complément isolé est débattu quand l'apport global en protéines est déjà suffisant.",
    bienfaits: [
      "Participent à la synthèse des protéines musculaires",
      "Peuvent réduire la sensation de fatigue perçue à l'effort",
    ],
    signesDeCarence: ["Couverts par un apport suffisant en protéines complètes ; carence isolée rare"],
    publicConcerne: ["Sportifs s'entraînant à jeun", "Personnes ayant un apport protéique alimentaire très faible"],
    dosage: {
      recommande: "5 à 10 g/jour autour de l'entraînement",
      maximum: "20 g/jour",
    },
    sourcesAlimentaires: ["Viande, poisson, œufs, produits laitiers (déjà riches en BCAA naturellement)"],
    mythes: [
      {
        affirmation: "Les BCAA sont indispensables en plus d'une whey ou d'une alimentation riche en protéines.",
        realite:
          "Si l'apport global en protéines complètes est suffisant, les BCAA supplémentaires n'apportent généralement pas de bénéfice mesurable en plus.",
      },
    ],
  },
  {
    slug: "collagene",
    nom: "Collagène",
    categorie: "Autre",
    resume: "Protéine structurale de la peau et des articulations, en plein essor beauté.",
    description:
      "Le collagène est la protéine la plus abondante du corps humain, présente dans la peau, les tendons, les ligaments et les articulations. Sa production naturelle diminue avec l'âge, d'où l'intérêt pour les compléments, en particulier hydrolysés.",
    bienfaits: [
      "Étudié pour un soutien de l'élasticité de la peau",
      "Étudié pour un soutien du confort articulaire",
    ],
    signesDeCarence: ["Non applicable en tant que tel : la production diminue avec l'âge plutôt qu'une carence classique"],
    publicConcerne: ["Personnes de plus de 40 ans", "Sportifs sollicitant fortement leurs articulations"],
    dosage: {
      recommande: "2,5 à 15 g/jour de collagène hydrolysé selon l'objectif (peau vs articulations)",
      maximum: "Aucune limite de sécurité stricte établie, c'est une protéine alimentaire",
      remarque: "Les effets, quand présents, apparaissent généralement après 8 à 12 semaines de prise régulière.",
    },
    sourcesAlimentaires: ["Bouillon d'os", "Peau et cartilage de viande ou de poisson"],
    mythes: [
      {
        affirmation: "Le collagène avalé va directement 'reconstruire' la peau du visage.",
        realite:
          "Une fois digéré, le collagène est décomposé en acides aminés que le corps peut utiliser pour fabriquer son propre collagène, sans garantie qu'il soit dirigé spécifiquement vers la peau.",
      },
    ],
  },
  {
    slug: "probiotiques",
    nom: "Probiotiques",
    categorie: "Autre",
    resume: "Micro-organismes vivants qui soutiennent l'équilibre de la flore intestinale.",
    description:
      "Les probiotiques sont des micro-organismes vivants (bactéries, parfois levures) qui, pris en quantité suffisante, peuvent contribuer à l'équilibre du microbiote intestinal. Leur effet est très spécifique à chaque souche.",
    bienfaits: [
      "Peuvent soutenir le confort digestif",
      "Utilisés en accompagnement d'un traitement antibiotique",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes sous antibiotiques", "Troubles digestifs fonctionnels"],
    dosage: {
      recommande: "1 à 10 milliards d'UFC/jour selon la souche et l'usage visé",
      maximum: "Varie fortement selon la souche : suivre les indications du produit",
      remarque: "L'efficacité dépend de la souche précise utilisée : toutes les souches ne se valent pas pour un même usage.",
    },
    sourcesAlimentaires: ["Yaourt", "Kéfir", "Choucroute crue", "Aliments fermentés non pasteurisés"],
    mythes: [
      {
        affirmation: "Tous les probiotiques se valent, peu importe la marque ou la souche.",
        realite:
          "Les effets démontrés en études sont propres à des souches précises (ex: Lactobacillus rhamnosus GG) et ne se généralisent pas automatiquement à toutes les autres.",
      },
    ],
  },
  {
    slug: "coenzyme-q10",
    nom: "Coenzyme Q10",
    nomsAlternatifs: ["CoQ10", "Ubiquinone"],
    categorie: "Autre",
    resume: "Molécule produite par le corps, essentielle à la production d'énergie cellulaire.",
    description:
      "La coenzyme Q10 est produite naturellement par l'organisme et joue un rôle clé dans la production d'énergie au niveau des mitochondries. Sa production diminue avec l'âge et certains traitements (statines).",
    bienfaits: [
      "Participe à la production d'énergie cellulaire",
      "Propriétés antioxydantes",
    ],
    signesDeCarence: ["Pas de carence classique ; baisse liée à l'âge ou à certains traitements"],
    publicConcerne: ["Personnes sous statines (qui réduisent la production naturelle de CoQ10)", "Personnes de plus de 50 ans"],
    dosage: {
      recommande: "90 à 200 mg/jour",
      maximum: "300 mg/jour",
      remarque: "Mieux absorbée lorsqu'elle est prise pendant un repas contenant des graisses.",
    },
    sourcesAlimentaires: ["Abats", "Poisson gras", "Huile de soja", "Arachides"],
    mythes: [],
  },
  {
    slug: "melatonine",
    nom: "Mélatonine",
    nomsAlternatifs: ["Hormone du sommeil"],
    categorie: "Autre",
    resume: "Hormone naturelle du sommeil, utile pour recaler l'horloge biologique.",
    description:
      "La mélatonine est une hormone produite naturellement par la glande pinéale en réponse à l'obscurité, qui signale au corps qu'il est temps de dormir. Elle est surtout utile pour resynchroniser l'horloge biologique (décalage horaire, travail de nuit) plutôt que comme somnifère classique.",
    bienfaits: [
      "Aide à réduire le temps d'endormissement dans certains contextes",
      "Utile pour atténuer les effets du décalage horaire",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Voyageurs (jet lag)", "Travailleurs de nuit", "Troubles ponctuels de l'endormissement"],
    dosage: {
      recommande: "0,5 à 2 mg, 30 à 60 minutes avant le coucher",
      maximum: "5 mg/jour",
      remarque: "Une dose plus faible est souvent aussi, voire plus, efficace qu'une dose élevée : plus n'est pas toujours mieux ici.",
    },
    sourcesAlimentaires: ["Cerises", "Noix (en quantités très faibles, effet alimentaire limité)"],
    mythes: [
      {
        affirmation: "Prendre une grosse dose de mélatonine assure un sommeil plus profond.",
        realite:
          "Son rôle est de resynchroniser l'horloge du sommeil, pas d'agir comme un sédatif puissant ; une dose élevée n'améliore pas forcément la qualité du sommeil et peut causer une somnolence résiduelle le lendemain.",
      },
    ],
  },
  {
    slug: "cafeine",
    nom: "Caféine",
    categorie: "Autre",
    resume: "Le stimulant le plus consommé au monde, aux effets bien documentés.",
    description:
      "La caféine est une substance stimulante naturellement présente dans le café, le thé et le cacao, également vendue en complément isolé, notamment pour la performance sportive et la vigilance.",
    bienfaits: [
      "Contribue à augmenter la vigilance",
      "Peut améliorer la performance et l'endurance à l'effort",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Sportifs d'endurance", "Personnes ayant besoin d'un soutien ponctuel de la vigilance"],
    dosage: {
      recommande: "3 à 6 mg/kg de poids corporel avant l'effort (contexte sportif)",
      maximum: "400 mg/jour pour un adulte en bonne santé (soit environ 4 tasses de café)",
      remarque: "Déconseillée pendant la grossesse au-delà de 200 mg/jour, et à éviter en fin de journée pour préserver le sommeil.",
    },
    sourcesAlimentaires: ["Café", "Thé", "Cacao", "Guarana"],
    mythes: [
      {
        affirmation: "La caféine déshydrate systématiquement.",
        realite:
          "Chez les consommateurs réguliers, l'effet diurétique léger est largement compensé par l'apport en liquide de la boisson elle-même.",
      },
    ],
  },
  {
    slug: "glucosamine-chondroitine",
    nom: "Glucosamine & Chondroïtine",
    categorie: "Autre",
    resume: "Duo populaire pour le confort articulaire, souvent pris ensemble.",
    description:
      "La glucosamine et la chondroïtine sont des composants naturels du cartilage, souvent associées en complément pour soutenir le confort articulaire, en particulier chez les personnes actives ou vieillissantes.",
    bienfaits: [
      "Étudiées pour un soutien du confort articulaire à long terme",
    ],
    signesDeCarence: ["Non applicable : ce ne sont pas des nutriments essentiels"],
    publicConcerne: ["Personnes de plus de 50 ans", "Sportifs sollicitant fortement leurs articulations"],
    dosage: {
      recommande: "1500 mg de glucosamine + 1200 mg de chondroïtine/jour",
      maximum: "Suivre les doses indiquées, pas de seuil universel établi",
      remarque:
        "Les effets, quand ils existent, sont progressifs et se manifestent après plusieurs semaines à plusieurs mois d'utilisation régulière.",
    },
    sourcesAlimentaires: ["Cartilage animal (bouillon d'os), pas de source végétale équivalente"],
    mythes: [
      {
        affirmation: "La glucosamine soulage la douleur articulaire dès la première prise.",
        realite:
          "Les études montrent un effet potentiel mais progressif sur plusieurs semaines, pas un soulagement immédiat comme un antidouleur classique.",
      },
    ],
  },
  {
    slug: "glutamine",
    nom: "Glutamine",
    nomsAlternatifs: ["L-glutamine"],
    categorie: "Autre",
    resume: "Acide aminé le plus abondant du corps, souvent associé à la récupération et l'intestin.",
    description:
      "La glutamine est l'acide aminé le plus abondant dans le sang et les muscles. Le corps en produit naturellement suffisamment dans la grande majorité des cas ; la supplémentation cible surtout des contextes de stress physique intense.",
    bienfaits: [
      "Participe au maintien de la fonction immunitaire en période de stress physique intense",
      "Utilisée comme source d'énergie par les cellules intestinales",
    ],
    signesDeCarence: ["Pas de carence classique chez l'adulte en bonne santé"],
    publicConcerne: ["Sportifs à très gros volume d'entraînement", "Personnes en soins intensifs (usage médical encadré)"],
    dosage: {
      recommande: "5 à 10 g/jour",
      maximum: "20 à 30 g/jour en usage sportif ponctuel",
    },
    sourcesAlimentaires: ["Viande, poisson, œufs", "Produits laitiers", "Chou, épinard"],
    mythes: [
      {
        affirmation: "La glutamine en complément est indispensable pour tout sportif régulier.",
        realite:
          "Chez une personne dont l'apport en protéines alimentaires est déjà suffisant, le corps produit assez de glutamine ; l'intérêt d'un complément isolé est surtout documenté en contexte médical ou d'effort extrême.",
      },
    ],
  },
  {
    slug: "taurine",
    nom: "Taurine",
    categorie: "Autre",
    resume: "Acide aminé produit par le corps, connu pour sa présence dans les boissons énergisantes.",
    description:
      "La taurine est un acide aminé que le corps synthétise naturellement et qui joue un rôle dans la fonction cardiaque, musculaire et la vision. Sa présence dans les boissons énergisantes lui donne une image trompeuse de simple 'stimulant'.",
    bienfaits: [
      "Participe au fonctionnement normal des muscles, dont le cœur",
      "Contribue à l'équilibre hydrique cellulaire",
    ],
    signesDeCarence: ["Carence isolée très rare chez l'adulte en bonne santé"],
    publicConcerne: ["Sportifs", "Personnes suivant un régime végétalien strict (apports alimentaires plus faibles)"],
    dosage: {
      recommande: "500 mg à 2 g/jour",
      maximum: "3 g/jour",
    },
    sourcesAlimentaires: ["Viande", "Poisson", "Fruits de mer", "Le corps humain (synthèse endogène)"],
    mythes: [
      {
        affirmation: "La taurine est elle-même un stimulant, comme la caféine.",
        realite:
          "La taurine n'a pas d'effet stimulant direct démontré ; l'effet 'coup de fouet' des boissons énergisantes vient essentiellement de leur caféine et de leur sucre.",
      },
    ],
  },
  {
    slug: "l-carnitine",
    nom: "L-carnitine",
    categorie: "Autre",
    resume: "Molécule impliquée dans le transport des graisses vers les cellules productrices d'énergie.",
    description:
      "La L-carnitine transporte les acides gras à longue chaîne vers les mitochondries, où ils sont utilisés comme source d'énergie. Elle est produite naturellement par le corps à partir de deux acides aminés.",
    bienfaits: [
      "Participe au métabolisme normal des graisses",
    ],
    signesDeCarence: ["Carence isolée rare, sauf pathologies métaboliques spécifiques"],
    publicConcerne: ["Végétariens et végétaliens (apports alimentaires plus faibles)", "Sportifs d'endurance"],
    dosage: {
      recommande: "500 mg à 2 g/jour",
      maximum: "3 g/jour",
    },
    sourcesAlimentaires: ["Viande rouge", "Poisson", "Produits laitiers"],
    mythes: [
      {
        affirmation: "La L-carnitine en complément fait fondre la graisse toute seule.",
        realite:
          "Les études chez des personnes non carencées montrent un effet faible à nul sur la perte de graisse sans association à l'exercice et à une alimentation adaptée.",
      },
    ],
  },
  {
    slug: "l-theanine",
    nom: "L-théanine",
    categorie: "Autre",
    resume: "Acide aminé du thé vert, étudié pour une détente sans somnolence.",
    description:
      "La L-théanine est un acide aminé naturellement présent dans le thé, étudié pour favoriser un état de calme mental sans provoquer de somnolence, ce qui en fait un complément souvent associé à la caféine pour en atténuer la nervosité.",
    bienfaits: [
      "Favorise un état de détente sans somnolence",
      "Peut atténuer la nervosité associée à la caféine",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel"],
    publicConcerne: ["Personnes sensibles à la nervosité liée à la caféine", "Besoin de calme sans perte de vigilance"],
    dosage: {
      recommande: "100 à 200 mg/jour",
      maximum: "400 mg/jour",
    },
    sourcesAlimentaires: ["Thé vert et thé noir infusés"],
    mythes: [],
  },
  {
    slug: "l-arginine-citrulline",
    nom: "L-arginine / Citrulline",
    categorie: "Autre",
    resume: "Acides aminés précurseurs de l'oxyde nitrique, populaires pour la congestion musculaire.",
    description:
      "La L-arginine et la L-citrulline sont deux acides aminés impliqués dans la production d'oxyde nitrique, une molécule qui dilate les vaisseaux sanguins. La citrulline est aujourd'hui souvent préférée à l'arginine car mieux absorbée par voie orale.",
    bienfaits: [
      "Contribue à la dilatation des vaisseaux sanguins (production d'oxyde nitrique)",
      "Étudiées pour un soutien de la performance à l'effort",
    ],
    signesDeCarence: ["Non applicable en usage sportif : ce sont des acides aminés non essentiels chez l'adulte sain"],
    publicConcerne: ["Sportifs de musculation ou d'endurance"],
    dosage: {
      recommande: "6 à 8 g de citrulline malate, ou 3 à 6 g de L-arginine, avant l'effort",
      maximum: "10 g/jour de citrulline malate",
      remarque: "Déconseillées en cas de traitement pour troubles de l'érection (type inhibiteurs de la PDE5) ou d'hypotension, sans avis médical, du fait de leur effet vasodilatateur cumulatif.",
    },
    sourcesAlimentaires: ["Pastèque (citrulline)", "Viande, poisson, noix (arginine)"],
    mythes: [
      {
        affirmation: "La L-arginine en complément augmente fortement les performances chez tout le monde.",
        realite:
          "Sa faible biodisponibilité orale limite son effet réel ; la citrulline, mieux absorbée, est aujourd'hui préférée dans la plupart des formulations sportives.",
      },
    ],
  },
  {
    slug: "msm",
    nom: "MSM",
    nomsAlternatifs: ["Méthylsulfonylméthane", "Soufre organique"],
    categorie: "Autre",
    resume: "Source de soufre organique, souvent associée à la glucosamine pour les articulations.",
    description:
      "Le MSM est une source de soufre organique, un élément impliqué dans la structure du collagène et des tissus conjonctifs, souvent associé à la glucosamine et à la chondroïtine dans les compléments articulaires.",
    bienfaits: [
      "Étudié pour un soutien du confort articulaire",
      "Apport en soufre organique, utile à la structure du collagène",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel reconnu"],
    publicConcerne: ["Personnes cherchant un soutien articulaire naturel"],
    dosage: {
      recommande: "1 à 3 g/jour",
      maximum: "6 g/jour",
    },
    sourcesAlimentaires: ["Présent en petites quantités dans certains fruits, légumes et céréales"],
    mythes: [],
  },
  {
    slug: "acide-hyaluronique",
    nom: "Acide hyaluronique",
    categorie: "Autre",
    resume: "Molécule hydratante naturelle de la peau et des articulations, aussi prise par voie orale.",
    description:
      "L'acide hyaluronique est une molécule naturellement présente dans la peau et le liquide articulaire, où elle retient l'eau. En plus de son usage cosmétique injecté ou appliqué, elle est aussi commercialisée en complément oral.",
    bienfaits: [
      "Étudié pour un soutien de l'hydratation de la peau (voie orale)",
      "Étudié pour un soutien du confort articulaire",
    ],
    signesDeCarence: ["Non applicable : la production diminue avec l'âge plutôt qu'une carence classique"],
    publicConcerne: ["Personnes de plus de 40 ans", "Peaux sèches"],
    dosage: {
      recommande: "120 à 240 mg/jour par voie orale",
      maximum: "200 mg/jour dans la plupart des études cliniques disponibles",
      remarque: "Les effets, quand présents, apparaissent généralement après plusieurs semaines de prise régulière, comme pour le collagène.",
    },
    sourcesAlimentaires: ["Bouillon d'os, cartilage animal (en très faibles quantités)"],
    mythes: [],
  },
  {
    slug: "acide-alpha-lipoique",
    nom: "Acide alpha-lipoïque",
    nomsAlternatifs: ["ALA (à ne pas confondre avec l'oméga-3 ALA)"],
    categorie: "Autre",
    resume: "Antioxydant produit par le corps, à la fois soluble dans l'eau et dans les graisses.",
    description:
      "L'acide alpha-lipoïque est un antioxydant particulier car actif à la fois dans les compartiments aqueux et lipidiques des cellules, produit naturellement par le corps en petites quantités et étudié pour son rôle antioxydant global.",
    bienfaits: [
      "Propriétés antioxydantes étudiées",
      "Participe au métabolisme énergétique cellulaire",
    ],
    signesDeCarence: ["Pas de carence classique décrite chez l'adulte sain"],
    publicConcerne: ["Personnes cherchant un antioxydant complémentaire"],
    dosage: {
      recommande: "100 à 300 mg/jour",
      maximum: "600 mg/jour",
      remarque: "Peut accentuer l'effet de traitements contre le diabète : surveillance de la glycémie recommandée en cas de traitement en cours.",
    },
    sourcesAlimentaires: ["Épinard", "Brocoli", "Abats"],
    mythes: [],
  },
  {
    slug: "lecithine-de-soja",
    nom: "Lécithine de soja",
    categorie: "Autre",
    resume: "Source de phospholipides, souvent utilisée pour le cholestérol et le foie.",
    description:
      "La lécithine de soja est riche en phospholipides, des composants naturels des membranes cellulaires, traditionnellement utilisée en complément pour soutenir le métabolisme des graisses et la fonction hépatique.",
    bienfaits: [
      "Source de phospholipides essentiels aux membranes cellulaires",
      "Utilisée traditionnellement pour soutenir le métabolisme des graisses",
    ],
    signesDeCarence: ["Non applicable : ce n'est pas un nutriment essentiel isolé"],
    publicConcerne: ["Personnes cherchant un soutien du métabolisme lipidique"],
    dosage: {
      recommande: "1200 à 2400 mg/jour",
      maximum: "4800 mg/jour",
      remarque: "Une allergie au soja contre-indique ce complément : des alternatives à base de lécithine de tournesol existent.",
    },
    sourcesAlimentaires: ["Soja", "Jaune d'œuf", "Huiles végétales non raffinées"],
    mythes: [],
  },
  {
    slug: "levure-de-biere",
    nom: "Levure de bière",
    categorie: "Autre",
    resume: "Source naturelle concentrée de vitamines B, populaire pour les cheveux et la peau.",
    description:
      "La levure de bière est un champignon microscopique naturellement riche en vitamines du groupe B, en minéraux et en protéines, traditionnellement utilisée comme complément généraliste pour la peau, les cheveux et le tonus.",
    bienfaits: [
      "Source naturelle concentrée de vitamines B",
      "Utilisée traditionnellement pour soutenir la peau et les cheveux",
    ],
    signesDeCarence: ["Non applicable : c'est une source alimentaire, pas un nutriment isolé"],
    publicConcerne: ["Personnes cherchant un complément généraliste en vitamines B"],
    dosage: {
      recommande: "1 à 3 g/jour (comprimés) selon la concentration du produit",
      maximum: "Suivre les indications du produit",
      remarque: "Choisir une levure 'revivifiable' inactivée pour un usage en complément (la levure vivante peut interagir avec le microbiote intestinal).",
    },
    sourcesAlimentaires: ["Levure de bière en paillettes ou comprimés"],
    mythes: [],
  },
];

export function getSupplementBySlug(slug: string): Supplement | undefined {
  return supplements.find((s) => s.slug === slug);
}

export const categories: Categorie[] = [
  "Vitamine",
  "Minéral",
  "Acide gras",
  "Plante & adaptogène",
  "Autre",
];
