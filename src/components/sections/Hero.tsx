import Image from "next/image";
import { MessageCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-section relative px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* ============================================
          Blob bege principal — adaptado para mobile e desktop
          Mobile: centralizado, mais largo (cobre a viewport)
          Desktop: à direita, atrás da foto (como antes)
          ============================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <svg
          className="absolute left-1/2 top-1/2 h-[130vh] w-[130%] -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-[-15%] md:w-[70%] md:translate-x-0 lg:right-[-8%] lg:w-[60%]"
          viewBox="0 0 800 1200"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="hero-blob-1" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#C4B096" stopOpacity="0.55" />
              <stop offset="45%" stopColor="#C4B096" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#C4B096" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C4B096" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="600" rx="380" ry="580" fill="url(#hero-blob-1)" />
        </svg>

        {/* Pontinhos decorativos — desktop apenas */}
        <div className="absolute right-[8%] top-[18%] hidden h-2 w-2 rounded-full bg-vinho/40 lg:block" />
        <div className="absolute right-[12%] top-[22%] hidden h-1 w-1 rounded-full bg-vinho/30 lg:block" />
      </div>

      <div className="mx-auto grid max-w-content items-center gap-12 md:grid-cols-[1fr_1.15fr] md:gap-10 lg:gap-16">
        {/* Coluna 1 — Texto */}
        <div className="order-2 md:order-1">
          <FadeIn delay={0.1}>
            <p className="micro-copy mb-5 md:mb-6">
              Psicóloga Clínica · CRP {SITE.crp}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-serif text-[2.5rem] leading-[1.05] text-vinho sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
              Um espaço de escuta
              <br className="hidden sm:block" />{" "}
              qualificada para o seu processo.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-cacau/80 md:mt-8 md:text-lg">
              Atendimento psicológico online e presencial, com acolhimento,
              ética e profundidade. Um lugar seguro para se elaborar sem
              julgamentos.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-vinho px-7 py-3.5 text-sm font-medium tracking-wide text-creme transition-all duration-300 hover:bg-vinho/90 hover:gap-3"
              >
                <MessageCircle
                  size={18}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                Converse diretamente comigo
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-sm border border-bege px-7 py-3.5 text-sm font-medium tracking-wide text-cacau transition-colors duration-300 hover:border-vinho hover:text-vinho"
              >
                Conhecer mais
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.65}>
            <p className="mt-8 max-w-md text-xs leading-relaxed text-taupe">
              Primeira conversa sem compromisso. Sigilo profissional
              garantido pelo Código de Ética do CFP.
            </p>
          </FadeIn>
        </div>

        {/* Coluna 2 — Imagem */}
        <FadeIn delay={0.3} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[440px] md:max-w-none">
            {/* Foto com máscara suave */}
            <div
              className="relative aspect-[4/5] w-full"
              style={{
                WebkitMaskImage: `
                  linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%),
                  linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%)
                `,
                WebkitMaskComposite: "source-in",
                maskImage: `
                  linear-gradient(to bottom, transparent 0%, #000 30%, #000 70%, transparent 100%),
                  linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%)
                `,
                maskComposite: "intersect",
              }}
            >
              <Image
                src="/images/monique-hero_02.png"
                alt="Monique Gonçalves, psicóloga clínica"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 620px"
                className="object-cover object-center"
              />
            </div>

            {/* Selo CRP flutuante */}
            <div className="absolute bottom-6 left-2 hidden rounded-sm border border-bege/50 bg-creme/60 px-5 py-3 backdrop-blur-md md:block">
              <p className="micro-copy">CRP {SITE.crp}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}