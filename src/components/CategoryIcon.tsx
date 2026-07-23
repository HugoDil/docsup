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
  { text: string; bg: string; border: string; dot: string }
> = {
  Vitamine: {
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-400/30",
    dot: "bg-violet-400",
  },
  Minéral: {
    text: "text-teal-300",
    bg: "bg-teal-500/10",
    border: "border-teal-400/30",
    dot: "bg-teal-400",
  },
  "Acide gras": {
    text: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-400/30",
    dot: "bg-sky-400",
  },
  "Plante & adaptogène": {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/30",
    dot: "bg-emerald-400",
  },
  Autre: {
    text: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-400/30",
    dot: "bg-amber-400",
  },
};
