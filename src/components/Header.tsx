import Link from "next/link";
import RegionSwitcher from "@/components/RegionSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-lime-400/20 bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2 self-center sm:self-auto">
          <span className="text-xl font-black tracking-tight text-white">
            Doc<span className="text-lime-400">sup</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-zinc-400 sm:justify-end">
          <Link href="/" className="transition-colors hover:text-lime-400">
            Accueil
          </Link>
          <Link href="/dictionnaire" className="transition-colors hover:text-lime-400">
            Dictionnaire
          </Link>
          <Link href="/catalogue" className="transition-colors hover:text-lime-400">
            Catalogue de prix
          </Link>
          <RegionSwitcher />
        </nav>
      </div>
    </header>
  );
}
