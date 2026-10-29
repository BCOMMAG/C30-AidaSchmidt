import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";
import { PROCEDURES } from "@/data/procedures";
import {
  Sparkles,
  MapPin,
  ArrowUpRight,
  Globe,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Links Oficiais | Clínica Schmidt — Dra. Aïda Schmidt",
  description:
    "Canais oficiais de atendimento, agendamento de avaliação e informações sobre procedimentos de Harmonização Orofacial em Campo Largo - PR.",
};

export default function LinksPage() {
  const primaryLinks = [
    {
      id: "whatsapp",
      title: "Agendamento & Dúvidas no WhatsApp",
      subtitle: "Fale diretamente com nossa equipe",
      href: CLINIC_INFO.whatsappUrl,
      icon: WhatsAppIcon,
      highlight: true,
      external: true,
    },
    {
      id: "website",
      title: "Website Oficial da Clínica",
      subtitle: "Conheça nossa proposta e procedimentos",
      href: "/",
      icon: Globe,
      highlight: false,
      external: false,
    },
    {
      id: "procedimentos",
      title: "Procedimentos em Harmonização Facial",
      subtitle: "Botox, preenchimentos, bioestimuladores e mais",
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
      title: "Instagram da Dra. Aïda",
      subtitle: "@dra.aidaschmidt",
      href: CLINIC_INFO.instagramUrl,
      icon: InstagramIcon,
      highlight: false,
      external: true,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#3B302B] py-12 px-4 sm:px-6 flex flex-col items-center justify-between">
      <div className="w-full max-w-md mx-auto space-y-8">
        
        {/* Cabeçalho da Bio: Logo e Apresentação */}
        <div className="text-center space-y-4">
          <Link href="/" className="inline-block group focus:outline-none">
            <div className="relative h-14 w-48 mx-auto transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo_sem_fundo_usarnomodoclaro.png"
                alt={CLINIC_INFO.name}
                fill
                priority
                className="object-contain object-center"
                sizes="200px"
              />
            </div>
          </Link>

          {/* Foto de Perfil da Dra. Aïda em miniatura elegante */}
          <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-[#C2A783] shadow-md bg-[#FFFCF8]">
            <Image
              src="/Foto_perfil.jpg"
              alt={CLINIC_INFO.doctorName}
              fill
              className="object-cover object-top"
              sizes="80px"
            />
          </div>

          <div className="space-y-1">
            <h1 className="font-heading text-2xl font-normal text-[#3B302B]">
              {CLINIC_INFO.doctorName}
            </h1>
            <p className="font-body text-xs text-[#A28F80] font-semibold tracking-wide uppercase">
              {CLINIC_INFO.specialty} • {CLINIC_INFO.cro}
            </p>
            <p className="font-body text-xs text-[#766D66] max-w-xs mx-auto leading-relaxed pt-1">
              {CLINIC_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Links Principais da Bio */}
        <div className="space-y-3.5">
          {primaryLinks.map((link) => {
            const Icon = link.icon;
            const isHighlight = link.highlight;

            const content = (
              <div
                className={`w-full p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 text-left hover-lift ${
                  isHighlight
                    ? "bg-[#3B302B] text-[#FFFCF8] border-[#3B302B] shadow-[0_8px_20px_rgba(59,48,43,0.15)]"
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
                    <h2
                      className={`font-body text-sm font-semibold truncate ${
                        isHighlight ? "text-[#FFFCF8]" : "text-[#3B302B]"
                      }`}
                    >
                      {link.title}
                    </h2>
                    <p
                      className={`font-body text-xs truncate ${
                        isHighlight ? "text-[#E3DCD3]/80" : "text-[#766D66]"
                      }`}
                    >
                      {link.subtitle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-4 h-4 shrink-0 ${
                    isHighlight ? "text-[#C2A783]" : "text-[#A28F80]"
                  }`}
                />
              </div>
            );

            return link.external ? (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] rounded-2xl"
              >
                {content}
              </a>
            ) : (
              <Link
                key={link.id}
                href={link.href}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A783] rounded-2xl"
              >
                {content}
              </Link>
            );
          })}
        </div>

        {/* Links Rápidos por Procedimento */}
        <div className="space-y-2 pt-2">
          <span className="text-[0.6875rem] font-body uppercase tracking-wider text-[#A28F80] font-semibold block text-center">
            Dúvidas rápidas sobre procedimentos:
          </span>
          <div className="grid grid-cols-2 gap-2">
            {PROCEDURES.slice(0, 6).map((proc) => {
              const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                proc.whatsappMessage
              )}`;

              return (
                <a
                  key={proc.id}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#FFFCF8] border border-[#E3DCD3] hover:border-[#C2A783] text-center text-xs font-body font-medium text-[#3B302B] hover:text-[#C2A783] transition-all hover-lift truncate"
                >
                  {proc.name.split(" ")[0]} {proc.name.split(" ")[1] || ""}
                </a>
              );
            })}
          </div>
        </div>

        {/* Rodapé da Bio */}
        <div className="pt-6 border-t border-[#E3DCD3] text-center text-xs font-body text-[#766D66] space-y-1">
          <p>{CLINIC_INFO.fullName}</p>
          <p className="text-[0.6875rem] text-[#958B83]">
            {CLINIC_INFO.addressShort} • {CLINIC_INFO.cro}
          </p>
        </div>

      </div>
    </main>
  );
}

