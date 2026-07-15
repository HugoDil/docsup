import type { Categorie } from "@/data/supplements";

const paths: Record<Categorie, React.ReactNode> = {
  Vitamine: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  Minéral: (
    <>
      <path d="M12 2.5 19.5 9 17 20H7L4.5 9 12 2.5Z" />
      <path d="M12 2.5 12 20M4.5 9h15" />
    </>
  ),
  "Acide gras": (
    <>
      <path d="M12 2.5c3.5 4 5.5 7.2 5.5 10a5.5 5.5 0 1 1-11 0c0-2.8 2-6 5.5-10Z" />
    </>
  ),
  "Plante & adaptogène": (
    <>
      <path d="M12 21V9" />
      <path d="M12 9c0-4-3-7-7-7 0 4 3 7 7 7Z" />
      <path d="M12 13c0-4 3-7 7-7 0 4-3 7-7 7Z" />
    </>
  ),
  Autre: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M8 7.2 10.2 14.8M16 7.2 13.8 14.8M8.5 6h7" />
    </>
  ),
};

export function CategoryIcon({
  categorie,
  className,
}: {
  categorie: Categorie;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[categorie]}
    </svg>
  );
}

export const categoryStyles: Record<
  Categorie,
  { solid: string; text: string; border: string; glow: string }
> = {
  Vitamine: {
    solid: "bg-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-500",
    glow: "shadow-amber-500/25",
  },
  Minéral: {
    solid: "bg-sky-500",
    text: "text-sky-600 dark:text-sky-400",
    border: "hover:border-sky-500",
    glow: "shadow-sky-500/25",
  },
  "Acide gras": {
    solid: "bg-cyan-500",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "hover:border-cyan-500",
    glow: "shadow-cyan-500/25",
  },
  "Plante & adaptogène": {
    solid: "bg-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500",
    glow: "shadow-emerald-500/25",
  },
  Autre: {
    solid: "bg-fuchsia-500",
    text: "text-fuchsia-600 dark:text-fuchsia-400",
    border: "hover:border-fuchsia-500",
    glow: "shadow-fuchsia-500/25",
  },
};
