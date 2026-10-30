import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import {
  Sparkles,
  MapPin,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Links Oficiais | Clínica Schmidt — Dra. Aïda Schmidt",
  description:
    "Canais oficiais de atendimento, agendamento de avaliação e informações sobre procedimentos de Harmonização Orofacial em Campo Largo - PR.",
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Agendamento & Dúvidas no WhatsApp",
      subtitle: "Atendimento direto com nossa equipe",
      href: CLINIC_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
      external: true,
    },
    {
      id: "website",
      title: "Website Oficial da Clínica",
      subtitle: "Conheça a clínica e todos os tratamentos",
      href: "/",
      icon: Globe,
      highlight: false,
      external: false,
    },
    {
      id: "procedimentos",
      title: "Procedimentos em Harmonização Facial",
      subtitle: "Botox, preenchimentos e bioestimuladores",
      href: "/#procedimentos",
      icon: Sparkles,
      highlight: false,
      external: false,
    },
    {
      id: "localizacao",
      title: "Como Chegar à Clínica",
      subtitle: "R. Sete de Setembro - Centro, Campo Largo",
      href: CLINIC_INFO.mapsUrl,
      icon: MapPin,
      highlight: false,
      external: true,
    },
    {
      id: "instagram",
      title: "Instagram Oficial",
      subtitle: CLINIC_INFO.instagramHandle,
      href: CLINIC_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
      external: true,
    },
  ];

  const specialtyPills = [
    "Harmonização Facial",
    "Toxina Botulínica",
    "Bioestimuladores",
    "Preenchimento Labial",
  ];

  return (
    <main className="h-[100dvh] max-h-[100dvh] w-screen max-w-full overflow-hidden bg-[#F7F4EF] text-[#3B302B] select-none">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 Editorial) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Painel Noturno Sofisticado com Apresentação da Dra. Aïda */}
        <div className="relative bg-[#211E1C] text-[#F4EEE7] flex flex-col justify-between p-10 xl:p-14 h-full border-r border-[#C2A783]/20">
          {/* Topo Esquerdo */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C2A783]/30 bg-[#2B2623] text-xs font-body text-[#F4EEE7]">
              <Sparkles className="w-3.5 h-3.5 text-[#C2A783]" />
              <span>{CLINIC_INFO.specialty} • {CLINIC_INFO.cro}</span>
            </div>
            <span className="text-xs font-body uppercase tracking-wider text-[#C2A783]">
              Campo Largo / PR
            </span>
          </div>

          {/* Centro Esquerdo: Logo e Foto da Profissional */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center space-y-6">
            <Link
              href="/"
              className="relative block w-full max-w-[280px] xl:max-w-[320px] mx-auto cursor-pointer group focus:outline-none"
              aria-label={`Ir para a página inicial da ${CLINIC_INFO.name}`}
            >
              <div className="relative w-full h-16 xl:h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={CLINIC_INFO.name}
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="320px"
                />
              </div>
            </Link>

            {/* Foto de Perfil com acabamento luxuoso */}
            <div className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden border-2 border-[#C2A783] ring-4 ring-[#C2A783]/20 shadow-xl bg-[#2B2623]">
              <Image
                src="/Foto_perfil.jpg"
                alt={CLINIC_INFO.doctorName}
                fill
                priority
                className="object-cover object-top"
                sizes="128px"
              />
            </div>

            <div className="space-y-2 max-w-sm">
              <h2 className="font-heading text-2xl xl:text-3xl font-normal text-[#F4EEE7]">
                {CLINIC_INFO.doctorName}
              </h2>
              <p className="font-body text-xs xl:text-sm text-[#E3DCD3]/80 leading-relaxed">
                Cuidado individualizado em Harmonização Orofacial, realçando a beleza natural com elegância e equilíbrio.
              </p>
            </div>

            {/* Pills de Especialidades no Desktop */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs pt-1">
              {specialtyPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs font-body bg-[#2B2623] text-[#E3DCD3] border border-[#C2A783]/30"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Rodapé Esquerdo */}
          <div className="relative z-10 text-[0.6875rem] font-body text-[#E3DCD3]/60 text-center border-t border-[#F4EEE7]/10 pt-4">
            {CLINIC_INFO.addressShort} • © {new Date().getFullYear()} {CLINIC_INFO.fullName}
          </div>
        </div>

        {/* LADO DIREITO: Lista de Links Centrada e Equilibrada */}
        <div className="relative bg-[#FFFCF8] flex flex-col justify-between p-10 xl:p-14 h-full">
          <div className="flex items-center justify-between text-xs font-body text-[#766D66]">
            <span className="uppercase tracking-widest text-[#A28F80] font-semibold">
              Canais Oficiais
            </span>
            <span>Atendimento Personalizado</span>
          </div>

          <div className="my-auto w-full max-w-md mx-auto space-y-3.5">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              const isHighlight = item.highlight;
              const isInternal = item.href.startsWith("/");

              const content = (
                <div
                  className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 text-left hover-lift ${
                    isHighlight
                      ? "bg-[#3B302B] text-[#FFFCF8] border-[#3B302B] shadow-[0_8px_20px_rgba(59,48,43,0.14)]"
                      : "bg-[#FFFCF8] text-[#3B302B] border-[#E3DCD3] hover:border-[#C2A783] shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? "bg-[#25D366]/20 text-[#25D366]"
                          : "bg-[#F7F4EF] text-[#C2A783]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-body text-sm font-semibold truncate ${
                          isHighlight ? "text-[#FFFCF8]" : "text-[#3B302B]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`font-body text-xs truncate ${
                          isHighlight ? "text-[#E3DCD3]/80" : "text-[#766D66]"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isHighlight ? "text-[#C2A783]" : "text-[#A28F80]"
                    }`}
                  />
                </div>
              );

              return item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] rounded-2xl"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] rounded-2xl"
                >
                  {content}
                </Link>
              );
            })}
          </div>

          <div className="text-center text-xs font-body text-[#766D66] pt-4 border-t border-[#E3DCD3]">
            {CLINIC_INFO.schedule.weekdays} • {CLINIC_INFO.cro}
          </div>
        </div>

      </div>

      {/* ===================== VERSÃO MOBILE (100% Fit Sem Scroll — Logo no Fundo Preenchendo Todo o Espaço Grifado) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between h-[100dvh] max-h-[100dvh] w-full px-4 pt-3 pb-2 sm:pt-4 sm:pb-3 overflow-hidden bg-gradient-to-b from-[#FFFCF8] via-[#F7F4EF] to-[#EFE9E0]">
        
        {/* Marca d'água da Logo no Fundo Preenchendo Todo o Espaço Superior Grifado */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] max-h-[310px] flex items-center justify-center pointer-events-none z-0 overflow-hidden px-2">
          <div className="relative w-full h-full opacity-[0.24] select-none">
            <Image
              src="/logo_sem_fundo_usarnomodoclaro.png"
              alt=""
              fill
              priority
              className="object-contain object-center scale-110 sm:scale-105"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </div>
        </div>

        {/* Topo Mobile: Perfil Reajustado e Descido */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-10 sm:pt-12 shrink-0">
          {/* Foto de Perfil da Dra. Aïda — Centralizada, Bonita e com Presença */}
          <Link
            href="/"
            className="block cursor-pointer focus:outline-none active:scale-98 transition-transform mb-2"
            aria-label={`Ir para a página inicial da ${CLINIC_INFO.name}`}
          >
            <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-full overflow-hidden border-2 border-[#C2A783] ring-4 ring-[#C2A783]/25 shadow-lg bg-[#FFFCF8] shrink-0">
              <Image
                src="/Foto_perfil.jpg"
                alt={CLINIC_INFO.doctorName}
                fill
                priority
                className="object-cover object-top"
                sizes="110px"
              />
            </div>
          </Link>

          {/* Nome e Especialidade Centralizados */}
          <div className="space-y-0.5 mb-2">
            <h1 className="font-heading text-xl sm:text-2xl font-normal text-[#3B302B] leading-tight">
              {CLINIC_INFO.doctorName}
            </h1>
            <p className="text-[0.6875rem] font-body text-[#A28F80] font-semibold uppercase tracking-wider leading-tight">
              {CLINIC_INFO.specialty} • {CLINIC_INFO.cro}
            </p>
          </div>

          {/* 3 Pills de Especialidades em Linha Equilibrada */}
          <div className="flex items-center justify-center gap-1.5 max-w-xs mx-auto">
            {["Harmonização Facial", "Botox", "Preenchimentos"].map((pill, i) => (
              <span
                key={i}
                className="text-[0.625rem] px-2.5 py-0.5 rounded-full bg-[#FFFCF8]/95 backdrop-blur-xs text-[#3B302B] border border-[#E3DCD3] font-body font-medium shadow-2xs whitespace-nowrap"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* 5 Botões de Links Principais — Distribuídos com Conforto Tátil, Preenchendo o Espaço */}
        <div className="relative z-10 w-full flex flex-col gap-2.5 sm:gap-3 max-w-sm mx-auto my-auto py-1">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isHighlight = item.highlight;
            const isInternal = item.href.startsWith("/");

            const buttonClasses = `w-full flex items-center justify-between px-4 py-3 sm:py-3.5 rounded-2xl border transition-all duration-200 active:scale-[0.98] ${
              isHighlight
                ? "bg-[#3B302B] text-[#FFFCF8] border-[#3B302B] shadow-[0_6px_18px_rgba(59,48,43,0.16)]"
                : "bg-[#FFFCF8]/95 backdrop-blur-xs border-[#E3DCD3] text-[#3B302B] shadow-2xs hover:border-[#C2A783]"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isHighlight
                        ? "bg-[#25D366]/20 text-[#25D366]"
                        : "bg-[#F7F4EF] text-[#C2A783]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p
                      className={`font-body text-xs sm:text-sm font-semibold leading-tight truncate ${
                        isHighlight ? "text-[#FFFCF8]" : "text-[#3B302B]"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`font-body text-[0.6875rem] leading-tight truncate mt-0.5 ${
                        isHighlight ? "text-[#E3DCD3]/85" : "text-[#766D66]"
                      }`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isHighlight ? "text-[#C2A783]" : "text-[#A28F80]"
                  }`}
                />
              </>
            );

            return isInternal ? (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {content}
              </a>
            );
          })}
        </div>

        {/* Rodapé Mobile em 1 Linha Enxuta */}
        <div className="relative z-10 text-center text-[0.625rem] font-body text-[#766D66] pt-2 pb-1 border-t border-[#E3DCD3]/70 shrink-0">
          <p>{CLINIC_INFO.name} • {CLINIC_INFO.addressShort} • {CLINIC_INFO.cro}</p>
        </div>

      </div>
    </main>
  );
}
