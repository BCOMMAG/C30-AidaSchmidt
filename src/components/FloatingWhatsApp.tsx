"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Exibe balão inicial após 3.5 segundos para engajamento suave
    const initialTimer = setTimeout(() => {
      setShowBubble(true);
      const hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 9500);
      return () => clearTimeout(hideTimer);
    }, 3500);

    // Ciclo suave a cada 38 segundos
    const interval = setInterval(() => {
      setShowBubble(true);
      const hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 8500);
      return () => clearTimeout(hideTimer);
    }, 38000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <aside
      aria-label="Atendimento humanizado via WhatsApp"
      className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 group flex items-end sm:items-center"
    >
      {/* Balão de Mensagem Humanizado com Foto da Dra. Aïda */}
      <div
        className={`mr-3 max-w-[240px] sm:max-w-[280px] p-2.5 sm:p-3 rounded-2xl bg-[#FFFCF8] text-[#3B302B] border border-[#E3DCD3] shadow-[0_12px_32px_rgba(59,48,43,0.14)] backdrop-blur-md transition-all duration-500 ease-out flex items-center gap-3 ${
          showBubble
            ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-x-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:pointer-events-auto"
        }`}
      >
        {/* Foto de perfil com badge de status online */}
        <div className="relative shrink-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#C2A783]/60 ring-2 ring-[#C2A783]/20 bg-[#F7F4EF]">
            <Image
              src="/Foto_perfil.jpg"
              alt={CLINIC_INFO.doctorName}
              width={44}
              height={44}
              className="object-cover object-top w-full h-full"
            />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-[#FFFCF8]" />
        </div>

        {/* Textos com tipografia refinada */}
        <div className="min-w-0 text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-heading text-xs sm:text-sm font-medium text-[#3B302B] truncate block">
              Dra. Aïda Schmidt
            </span>
          </div>
          <p className="font-body text-[0.6875rem] text-[#766D66] leading-tight mt-0.5 line-clamp-1">
            Online para tirar dúvidas
          </p>
          <span className="inline-block text-[0.625rem] text-[#25D366] font-semibold mt-0.5 font-body">
            • Atendimento direto
          </span>
        </div>
      </div>

      {/* Botão Magnético Circular de WhatsApp */}
      <MagneticButton strength={0.25}>
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Iniciar conversa no WhatsApp com a ${CLINIC_INFO.name}`}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Pulsação externa suave */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
          
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-300 border-2 border-white z-10" />
        </a>
      </MagneticButton>
    </aside>
  );
}
