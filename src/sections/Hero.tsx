import { siteConfig } from "@/data/config";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-secondary">
      {/* Fond dégradé amélioré — remplacer par <Image src="/hero-bg.jpg" fill ... /> quand la photo est prête */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-secondary to-zinc-800" />
        <div className="absolute -top-1/3 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl lg:h-[900px] lg:w-[900px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl lg:h-[700px] lg:w-[700px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-32">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:px-4 sm:py-1.5 sm:text-sm">
            Artisan à Saint-Paul, La Réunion (974)
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-6xl">
            Rénovation de toiture,{" "}
            <span className="text-primary">façade</span> et{" "}
            <span className="text-primary">étanchéité</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
            L&apos;Entreprise BM protège et embellit votre habitation contre le
            climat tropical. Résultats garantis, devis gratuit sous 48h.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-secondary shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/30 sm:px-8 sm:py-4 sm:text-base"
            >
              Demander un devis gratuit
            </a>
            <a
              href={`tel:${siteConfig.entreprise.telephone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-6 py-3.5 text-sm font-bold text-white transition-all hover:border-primary hover:text-primary sm:px-8 sm:py-4 sm:text-base"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.entreprise.telephone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800 pt-8 sm:mt-14 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
            <div>
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                10+
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm">
                Années d&apos;expérience
              </p>
            </div>
            <div className="hidden h-10 w-px bg-zinc-800 sm:block" />
            <div>
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                200+
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm">
                Chantiers réalisés
              </p>
            </div>
            <div className="hidden h-10 w-px bg-zinc-800 sm:block" />
            <div>
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                100%
              </p>
              <p className="text-xs text-zinc-500 sm:text-sm">
                Clients satisfaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
