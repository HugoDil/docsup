"use client";

import { useState } from "react";

const questions = [
  {
    q: "Est-ce que Docsup vend des compléments ?",
    r: "Non. Docsup est un contenu éducatif indépendant. Le comparateur de prix renvoie vers des boutiques existantes, mais aucun complément n'est vendu directement sur le site, et aucun classement n'est payé pour apparaître en premier.",
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
    q: "Le site est-il vraiment gratuit ?",
    r: "Oui, entièrement, sans compte ni inscription. Tout le dictionnaire et le comparateur de prix sont en accès libre.",
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
