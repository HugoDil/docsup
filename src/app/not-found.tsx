import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: 560,
        margin: "0 auto",
        padding: "96px 24px",
        textAlign: "center",
      }}
    >
      <div className="section-eyebrow">Erreur 404</div>
      <h1 className="section-title" style={{ margin: "0 auto" }}>
        Cette page n&apos;existe pas.
      </h1>
      <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
        Le complément ou la page que vous cherchez n&apos;est peut-être plus référencé, ou
        l&apos;adresse contient une erreur.
      </p>
      <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
        <Link href="/dictionnaire" className="cta-primary">
          Explorer le dictionnaire
        </Link>
        <Link href="/" className="cta-ghost">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
