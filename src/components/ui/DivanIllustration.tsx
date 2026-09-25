"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  className?: string;
};

/**
 * Ilustração linear de um divã clássico estilo chesterfield,
 * inspirada em gravura de consultório psicanalítico.
 * Os traços se "desenham" progressivamente conforme entram na viewport.
 */
export default function DivanIllustration({ className }: Props) {
  const shouldReduceMotion = useReducedMotion();

  // Configuração dos paths animados
  const paths = [
    // 1. Base inferior (moldura)
    "M 120 340 L 1320 340 L 1320 380 L 120 380 Z",
    // 2. Braço esquerdo (enrolado superior)
    "M 120 340 C 120 300, 60 280, 40 240 C 20 200, 40 140, 100 120 C 160 100, 220 120, 240 170 L 280 180",
    // 3. Braço esquerdo (frente interna)
    "M 240 170 L 240 340",
    // 4. Braço esquerdo (curva interna capitonê)
    "M 100 120 C 140 140, 180 180, 220 220 C 240 240, 250 260, 260 280",
    // 5. Braço direito (enrolado superior)
    "M 1320 340 C 1320 300, 1380 280, 1400 240 C 1420 200, 1400 140, 1340 120 C 1280 100, 1220 120, 1200 170 L 1160 180",
    // 6. Braço direito (frente interna)
    "M 1200 170 L 1200 340",
    // 7. Braço direito (curva interna capitonê)
    "M 1340 120 C 1300 140, 1260 180, 1220 220 C 1200 240, 1190 260, 1180 280",
    // 8. Encosto principal (parte superior ondulada)
    "M 240 170 C 320 120, 420 100, 560 90 C 700 80, 800 80, 940 90 C 1080 100, 1180 120, 1200 170",
    // 9. Linha divisória do encosto e assento
    "M 260 280 C 400 260, 560 250, 720 250 C 880 250, 1040 260, 1180 280",
    // 10. Topo do assento (superfície frontal)
    "M 200 320 C 320 300, 480 290, 720 290 C 960 290, 1120 300, 1240 320",
    // 11. Pé esquerdo (cabriolé)
    "M 260 380 C 260 420, 240 440, 220 460 C 200 480, 200 500, 220 520 C 240 540, 270 540, 280 520 C 290 500, 280 480, 270 460",
    // 12. Pé direito (cabriolé)
    "M 1180 380 C 1180 420, 1200 440, 1220 460 C 1240 480, 1240 500, 1220 520 C 1200 540, 1170 540, 1160 520 C 1150 500, 1160 480, 1170 460",
  ];

  // Botões do capitonê (círculos pequenos)
  const buttons = [
    // Fileira superior do encosto
    [340, 180], [500, 165], [660, 158], [820, 158], [980, 165], [1140, 180],
    // Fileira inferior do encosto
    [340, 240], [500, 225], [660, 218], [820, 218], [980, 225], [1140, 240],
    // Botões do assento (primeira fileira)
    [340, 310], [500, 305], [660, 302], [820, 302], [980, 305], [1140, 310],
  ];

  return (
    <svg
      viewBox="0 0 1440 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Ilustração de um divã clássico de consultório"
      role="img"
    >
      <defs>
        <linearGradient id="divan-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* =====================
          Traços principais
          ===================== */}
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#divan-line)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={shouldReduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            pathLength: {
              duration: 1.2,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.4,
              delay: i * 0.12,
            },
          }}
        />
      ))}

      {/* =====================
          Botões do capitonê
          ===================== */}
      {buttons.map(([cx, cy], i) => (
        <motion.circle
          key={`btn-${i}`}
          cx={cx}
          cy={cy}
          r={4}
          fill="currentColor"
          fillOpacity="0.9"
          initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
          whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 0.9 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.4,
            delay: 1.6 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* Linhas pontilhadas conectando botões (sugestão de capitonê) */}
      <motion.g
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.35"
        strokeDasharray="4 4"
        fill="none"
        initial={shouldReduceMotion ? undefined : { opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        {/* Diamantes do encosto superior */}
        <path d="M 340 180 L 500 165 L 660 158 L 820 158 L 980 165 L 1140 180" />
        <path d="M 340 240 L 500 225 L 660 218 L 820 218 L 980 225 L 1140 240" />
        {/* Diagonais entre fileiras */}
        <path d="M 340 180 L 500 225 M 500 165 L 660 218 M 660 158 L 820 218 M 820 158 L 980 225 M 980 165 L 1140 240" />
        <path d="M 500 165 L 340 240 M 660 158 L 500 225 M 820 158 L 660 218 M 980 165 L 820 218 M 1140 180 L 980 225" />
        {/* Linha do assento */}
        <path d="M 340 310 L 500 305 L 660 302 L 820 302 L 980 305 L 1140 310" />
      </motion.g>
    </svg>
  );
}