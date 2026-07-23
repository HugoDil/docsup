import Link from "next/link";
import type { Supplement } from "@/data/supplements";
import { CategoryIcon, categoryStyles } from "@/components/CategoryIcon";

export default function SupplementCard({ supplement }: { supplement: Supplement }) {
  const style = categoryStyles[supplement.categorie];
  return (
    <Link
      href={`/dictionnaire/${supplement.slug}`}
      className={`glass-panel group flex flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.05] ${style.border}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.bg} ${style.text}`}
        >
          <CategoryIcon categorie={supplement.categorie} className="h-6 w-6" />
        </span>
        <span className={`mt-1 rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide ${style.bg} ${style.text}`}>
          {supplement.categorie}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-xl font-normal text-zinc-50">
        {supplement.nom}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
        {supplement.resume}
      </p>
      <span className={`mt-4 text-sm font-medium ${style.text}`}>
        Voir la fiche →
      </span>
    </Link>
  );
}
