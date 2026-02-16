"use client";

import dynamic from "next/dynamic";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const BeforeAfterSlider = dynamic(
  () => import("@/components/BeforeAfterSlider"),
  { ssr: false }
);

const realisations = [
  {
    label: "Rénovation de toiture",
    before: "/realisations/toiture-avant.png",
    after: "/realisations/toiture-apres.png",
  },
  {
    label: "Ravalement de façade",
    before: "/realisations/facade-avant.png",
    after: "/realisations/facade-apres.png",
  },
  {
    label: "Étanchéité terrasse",
    before: "/realisations/terrasse-avant.png",
    after: "/realisations/terrasse-apres.png",
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Nos travaux
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
              Réalisations Avant / Après
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600 sm:mt-4 sm:text-base">
              Faites glisser le curseur pour voir la transformation. La preuve par
              l&apos;image.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {realisations.map((item, index) => (
            <AnimateOnScroll key={item.label} delay={index * 0.15}>
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
                label={item.label}
              />
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll delay={0.2}>
          <div className="mt-8 text-center sm:mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-secondary/90 sm:px-8 sm:py-4 sm:text-base"
            >
              Vous aussi, transformez votre habitat
              <svg
                width="18"
                height="18"
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
      </div>
    </section>
  );
}
