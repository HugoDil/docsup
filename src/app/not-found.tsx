import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <span className="glass-panel rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-violet-300">
        Erreur 404
      </span>
      <h1 className="mt-6 font-serif text-4xl font-normal text-zinc-50">
        Cette page n&apos;existe pas
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-zinc-400">
        Le complément ou la page que vous cherchez n&apos;est peut-être plus référencé, ou
        l&apos;adresse contient une erreur.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/dictionnaire"
          className="rounded-xl bg-violet-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-600"
        >
          Explorer le dictionnaire
        </Link>
        <Link
          href="/"
          className="glass-panel rounded-xl px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:text-white"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
