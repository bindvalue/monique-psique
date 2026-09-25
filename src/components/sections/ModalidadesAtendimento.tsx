"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Video } from "lucide-react";
import ModalidadeCard from "@/components/ui/ModalidadeCard";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ModalidadesAtendimento() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="atendimentos" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28 lg:py-32">
      {/* Blob bege sutil ao fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <svg className="absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 700 700" fill="none">
          <defs>
            <radialGradient id="modal-blob" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D5C4AD" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#D5C4AD" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#D5C4AD" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="350" cy="350" rx="330" ry="330" fill="url(#modal-blob)" />
        </svg>
      </div>

      <div className="mx-auto max-w-content">
        {/* Cabeçalho */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-taupe/40" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-[2px] text-taupe font-medium">Como funciona</p>
            <span className="h-px w-10 bg-taupe/40" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-4xl leading-[1.05] text-cacau sm:text-5xl md:text-6xl lg:text-[4rem]">
            Modalidades de
            <br />
            <em className="italic text-taupe">Atendimento</em>
          </h2>
        </motion.div>

        {/* Grid de 2 blocos */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {/* Presencial */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <ModalidadeCard variant="accent">
              <div className="flex h-full flex-col p-8 md:p-10 lg:p-12">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-6 bg-vinho/40" aria-hidden="true" />
                  <p className="text-[10px] uppercase tracking-[1.8px] text-vinho/70 font-medium">Presencial</p>
                </div>
                <h3 className="mb-5 font-serif text-2xl leading-[1.15] text-vinho sm:text-[1.75rem] md:text-3xl">
                  Atendimento<br />Presencial
                </h3>
                <div className="space-y-4 text-[15px] leading-[1.75] text-cacau/85">
                  <p>O consultório é pensado para oferecer um ambiente reservado, silencioso e acolhedor — onde cada encontro acontece com tempo e privacidade. As sessões presenciais são conduzidas em <strong className="font-semibold text-vinho">Belo Horizonte</strong> e <strong className="font-semibold text-vinho">Contagem</strong>, atendendo crianças, adolescentes e adultos.</p>
                  <p>O endereço completo é compartilhado após a confirmação do agendamento, junto às orientações de acesso.</p>
                </div>
                <div className="mt-auto flex items-center gap-3 border-t border-vinho/15 pt-6 mt-8">
                  <MapPin size={16} strokeWidth={1.5} className="flex-shrink-0 text-vinho/70" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-[1.5px] text-taupe">Consultório físico · BH e Contagem</p>
                </div>
              </div>
            </ModalidadeCard>
          </motion.div>

          {/* Online */}
          <motion.div
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const } } }}
          >
            <ModalidadeCard>
              <div className="flex h-full flex-col p-8 md:p-10 lg:p-12">
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-6 bg-vinho/40" aria-hidden="true" />
                  <p className="text-[10px] uppercase tracking-[1.8px] text-vinho/70 font-medium">Online</p>
                </div>
                <h3 className="mb-5 font-serif text-2xl leading-[1.15] text-vinho sm:text-[1.75rem] md:text-3xl">
                  Atendimento<br />Online
                </h3>
                <div className="space-y-4 text-[15px] leading-[1.75] text-cacau/85">
                  <p>As sessões acontecem por <strong className="font-semibold text-vinho">videochamada em plataforma segura</strong>, com o mesmo sigilo e a mesma atenção do atendimento presencial. É uma opção pensada para quem precisa de flexibilidade de horários ou está fora da região do consultório.</p>
                  <p>Para adolescentes, o formato online é avaliado em uma <strong className="font-semibold text-vinho">conversa prévia</strong> com os responsáveis, garantindo que o cuidado aconteça da melhor forma possível.</p>
                </div>
                <div className="mt-auto flex items-center gap-3 border-t border-taupe/20 pt-6 mt-8">
                  <Video size={16} strokeWidth={1.5} className="flex-shrink-0 text-taupe" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-[1.5px] text-taupe">Plataforma segura e sigilosa</p>
                </div>
              </div>
            </ModalidadeCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}