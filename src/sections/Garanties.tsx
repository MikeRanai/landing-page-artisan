"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

const garanties = [
  {
    titre: "Garantie Décennale",
    description:
      "Tous nos travaux de gros œuvre sont couverts par une assurance décennale de 10 ans, vous assurant une protection totale.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    titre: "RC Professionnelle",
    description:
      "Notre responsabilité civile professionnelle couvre l'ensemble de nos interventions pour votre tranquillité.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    titre: "Devis Gratuit 48h",
    description:
      "Un devis transparent et sans engagement sous 48h. Pas de surprises, chaque poste de dépense est clairement détaillé.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    titre: "Artisan Qualifié",
    description:
      "Plus de 10 ans d'expérience dans le bâtiment à La Réunion. Un savoir-faire adapté au climat tropical.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export default function Garanties() {
  return (
    <section id="garanties" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Vos garanties
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
              Travaillez en toute sérénité
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 sm:mt-4 sm:text-base">
              Artisan assuré et qualifié, nous garantissons des travaux conformes
              et durables.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {garanties.map((item, index) => (
            <AnimateOnScroll key={item.titre} delay={index * 0.1}>
              <div className="rounded-2xl border border-zinc-200 bg-primary-light p-5 shadow-sm sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary sm:h-14 sm:w-14">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-secondary sm:mt-5 sm:text-lg">
                  {item.titre}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:mt-3">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
