"use client";

import { useRef } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, MessageSquare, Award, HeartHandshake } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ProfessionalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (photoRef.current) {
        gsap.fromTo(
          photoRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photoRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

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
          
          {/* Coluna da Imagem Oficial (5 colunas) */}
          <div ref={photoRef} className="lg:col-span-5 flex justify-center will-change-transform">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-[#E3DCD3] shadow-[0_16px_40px_rgba(59,48,43,0.1)] group bg-[#F7F4EF]">
              <Image
                src="/Foto_perfil.jpg"
                alt={`${CLINIC_INFO.doctorName} — ${CLINIC_INFO.specialty}`}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211E1C]/85 via-transparent to-transparent pointer-events-none" />
              
              {/* Card Flutuante de Identificação no Rodapé da Imagem */}
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
          </div>

          {/* Coluna de Apresentação Textual (7 colunas) */}
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
                A <strong className="text-[#3B302B] font-semibold">{CLINIC_INFO.doctorName}</strong> dedica sua atuação ao cuidado estético e funcional da face, unindo conhecimento em anatomia orofacial a uma sensibilidade apurada para valorizar os traços naturais de cada paciente.
              </p>
              <p>
                Acreditamos que o melhor resultado é aquele que desperta bem-estar e autoconfiança de forma discreta — sem exageros, sem rigidez e sem fórmulas prontas. Por isso, cada plano de atendimento é construído de forma colaborativa, ouvindo atentamente suas expectativas e priorizando sempre a segurança.
              </p>
            </div>

            {/* Destaques de Atendimento */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-1.5">
                <div className="flex items-center gap-2 font-body text-xs font-semibold text-[#3B302B]">
                  <Sparkles className="w-4 h-4 text-[#C2A783]" />
                  <span>Planejamento Personalizado</span>
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

            {/* Botão de Contato Direto */}
            <div className="pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2.5 py-3 sm:py-3.5 px-6 sm:px-8 text-xs sm:text-sm font-semibold tracking-normal shadow-sm hover-lift inline-flex items-center cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Conversar com a Dra. Aïda</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

