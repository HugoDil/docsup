# Programmes d'affiliation — checklist

Chaque programme est **personnel** à toi (Hugo). Impossible pour un assistant de créer les comptes à ta place : tu dois t'inscrire, remplir tes infos fiscales/bancaires, obtenir ton code de tracking, puis me le passer à coller dans `src/data/affiliations.ts` (constante `CODES`).

Ordre suggéré : commencer par **iHerb** (un seul code pour CA + US, c'est le levier le plus rentable) et **Awin** (agrège plusieurs boutiques FR d'un coup).

## 🇫🇷 France

| Boutique | Programme | Où s'inscrire | Notes |
|---|---|---|---|
| Newpharma | Awin (probablement) | https://ui.awin.com/merchant-profile/... — chercher « Newpharma » dans l'affiliate network Awin ou Effiliation | Le code sera un identifiant Awin (`awinaffid`) ou un tracking `utm_source` selon le network |
| Nutrimuscle | Nutrimuscle Ambassadeurs | https://www.nutrimuscle.com/ — chercher « Ambassadeur » / « Partenariat » | Fonctionne souvent avec un code promo à donner aux clients, doublé d'un tracking `?ref=` |
| Fitnessboutique | Effiliation ou Awin | Chercher « Fitnessboutique » dans Effiliation | À vérifier |
| Pharma-gdd | Awin | https://ui.awin.com — chercher « Pharma GDD » | Similaire à Newpharma |

## 🇨🇦 Canada

| Boutique | Programme | Où s'inscrire | Notes |
|---|---|---|---|
| Shop Santé | À vérifier au bas du site | https://shopsante.ca/ — chercher « Affiliés » | Peut ne pas exister |
| Popeye's Suppléments | À vérifier | https://www.popeyescanada.com/ | Peut ne pas exister |
| Well.ca | Rakuten Advertising | https://rakutenadvertising.com/ — chercher « Well.ca » | Grand network, inscription plus lourde |
| Jean Coutu | À vérifier | https://www.jeancoutu.com/ | Peut ne pas exister publiquement |
| Vitasave | À vérifier au bas du site | https://vitasave.ca/ | À confirmer |

## 🇺🇸 États-Unis

| Boutique | Programme | Où s'inscrire | Notes |
|---|---|---|---|
| Vitamin Shoppe | Impact.com | https://impact.com/ — chercher « The Vitamin Shoppe » | Rapide, inscription en ligne |
| Life Extension | CJ Affiliate | https://www.cj.com/ — chercher « Life Extension » | Grand network, quelques jours de validation |
| GNC | CJ Affiliate ou Rakuten | https://www.cj.com/ — chercher « GNC » | Peut nécessiter approbation manuelle |

## 🌐 Multi-région

| Boutique | Programme | Où s'inscrire | Notes |
|---|---|---|---|
| **iHerb** | iHerb Rewards | https://www.iherb.com/info/rewards | **PRIORITAIRE** : un seul code marche pour `iherb.com` (US) ET `ca.iherb.com` (CA). Inscription en 2 min via ton compte iHerb. Commission ~5-15 % selon les catégories. |

## Une fois inscrit à un programme

1. Récupère ton code (généralement une chaîne comme `ABC123DEF`, ou un identifiant Awin/CJ/Impact).
2. Ouvre `src/data/affiliations.ts` dans le repo.
3. Trouve la constante `CODES` en haut du fichier.
4. Colle ton code dans la clé correspondante :
   ```ts
   const CODES = {
     iherb: "ABC123DEF", // ← ici
     newpharma: "",
     // …
   };
   ```
5. Commit + push. Vercel redéploie. Le lien vers cette boutique portera dès lors ton tag affilié.

## Ce qui se passe côté site

- **Sans code configuré** : le clic sur une boutique renvoie quand même vers la homepage du revendeur (ou l'URL produit si on l'a). Aucun tracking, aucune commission — juste un lien fonctionnel avec `rel="noopener noreferrer"`.
- **Avec code configuré** : l'URL est wrappée avec ton tag, le lien porte `rel="sponsored nofollow noopener noreferrer"` (conformité Google + protection anti-fraude).
- **Le tri du catalogue reste toujours purement par prix.** Aucun avantage à une boutique parce qu'elle te rapporte plus — c'est le contrat éditorial affiché dans le manifeste et la FAQ.

## Prochaine étape après affiliation

Une fois les codes configurés, envisage de relancer un agent pour **capturer les URLs produit directes** (les ~525 entrées de `prix.ts` n'ont pas de champ `url` rempli aujourd'hui — les liens tombent donc sur la homepage). Le deep-linking augmente significativement le taux de conversion des programmes d'affiliation.
