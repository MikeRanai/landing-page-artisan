import Image from "next/image";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const { entreprise } = siteConfig;

  return (
    <footer className="border-t border-zinc-800 bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/logo-entreprise-bm-white.svg"
              alt={entreprise.nom}
              width={120}
              height={120}
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-zinc-500 sm:mt-4 sm:text-sm">
              Artisan couvreur et spécialiste en rénovation à Saint-Paul, La Réunion. Nous protégeons et embellissons votre habitat depuis plus de 10 ans.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary sm:mb-4 sm:text-sm">Navigation</h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { label: "À Propos", href: "#a-propos" },
                { label: "Services", href: "#services" },
                { label: "Réalisations", href: "#realisations" },
                { label: "Avis", href: "#temoignages" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-zinc-500 transition-colors hover:text-primary sm:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary sm:mb-4 sm:text-sm">Contact</h3>
            <ul className="space-y-2 text-xs text-zinc-500 sm:space-y-2.5 sm:text-sm">
              <li>
                <a href={`tel:${entreprise.telephone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                  {entreprise.telephone}
                </a>
              </li>
              <li>
                <a href={`mailto:${entreprise.email}`} className="break-all transition-colors hover:text-primary">
                  {entreprise.email}
                </a>
              </li>
              <li>
                {entreprise.adresse.rue}<br />
                {entreprise.adresse.codePostal} {entreprise.adresse.ville}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-zinc-800 pt-6 sm:mt-10 sm:flex-row sm:gap-4 sm:pt-8">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {entreprise.nom}. Tous droits réservés.
          </p>
          <p className="text-xs text-zinc-600">
            SIREN : {entreprise.siren}
          </p>
        </div>
      </div>
    </footer>
  );
}
