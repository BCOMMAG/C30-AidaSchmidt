"use client";

import { useRef } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, Award, HeartHandshake, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ProfessionalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const pillTopRef = useRef<HTMLDivElement>(null);
  const pillBottomRef = useRef<HTMLDivElement>(null);
  const signaturePathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      // 1. Entrada fluida da foto principal
      if (photoContainerRef.current) {
        gsap.fromTo(
          photoContainerRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photoContainerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Parallax suave nas pílulas flutuantes ao lado do retrato
      if (pillTopRef.current) {
        gsap.to(pillTopRef.current, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      if (pillBottomRef.current) {
        gsap.to(pillBottomRef.current, {
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // 3. Entrada do texto
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 4. Animação de traçado da assinatura/monograma SVG
      if (signaturePathRef.current) {
        const pathLength = signaturePathRef.current.getTotalLength();
        gsap.set(signaturePathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(signaturePathRef.current, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: signaturePathRef.current,
            start: "top 85%",
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="profissional"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#FFFCF8] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Imagem Oficial com Pílulas Flutuantes em Parallax (5 colunas) */}
          <div ref={photoContainerRef} className="lg:col-span-5 flex justify-center will-change-transform relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Pílula Flutuante 1 (Superior Esquerda) */}
              <div
                ref={pillTopRef}
                className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E3DCD3] shadow-[0_8px_20px_rgba(59,48,43,0.08)] pointer-events-none"
              >
                <div className="w-6 h-6 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#C2A783]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="font-body text-xs font-semibold text-[#3B302B]">
                  Harmonia Natural
                </span>
              </div>

              {/* Card Fotográfico da Dra. Aïda */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#E3DCD3] shadow-[0_16px_40px_rgba(59,48,43,0.1)] group bg-[#F7F4EF]">
                <Image
                  src="/Foto_perfil.jpg"
                  alt={`${CLINIC_INFO.doctorName} — ${CLINIC_INFO.specialty}`}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Card de Identificação no Rodapé da Imagem */}
                <div className="absolute bottom-6 left-6 right-6 text-[#F4EEE7] z-10 pointer-events-none">
                  <span className="text-[0.6875rem] uppercase tracking-widest text-[#C2A783] font-body font-semibold block mb-1">
                    Profissional Responsável
                  </span>
                  <p className="font-heading text-2xl font-normal leading-tight">
                    {CLINIC_INFO.doctorName}
                  </p>
                  <p className="text-xs text-[#E3DCD3] font-body mt-1">
                    {CLINIC_INFO.specialty} • {CLINIC_INFO.cro}
                  </p>
                </div>
              </div>

              {/* Pílula Flutuante 2 (Inferior Direita) */}
              <div
                ref={pillBottomRef}
                className="hidden sm:flex absolute -bottom-3 -right-4 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E3DCD3] shadow-[0_8px_20px_rgba(59,48,43,0.08)] pointer-events-none"
              >
                <div className="w-6 h-6 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#879184]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="font-body text-xs font-semibold text-[#3B302B]">
                  Ética &amp; Precisão
                </span>
              </div>
            </div>
          </div>

          {/* Coluna de Apresentação Textual com Assinatura SVG (7 colunas) */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6 will-change-transform">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E3DCD3] bg-[#F7F4EF] text-xs font-body font-semibold text-[#A28F80]">
                <Award className="w-3.5 h-3.5 text-[#C2A783]" />
                <span>{CLINIC_INFO.specialty} • {CLINIC_INFO.cro}</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.12]">
                Dra. Aïda Schmidt
              </h2>
              <p className="font-heading italic text-xl sm:text-2xl text-[#A28F80]">
                Harmonia orofacial com respeito à sua identidade e às suas proporções.
              </p>
            </div>

            <div className="space-y-4 font-body text-sm sm:text-base text-[#766D66] leading-relaxed">
              <p>
                A Harmonização Orofacial é um campo que exige profundo conhecimento anatômico, técnica precisa e sensibilidade estética apurada. Na Clínica Schmidt, a atuação da <strong className="text-[#3B302B] font-semibold">Dra. Aïda Schmidt</strong> é guiada pelo compromisso com resultados elegantes e naturais.
              </p>
              <p>
                Cada procedimento é planejado a partir de uma conversa franca e detalhada, identificando expectativas e recomendando unicamente abordagens que façam sentido para as proporções reais da sua face.
              </p>
            </div>

            {/* Destaques em Grid de Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-1.5">
                <div className="flex items-center gap-2 font-body text-xs font-semibold text-[#3B302B]">
                  <Sparkles className="w-4 h-4 text-[#C2A783]" />
                  <span>Planejamento Customizado</span>
                </div>
                <p className="text-xs text-[#766D66]">
                  Cada paciente recebe uma análise individualizada e detalhada de suas proporções faciais.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-1.5">
                <div className="flex items-center gap-2 font-body text-xs font-semibold text-[#3B302B]">
                  <HeartHandshake className="w-4 h-4 text-[#879184]" />
                  <span>Diálogo Transparente</span>
                </div>
                <p className="text-xs text-[#766D66]">
                  Esclarecimento de benefícios, cuidados e indicações com total responsabilidade ética.
                </p>
              </div>
            </div>

            {/* Assinatura SVG Editorial & Botão de Contato Direto */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E3DCD3]/70">
              <MagneticButton strength={0.25}>
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2.5 py-3 sm:py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-semibold tracking-normal shadow-sm hover-lift inline-flex items-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Conversar com a Dra. Aïda</span>
                </a>
              </MagneticButton>

              {/* Traçado Vetorial da Assinatura Editorial */}
              <div className="flex items-center gap-2 opacity-80" aria-label="Assinatura Dra. Aïda Schmidt">
                <svg
                  width="120"
                  height="36"
                  viewBox="0 0 120 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#A28F80]"
                >
                  <path
                    ref={signaturePathRef}
                    d="M10 26C22 14 30 8 42 16C50 22 55 28 68 18C78 10 88 12 108 20"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-heading italic text-xs text-[#A28F80]">Dra. Aïda Schmidt</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
