"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import RegionSwitcher from "@/components/RegionSwitcher";
import Logo from "@/components/Logo";

type NavItem = { href: string; label: string; matchPath?: string };

const navItems: NavItem[] = [
  { href: "/dictionnaire", label: "Dictionnaire", matchPath: "/dictionnaire" },
  { href: "/catalogue", label: "Catalogue de prix", matchPath: "/catalogue" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="hdr" style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--paper)" }}>
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo />
      </Link>
      <nav className="nav">
        {navItems.map((item) => {
          const active = item.matchPath !== undefined && pathname.startsWith(item.matchPath);
          return (
            <Link key={item.href} href={item.href} className={active ? "active" : ""}>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="hdr-right">
        <RegionSwitcher />
        <Link href="/dictionnaire" className="btn btn-dark">
          Explorer
        </Link>
      </div>
    </header>
  );
}
