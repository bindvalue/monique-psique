"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

const AREAS = [
  { numero: "01", titulo: "Ansiedade e Angústia" },
  { numero: "02", titulo: "Sofrimento Psíquico" },
  { numero: "03", titulo: "Conflitos e Relações" },
  { numero: "04", titulo: "Autoestima e Autoimagem" },
  { numero: "05", titulo: "Inseguranças e Medos" },
  { numero: "06", titulo: "Luto e Perdas" },
  { numero: "07", titulo: "Questões da Infância" },
  { numero: "08", titulo: "Questões da Adolescência" },
  { numero: "09", titulo: "Questões da Vida Adulta" },
  { numero: "10", titulo: "Mudanças e Momentos de Transição" },
  { numero: "11", titulo: "Questões Amorosas e Afetivas" },
  { numero: "12", titulo: "Conflitos Familiares" },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

export default function Modalidades() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-vinho px-5 py-20 md:px-8 md:py-28 lg:py-32"
    >
      {/* Pattern de fundo — MUITO sutil */}
      <div
        aria-hidden="true"
        className="bg-topo-pattern pointer-events-none absolute inset-0 opacity-[0.035]"
      />

      {/* Vinheta radial para "afundar" as bordas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,rgba(91,23,24,0.5)_100%)]"
      />

      <div className="relative mx-auto max-w-content">
        {/* ============================================
            Cabeçalho — Badge + Título
            ============================================ */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={headerVariants}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-bege/40" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-[2px] text-bege/70 font-medium">
              Áreas que atuo
            </p>
            <span className="h-px w-10 bg-bege/40" aria-hidden="true" />
          </div>

          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.15] text-creme sm:text-5xl md:text-6xl lg:text-[3.5rem]">
            O que você{" "}
            <em className="italic text-bege">sente</em>{" "}
            também pode ser dito
          </h2>
        </motion.div>

        {/* ============================================
            Grid minimalista — sem cards, apenas texto editorial
            ============================================ */}
        <motion.ul
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.035,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4"
        >
          {AREAS.map((area) => (
            <motion.li
              key={area.numero}
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="group relative border-b border-bege/15 py-5 md:py-6"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-0 bg-bege/60 transition-all duration-500 ease-out group-hover:w-full"
              />

              <span className="mb-2.5 block font-serif text-[14px] tracking-[1.5px] text-bege/60 md:text-[15px]">
                {area.numero}
              </span>

              <p className="font-serif text-[17px] leading-[1.3] text-creme/95 transition-colors duration-300 group-hover:text-bege md:text-[19px]">
                {area.titulo}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* ============================================
            CTA — dentro da paleta (bege com texto vinho)
            ============================================ */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="mt-16 flex justify-center md:mt-20"
        >
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-sm bg-bege px-7 py-4 text-sm font-medium tracking-wide text-vinho transition-all duration-300 hover:bg-creme hover:gap-4"
          >
            Agende sua conversa
            <MessageCircle
              size={18}
              strokeWidth={1.75}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}