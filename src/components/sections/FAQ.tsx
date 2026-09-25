"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITENS = [
  {
    pergunta: "Atende crianças, adolescentes e adultos?",
    resposta:
      "Sim. O atendimento é realizado com crianças, adolescentes e adultos, respeitando as particularidades de cada etapa da vida. A abordagem clínica se adapta à fase do desenvolvimento, sempre com escuta cuidadosa e ética.",
  },
  {
    pergunta: "Qual é o valor da sessão?",
    resposta:
      "O valor da sessão é informado no primeiro contato, pois pode variar de acordo com a modalidade (presencial ou online) e a frequência do acompanhamento. Entre em contato para conversarmos sobre os detalhes.",
  },
  {
    pergunta: "Onde fica o consultório presencial?",
    resposta:
      "O consultório está localizado em Contagem, MG. O endereço completo e as orientações de acesso são enviados após a confirmação do agendamento, para garantir a sua comodidade e segurança.",
  },
  {
    pergunta: "Atende planos de saúde?",
    resposta:
      "O atendimento é particular. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, conforme as condições do seu convênio. Consulte a viabilidade com a sua operadora.",
  },
  {
    pergunta: "Como funciona o atendimento online?",
    resposta:
      "As sessões online acontecem por videochamada em plataforma segura e sigilosa, seguindo os mesmos princípios éticos do atendimento presencial. É uma opção para quem busca flexibilidade de horários ou está fora da região do consultório.",
  },
  {
    pergunta: "Qual é a frequência das sessões?",
    resposta:
      "A frequência é definida em conjunto, considerando as necessidades de cada pessoa e o momento do processo terapêutico. Normalmente, as sessões são semanais, com duração de cerca de 50 minutos.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setAberto((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-cacau px-5 py-20 md:px-8 md:py-28 lg:py-32"
    >
      {/* Pattern sutil de fundo (linhas topográficas) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' stroke='%23F7F2EA' stroke-width='0.8'%3E%3Cpath d='M20 100 C80 40,160 40,220 100 S360 180,380 100'/%3E%3Cpath d='M20 180 C80 120,160 120,220 180 S360 260,380 180'/%3E%3Cpath d='M20 260 C80 200,160 200,220 260 S360 340,380 260'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />

      <div className="relative mx-auto max-w-content">
        {/* ============================================
            Cabeçalho
            ============================================ */}
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-bege/40" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-[2px] text-bege/70 font-medium">
              Dúvidas Frequentes
            </p>
            <span className="h-px w-10 bg-bege/40" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-4xl leading-[1.05] text-creme sm:text-5xl md:text-6xl lg:text-[4rem]">
            Perguntas
            <br />
            <em className="italic text-bege">Frequentes</em>
          </h2>
        </motion.div>

        {/* ============================================
            Lista de FAQ (Accordion)
            ============================================ */}
        <motion.ul
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="mx-auto max-w-3xl"
        >
          {FAQ_ITENS.map((item, i) => {
            const isOpen = aberto === i;
            return (
              <motion.li
                key={i}
                variants={fadeUp}
                className="group border-b border-bege/15 first:border-t"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-bege md:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-resposta-${i}`}
                >
                  <span className="font-serif text-lg leading-[1.3] text-creme/90 transition-colors duration-300 group-hover:text-bege md:text-xl">
                    {item.pergunta}
                  </span>

                  <span
                    className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-bege/30 text-bege/70 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-bege/60 bg-bege/10 text-bege"
                        : "group-hover:border-bege/60 group-hover:text-bege"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={12} strokeWidth={2} /> : <Plus size={12} strokeWidth={2} />}
                  </span>
                </button>

                <div
                  id={`faq-resposta-${i}`}
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pr-8 text-[15px] leading-[1.75] text-creme/70 md:text-base">
                    {item.resposta}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}