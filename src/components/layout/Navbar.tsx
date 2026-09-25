"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

// Easing compartilhado — mesma curva do resto do site
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

// ----- Animação do painel do drawer -----
const drawerVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.35,
      ease: EASE,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: EASE,
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

// ----- Animação de cada link (entra da esquerda pra direita) -----
const linkVariants: Variants = {
  closed: {
    opacity: 0,
    x: -24,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  },
};

// ----- Animação do CTA (aparece depois dos links) -----
const ctaVariants: Variants = {
  closed: { opacity: 0, x: -24 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const shouldReduceMotion = useReducedMotion();

  // Detecta scroll para trocar o fundo do navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava scroll do body quando o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-creme/95 backdrop-blur-md border-b border-bege/40"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 md:h-20 max-w-content items-center justify-between px-5 md:px-8"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-vinho transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-3xl leading-none md:text-4xl" aria-hidden="true">
            Ψ
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg tracking-wide md:text-2xl">
              {SITE.nome}
            </span>
            <span className="text-[9px] uppercase tracking-[2px] text-taupe md:text-[10px]">
              {SITE.titulo}
            </span>
          </span>
        </a>
        {/* Links — desktop */}
        <ul className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;

            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  className={`relative block py-2 text-[13px] transition-colors duration-300 lg:text-sm whitespace-nowrap ${
                    isActive ? "text-vinho" : "text-cacau/70 hover:text-vinho"
                  }`}
                >
                  {link.label}

                  {isActive && !shouldReduceMotion && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-vinho"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {isActive && shouldReduceMotion && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-vinho" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA — desktop */}
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center rounded-sm bg-vinho px-4 py-2.5 text-[13px] font-medium tracking-wide text-creme transition-colors hover:bg-vinho/90 md:inline-flex lg:px-5 lg:text-sm whitespace-nowrap"
        >
          Agendar Sessão
        </a>

        {/* Toggle — mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-vinho transition-colors hover:bg-bege/30 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Drawer mobile — animação de slide + stagger */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-drawer"
            initial={shouldReduceMotion ? false : "closed"}
            animate="open"
            exit={shouldReduceMotion ? undefined : "closed"}
            variants={shouldReduceMotion ? undefined : drawerVariants}
            className="overflow-hidden border-t border-bege/40 bg-creme md:hidden"
          >
            <div className="px-5 pb-8 pt-4">
              <motion.ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;

                  return (
                    <motion.li
                      key={link.href}
                      variants={shouldReduceMotion ? undefined : linkVariants}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-3 border-b border-bege/30 py-4 font-serif text-xl transition-colors ${
                          isActive
                            ? "text-vinho"
                            : "text-cacau hover:text-vinho"
                        }`}
                      >
                        <span
                          className={`h-px transition-all duration-300 ${
                            isActive ? "w-6 bg-vinho" : "w-3 bg-taupe/40"
                          }`}
                          aria-hidden="true"
                        />
                        {link.label}
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* CTA do drawer */}
              <motion.div
                variants={shouldReduceMotion ? undefined : ctaVariants}
                className="mt-6"
              >
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-sm bg-vinho px-5 py-3.5 text-sm font-medium tracking-wide text-creme transition-colors hover:bg-vinho/90"
                >
                  Agendar Sessão
                </a>

                <p className="micro-copy mt-6 text-center">CRP {SITE.crp}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}