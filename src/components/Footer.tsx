export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0c10] py-10 text-center text-sm text-zinc-400">
      <p className="font-serif text-3xl font-normal text-zinc-50">
        Doc<span className="text-violet-400">sup</span>
      </p>
      <p className="mx-auto mt-3 max-w-md">
        Docsup fournit des informations générales à but éducatif et ne remplace pas
        l&apos;avis d&apos;un professionnel de santé.
      </p>
      <p className="mt-3 text-zinc-600">&copy; {new Date().getFullYear()} Docsup</p>
    </footer>
  );
}
