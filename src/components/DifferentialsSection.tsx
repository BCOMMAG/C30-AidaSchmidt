"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Pillar {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    image: "/pilar_avaliacao.jpg",
    alt: "Avaliação Criteriosa e Individualizada em Harmonização Orofacial",
    title: "Avaliação Criteriosa & Individualizada",
    description: "Cada face possui proporções e expressividades singulares. O plano de cuidados é desenhado com respeito estrito aos seus traços originais.",
  },
  {
    image: "/pilar_naturalidade.jpg",
    alt: "Foco em Naturalidade e Saúde da Pele",
    title: "Foco em Naturalidade",
    description: "Buscamos equilíbrio, leveza e rejuvenescimento harmônico, sem exageros ou transformações artificiais padronizadas.",
  },
  {
    image: "/pilar_escuta.jpg",
    alt: "Escuta Atenta e Diálogo Transparente com a Dra. Aïda",
    title: "Escuta Atenta & Transparência",
    description: "Diálogo acolhedor e esclarecimento detalhado de cada etapa, entendendo suas expectativas e priorizando sua segurança.",
  },
  {
    image: "/pilar_ambiente.jpg",
    alt: "Ambiente Calmo e Sofisticado da Clínica Schmidt",
    title: "Ambiente Calmo & Sofisticado",
    description: "Espaço intimista planejado para oferecer conforto, privacidade e uma experiência tranquila do início ao fim do atendimento.",
  },
];

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
        const items = gridRef.current.querySelectorAll(".pillar-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.1,
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
      className="py-16 sm:py-24 bg-[#F7F4EF] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Editorial */}
        <div ref={headerRef} className="max-w-2xl mb-10 sm:mb-14 will-change-transform">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="bullet-indicator" />
            <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
              Pilares de Cuidado
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15]">
            Nossos princípios no atendimento e na estética facial.
          </h2>
        </div>

        {/* Grid Editorial Aberto (Sem Cards, com Imagens Compactas e Refinadas) */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 will-change-transform"
        >
          {PILLARS.map((pilar, index) => {
            return (
              <div
                key={pilar.title}
                className="pillar-item flex flex-col group cursor-default"
              >
                {/* Imagem Fotográfica Compacta em vez de Ícones */}
                <div className="relative w-full aspect-[16/10] max-h-[140px] rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs bg-[#FFFCF8] mb-3 sm:mb-4">
                  <Image
                    src={pilar.image}
                    alt={pilar.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Número do Pilar */}
                <span className="text-[0.6875rem] font-body text-[#C2A783] uppercase tracking-widest font-semibold block mb-1">
                  Pilar 0{index + 1}
                </span>

                {/* Título do Pilar */}
                <h3 className="font-heading text-lg sm:text-xl font-medium text-[#3B302B] mb-2 leading-snug group-hover:text-[#A28F80] transition-colors">
                  {pilar.title}
                </h3>

                {/* Descrição Concisa */}
                <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed">
                  {pilar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
