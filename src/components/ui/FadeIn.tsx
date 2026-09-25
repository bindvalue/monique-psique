"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Animação de entrada suave (fade + slide-up).
 * Respeita `prefers-reduced-motion` — usuários que preferem
 * menos movimento verão o conteúdo estático.
 */
export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1], // easeOutQuint — curva elegante
      }}
    >
      {children}
    </motion.div>
  );
}