"use client";

import { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Exibe balão inicial após 4 segundos para engajamento suave
    const initialTimer = setTimeout(() => {
      setShowBubble(true);
      const hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 9000);
      return () => clearTimeout(hideTimer);
    }, 4000);

    // Ciclo a cada 35 segundos
    const interval = setInterval(() => {
      setShowBubble(true);
      const hideTimer = setTimeout(() => {
        setShowBubble(false);
      }, 8000);
      return () => clearTimeout(hideTimer);
    }, 35000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <aside
      aria-label="Atendimento rápido via WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center"
    >
      {/* Balão de mensagem automático */}
      <div
        className={`mr-3 px-4 py-2 rounded-2xl bg-[#FFFCF8] text-[#3B302B] text-xs sm:text-sm font-body font-medium border border-[#E3DCD3] shadow-lg transition-all duration-500 flex items-center gap-2 pointer-events-none ${
          showBubble
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-3 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping flex-shrink-0" />
        <span>Fale com a Clínica Schmidt</span>
      </div>

      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Atendimento direto via WhatsApp com a ${CLINIC_INFO.name}`}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 relative cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </aside>
  );
}

