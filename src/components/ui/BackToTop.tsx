"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.8, y: 16 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
          className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-vinho text-creme shadow-lg transition-colors duration-300 hover:bg-cacau md:bottom-8 md:right-8 md:h-14 md:w-14"
        >
          {/* Borda decorativa sutil */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-bege/30 transition-transform duration-500 group-hover:scale-110"
          />

          {/* Ícone */}
          <ArrowUp
            size={20}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}