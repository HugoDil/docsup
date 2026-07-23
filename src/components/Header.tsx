import Link from "next/link";
import RegionSwitcher from "@/components/RegionSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#0a0c10]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <Link href="/" className="flex items-center gap-2 justify-self-start">
          <span className="font-serif text-3xl font-normal text-zinc-50">
            Doc<span className="text-violet-400">sup</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-400 justify-self-center">
          <Link href="/" className="transition-colors hover:text-violet-300">
            Accueil
          </Link>
          <Link href="/dictionnaire" className="transition-colors hover:text-violet-300">
            Dictionnaire
          </Link>
          <Link href="/catalogue" className="transition-colors hover:text-violet-300">
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
