"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, ArrowRight, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageDesktopRef = useRef<HTMLDivElement>(null);
  const imageMobileRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Efeito de Parallax suave nas imagens de fundo
      if (imageDesktopRef.current) {
        gsap.to(imageDesktopRef.current, {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (imageMobileRef.current) {
        gsap.to(imageMobileRef.current, {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 2. Animação fluida de entrada dos textos e botões
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.15,
          }
        );
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative w-full min-h-[100dvh] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 overflow-hidden bg-[#F7F4EF]"
    >
      {/* Imagem de Fundo Desktop (>= lg) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          ref={imageDesktopRef}
          className="hidden lg:block absolute inset-0 -top-8 -bottom-8 will-change-transform"
        >
          <Image
            src="/header_desktop.jfif"
            alt={`${CLINIC_INFO.name} — Harmonização Orofacial`}
            fill
            priority
            quality={92}
            className="object-cover object-[right_center] xl:object-[80%_center]"
            sizes="100vw"
          />
        </div>

        {/* Imagem de Fundo Mobile e Tablet (< lg) */}
        <div
          ref={imageMobileRef}
          className="block lg:hidden absolute inset-0 -top-6 -bottom-6 will-change-transform"
        >
          <Image
            src="/header_mobile.jfif"
            alt={`${CLINIC_INFO.name} — Harmonização Orofacial em Campo Largo`}
            fill
            priority
            quality={95}
            className="object-cover object-[center_top] sm:object-[center_20%] contrast-[1.08] brightness-[1.02]"
            sizes="100vw"
          />
        </div>

        {/* Overlays elegantes e equilibrados para legibilidade premium */}
        {/* Desktop: gradiente da esquerda (marfim suave) para a direita transparente */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#F7F4EF]/98 via-[#F7F4EF]/88 via-45% to-transparent" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#F7F4EF]/90 via-transparent to-[#F7F4EF]/40" />

        {/* Mobile: overlay suave e translúcido para manter a fotografia nítida e bem visível */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-45% to-[#F7F4EF]/85" />
      </div>

      {/* Conteúdo Principal do Hero */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center will-change-transform my-auto"
      >
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl py-4 sm:py-8">
          {/* Badge de Posicionamento e Especialidade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E3DCD3] bg-[#FFFCF8]/95 backdrop-blur-md text-xs font-body font-semibold text-[#A28F80] mb-4 sm:mb-6 shadow-xs animate-fade-in-down">
            <Sparkles className="w-3.5 h-3.5 text-[#C2A783]" />
            <span className="tracking-wide uppercase text-[0.6875rem] sm:text-xs">
              Clínica Schmidt • {CLINIC_INFO.specialty}
            </span>
          </div>

          {/* Headline Principal Editorial */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] leading-[1.08] sm:leading-[1.05] tracking-tight text-[#2B2320] font-normal mb-5 sm:mb-6 drop-shadow-[0_2px_10px_rgba(247,244,239,0.9)]">
            Realce sua beleza com{" "}
            <span className="italic font-medium text-[#A28F80]">naturalidade</span>{" "}
            e equilíbrio.
          </h1>

          {/* Subtítulo Conciso e Acolhedor */}
          <p className="font-body text-sm sm:text-base md:text-lg text-[#5A514B] max-w-xl leading-relaxed mb-6 sm:mb-8 font-normal drop-shadow-[0_1px_6px_rgba(247,244,239,0.95)]">
            {CLINIC_INFO.heroSubheadline}
          </p>

          {/* Botões de Ação / Conversão */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2.5 py-3 sm:py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-semibold tracking-normal shadow-[0_8px_20px_rgba(59,48,43,0.18)] hover-lift flex items-center justify-center cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Fale Conosco</span>
            </a>

            <Link
              href="#procedimentos"
              className="btn-pill bg-[#FFFCF8]/95 hover:bg-[#FFFCF8] text-[#3B302B] border border-[#E3DCD3] hover:border-[#C2A783] hover:scale-[1.02] gap-2 py-3 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm font-semibold tracking-normal shadow-xs hover-lift flex items-center justify-center cursor-pointer"
            >
              <span>Conheça os Procedimentos</span>
              <ArrowRight className="w-4 h-4 text-[#A28F80]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Faixa Inferior de Atributos Discretos — Exibida apenas no Desktop conforme solicitado */}
      <div className="hidden lg:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <div className="pt-4 border-t border-[#E3DCD3]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#766D66]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C2A783]" />
            <span className="font-body font-medium">{CLINIC_INFO.addressShort}</span>
          </div>
          <div className="flex items-center gap-4 text-[0.6875rem] sm:text-xs">
            <span>Atendimento com Hora Marcada</span>
            <span className="w-1 h-1 rounded-full bg-[#C2A783]" />
            <span>Harmonização Orofacial Responsável</span>
          </div>
        </div>
      </div>
    </section>
  );
}

