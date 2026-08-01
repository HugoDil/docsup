import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0c10] py-10 text-center text-sm text-zinc-400">
      <div className="flex justify-center">
        <Logo />
      </div>
      <p className="mx-auto mt-3 max-w-md">
        Docsup fournit des informations générales à but éducatif et ne remplace pas
        l&apos;avis d&apos;un professionnel de santé.
      </p>
      <p className="mt-3 text-zinc-600">&copy; {new Date().getFullYear()} Docsup</p>
    </footer>
  );
}
