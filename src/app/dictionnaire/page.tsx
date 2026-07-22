import DictionnaireClient from "./DictionnaireClient";

export const metadata = {
  title: "Dictionnaire",
  description:
    "Parcourez les 86 compléments alimentaires référencés par Docsup : vitamines, minéraux, plantes et adaptogènes, et bien d'autres — effets, dosages, carences et mythes.",
};

export default function DictionnairePage() {
  return <DictionnaireClient />;
}
