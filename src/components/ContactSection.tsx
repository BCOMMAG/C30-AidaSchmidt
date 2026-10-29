"use client";

import { useRef } from "react";
import { CLINIC_INFO } from "@/lib/data";
import { MapPin, Clock, MessageSquare, ArrowUpRight, Phone } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
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
      id="contato"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#F7F4EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bloco de Chamada Final (CTA) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="bullet-indicator" />
            <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
              Atendimento e Localização
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15] mb-4">
            Vamos conversar sobre seus objetivos estéticos?
          </h2>
          <p className="font-body text-sm sm:text-base text-[#766D66] max-w-xl mx-auto leading-relaxed">
            Agende uma avaliação individualizada e descubra como a Harmonização Orofacial pode realçar sua beleza com equilíbrio e naturalidade.
          </p>
        </div>

        {/* Card Principal de Contato */}
        <div
          ref={cardRef}
          className="rounded-3xl bg-[#FFFCF8] border border-[#E3DCD3] shadow-[0_16px_45px_rgba(59,48,43,0.06)] p-8 sm:p-12 lg:p-16 will-change-transform"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Coluna 1: Informações de Contato e Horários (7 colunas) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#A28F80] font-body font-semibold block mb-2">
                  Canais Oficiais
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#3B302B]">
                  Clínica Schmidt — Dra. Aïda Schmidt
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#766D66] mt-1">
                  {CLINIC_INFO.specialty} • {CLINIC_INFO.cro}
                </p>
              </div>

              {/* Grid de Itens de Contato */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A28F80] font-body uppercase">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Direto</span>
                  </div>
                  <p className="font-heading text-lg font-medium text-[#3B302B]">
                    {CLINIC_INFO.phone}
                  </p>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#3B302B] hover:text-[#C2A783] transition-colors pt-1"
                  >
                    <span>Iniciar conversa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Instagram */}
                <div className="p-5 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A28F80] font-body uppercase">
                    <InstagramIcon className="w-4 h-4 text-[#C2A783]" />
                    <span>Instagram Oficial</span>
                  </div>
                  <p className="font-heading text-lg font-medium text-[#3B302B]">
                    {CLINIC_INFO.instagramHandle}
                  </p>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#3B302B] hover:text-[#C2A783] transition-colors pt-1"
                  >
                    <span>Acompanhar perfil</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Endereço e Horários */}
              <div className="space-y-4 pt-2 border-t border-[#E3DCD3]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C2A783] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-[#3B302B]">
                      Localização
                    </h4>
                    <p className="font-body text-sm text-[#766D66] mt-0.5">
                      {CLINIC_INFO.address}
                    </p>
                    <p className="text-[0.6875rem] text-[#958B83] mt-0.5">
                      Ponto central e de fácil estacionamento em Campo Largo - PR.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#879184] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-[#3B302B]">
                      Horários de Atendimento (Sujeitos a confirmação)
                    </h4>
                    <p className="font-body text-sm text-[#766D66] mt-0.5">
                      {CLINIC_INFO.schedule.weekdays} • {CLINIC_INFO.schedule.saturday}
                    </p>
                    <p className="text-[0.6875rem] text-[#958B83] mt-0.5">
                      Atendimento com hora marcada para assegurar pontualidade e tranquilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna 2: Card de Ação Rápida e Mapa (5 colunas) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-6">
              <div className="space-y-3">
                <span className="text-[0.6875rem] uppercase tracking-widest text-[#C2A783] font-body font-semibold">
                  Avaliação Personalizada
                </span>
                <h4 className="font-heading text-2xl font-normal text-[#3B302B] leading-snug">
                  Pronto para dar o primeiro passo?
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed">
                  Envie uma mensagem pelo WhatsApp. Nossa equipe responderá com atenção para entender sua disponibilidade e agendar seu atendimento.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2.5 py-3.5 text-sm font-semibold tracking-normal shadow-md hover-lift flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Entre em Contato via WhatsApp</span>
                </a>

                <a
                  href={CLINIC_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[#FFFCF8] hover:bg-[#FFFCF8] text-[#3B302B] border border-[#E3DCD3] hover:border-[#C2A783] gap-2 py-3 text-xs sm:text-sm font-semibold tracking-normal hover-lift flex items-center justify-center cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#C2A783]" />
                  <span>Como Chegar (Google Maps)</span>
                </a>
              </div>

              <div className="pt-4 border-t border-[#E3DCD3] text-[0.6875rem] text-[#958B83] text-center font-body">
                <span>Dúvidas ou agendamento: (41) 99756-0677</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

