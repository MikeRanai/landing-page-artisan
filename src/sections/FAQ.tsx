"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-primary-light py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
            Questions fréquentes
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
            FAQ
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600 sm:mt-4 sm:text-base">
            Les réponses aux questions les plus courantes de nos clients.
          </p>
        </div>
        <div className="mt-10 space-y-3 sm:mt-14 sm:space-y-4">
          {siteConfig.faq.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="pr-4 text-sm font-bold text-secondary sm:text-base">
                  {item.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 text-primary transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 pb-4 sm:px-6 sm:pb-5">
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {item.reponse}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
