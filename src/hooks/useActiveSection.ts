"use client";

import { useEffect, useState } from "react";

/**
 * Detecta qual seção está ativa no viewport.
 * Usa IntersectionObserver para performance — sem listeners de scroll.
 *
 * @param ids - lista de IDs (sem "#") na ordem em que aparecem no DOM
 * @returns o ID da seção ativa (ou null se nenhuma)
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pega todas as seções visíveis e escolhe a que está mais "no topo"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return Math.abs(aTop) - Math.abs(bTop);
          });

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Margem: considera a seção ativa quando ela cruza a faixa de 30% do topo
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}