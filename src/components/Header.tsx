import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-lime-400/20 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-white">
            Doc<span className="text-lime-400">sup</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-semibold text-zinc-400">
          <Link href="/" className="transition-colors hover:text-lime-400">
            Accueil
          </Link>
          <Link href="/dictionnaire" className="transition-colors hover:text-lime-400">
            Dictionnaire
          </Link>
          <Link href="/catalogue" className="transition-colors hover:text-lime-400">
            Catalogue de prix
          </Link>
        </nav>
      </div>
    </header>
  );
}
