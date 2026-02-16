"use client";

import { siteConfig } from "@/data/config";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Temoignages() {
  const { temoignages } = siteConfig;

  return (
    <section id="temoignages" className="bg-primary-light py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Ils nous font confiance
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
              Avis de nos clients
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600 sm:mt-4 sm:text-base">
              La satisfaction de nos clients est notre meilleure carte de visite.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {temoignages.map((t, index) => (
            <AnimateOnScroll key={t.prenom} delay={index * 0.1} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.note }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#f1a63a"
                      stroke="#f1a63a"
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4">
                  &ldquo;{t.texte}&rdquo;
                </p>
                <div className="mt-auto border-t border-zinc-100 pt-3 sm:pt-4">
                  <p className="text-sm font-bold text-secondary">{t.prenom}</p>
                  <p className="text-xs text-zinc-500">
                    {t.ville}, La Réunion
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
