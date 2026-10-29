"use client";

import { useRef } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, HeartHandshake, Eye, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function AboutClinic() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (imagesRef.current) {
        const imgs = imagesRef.current.querySelectorAll(".editorial-img-card");
        if (imgs.length > 0) {
          gsap.fromTo(
            imgs,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: imagesRef.current,
                start: "top 80%",
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
      id="clinica"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#FFFCF8] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="bullet-indicator" />
            <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
              A Proposta da Clínica Schmidt
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15]">
            Um olhar cuidadoso sobre a sua beleza, unindo sensibilidade e precisão.
          </h2>
        </div>

        {/* Bloco Editorial Dividido: Textos e Grid de Imagens */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna de Texto */}
          <div ref={textRef} className="lg:col-span-6 space-y-6 will-change-transform">
            <p className="font-body text-base sm:text-lg text-[#766D66] leading-relaxed">
              Na <strong className="text-[#3B302B] font-semibold">Clínica Schmidt</strong>, entendemos a Harmonização Orofacial como a arte de valorizar a identidade de cada face. Não buscamos transformações padronizadas, mas o equilíbrio sutil que realça o que cada pessoa já tem de melhor.
            </p>

            <p className="font-body text-sm sm:text-base text-[#766D66] leading-relaxed">
              Cada tratamento começa com uma avaliação detalhada, onde conversamos sobre seus objetivos estéticos, analisamos proporções faciais e esclarecemos todas as dúvidas. O resultado é um atendimento transparente, seguro e inteiramente personalizado.
            </p>

            {/* Destaque em Cartão Leve */}
            <div className="p-6 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-3">
              <div className="flex items-center gap-2.5 text-[#3B302B] font-heading font-medium text-lg">
                <HeartHandshake className="w-5 h-5 text-[#C2A783]" />
                <span>Atendimento Individualizado</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed">
                Consultas planejadas com tempo e calma para ouvir você, examinar com rigor técnico e construir um plano de cuidados harmonioso e gradativo.
              </p>
            </div>

            {/* Micro atributos */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <Eye className="w-4 h-4 text-[#C2A783] mt-1 shrink-0" />
                <div>
                  <h4 className="font-body text-xs font-semibold text-[#3B302B]">Anatomia e Proporção</h4>
                  <p className="text-[0.6875rem] text-[#766D66]">Respeito à singularidade de cada traço</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#879184] mt-1 shrink-0" />
                <div>
                  <h4 className="font-body text-xs font-semibold text-[#3B302B]">Ética e Prudência</h4>
                  <p className="text-[0.6875rem] text-[#766D66]">Indicações claras e sem exageros</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Visual: Composição Fotográfica Editorial com Imagens Reais */}
          <div ref={imagesRef} className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 will-change-transform">
            {/* Foto 1: Ambiente da Clínica (quadrada 1024x1024) */}
            <div className="editorial-img-card col-span-2 sm:col-span-1 rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs relative aspect-square bg-[#F7F4EF] group">
              <Image
                src="/editorial_clinic_01.jfif"
                alt="Ambiente acolhedor e sofisticado da Clínica Schmidt"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
                Ambiente sereno e acolhedor
              </div>
            </div>

            {/* Foto 2: Detalhe Editorial Estético (1536x1024) */}
            <div className="editorial-img-card col-span-2 sm:col-span-1 rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs relative aspect-square bg-[#F7F4EF] group">
              <Image
                src="/editorial_detail_01.jfif"
                alt="Cuidado e atenção aos detalhes estéticos na Clínica Schmidt"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
                Harmonia em cada detalhe
              </div>
            </div>

            {/* Foto 3: Consulta Humanizada (1088x608) em largura completa */}
            <div className="editorial-img-card col-span-2 rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs relative aspect-[16/9] bg-[#F7F4EF] group">
              <Image
                src="/editorial_consultation_01.jfif"
                alt="Consulta e diálogo atencioso na Clínica Schmidt"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
                Escuta atenta e alinhamento de expectativas antes de cada procedimento
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

