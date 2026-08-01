import Link from "next/link";
import RegionSwitcher from "@/components/RegionSwitcher";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#0a0c10]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <Link href="/" className="justify-self-start">
          <Logo />
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-400 justify-self-center">
          <Link href="/" className="group relative py-1 transition-colors hover:text-violet-300">
            Accueil
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link href="/dictionnaire" className="group relative py-1 transition-colors hover:text-violet-300">
            Dictionnaire
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
          <Link href="/catalogue" className="group relative py-1 transition-colors hover:text-violet-300">
            Catalogue de prix
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-violet-400 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>
        </nav>
        <div className="justify-self-center sm:justify-self-end">
          <RegionSwitcher />
        </div>
      </div>
    </header>
  );
}
