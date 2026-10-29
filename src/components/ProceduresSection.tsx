"use client";

import { useRef } from "react";
import { PROCEDURES } from "@/data/procedures";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, MessageSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ProceduresSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".procedure-card");
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 82%",
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
      id="procedimentos"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F7F4EF] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E3DCD3] gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bullet-indicator" />
              <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
                Áreas de Atuação &amp; Cuidados
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15]">
              Procedimentos em Harmonização Orofacial
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#766D66] max-w-md leading-relaxed">
            Abordagens planejadas com critério técnico e estética refinada para realçar traços e restabelecer o equilíbrio facial.
          </p>
        </div>

        {/* Grid de Procedimentos */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 will-change-transform"
        >
          {PROCEDURES.map((proc) => {
            const encodedMsg = encodeURIComponent(proc.whatsappMessage);
            const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMsg}`;

            return (
              <div
                key={proc.id}
                className="procedure-card rounded-2xl bg-[#FFFCF8] border border-[#E3DCD3] p-6 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(59,48,43,0.08)] hover:border-[#C2A783] transition-all duration-300 group hover-lift"
              >
                <div>
                  {/* Topo do Card: Badge da Categoria */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[0.6875rem] font-body font-semibold uppercase tracking-wider text-[#A28F80] bg-[#F7F4EF] px-2.5 py-1 rounded-full border border-[#E3DCD3]">
                      {proc.category}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#C2A783] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>

                  {/* Nome do Procedimento */}
                  <h3 className="font-heading text-xl font-medium text-[#3B302B] mb-2.5 leading-snug group-hover:text-[#A28F80] transition-colors">
                    {proc.name}
                  </h3>

                  {/* Resumo Claro e Responsável */}
                  <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed mb-4">
                    {proc.summary}
                  </p>
                </div>

                {/* Base do Card: Ação para Conversão */}
                <div className="pt-4 border-t border-[#E3DCD3]/60 mt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-body font-semibold text-[#3B302B] group-hover:text-[#C2A783] transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Consultar no WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A28F80] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota Ética e de Responsabilidade Médica/Odontológica */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#EFE9E0]/80 border border-[#E3DCD3] max-w-3xl mx-auto flex items-start gap-3.5">
          <CheckCircle2 className="w-5 h-5 text-[#879184] mt-0.5 shrink-0" />
          <div className="space-y-1">
            <h4 className="font-body text-xs sm:text-sm font-semibold text-[#3B302B]">
              Compromisso Ético e Avaliação Clínica
            </h4>
            <p className="font-body text-xs text-[#766D66] leading-relaxed">
              A indicação de qualquer procedimento em Harmonização Orofacial depende de uma avaliação clínica presencial e minuciosa. Cada anatomia facial é única, e os objetivos, cuidados preventivos e possíveis contraindicações são sempre esclarecidos com total transparência junto à profissional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

