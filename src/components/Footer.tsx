import Link from "next/link";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="brand" style={{ marginBottom: 24 }}>
            <Logo />
          </div>
          <p className="lead">
            Un dictionnaire indépendant des compléments alimentaires. Rien à vendre, <em>rien à cacher</em>.
          </p>
          <div className="badge-indep">
            <span className="pip" aria-hidden="true" /> INDÉPENDANT · TRANSPARENT
          </div>
        </div>
        <div>
          <h6>Explorer</h6>
          <ul>
            <li>
              <Link href="/dictionnaire">Dictionnaire</Link>
            </li>
            <li>
              <Link href="/catalogue">Catalogue de prix</Link>
            </li>
            <li>
              <Link href="/#populaires">Les plus consultés</Link>
            </li>
            <li>
              <Link href="/#faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Méthode</h6>
          <ul>
            <li>Notre approche</li>
            <li>Sources et références</li>
            <li>Comment on classe</li>
            <li>Mise à jour des prix</li>
          </ul>
        </div>
        <div>
          <h6>Légal</h6>
          <ul>
            <li>Mentions légales</li>
            <li>Confidentialité</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <div>© {new Date().getFullYear()} Docsup — Ne remplace pas un avis médical. Prix à vérifier avant achat.</div>
        <div>FR 🇫🇷 · CA 🇨🇦 · US 🇺🇸</div>
      </div>
    </footer>
  );
}
