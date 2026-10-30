"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear rolagem do body quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Dra. Aïda", href: "#profissional" },
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "A Clínica", href: "#clinica" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F4EF]/95 backdrop-blur-md shadow-[0_2px_18px_rgba(59,48,43,0.06)] border-b border-[#E3DCD3]/70 py-2 sm:py-2.5"
            : "bg-transparent backdrop-blur-none border-b border-transparent py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logotipo da Clínica */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] rounded-lg"
              aria-label={`Ir para o início — ${CLINIC_INFO.name}`}
            >
              <div className="relative h-12 sm:h-14 md:h-16 w-36 sm:w-44 md:w-52 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo_sem_fundo_usarnomodoclaro.png"
                  alt={`${CLINIC_INFO.name} — ${CLINIC_INFO.specialty}`}
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 220px"
                />
              </div>
            </Link>

            {/* Menu de Navegação Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-body font-semibold uppercase tracking-wider text-[#3B302B]">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="editorial-link py-1 hover:text-[#C2A783] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Ações da Direita */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* Link sutil para o Instagram no desktop */}
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex p-2 rounded-full text-[#766D66] hover:text-[#3B302B] hover:bg-[#EFE9E0]/70 transition-all"
                aria-label="Instagram da Dra. Aïda Schmidt"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Botão de Contato WhatsApp Desktop */}
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#3B302B] hover:bg-[#2B2320] text-[#FFFCF8] hover:scale-[1.02] border border-[#3B302B] gap-2 py-2 sm:py-2.5 px-4 sm:px-5 text-xs sm:text-xs font-semibold tracking-normal shadow-sm hover-lift"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Fale Conosco</span>
              </a>

              {/* Botão Hambúrguer Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full text-[#3B302B] hover:bg-[#EFE9E0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783]"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop e Drawer do Menu Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay escuro translúcido */}
          <div
            className="fixed inset-0 bg-[#211E1C]/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Gaveta do Menu Lateral */}
          <div className="fixed top-0 right-0 bottom-0 w-[82vw] max-w-sm bg-[#FFFCF8] text-[#3B302B] shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-fade-in-down border-l border-[#E3DCD3]">
            {/* Topo do Drawer: Logo e Fechar */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E3DCD3]">
              <div className="relative h-12 w-36">
                <Image
                  src="/logo_sem_fundo_usarnomodoclaro.png"
                  alt={CLINIC_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="150px"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-[#766D66] hover:text-[#3B302B] hover:bg-[#EFE9E0] transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links Centrais */}
            <nav className="py-6 flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-heading font-semibold text-[#3B302B] hover:text-[#C2A783] py-1 flex items-center justify-between transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A28F80]" />
                </Link>
              ))}
            </nav>

            {/* Rodapé do Menu Mobile: Contatos e Horários */}
            <div className="pt-6 border-t border-[#E3DCD3] space-y-4">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-pill w-full bg-[#3B302B] text-[#FFFCF8] hover:bg-[#2B2320] gap-2.5 py-3 text-sm font-semibold shadow-sm justify-center flex items-center"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Atendimento WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-semibold text-[#766D66] hover:text-[#3B302B] py-1 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{CLINIC_INFO.instagramHandle}</span>
              </a>

              <div className="text-[0.6875rem] text-[#766D66] text-center leading-relaxed">
                <p>{CLINIC_INFO.cro} • {CLINIC_INFO.city} - {CLINIC_INFO.state}</p>
                <p className="mt-0.5">{CLINIC_INFO.schedule.weekdays}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

