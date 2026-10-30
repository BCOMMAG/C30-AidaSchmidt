"use client";

import { useRef } from "react";
import { CLINIC_INFO } from "@/lib/data";
import { MapPin, Clock, ArrowUpRight, Navigation } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
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

        {/* Card Principal de Contato com Mapa do Google Maps e Traçar Rota */}
        <div
          ref={cardRef}
          className="rounded-3xl bg-[#FFFCF8] border border-[#E3DCD3] shadow-[0_16px_45px_rgba(59,48,43,0.06)] p-6 sm:p-10 lg:p-12 will-change-transform"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Coluna 1: Informações de Contato e Horários (5 colunas) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A28F80] font-body font-semibold block mb-1.5">
                    Canais Oficiais
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#3B302B]">
                    Clínica Schmidt
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-[#766D66] mt-0.5">
                    {CLINIC_INFO.doctorName} • {CLINIC_INFO.cro}
                  </p>
                </div>

                {/* Card Instagram Oficial */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-1.5 hover-lift transition-all">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A28F80] font-body uppercase">
                    <InstagramIcon className="w-4 h-4 text-[#C2A783]" />
                    <span>Instagram Oficial</span>
                  </div>
                  <p className="font-heading text-base sm:text-lg font-medium text-[#3B302B]">
                    {CLINIC_INFO.instagramHandle}
                  </p>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#3B302B] hover:text-[#C2A783] transition-colors pt-0.5"
                  >
                    <span>Acompanhar perfil oficial</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Endereço e Localização */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C2A783] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-[#3B302B]">
                        Endereço da Clínica
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#5A514B] font-medium mt-0.5 leading-snug">
                        {CLINIC_INFO.address}
                      </p>
                      <p className="text-[0.6875rem] text-[#958B83] mt-1">
                        Ponto central e de fácil acesso em Campo Largo - PR.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horários de Atendimento */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-1.5">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#879184] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-[#3B302B]">
                        Horários de Atendimento
                      </h4>
                      <p className="font-body text-xs sm:text-sm text-[#5A514B] font-medium mt-0.5 leading-snug">
                        {CLINIC_INFO.schedule.weekdays} • {CLINIC_INFO.schedule.saturday}
                      </p>
                      <p className="text-[0.6875rem] text-[#958B83] mt-1">
                        Atendimento com hora marcada para assegurar pontualidade e tranquilidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão Oficial Único de WhatsApp na Seção de Contato (Sem Duplicatas) */}
              <div className="pt-2">
                <MagneticButton className="w-full" strength={0.2}>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill w-full bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2.5 py-3.5 sm:py-4 px-6 text-sm font-semibold tracking-normal shadow-[0_8px_20px_rgba(59,48,43,0.18)] hover-lift flex items-center justify-center cursor-pointer transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    <span>Conversar no WhatsApp: {CLINIC_INFO.phone}</span>
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Coluna 2: Google Maps Interativo com Acesso Rápido a Rotas (7 colunas) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[360px] lg:min-h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E3DCD3] shadow-sm bg-[#F7F4EF]">
                {/* Iframe Interativo do Google Maps */}
                <iframe
                  title="Localização da Clínica Schmidt em Campo Largo - PR"
                  src={CLINIC_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full contrast-[1.02] brightness-[0.98]"
                />

                {/* Badge Flutuante no Topo do Mapa */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3 rounded-2xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E3DCD3]/80 text-xs shadow-md pointer-events-none max-w-[85%] sm:max-w-none">
                  <span className="font-heading font-medium text-[#3B302B] text-sm sm:text-base block">
                    {CLINIC_INFO.name}
                  </span>
                  <span className="font-body text-[#766D66] text-[0.6875rem] block truncate sm:whitespace-normal">
                    {CLINIC_INFO.address}
                  </span>
                </div>

                {/* Barra Flutuante de Rota Rápida na Base do Mapa */}
                <div className="absolute bottom-3 inset-x-3 sm:left-auto sm:right-4 p-2 sm:p-2.5 rounded-2xl bg-[#FFFCF8]/95 backdrop-blur-md border border-[#E3DCD3] flex items-center justify-between gap-3 shadow-lg">
                  <div className="hidden sm:flex items-center gap-1.5 pl-2 text-xs font-body font-semibold text-[#3B302B]">
                    <MapPin className="w-3.5 h-3.5 text-[#C2A783]" />
                    <span>Como Chegar</span>
                  </div>
                  <MagneticButton strength={0.25} className="w-full sm:w-auto">
                    <a
                      href={CLINIC_INFO.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill w-full sm:w-auto bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] py-2.5 px-4 text-xs font-body font-semibold gap-2 shadow-sm hover-lift transition-all cursor-pointer flex items-center justify-center"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C2A783]" />
                      <span>Traçar Rota no Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
