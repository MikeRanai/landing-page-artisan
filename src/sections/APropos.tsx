"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function APropos() {
  return (
    <section id="a-propos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
                Qui sommes-nous
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
                Votre artisan de confiance à Saint-Paul
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-base">
                <p>
                  Basée à Saint-Paul (974), l&apos;Entreprise BM, dirigée par
                  Monsieur Manuel Belli, est votre partenaire privilégié pour les
                  travaux de bâtiment à La Réunion. Forts d&apos;une solide
                  expérience locale, nous intervenons auprès des particuliers pour
                  redonner vie et protéger votre habitation contre le climat
                  tropical.
                </p>
                <p>
                  Notre expertise couvre la couverture et l&apos;étanchéité
                  (remplacement de tôles, réparation de fuites, pose de
                  gouttières) et la rénovation extérieure (nettoyage et ravalement
                  de façade, maçonnerie générale, création de terrasses et
                  clôtures).
                </p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary-hover sm:mt-8 sm:text-base"
              >
                Contactez-nous
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1a63a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9"/><path d="m13 6 4.293-4.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L17 10"/><path d="m13 6 4 4"/></svg>
                ),
                value: "10+",
                label: "Années d'expérience",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1a63a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                ),
                value: "200+",
                label: "Chantiers réalisés",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1a63a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ),
                value: "100%",
                label: "Satisfaction client",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1a63a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ),
                value: "48h",
                label: "Devis gratuit",
              },
            ].map((stat, index) => (
              <AnimateOnScroll key={stat.value} delay={index * 0.1}>
                <div className="rounded-2xl bg-primary-light p-4 sm:p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 sm:h-12 sm:w-12">
                    {stat.icon}
                  </div>
                  <p className="mt-3 text-xl font-extrabold text-secondary sm:mt-4 sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
