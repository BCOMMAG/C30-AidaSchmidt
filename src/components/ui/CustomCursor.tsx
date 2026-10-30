"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Apenas em desktops com mouse fino e sem preferência por redução de movimento
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setIsEnabled(true);

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };

    // Detecção de elementos clicáveis para expandir o cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest("button, a, input, select, textarea, [role='button'], .cursor-pointer");
      if (isInteractive) {
        gsap.to(ring, {
          scale: 1.8,
          borderColor: "rgba(194, 167, 131, 0.7)",
          backgroundColor: "rgba(194, 167, 131, 0.08)",
          duration: 0.3,
        });
        gsap.to(dot, { scale: 0.5, duration: 0.2 });
      } else {
        gsap.to(ring, {
          scale: 1,
          borderColor: "rgba(194, 167, 131, 0.4)",
          backgroundColor: "transparent",
          duration: 0.3,
        });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      gsap.killTweensOf([dot, ring]);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Ponto central */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#C2A783] opacity-0 pointer-events-none transition-transform will-change-transform"
      />
      {/* Anel inercial */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 w-8 h-8 rounded-full border border-[#C2A783]/45 opacity-0 pointer-events-none transition-transform will-change-transform"
      />
    </div>
  );
}

