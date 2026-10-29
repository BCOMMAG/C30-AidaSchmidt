export interface Procedure {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  badge?: string;
  whatsappMessage: string;
}

export const PROCEDURES: Procedure[] = [
  {
    id: "harmonizacao-facial",
    name: "Harmonização Facial Integrada",
    category: "Planejamento Global",
    summary:
      "Planejamento global e integrado para realçar a harmonia e o equilíbrio natural das proporções da face, respeitando traços únicos.",
    description:
      "A abordagem integrada analisa a anatomia facial como um todo. Através de uma avaliação personalizada, são combinadas técnicas sutis para valorizar pontos fortes e promover simetria e leveza visual.",
    badge: "Abordagem Global",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a Harmonização Facial e como funciona a avaliação na Clínica Schmidt.",
  },
  {
    id: "preenchimento-acido-hialuronico",
    name: "Preenchimento com Ácido Hialurônico",
    category: "Sustentação e Volume",
    summary:
      "Aplicação planejada para devolver sustentação, contorno e hidratação a regiões estratégicas da face, com aspecto leve e natural.",
    description:
      "Utilizado para restabelecer volumes perdidos ao longo do tempo (como malar, mandíbula e mento) e suavizar sulcos, proporcionando sustentação e definição sem rigidez.",
    badge: "Definição Natural",
    whatsappMessage:
      "Olá! Gostaria de mais informações sobre o preenchimento com ácido hialurônico na Clínica Schmidt.",
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica (Botox)",
    category: "Expressão e Suavização",
    summary:
      "Atenuação preventiva e corretiva de linhas de expressão dinâmicas, preservando a expressividade e a suavidade facial.",
    description:
      "Atua no relaxamento controlado de grupos musculares específicos da face (como testa, glabela e área dos olhos), prevenindo o aprofundamento de rugas e mantendo a naturalidade do olhar.",
    badge: "Prevenção e Suavidade",
    whatsappMessage:
      "Olá! Gostaria de entender mais sobre a aplicação de Toxina Botulínica e agendar uma avaliação.",
  },
  {
    id: "bioestimuladores-colageno",
    name: "Bioestimuladores de Colágeno",
    category: "Firmeza e Qualidade da Pele",
    summary:
      "Estímulo progressivo da produção biológica de colágeno pelo próprio organismo, melhorando a firmeza e a textura da pele.",
    description:
      "Substâncias biocompatíveis que estimulam as células dérmicas a produzir colágeno novo de forma gradual, restaurando a densidade, a elasticidade e o viço natural dos tecidos faciais.",
    badge: "Estímulo Biológico",
    whatsappMessage:
      "Olá! Tenho interesse em saber sobre os Bioestimuladores de Colágeno na Clínica Schmidt.",
  },
  {
    id: "fios-sustentacao",
    name: "Fios de Sustentação",
    category: "Suporte e Tração Sutil",
    summary:
      "Técnica focada em suporte mecânico e estímulo tecidual sutil para reposicionamento leve e melhora da qualidade da pele.",
    description:
      "Estruturas absorvíveis inseridas em planos específicos para proporcionar um suave efeito lifting e estímulo colágeno contínuo no trajeto dos fios, amenizando a flacidez tecidual.",
    badge: "Sustentação Sutil",
    whatsappMessage:
      "Olá! Gostaria de informações sobre os Fios de Sustentação e como é feita a avaliação clínica.",
  },
  {
    id: "preenchimento-labial",
    name: "Preenchimento Labial",
    category: "Contorno e Hidratação",
    summary:
      "Realce delicado do contorno, volume e hidratação dos lábios, sempre em harmonia com as proporções faciais de cada paciente.",
    description:
      "Aplicação cuidadosa de ácido hialurônico focada no desenho anatômico, definição do arco do cupido e hidratação profunda, evitando excessos e respeitando a dinâmica do sorriso.",
    badge: "Harmonia Labial",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre preenchimento labial e como funciona a avaliação na Clínica Schmidt.",
  },
  {
    id: "rejuvenescimento-facial",
    name: "Tratamentos para Rejuvenescimento Facial",
    category: "Revitalização e Viço",
    summary:
      "Abordagens combinadas para renovação e vitalidade da pele, buscando desacelerar os sinais do tempo com discrição e sofisticação.",
    description:
      "Protocolos personalizados que combinam hidratação dérmica profunda, estímulo tecidual e cuidado preventivo, preservando a saúde cutânea e a jovialidade de forma elegante.",
    badge: "Vitalidade Dérmica",
    whatsappMessage:
      "Olá! Gostaria de conversar sobre tratamentos para rejuvenescimento facial na Clínica Schmidt.",
  },
  {
    id: "outros-procedimentos-hof",
    name: "Avaliação & Outros Cuidados em HOF",
    category: "Consulta Personalizada",
    summary:
      "Consulta individualizada para mapear necessidades específicas e planejar cuidados orofaciais sob medida.",
    description:
      "Se você busca uma orientação completa sobre os melhores cuidados para o seu momento facial, a avaliação individualizada permite construir um plano de tratamento ético, gradual e seguro.",
    badge: "Atendimento Sob Medida",
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação orofacial personalizada na Clínica Schmidt.",
  },
];

