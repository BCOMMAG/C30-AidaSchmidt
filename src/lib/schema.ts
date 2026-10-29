import { CLINIC_INFO } from "./data";

export function getClinicSchema(siteUrl: string = "https://aidaschmidt.pages.dev") {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "@id": `${siteUrl}/#clinic`,
    name: CLINIC_INFO.name,
    legalName: CLINIC_INFO.fullName,
    alternateName: "Clínica Schmidt Harmonização Orofacial",
    description:
      "Clínica de Harmonização Orofacial com foco em beleza natural, equilíbrio facial e atendimento individualizado em Campo Largo - PR. Responsável: Dra. Aïda Schmidt (CRO-PR 34310).",
    url: siteUrl,
    telephone: "+5541997560677",
    image: `${siteUrl}/og-image_optimized_300.jpg`,
    logo: `${siteUrl}/logo_sem_fundo_usarnomodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Sete de Setembro",
      addressLocality: "Campo Largo",
      addressRegion: "PR",
      postalCode: "83601-170",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4597,
      longitude: -49.5278,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      CLINIC_INFO.instagramUrl,
    ],
    medicalSpecialty: "Dentistry",
    employee: {
      "@type": "Person",
      name: CLINIC_INFO.doctorName,
      jobTitle: "Cirurgiã-Dentista • Harmonização Orofacial",
      identifier: CLINIC_INFO.cro,
    },
  };
}

