"use client";

import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { PROCEDURES, Procedure } from "@/data/procedures";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, ArrowUpRight, CheckCircle2, Info, X, ShieldCheck, HeartHandshake } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CATEGORY_TABS = [
  { id: "todos", label: "Todos os Tratamentos" },
  { id: "expressao", label: "Linhas & Expressão" },
  { id: "volume", label: "Volume & Contorno" },
  { id: "colageno", label: "Colágeno & Firmeza" },
  { id: "global", label: "Avaliação Global" },
];

export function ProceduresSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  const filteredProcedures = useMemo(() => {
    if (activeTab === "todos") return PROCEDURES;
    if (activeTab === "expressao") {
      return PROCEDURES.filter((p) =>
        ["toxina-botulinica", "rejuvenescimento-facial", "harmonizacao-facial"].includes(p.id)
      );
    }
    if (activeTab === "volume") {
      return PROCEDURES.filter((p) =>
        ["preenchimento-acido-hialuronico", "preenchimento-labial", "fios-sustentacao"].includes(p.id)
      );
    }
    if (activeTab === "colageno") {
      return PROCEDURES.filter((p) =>
        ["bioestimuladores-colageno", "fios-sustentacao", "rejuvenescimento-facial"].includes(p.id)
      );
    }
    if (activeTab === "global") {
      return PROCEDURES.filter((p) =>
        ["harmonizacao-facial", "outros-procedimentos-hof"].includes(p.id)
      );
    }
    return PROCEDURES;
  }, [activeTab]);

  const closeModal = useCallback(() => {
    setSelectedProcedure(null);
  }, []);

  // Bloquear scroll do body quando o modal de detalhes estiver aberto
  useEffect(() => {
    if (!selectedProcedure) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProcedure, closeModal]);

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
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
            }
          );
        }
      }
    },
    { scope: sectionRef, dependencies: [activeTab] }
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
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#E3DCD3] gap-6 mb-8 sm:mb-12 will-change-transform"
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

        {/* Abas Interativas de Filtro Rápido */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 sm:mb-10">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-body font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-[#3B302B] text-[#FFFCF8] shadow-sm scale-102"
                    : "bg-[#FFFCF8] text-[#5A514B] border border-[#E3DCD3] hover:border-[#C2A783] hover:text-[#3B302B]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Procedimentos */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 mb-12 will-change-transform"
        >
          {filteredProcedures.map((proc) => {
            const encodedMsg = encodeURIComponent(proc.whatsappMessage);
            const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMsg}`;

            return (
              <div
                key={proc.id}
                className="procedure-card rounded-2xl bg-[#FFFCF8] border border-[#E3DCD3] p-6 flex flex-col justify-between hover:shadow-[0_12px_32px_rgba(59,48,43,0.08)] hover:border-[#C2A783] transition-all duration-300 group hover-lift relative"
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

                  {/* Resumo Claro */}
                  <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed mb-4 line-clamp-3">
                    {proc.summary}
                  </p>
                </div>

                {/* Base do Card: Detalhes & Ação WhatsApp */}
                <div className="pt-4 border-t border-[#E3DCD3]/60 space-y-2.5 mt-2">
                  {/* Botão para abrir o Modal de Detalhes */}
                  <button
                    type="button"
                    onClick={() => setSelectedProcedure(proc)}
                    className="w-full py-1.5 px-3 rounded-xl bg-[#F7F4EF] hover:bg-[#EFE9E0] text-[0.6875rem] font-body font-semibold text-[#5A514B] hover:text-[#3B302B] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-[#C2A783]" />
                    <span>Ver detalhes do procedimento</span>
                  </button>

                  {/* Link Direto de WhatsApp */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-body font-semibold text-[#3B302B] group-hover:text-[#C2A783] transition-colors pt-1"
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

        {/* Nota Ética e de Responsabilidade Odontológica/Médica */}
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

      {/* Quick View Modal de Procedimento */}
      {selectedProcedure && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes sobre ${selectedProcedure.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1715]/80 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-lg w-full bg-[#FFFCF8] rounded-3xl border border-[#E3DCD3] shadow-2xl p-6 sm:p-8 space-y-5 text-left text-[#3B302B] animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Topo do Modal */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[0.6875rem] font-body font-semibold uppercase tracking-wider text-[#A28F80] bg-[#F7F4EF] px-2.5 py-1 rounded-full border border-[#E3DCD3] inline-block mb-2">
                  {selectedProcedure.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium text-[#3B302B]">
                  {selectedProcedure.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-[#F7F4EF] text-[#766D66] transition-colors cursor-pointer"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Descrição Aprofundada */}
            <div className="space-y-3 font-body text-sm text-[#5A514B] leading-relaxed">
              <p>{selectedProcedure.description}</p>
            </div>

            {/* Caixa de Cuidado e Protocolo */}
            <div className="p-4 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] space-y-2 text-xs">
              <div className="flex items-center gap-2 font-semibold text-[#3B302B]">
                <ShieldCheck className="w-4 h-4 text-[#879184]" />
                <span>Protocolo de Segurança Clínica</span>
              </div>
              <p className="text-[#766D66] leading-relaxed">
                Aplicação realizada com produtos certificados, análise estrita das proporções faciais e foco em um resultado harmônico, duradouro e sem exageros.
              </p>
            </div>

            {/* Ações do Modal */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <MagneticButton strength={0.2} className="w-full">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                    selectedProcedure.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill w-full bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-normal gap-2 shadow-sm hover-lift flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Tirar dúvidas sobre este procedimento</span>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
