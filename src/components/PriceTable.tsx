import type { CataloguePrix } from "@/data/prix";

export default function PriceTable({ catalogue }: { catalogue: CataloguePrix }) {
  const produits = [...catalogue.produits].sort((a, b) => a.prix - b.prix);
  const moinsCher = produits[0];

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border-2 border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-950 text-white">
            <tr>
              <th className="px-4 py-3 font-bold">Produit</th>
              <th className="px-4 py-3 font-bold">Contenance</th>
              <th className="px-4 py-3 font-bold">Boutique</th>
              <th className="px-4 py-3 text-right font-bold">Prix</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {produits.map((p) => (
              <tr
                key={`${p.marque}-${p.nom}`}
                className={p === moinsCher ? "bg-lime-50 dark:bg-lime-400/10" : "bg-white dark:bg-zinc-900"}
              >
                <td className="px-4 py-3">
                  <span className="font-bold text-zinc-900 dark:text-zinc-50">{p.marque}</span>{" "}
                  <span className="text-zinc-600 dark:text-zinc-400">{p.nom}</span>
                  {p === moinsCher && (
                    <span className="ml-2 rounded-sm bg-lime-400 px-1.5 py-0.5 text-xs font-black uppercase text-zinc-950">
                      Moins cher
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{p.contenance}</td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{p.boutique}</td>
                <td className="px-4 py-3 text-right">
                  {p.prixBarre && (
                    <span className="mr-2 text-zinc-400 line-through">
                      {p.prixBarre.toFixed(2)}€
                    </span>
                  )}
                  <span className="font-black text-zinc-900 dark:text-zinc-50">
                    {p.prix.toFixed(2)}€
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
        Prix relevés le {catalogue.dateReleve} chez les revendeurs indiqués, hors frais de port —
        susceptibles d&apos;avoir changé depuis. Vérifiez le prix actuel avant achat.
      </p>
    </div>
  );
}
