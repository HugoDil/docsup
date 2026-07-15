export default function Footer() {
  return (
    <footer className="border-t border-lime-400/20 bg-zinc-950 py-10 text-center text-sm text-zinc-400">
      <p className="text-lg font-black tracking-tight text-white">
        Doc<span className="text-lime-400">sup</span>
      </p>
      <p className="mx-auto mt-3 max-w-md">
        Docsup fournit des informations générales à but éducatif et ne remplace pas
        l&apos;avis d&apos;un professionnel de santé.
      </p>
      <p className="mt-3 text-zinc-600">&copy; {new Date().getFullYear()} Docsup</p>
    </footer>
  );
}
