export interface ClinicInfo {
  name: string;
  fullName: string;
  doctorName: string;
  specialty: string;
  cro: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  cep: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
}

export const CLINIC_INFO: ClinicInfo = {
  name: "Clínica Schmidt",
  fullName: "Clínica Schmidt — Dra. Aïda Schmidt",
  doctorName: "Dra. Aïda Schmidt",
  specialty: "Harmonização Orofacial",
  cro: "CRO-PR 34310",
  phone: "(41) 99756-0677",
  whatsapp: "5541997560677",
  whatsappNumber: "5541997560677",
  whatsappFormatted: "(41) 99756-0677",
  whatsappUrl:
    "https://wa.me/5541997560677?text=Ol%C3%A1!%20Gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20a%20Cl%C3%ADnica%20Schmidt%20e%20os%20procedimentos%20de%20Harmoniza%C3%A7%C3%A3o%20Orofacial.",
  instagramUrl: "https://www.instagram.com/dra.aidaschmidt/",
  instagramHandle: "@dra.aidaschmidt",
  address: "R. Sete de Setembro - Centro, Campo Largo - PR, 83601-170",
  addressShort: "Centro, Campo Largo - PR",
  city: "Campo Largo",
  state: "PR",
  cep: "83601-170",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Sete+de+Setembro+-+Centro,+Campo+Largo+-+PR,+83601-170",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=R.+Sete+de+Setembro+-+Centro,+Campo+Largo+-+PR,+83601-170&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Sete+de+Setembro+-+Centro,+Campo+Largo+-+PR,+83601-170",
  schedule: {
    weekdays: "Segunda a sexta-feira: 09h às 18h",
    saturday: "Sábado: 09h às 12h",
    sunday: "Domingo: fechado",
    note: "Horários sujeitos a confirmação prévia no momento do agendamento.",
  },
  tagline: "Realce sua beleza com naturalidade e equilíbrio.",
  heroHeadline: "Realce sua beleza com naturalidade e equilíbrio.",
  heroSubheadline:
    "Cuidado individualizado em Harmonização Orofacial, com atenção à sua individualidade e aos seus objetivos estéticos.",
};

export interface Differential {
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Avaliação Criteriosa e Individualizada",
    description:
      "Cada formato de rosto possui proporções e expressividades singulares. O plano de cuidados é desenhado com respeito absoluto aos seus traços originais.",
  },
  {
    title: "Foco em Naturalidade",
    description:
      "O objetivo da Harmonização Orofacial é proporcionar equilíbrio, leveza e rejuvenescimento harmônico, sem exageros ou transformações artificiais.",
  },
  {
    title: "Escuta Atenta e Transparência",
    description:
      "Diálogo acolhedor e esclarecimento detalhado de cada etapa, entendendo suas expectativas e priorizando a sua segurança e bem-estar.",
  },
  {
    title: "Ambiente Calmo e Sofisticado",
    description:
      "Espaço planejado para oferecer conforto, privacidade e uma experiência tranquila desde a primeira conversa.",
  },
];

