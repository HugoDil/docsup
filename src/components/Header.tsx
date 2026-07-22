import Link from "next/link";
import RegionSwitcher from "@/components/RegionSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-lime-400/20 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <span className="text-xl font-black tracking-tight text-white">
            Doc<span className="text-lime-400">sup</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-400 justify-self-center">
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
        <div className="justify-self-center sm:justify-self-end">
          <RegionSwitcher />
        </div>
      </div>
    </header>
  );
}
