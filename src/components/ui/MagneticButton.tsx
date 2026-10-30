"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.28,
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respeitar preferências de acessibilidade
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Executar apenas em ponteiros finos com suporte a hover (desktop)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.75, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.75, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength]);

  return (
    <div ref={containerRef} className={`inline-flex will-change-transform ${className}`}>
      {children}
    </div>
  );
}

