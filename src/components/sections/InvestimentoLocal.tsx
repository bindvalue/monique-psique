"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/constants";

// Import dinâmico — MapLibre toca em `window` e não pode rodar no SSR
const MapaLocalizacao = dynamic(
  () => import("@/components/ui/MapaLocalizacao"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-bege/20">
        <p className="text-xs uppercase tracking-[2px] text-taupe">
          Carregando mapa…
        </p>
      </div>
    ),
  }
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Localizacao() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="investimento"
      className="relative px-5 py-20 md:px-8 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-content">
        {/* Cabeçalho */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-taupe/40" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-[2px] text-taupe font-medium">
              Localização
            </p>
            <span className="h-px w-10 bg-taupe/40" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-4xl leading-[1.05] text-cacau sm:text-5xl md:text-6xl lg:text-[4rem]">
            Onde me
            <br />
            <em className="italic text-taupe">encontrar</em>
          </h2>
        </motion.div>

        {/* Card do mapa */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              },
            },
          }}
          className="relative overflow-hidden rounded-sm border border-bege/50 bg-creme"
        >
          {/* Container do mapa */}
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <MapaLocalizacao />
          </div>

          {/* Rodapé informativo */}
          <div className="flex flex-col gap-4 border-t border-bege/50 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 rounded-full bg-vinho"
                aria-hidden="true"
              />
              <p className="text-[11px] uppercase tracking-[1.4px] text-taupe">
                {SITE.regiao} · {SITE.cidade} - {SITE.estado}
              </p>
            </div>

            <a
              href={`https://www.google.com/maps/place/${SITE.regiao},+${SITE.cidade}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[1.4px] text-vinho transition-colors hover:text-vinho/70"
            >
              <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
              Ver no mapa
              <ExternalLink
                size={11}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Nota sobre endereço exato */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-[13px] leading-relaxed text-taupe"
        >
          O endereço exato é informado após a confirmação do agendamento,
          com todas as orientações de acesso ao consultório.
        </motion.p>
      </div>
    </section>
  );
}