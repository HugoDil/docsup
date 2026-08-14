"use client";

import { useState } from "react";

const questions = [
  {
    q: "Comment Docsup gagne-t-il de l'argent ?",
    r: "Uniquement via les liens affiliés vers les boutiques listées : si vous cliquez sur une boutique depuis le catalogue et que vous achetez, Docsup touche une petite commission sur cette vente — sans que ça change un centime pour vous. C'est notre seul revenu, il n'y a ni publicité, ni contenu sponsorisé, ni abonnement. Les liens concernés sont marqués rel=\"sponsored\" dans le code.",
  },
  {
    q: "Est-ce que ça influence le classement du comparateur ?",
    r: "Non. Le tri est algorithmique et strictement par prix croissant. Une boutique qui ne nous verse aucune commission peut apparaître en tête si elle est la moins chère — c'est régulièrement le cas. Aucune position n'est achetée, aucun bandeau \"sponsorisé\" n'existe.",
  },
  {
    q: "Docsup vend-il des compléments directement ?",
    r: "Non. Docsup ne vend rien. Le catalogue renvoie vers des boutiques existantes (Newpharma, iHerb, Vitamin Shoppe…) — c'est elles qui gèrent la vente, la livraison et le service client.",
  },
  {
    q: "Ces informations remplacent-elles un avis médical ?",
    r: "Non, jamais. Docsup aide à comprendre et à poser les bonnes questions, mais toute décision de supplémentation devrait être prise avec un professionnel de santé — surtout en cas de traitement en cours, de grossesse ou de pathologie existante.",
  },
  {
    q: "D'où viennent les prix affichés ?",
    r: "Ils sont relevés manuellement chez plusieurs boutiques réelles, avec la date du relevé indiquée sur chaque fiche. Les prix changent : vérifiez toujours le prix actuel avant d'acheter.",
  },
  {
    q: "Un complément que je cherche n'est pas encore référencé ?",
    r: "Le dictionnaire s'enrichit régulièrement : de nouveaux compléments et de nouvelles régions de prix sont ajoutés au fil du temps.",
  },
];

export default function Faq() {
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {questions.map((item, i) => {
        const estOuvert = ouvert === i;
        return (
          <div key={item.q} className="faq-item">
            <button
              onClick={() => setOuvert(estOuvert ? null : i)}
              className="faq-q"
              aria-expanded={estOuvert}
            >
              <h5>{item.q}</h5>
              <span className="plus" aria-hidden="true" style={estOuvert ? { transform: "rotate(45deg)" } : undefined}>
                ＋
              </span>
            </button>
            {estOuvert && <p className="faq-a">{item.r}</p>}
          </div>
        );
      })}
    </div>
  );
}
