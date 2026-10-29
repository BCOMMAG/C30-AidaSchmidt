"use client";

import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { PROCEDURES } from "@/data/procedures";
import { MapPin, Phone, Sparkles, ArrowUp } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#211E1C] text-[#F4EEE7] border-t border-[#C2A783]/30 pt-16 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: 4 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F4EEE7]/10">
          
          {/* Coluna 1: Logotipo Escuro e Apresentação (4 colunas) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              onClick={(e) => {
                if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="block focus:outline-none group"
              aria-label="Voltar ao início da página"
            >
              <div className="relative h-14 sm:h-16 w-44 sm:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo_sem_fundo_usarnomodoescuro.png"
                  alt={`${CLINIC_INFO.name} — ${CLINIC_INFO.specialty}`}
                  fill
                  className="object-contain object-left"
                  sizes="220px"
                />
              </div>
            </Link>

            <p className="font-body text-xs sm:text-sm text-[#E3DCD3]/80 leading-relaxed max-w-sm">
              Harmonização Orofacial pautada por equilíbrio, delicadeza e atendimento individualizado. Realce a sua beleza natural com segurança e respeito à sua identidade.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C2A783]/30 bg-[#2B2623] text-xs font-body text-[#F4EEE7]">
              <Sparkles className="w-3.5 h-3.5 text-[#C2A783]" />
              <span>{CLINIC_INFO.doctorName} • {CLINIC_INFO.cro}</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Institucional (2 colunas) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-body text-xs uppercase tracking-widest text-[#C2A783] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-body text-[#E3DCD3]/80">
              <li>
                <Link href="#inicio" className="hover:text-[#C2A783] transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#clinica" className="hover:text-[#C2A783] transition-colors">A Clínica</Link>
              </li>
              <li>
                <Link href="#procedimentos" className="hover:text-[#C2A783] transition-colors">Procedimentos</Link>
              </li>
              <li>
                <Link href="#profissional" className="hover:text-[#C2A783] transition-colors">Dra. Aïda Schmidt</Link>
              </li>
              <li>
                <Link href="#diferenciais" className="hover:text-[#C2A783] transition-colors">Diferenciais</Link>
              </li>
              <li>
                <Link href="#duvidas" className="hover:text-[#C2A783] transition-colors">Dúvidas Comuns</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-[#C2A783] transition-colors">Contato</Link>
              </li>
              <li>
                <Link href="/links" className="text-[#C2A783] hover:underline transition-colors font-medium">Bio Instagram (/links)</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Procedimentos em Destaque (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-body text-xs uppercase tracking-widest text-[#C2A783] font-semibold">
              Procedimentos Confirmados
            </h4>
            <ul className="space-y-2 text-xs font-body text-[#E3DCD3]/80">
              {PROCEDURES.slice(0, 6).map((proc) => (
                <li key={proc.id}>
                  <Link href="#procedimentos" className="hover:text-[#C2A783] transition-colors">
                    {proc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato e Redes (3 colunas) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-body text-xs uppercase tracking-widest text-[#C2A783] font-semibold">
              Atendimento e Redes
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#E3DCD3]/80 font-body">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C2A783] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>{CLINIC_INFO.whatsappFormatted}</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C2A783] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C2A783]" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-[#E3DCD3]/70">
                <MapPin className="w-4 h-4 text-[#C2A783] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#C2A783] hover:text-[#F4EEE7] transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior: Direitos e Aviso Ético */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E3DCD3]/60 font-body text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} {CLINIC_INFO.fullName}. Todos os direitos reservados.
          </p>

          <p className="text-[0.6875rem] max-w-xl text-[#E3DCD3]/50 leading-relaxed">
            As informações disponibilizadas neste site possuem caráter puramente educativo e institucional. Nenhum conteúdo substitui a avaliação clínica individualizada realizada pela profissional habilitada ({CLINIC_INFO.cro}).
          </p>
        </div>

      </div>
    </footer>
  );
}
