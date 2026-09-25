import FadeIn from "@/components/ui/FadeIn";
import DivanIllustration from "@/components/ui/DivanIllustration";
import { SITE } from "@/lib/constants";

export default function Sobre() {
  return (
    <section
      id="sobre"
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
        {/* Blob bege — atrás do divã */}
        <svg
          className="absolute left-1/2 top-1/2 h-[120vh] w-[130%] -translate-x-1/2 -translate-y-1/2 md:left-[-20%] md:w-[85%] md:translate-x-0 lg:left-[-12%] lg:w-[70%]"
          viewBox="0 0 1000 1400"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="sobre-blob-1" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#D5C4AD" stopOpacity="0.5" />
              <stop offset="35%" stopColor="#D5C4AD" stopOpacity="0.28" />
              <stop offset="60%" stopColor="#D5C4AD" stopOpacity="0.1" />
              <stop offset="85%" stopColor="#D5C4AD" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#D5C4AD" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1000" height="1400" fill="url(#sobre-blob-1)" />
        </svg>

        {/* Blob taupe — canto inferior direito */}
        <svg
          className="absolute bottom-[-25%] left-1/2 h-[70vh] w-[110%] -translate-x-1/2 md:left-auto md:right-[-15%] md:w-[55%] md:translate-x-0"
          viewBox="0 0 800 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="sobre-blob-2" cx="50%" cy="50%" r="45%">
              <stop offset="0%" stopColor="#99826E" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#99826E" stopOpacity="0.08" />
              <stop offset="85%" stopColor="#99826E" stopOpacity="0.015" />
              <stop offset="100%" stopColor="#99826E" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="800" fill="url(#sobre-blob-2)" />
        </svg>

        {/* Linha vertical sutil — divisor editorial à direita (só desktop) */}
        <div className="absolute right-[8%] top-[15%] hidden h-[70%] w-px bg-gradient-to-b from-transparent via-bege/60 to-transparent lg:block" />
      </div>

      {/* ============================================
          Conteúdo principal — DIVÃ À ESQUERDA, TEXTO À DIREITA
          ============================================ */}
      <div className="mx-auto grid max-w-content gap-12 md:grid-cols-[1fr_1.05fr] md:gap-14 lg:gap-20">
        {/* =====================
            Coluna 1 — Ilustração do divã (ESQUERDA)
            ===================== */}
        <FadeIn
          delay={0.3}
          className="order-1 flex items-center justify-center md:justify-start"
        >
          <div className="relative w-full max-w-[560px] md:max-w-none">
            {/* DIVÃ LIVRE — sem halo redondo atrás */}
            <DivanIllustration className="w-full text-vinho drop-shadow-[0_8px_30px_rgba(91,23,24,0.06)]" />

            {/* Citação flutuante abaixo do divã */}
            <div className="mt-8 max-w-[320px] md:ml-2">
              <div className="flex items-start gap-3">
                <span
                  className="font-serif text-4xl leading-none text-bege"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-serif text-base italic leading-snug text-cacau/75 md:text-lg">
                  Nem tudo o que nos atravessa é imediatamente consciente.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* =====================
            Coluna 2 — Texto (DIREITA)
            ===================== */}
        <div className="order-2">
          <FadeIn delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-taupe/60" aria-hidden="true" />
              <p className="micro-copy">Sobre mim</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-serif text-3xl leading-[1.15] text-vinho sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              A escuta como um espaço onde o que ainda não encontrou
              elaboração pode encontrar lugar na palavra.
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-5 md:mt-10 md:space-y-6">
            <FadeIn delay={0.35}>
              <p className="text-[15px] leading-[1.75] text-cacau/85 md:text-base">
                Sou psicóloga e desenvolvo meu trabalho clínico a partir da{" "}
                <strong className="font-medium text-vinho">
                  orientação psicanalítica
                </strong>
                , em constante aprofundamento teórico e clínico.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <p className="text-[15px] leading-[1.75] text-cacau/85 md:text-base">
                Acredito na escuta como um espaço em que aquilo que ainda não
                encontrou elaboração possa encontrar lugar na palavra. A
                Psicanálise considera que nem tudo aquilo que nos atravessa é
                imediatamente consciente e que, pela fala, aspectos de nossa
                história, de nossos conflitos e de nossos desejos podem ganhar
                expressão e novos sentidos.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <p className="text-[15px] leading-[1.75] text-cacau/85 md:text-base">
                Na clínica, a{" "}
                <strong className="font-medium text-vinho">
                  singularidade de cada sujeito
                </strong>{" "}
                ocupa um lugar fundamental. Mais do que oferecer respostas
                prontas, trata-se de possibilitar um espaço em que cada pessoa
                possa se aproximar da própria experiência, reconhecendo aquilo
                que a atravessa e construindo novas possibilidades de
                elaboração para sua história.
              </p>
            </FadeIn>
          </div>

          {/* Assinatura */}
          <FadeIn delay={0.7}>
            <div className="mt-10 flex items-center gap-4 md:mt-12">
              <div className="h-px max-w-[60px] flex-1 bg-bege" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[1.2px] text-taupe">
                {SITE.nome} · CRP {SITE.crp}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}