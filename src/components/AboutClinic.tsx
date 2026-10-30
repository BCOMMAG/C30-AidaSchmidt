"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { HeartHandshake, Eye, ShieldCheck, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ClinicPhoto {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const CLINIC_PHOTOS: ClinicPhoto[] = [
  {
    src: "/editorial_clinic_01.jfif",
    alt: "Ambiente acolhedor e sofisticado da Clínica Schmidt",
    title: "Ambiente sereno e acolhedor",
    description: "Estrutura moderna planejada para proporcionar tranquilidade, privacidade e conforto em cada atendimento em Campo Largo.",
  },
  {
    src: "/editorial_detail_01.jfif",
    alt: "Cuidado e atenção aos detalhes estéticos na Clínica Schmidt",
    title: "Harmonia em cada detalhe",
    description: "Produtos com rigor de procedência e protocolos que priorizam a segurança, a elegância e a durabilidade dos resultados.",
  },
  {
    src: "/editorial_consultation_01.jfif",
    alt: "Consulta e diálogo atencioso na Clínica Schmidt",
    title: "Escuta atenta e alinhamento de expectativas",
    description: "Avaliação facial minuciosa e planejamento gradativo construído em conjunto antes de qualquer procedimento.",
  },
];

export function AboutClinic() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closePhoto = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % CLINIC_PHOTOS.length : null));
  }, []);

  const prevPhoto = useCallback(() => {
    setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + CLINIC_PHOTOS.length) % CLINIC_PHOTOS.length : null));
  }, []);

  // Bloquear rolagem do body quando o modal estiver aberto e permitir navegação via teclado
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhotoIndex, closePhoto, nextPhoto, prevPhoto]);

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

          {/* Coluna Visual: Composição Fotográfica Editorial com Imagens Compactas no Mobile */}
          <div ref={imagesRef} className="lg:col-span-6 space-y-3 will-change-transform">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {/* Foto 1: Ambiente da Clínica */}
              <button
                type="button"
                onClick={() => openPhoto(0)}
                className="editorial-img-card col-span-1 rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs relative aspect-[4/3] sm:aspect-square bg-[#F7F4EF] group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] active:scale-[0.98] transition-all"
                aria-label="Ampliar foto do ambiente da clínica"
              >
                <Image
                  src={CLINIC_PHOTOS[0].src}
                  alt={CLINIC_PHOTOS[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge de ampliação */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full bg-[#211E1C]/65 text-white backdrop-blur-md opacity-85 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Legenda compacta visível no hover */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 text-[0.6875rem] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body line-clamp-1">
                  {CLINIC_PHOTOS[0].title}
                </div>
              </button>

              {/* Foto 2: Detalhe Editorial Estético */}
              <button
                type="button"
                onClick={() => openPhoto(1)}
                className="editorial-img-card col-span-1 rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs relative aspect-[4/3] sm:aspect-square bg-[#F7F4EF] group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] active:scale-[0.98] transition-all"
                aria-label="Ampliar foto de produtos e detalhes da clínica"
              >
                <Image
                  src={CLINIC_PHOTOS[1].src}
                  alt={CLINIC_PHOTOS[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge de ampliação */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-full bg-[#211E1C]/65 text-white backdrop-blur-md opacity-85 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Legenda compacta visível no hover */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 text-[0.6875rem] sm:text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body line-clamp-1">
                  {CLINIC_PHOTOS[1].title}
                </div>
              </button>

              {/* Foto 3: Consulta Humanizada em largura completa */}
              <button
                type="button"
                onClick={() => openPhoto(2)}
                className="editorial-img-card col-span-2 rounded-2xl overflow-hidden border border-[#E3DCD3] shadow-xs relative aspect-[21/9] sm:aspect-[16/9] bg-[#F7F4EF] group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] active:scale-[0.98] transition-all"
                aria-label="Ampliar foto da consulta humanizada"
              >
                <Image
                  src={CLINIC_PHOTOS[2].src}
                  alt={CLINIC_PHOTOS[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge de ampliação */}
                <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 p-1.5 sm:p-2 rounded-full bg-[#211E1C]/65 text-white backdrop-blur-md opacity-85 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-body">
                  {CLINIC_PHOTOS[2].title}
                </div>
              </button>
            </div>

            {/* Dica visual elegante para mobile */}
            <div className="flex items-center justify-center gap-1.5 pt-1 text-center text-[0.6875rem] text-[#A28F80] font-body">
              <Maximize2 className="w-3 h-3 text-[#C2A783]" />
              <span>Toque em qualquer foto para ver ampliada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal em tela cheia com alta resolução */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotos da Clínica Schmidt"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1A1715]/90 backdrop-blur-md animate-fade-in"
          onClick={closePhoto}
        >
          {/* Botão Fechar no Topo */}
          <button
            type="button"
            onClick={closePhoto}
            className="absolute top-4 right-4 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A783] cursor-pointer"
            aria-label="Fechar visualização"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Contador de fotos */}
          <div className="absolute top-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-body backdrop-blur-md">
            {activePhotoIndex + 1} de {CLINIC_PHOTOS.length}
          </div>

          {/* Botão Navegar Anterior */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A783] cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Botão Navegar Próxima */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#C2A783] cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Container Central da Imagem Ampliada */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[58vh] sm:h-[72vh] max-h-[680px] rounded-2xl overflow-hidden shadow-2xl bg-black/40">
              <Image
                src={CLINIC_PHOTOS[activePhotoIndex].src}
                alt={CLINIC_PHOTOS[activePhotoIndex].alt}
                fill
                priority
                quality={95}
                className="object-contain"
                sizes="(max-width: 1024px) 95vw, 1000px"
              />
            </div>

            {/* Legenda e Descrição no Rodapé do Modal */}
            <div className="mt-3 sm:mt-4 text-center max-w-xl px-4">
              <h3 className="text-white font-heading text-base sm:text-xl font-medium">
                {CLINIC_PHOTOS[activePhotoIndex].title}
              </h3>
              <p className="text-white/75 font-body text-xs sm:text-sm mt-1 leading-relaxed">
                {CLINIC_PHOTOS[activePhotoIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
