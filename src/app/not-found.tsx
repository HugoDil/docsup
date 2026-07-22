import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="rounded-sm bg-zinc-950 px-3 py-1 text-xs font-black uppercase tracking-wide text-lime-400">
        Erreur 404
      </span>
      <h1 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Le complément ou la page que vous cherchez n&apos;est peut-être plus référencé, ou
        l&apos;adresse contient une erreur.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/dictionnaire"
          className="rounded-sm bg-zinc-950 px-6 py-3 text-sm font-black uppercase tracking-wide text-lime-400 transition-colors hover:bg-zinc-800"
        >
          Explorer le dictionnaire
        </Link>
        <Link
          href="/"
          className="rounded-sm border-2 border-zinc-300 px-6 py-3 text-sm font-black uppercase tracking-wide text-zinc-900 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-50"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
