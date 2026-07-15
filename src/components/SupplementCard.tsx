import Link from "next/link";
import type { Supplement } from "@/data/supplements";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";

export default function SupplementCard({ supplement }: { supplement: Supplement }) {
  const style = categoryStyles[supplement.categorie];
  return (
    <Link
      href={`/dictionnaire/${supplement.slug}`}
      className={`group flex flex-col rounded-lg border-2 border-transparent bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${style.border} ${style.glow} dark:bg-zinc-900`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${style.solid} text-white`}
        >
          <CategoryIcon categorie={supplement.categorie} className="h-6 w-6" />
        </span>
        <span className={`mt-1 rounded-sm px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${style.solid} text-white`}>
          {supplement.categorie}
        </span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-zinc-900 group-hover:text-zinc-950 dark:text-zinc-50">
        {supplement.nom}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {supplement.resume}
      </p>
      <span className={`mt-4 text-sm font-bold ${style.text}`}>
        Voir la fiche →
      </span>
    </Link>
  );
}
