"use client";

import { useState, useRef } from "react";
import { CLINIC_INFO } from "@/lib/data";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "avaliacao",
    question: "Como funciona a avaliação inicial na Clínica Schmidt?",
    answer:
      "A avaliação é o momento mais importante do tratamento. Nela, a Dra. Aïda conversa sobre seus desejos e queixas estéticas, examina detalhadamente a anatomia da face, analisa fotos clínicas e explica quais abordagens são indicadas para o seu perfil, alinhando expectativas de forma realista e ética.",
  },
  {
    id: "procedimentos",
    question: "Quais procedimentos são realizados na clínica?",
    answer:
      "Realizamos procedimentos de Harmonização Orofacial com foco em naturalidade, incluindo aplicação de toxina botulínica (Botox), preenchimento com ácido hialurônico (como lábios, malar e contorno), bioestimuladores de colágeno, fios de sustentação e tratamentos integrados de rejuvenescimento facial.",
  },
  {
    id: "recuperacao",
    question: "Os procedimentos exigem afastamento das atividades cotidianas?",
    answer:
      "A maioria dos procedimentos em Harmonização Orofacial é minimamente invasiva e permite o retorno às atividades de rotina quase imediato, exigindo apenas cuidados básicos nas primeiras 24 a 48 horas (como evitar calor excessivo, esforço físico intenso e massagens na região). Todas as orientações específicas são repassadas individualmente na consulta.",
  },
  {
    id: "valores",
    question: "É possível saber valores ou orçamentos previamente?",
    answer:
      "De acordo com as diretrizes éticas e regulatórias do Conselho de Odontologia (CFO/CRO), cada paciente requer diagnóstico presencial para definição exata de quantidades, áreas de aplicação e técnicas necessárias. Por isso, orçamentos definitivos e planos de tratamento são apresentados exclusivamente após a consulta de avaliação.",
  },
  {
    id: "horarios",
    question: "Como agendar um horário de atendimento?",
    answer:
      "O atendimento é realizado prioritariamente com hora marcada para garantir conforto, privacidade e pontualidade. Você pode solicitar um horário diretamente pelo nosso WhatsApp oficial (41 99756-0677) ou clicando nos botões de contato do site.",
  },
  {
    id: "localizacao",
    question: "Onde fica a Clínica Schmidt?",
    answer:
      "Estamos localizados na R. Sete de Setembro, no Centro de Campo Largo - PR (CEP 83601-170), em ponto de fácil acesso na cidade. Ao agendar sua consulta, nossa equipe envia todas as referências para você chegar com tranquilidade.",
  },
];

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    [FAQS[0].id]: true,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".faq-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: listRef.current,
                start: "top 85%",
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
      id="duvidas"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#FFFCF8] editorial-border-b relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 will-change-transform">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="bullet-indicator" />
            <span className="text-xs uppercase tracking-widest text-[#A28F80] font-body font-semibold">
              Esclarecimentos Frequentes
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#3B302B] font-normal leading-[1.15]">
            Dúvidas Comuns
          </h2>
          <p className="font-body text-sm sm:text-base text-[#766D66] mt-3">
            Transparência e clareza para que você se sinta seguro e confortável em cada etapa do seu atendimento.
          </p>
        </div>

        {/* Lista de Acordeão */}
        <div ref={listRef} className="space-y-3.5 mb-12 will-change-transform">
          {FAQS.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="faq-item rounded-2xl border border-[#E3DCD3] bg-[#F7F4EF]/70 overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783]"
                >
                  <span className="font-heading text-base sm:text-lg font-medium text-[#3B302B]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E3DCD3] bg-[#FFFCF8] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#C2A783]" : "text-[#766D66]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm font-body text-[#766D66] leading-relaxed border-t border-[#E3DCD3]/50 animate-fade-in-down">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card de Apoio: Outra Dúvida */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F4EF] border border-[#E3DCD3] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-heading text-xl font-medium text-[#3B302B]">
              Ficou com alguma dúvida específica?
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#766D66]">
              Nossa equipe está à disposição no WhatsApp para esclarecer orientações e agendamentos.
            </p>
          </div>
          <MagneticButton strength={0.25} className="shrink-0">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-sm hover-lift shrink-0 flex items-center cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Falar no WhatsApp</span>
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

