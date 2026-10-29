"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Inicialização do Lenis com parâmetros fluidos e suaves
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sincronização em tempo real entre Lenis e ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Recálculos de sincronização após carregamento de imagens e fontes
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 150);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 600);
    const t3 = setTimeout(() => ScrollTrigger.refresh(), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

