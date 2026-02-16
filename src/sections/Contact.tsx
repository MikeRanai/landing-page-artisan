"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/data/config";
import AnimateOnScroll from "@/components/AnimateOnScroll";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const { entreprise } = siteConfig;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Remplacer par Resend quand prêt
    // Simulation d'envoi pour la démo
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setFormData({ nom: "", telephone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
              Parlons de votre projet
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Demandez votre devis gratuit
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 sm:mt-4 sm:text-base">
              Réponse sous 48h. Décrivez-nous votre projet et nous vous
              recontacterons rapidement.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-5">
          {/* Coordonnées */}
          <AnimateOnScroll className="space-y-6 sm:space-y-8 lg:col-span-2">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f1a63a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  Téléphone
                </p>
                <a
                  href={`tel:${entreprise.telephone.replace(/\s/g, "")}`}
                  className="text-sm text-zinc-400 transition-colors hover:text-primary"
                >
                  {entreprise.telephone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f1a63a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  Email
                </p>
                <a
                  href={`mailto:${entreprise.email}`}
                  className="break-all text-sm text-zinc-400 transition-colors hover:text-primary"
                >
                  {entreprise.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:h-12 sm:w-12">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f1a63a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-white sm:text-base">
                  Adresse
                </p>
                <p className="text-sm text-zinc-400">
                  {entreprise.adresse.rue}
                  <br />
                  {entreprise.adresse.codePostal} {entreprise.adresse.ville}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6">
              <p className="text-sm font-bold text-primary sm:text-base">
                Gérant
              </p>
              <p className="mt-1 text-sm text-white sm:text-base">
                {entreprise.gerant}
              </p>
              <p className="mt-2 text-xs text-zinc-500 sm:mt-3 sm:text-sm">
                SIREN : {entreprise.siren}
              </p>
            </div>
          </AnimateOnScroll>

          {/* Formulaire */}
          <AnimateOnScroll delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-1.5 block text-sm font-medium text-zinc-300"
                  >
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-1.5 block text-sm font-medium text-zinc-300"
                  >
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    placeholder="0692 XX XX XX"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Type de travaux
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white transition-colors focus:border-primary focus:outline-none"
                >
                  <option value="" disabled>
                    Sélectionnez un service
                  </option>
                  <option>Rénovation de toiture</option>
                  <option>Nettoyage / Ravalement de façade</option>
                  <option>Étanchéité terrasse</option>
                  <option>Pose de gouttières</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-zinc-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-colors focus:border-primary focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-secondary shadow-lg shadow-primary/25 transition-all hover:bg-primary-hover hover:shadow-xl disabled:opacity-50 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                {status === "loading"
                  ? "Envoi en cours..."
                  : "Envoyer ma demande de devis"}
              </button>

              {status === "success" && (
                <p className="rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  Votre demande a bien été envoyée ! Nous vous recontacterons
                  sous 48h.
                </p>
              )}
              {status === "error" && (
                <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  Une erreur est survenue. Veuillez réessayer ou nous appeler
                  directement.
                </p>
              )}
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
