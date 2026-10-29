"use client";

import { useRef } from "react";
import { DIFFERENTIALS } from "@/lib/data";
import { Sparkles, Shield, Heart, Feather } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ICONS = [Sparkles, Feather, Heart, Shield];

export function DifferentialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".differential-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F7F4EF] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div ref={headerRef} className="max-w-2xl mb-14 sm:mb-20 will-change-transform">
          <div className="flex items-center gap-2 mb-3">
            <span className="bullet-indicator" />
            <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
              Pilares de Cuidado
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15]">
            Nossos princípios no atendimento e na estética facial.
          </h2>
        </div>

        {/* Grid de 4 Pilares */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 will-change-transform">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={diff.title}
                className="differential-card rounded-2xl bg-[#FFFCF8] border border-[#E3DCD3] p-7 flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(59,48,43,0.08)] hover:border-[#C2A783] transition-all duration-300 group hover-lift"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EF] border border-[#E3DCD3] flex items-center justify-center text-[#A28F80] group-hover:text-[#3B302B] group-hover:bg-[#FFFCF8] transition-colors mb-5">
                    <Icon className="w-5 h-5 text-[#C2A783]" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[#3B302B] mb-3 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#E3DCD3]/50 text-[0.6875rem] font-body text-[#A28F80] uppercase tracking-wider font-semibold">
                  Pilar {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

