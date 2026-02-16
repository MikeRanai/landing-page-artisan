"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-2">
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo-entreprise-bm-white.svg"
            alt={siteConfig.entreprise.nom}
            width={240}
            height={240}
            className={`w-auto transition-all duration-300 ${scrolled ? "h-10 sm:h-14 opacity-0" : "h-16 sm:h-24 opacity-100"}`}
            priority
          />
          <Image
            src="/logo-entreprise-bm.svg"
            alt={siteConfig.entreprise.nom}
            width={240}
            height={240}
            className={`absolute left-0 w-auto transition-all duration-300 ${scrolled ? "h-10 sm:h-14 opacity-100" : "h-16 sm:h-24 opacity-0"}`}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {[
            { href: "#a-propos", label: "À Propos" },
            { href: "#services", label: "Services" },
            { href: "#realisations", label: "Réalisations" },
            { href: "#temoignages", label: "Avis" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-secondary/80" : "text-white/90"}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`tel:${siteConfig.entreprise.telephone.replace(/\s/g, "")}`}
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-secondary shadow-md transition-all hover:bg-primary-hover hover:shadow-lg md:inline-flex"
        >
          Appeler maintenant
        </a>

        {/* Mobile burger - min 44px touch target */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-secondary" : "bg-white"} ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-secondary" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-secondary" : "bg-white"} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-zinc-100 bg-white px-4 pb-6 pt-4 sm:px-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {[
              { href: "#a-propos", label: "À Propos" },
              { href: "#services", label: "Services" },
              { href: "#realisations", label: "Réalisations" },
              { href: "#temoignages", label: "Avis" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${siteConfig.entreprise.telephone.replace(/\s/g, "")}`}
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-secondary"
          >
            Appeler maintenant
          </a>
        </div>
      )}
    </nav>
  );
}
