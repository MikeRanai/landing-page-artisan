"use client";

import { siteConfig } from "@/data/config";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function ZoneIntervention() {
  const { zoneIntervention } = siteConfig;

  return (
    <section id="zone" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Notre zone d&apos;intervention
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
              Couvreur à La Réunion (974)
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-600 sm:mt-4 sm:text-base">
              {zoneIntervention.description}
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-14 sm:gap-3">
            {zoneIntervention.villes.map((ville) => (
              <span
                key={ville}
                className="rounded-full border border-zinc-200 bg-primary-light px-4 py-2 text-xs font-medium text-secondary sm:text-sm"
              >
                {ville}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <div className="mt-8 text-center sm:mt-10">
            <p className="text-sm text-zinc-500">
              Votre ville n&apos;est pas dans la liste ?{" "}
              <a
                href="#contact"
                className="font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Contactez-nous
              </a>
              , nous intervenons sur toute l&apos;île.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
