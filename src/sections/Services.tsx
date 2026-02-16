"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    titre: "Rénovation et Entretien de Toiture",
    description:
      "Votre toit est votre première protection contre le soleil et les pluies intenses de La Réunion. L'Entreprise BM intervient pour le remplacement de tôles abîmées, le traitement anti-rouille, et la vérification de l'étanchéité des tire-fonds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    titre: "Nettoyage de Façade et Peinture Extérieure",
    description:
      "Redonnez de l'éclat à votre maison. Nous éliminons efficacement mousses, traces rouges et salissures. Ravalement et mise en peinture pour une protection durable et un rendu esthétique impeccable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    ),
  },
  {
    titre: "Étanchéité Terrasse et Pose de Gouttières",
    description:
      "Stop aux infiltrations ! Travaux d'étanchéité sur toitures-terrasses et balcons. Fourniture et pose de gouttières (alu, PVC) et descentes d'eau pluviale pour protéger vos murs et fondations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-primary-light py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Ce que nous faisons
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
              Nos Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 sm:mt-4 sm:text-base">
              Des prestations complètes pour protéger et embellir votre habitation
              à La Réunion
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.titre} delay={index * 0.1} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-secondary sm:h-14 sm:w-14">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-base font-bold text-secondary sm:mt-5 sm:text-lg">
                  {service.titre}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 sm:mt-3">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover sm:mt-5"
                >
                  Demander un devis
                  <svg
                    width="16"
                    height="16"
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
          ))}
        </div>
      </div>
    </section>
  );
}
