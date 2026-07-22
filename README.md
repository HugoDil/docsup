# Docsup

Dictionnaire des compléments alimentaires : vitamines, minéraux, plantes et adaptogènes, et
autres compléments courants, expliqués simplement (effets, dosages, carences, mythes vs
réalité), avec un catalogue de prix comparant plusieurs marques par pays.

Site en ligne : https://docsup-eight.vercel.app

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. Le contenu du dictionnaire et les prix sont
des données statiques versionnées dans le code (`src/data/supplements.ts`, `src/data/prix.ts`),
pas de base de données pour l'instant.

## Développement local

```bash
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Déploiement

Chaque `git push` sur `main` redéploie automatiquement le site sur Vercel.

## Structure

- `src/data/supplements.ts` — les fiches du dictionnaire (39+ compléments)
- `src/data/prix.ts` — le catalogue de prix, par région (`FR` / `QC`)
- `src/app/dictionnaire/` — pages liste et détail du dictionnaire
- `src/app/catalogue/` — page catalogue de prix
- `src/lib/region.tsx` — sélecteur de pays (France / Québec), persisté en local
