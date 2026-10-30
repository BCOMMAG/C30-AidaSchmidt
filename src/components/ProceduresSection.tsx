"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { PROCEDURES, Procedure } from "@/data/procedures";
import { CLINIC_INFO } from "@/lib/data";
import { Sparkles, ArrowUpRight, CheckCircle2, Info, X, ShieldCheck, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ProceduresSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);

  // 1. Rotação em looping lateral contínuo (autoplay a cada 3.5 segundos)
  useEffect(() => {
    if (isPausedByUser) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROCEDURES.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [isPausedByUser]);

  // 2. Rolagem suave do carrossel para o procedimento ativo
  useEffect(() => {
    const container = carouselContainerRef.current;
    if (!container) return;

    const card = container.children[activeIndex] as HTMLElement | undefined;
    if (card) {
      const scrollLeft =
        card.offsetLeft - (container.clientWidth / 2 - card.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }

    // Também rola suavemente o menu superior para manter o item selecionado visível
    const menuContainer = menuContainerRef.current;
    if (menuContainer) {
      const menuItem = menuContainer.children[activeIndex] as HTMLElement | undefined;
      if (menuItem) {
        const menuScrollLeft =
          menuItem.offsetLeft - (menuContainer.clientWidth / 2 - menuItem.clientWidth / 2);
        menuContainer.scrollTo({
          left: Math.max(0, menuScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  // 3. Regra estrita de pausa:
  // Se o usuário interagiu com o menu, a pausa só é desfeita caso ele role e a seção SAIA COMPLETAMENTE da viewport.
  // Enquanto a seção estiver visível na tela, mesmo com scroll, o looping NÃO volta a acontecer!
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Se a seção saiu 100% da viewport, desarma a pausa do usuário para a próxima visita
        if (!entry.isIntersecting) {
          setIsPausedByUser(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSelectProcedure = (index: number) => {
    setActiveIndex(index);
    setIsPausedByUser(true); // Pausa permanente enquanto estiver na seção
  };

  const closeModal = useCallback(() => {
    setSelectedProcedure(null);
  }, []);

  // Bloquear scroll do body quando o modal estiver aberto
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
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="procedimentos"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F7F4EF] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#E3DCD3] gap-4 mb-6 sm:mb-8 will-change-transform"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="bullet-indicator" />
              <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
                Áreas de Atuação &amp; Cuidados
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15]">
              Procedimentos em Harmonização Orofacial
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-[#766D66] max-w-md leading-relaxed">
            Selecione no menu abaixo ou acompanhe a apresentação contínua dos tratamentos realizados pela Dra. Aïda Schmidt.
          </p>
        </div>

        {/* Menu Superior Interativo de Procedimentos */}
        <div className="relative mb-6">
          <div
            ref={menuContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth"
          >
            {PROCEDURES.map((proc, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={proc.id}
                  type="button"
                  onClick={() => handleSelectProcedure(idx)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-body font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                    isSelected
                      ? "bg-[#3B302B] text-[#FFFCF8] shadow-sm scale-102"
                      : "bg-[#FFFCF8] text-[#5A514B] border border-[#E3DCD3] hover:border-[#C2A783] hover:text-[#3B302B]"
                  }`}
                >
                  <span>{proc.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Controles e Indicador de Looping */}
        <div className="flex items-center justify-between mb-3 text-xs text-[#766D66] px-1">
          <div className="flex items-center gap-2">
            <span className="font-body text-[0.6875rem] uppercase tracking-wider text-[#A28F80] font-semibold">
              Tratamento {activeIndex + 1} de {PROCEDURES.length}
            </span>
            {isPausedByUser ? (
              <span className="inline-flex items-center gap-1 text-[0.6875rem] text-[#A28F80] bg-[#FFFCF8] px-2 py-0.5 rounded-full border border-[#E3DCD3]">
                <Pause className="w-2.5 h-2.5 text-[#C2A783]" />
                Pausado para leitura
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[0.6875rem] text-[#25D366] bg-[#FFFCF8] px-2 py-0.5 rounded-full border border-[#E3DCD3]">
                <Play className="w-2.5 h-2.5" />
                Looping contínuo
              </span>
            )}
          </div>

          {/* Botões de Navegação Manual */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setIsPausedByUser(true);
                setActiveIndex((prev) => (prev - 1 + PROCEDURES.length) % PROCEDURES.length);
              }}
              className="p-1.5 sm:p-2 rounded-full bg-[#FFFCF8] border border-[#E3DCD3] text-[#3B302B] hover:border-[#C2A783] transition-colors cursor-pointer"
              aria-label="Procedimento anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setIsPausedByUser(true);
                setActiveIndex((prev) => (prev + 1) % PROCEDURES.length);
              }}
              className="p-1.5 sm:p-2 rounded-full bg-[#FFFCF8] border border-[#E3DCD3] text-[#3B302B] hover:border-[#C2A783] transition-colors cursor-pointer"
              aria-label="Próximo procedimento"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carrossel Horizontal em Looping Lateral */}
        <div
          ref={carouselContainerRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 mb-8"
        >
          {PROCEDURES.map((proc, idx) => {
            const isSelected = activeIndex === idx;
            const encodedMsg = encodeURIComponent(proc.whatsappMessage);
            const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMsg}`;

            return (
              <div
                key={proc.id}
                onClick={() => handleSelectProcedure(idx)}
                className={`w-[290px] sm:w-[340px] shrink-0 rounded-2xl bg-[#FFFCF8] border transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? "border-[#C2A783] shadow-[0_12px_32px_rgba(59,48,43,0.1)] ring-1 ring-[#C2A783]/30 scale-[1.01]"
                    : "border-[#E3DCD3] opacity-80 hover:opacity-100 hover:border-[#C2A783]/70 shadow-2xs"
                }`}
              >
                <div>
                  {/* Topo do Card: Badge da Categoria */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[0.6875rem] font-body font-semibold uppercase tracking-wider text-[#A28F80] bg-[#F7F4EF] px-2.5 py-0.5 rounded-full border border-[#E3DCD3]">
                      {proc.category}
                    </span>
                    <Sparkles
                      className={`w-3.5 h-3.5 transition-all ${
                        isSelected
                          ? "text-[#C2A783] scale-110"
                          : "text-[#A28F80] opacity-50 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  {/* Nome do Procedimento */}
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-[#3B302B] mb-2 leading-snug group-hover:text-[#A28F80] transition-colors">
                    {proc.name}
                  </h3>

                  {/* Resumo Claro */}
                  <p className="font-body text-xs sm:text-sm text-[#766D66] leading-relaxed line-clamp-3 mb-3">
                    {proc.summary}
                  </p>
                </div>

                {/* Base do Card: Detalhes & Ação WhatsApp */}
                <div className="pt-3 border-t border-[#E3DCD3]/60 space-y-2 mt-auto">
                  {/* Botão para abrir o Quick View Modal */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProcedure(proc);
                    }}
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
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-between text-xs font-body font-semibold text-[#3B302B] group-hover:text-[#C2A783] transition-colors pt-0.5"
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

        {/* Nota Ética Discreta */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#EFE9E0]/80 border border-[#E3DCD3] max-w-2xl mx-auto flex items-start gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#879184] mt-0.5 shrink-0" />
          <p className="font-body text-xs text-[#766D66] leading-relaxed">
            <strong className="text-[#3B302B] font-semibold">Avaliação Presencial:</strong> A indicação e o planejamento de cada tratamento são definidos em consulta presencial com a Dra. Aïda Schmidt, respeitando a sua individualidade anatômica.
          </p>
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
            <div className="pt-2">
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
