"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

export default function Abordagem() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="abordagem"
      className="relative px-5 py-20 md:px-8 md:py-28 lg:py-36"
    >
      {/* ============================================
          Blobs de fundo — adaptados para mobile e desktop
          Mobile: centralizados e largos (cobrem a viewport)
          Desktop: posicionados atrás do conteúdo
          ============================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Blob bege principal — centrado, largo no mobile */}
        <svg
          className="absolute left-1/2 top-1/2 h-[130vh] w-[130%] -translate-x-1/2 -translate-y-1/2 md:w-[75%] lg:w-[65%]"
          viewBox="0 0 1000 1400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="abordagem-blob-1" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#D5C4AD" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#D5C4AD" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#D5C4AD" stopOpacity="0.08" />
              <stop offset="85%" stopColor="#D5C4AD" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#D5C4AD" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1000" height="1400" fill="url(#abordagem-blob-1)" />
        </svg>

        {/* Livro decorativo — canto superior direito (só desktop) */}
        <div className="pointer-events-none absolute -right-6 top-16 hidden h-[320px] w-[260px] lg:block xl:-right-2 xl:h-[360px] xl:w-[300px]">
          <div style={{ transform: "rotate(6deg)" }} className="h-full w-full">
            <svg
              viewBox="0 0 300 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="book-cover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D5C4AD" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#99826E" stopOpacity="0.25" />
                </linearGradient>
                <linearGradient id="book-spine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5B1718" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#5B1718" stopOpacity="0.25" />
                </linearGradient>
                <radialGradient id="book-shadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4E3429" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4E3429" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="150" cy="365" rx="130" ry="12" fill="url(#book-shadow)" />
              <rect x="20" y="20" width="260" height="340" rx="3" fill="url(#book-cover)" stroke="#99826E" strokeWidth="0.8" strokeOpacity="0.5" />
              <rect x="20" y="20" width="22" height="340" rx="3" fill="url(#book-spine)" />
              <line x1="42" y1="22" x2="42" y2="358" stroke="#5B1718" strokeWidth="0.6" strokeOpacity="0.4" />
              <g stroke="#5B1718" strokeOpacity="0.35" strokeLinecap="round">
                <line x1="70" y1="70" x2="180" y2="70" strokeWidth="1.2" />
                <line x1="70" y1="82" x2="140" y2="82" strokeWidth="0.8" />
              </g>
              <g stroke="#4E3429" strokeOpacity="0.28" strokeWidth="0.7" strokeLinecap="round">
                <line x1="70" y1="120" x2="260" y2="120" />
                <line x1="70" y1="135" x2="250" y2="135" />
                <line x1="70" y1="150" x2="245" y2="150" />
                <line x1="70" y1="165" x2="200" y2="165" />
                <line x1="70" y1="195" x2="255" y2="195" />
                <line x1="70" y1="210" x2="240" y2="210" />
                <line x1="70" y1="225" x2="260" y2="225" />
                <line x1="70" y1="240" x2="180" y2="240" />
                <line x1="70" y1="270" x2="250" y2="270" />
                <line x1="70" y1="285" x2="235" y2="285" />
                <line x1="70" y1="300" x2="215" y2="300" />
                <line x1="70" y1="315" x2="150" y2="315" />
              </g>
              <path d="M 240 20 L 240 75 L 230 65 L 220 75 L 220 20" fill="#5B1718" fillOpacity="0.35" stroke="#5B1718" strokeWidth="0.5" strokeOpacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Livro decorativo — canto inferior esquerdo (só desktop) */}
        <div className="pointer-events-none absolute bottom-16 -left-8 hidden h-[200px] w-[170px] lg:block">
          <div style={{ transform: "rotate(-8deg)" }} className="h-full w-full">
            <svg
              viewBox="0 0 300 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="book2-cover" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#99826E" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4E3429" stopOpacity="0.2" />
                </linearGradient>
                <radialGradient id="book2-shadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4E3429" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#4E3429" stopOpacity="0" />
                </radialGradient>
              </defs>
              <ellipse cx="150" cy="365" rx="130" ry="12" fill="url(#book2-shadow)" />
              <rect x="20" y="20" width="260" height="340" rx="3" fill="url(#book2-cover)" stroke="#99826E" strokeWidth="0.8" strokeOpacity="0.5" />
              <rect x="20" y="20" width="22" height="340" rx="3" fill="#4E3429" fillOpacity="0.25" />
              <g stroke="#4E3429" strokeOpacity="0.25" strokeWidth="0.7" strokeLinecap="round">
                <line x1="70" y1="90" x2="240" y2="90" />
                <line x1="70" y1="105" x2="220" y2="105" />
                <line x1="70" y1="120" x2="250" y2="120" />
                <line x1="70" y1="150" x2="235" y2="150" />
                <line x1="70" y1="165" x2="245" y2="165" />
                <line x1="70" y1="180" x2="200" y2="180" />
                <line x1="70" y1="210" x2="250" y2="210" />
                <line x1="70" y1="225" x2="230" y2="225" />
                <line x1="70" y1="240" x2="190" y2="240" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ============================================
          Conteúdo principal
          ============================================ */}
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-[1fr_1.1fr] md:gap-14 lg:gap-20">
        {/* Coluna 1 — Título editorial */}
        <div className="md:pt-2">
          <FadeIn delay={0.1}>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-taupe/60" aria-hidden="true" />
              <p className="micro-copy">Abordagem</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-serif text-4xl leading-[1.05] text-cacau sm:text-5xl md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]">
              Cada idade
              <br />
              pede uma
              <br />
              <em className="italic text-taupe">escuta</em>
              <br />
              diferente
            </h2>
          </FadeIn>
        </div>

        {/* Coluna 2 — Texto com destaques */}
        <div className="md:pt-6">
          <FadeIn delay={0.3}>
            <p className="text-base leading-[1.75] text-cacau/85 md:text-[17px]">
              Cada etapa da vida pede uma forma própria de escuta. Com as{" "}
              <strong className="font-semibold text-vinho">crianças</strong>, o
              trabalho acontece por meio da brincadeira e de recursos lúdicos,
              entendidos como linguagem legítima da infância — modo pelo qual o
              sofrimento encontra expressão e pode ser elaborado. Esse percurso
              se constrói junto aos responsáveis, em diálogo atento e contínuo.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="my-7 flex items-center gap-4 md:my-9">
              <span className="h-px flex-1 bg-bege/60" aria-hidden="true" />
              <span className="font-serif text-xs text-bege" aria-hidden="true">
                Ψ
              </span>
              <span className="h-px flex-1 bg-bege/60" aria-hidden="true" />
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-base leading-[1.75] text-cacau/85 md:text-[17px]">
              No encontro com{" "}
              <strong className="font-semibold text-vinho">
                adolescentes e adultos
              </strong>
              , a sessão se sustenta na{" "}
              <strong className="font-semibold text-vinho">associação livre</strong>{" "}
              — o dizer sem roteiro, que permite que sintomas, repetições e
              angústias ganhem contorno. É nesse espaço que se pode olhar para
              os impasses do trabalho, dos vínculos e das exigências que
              atravessam o dia a dia.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-8 text-xs leading-relaxed text-taupe">
              Escuta de orientação psicanalítica — cada história com seu tempo
              e sua singularidade.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}