// src/data/strategyTexts.ts

// Interface para definir a estrutura dos textos
export interface StrategyTexts {
  header: string;
  title: string;
  description: string;
}

// Texto da seção de estratégia
export const strategyTexts: StrategyTexts = {
  header: "Estratégia",
  title:
    "Consultoria Financeira e Societária: Planejamento Estratégico para Crescimento Sustentável",
  description: `Nossa equipe tem vasta experiência em concessão de crédito para empresas
  saudáveis ​​e na reestruturação de empresas em crise, o que nos permite
  identificar melhorias financeiras, estratégicas e de gestão. Oferecemos
  consultoria empresarial e societária com estratégias personalizadas para
  fortalecer a saúde financeira e gerenciar eficientemente o patrimônio.
  Atuamos junto com você para garantir equilíbrio financeiro, crescimento
  sustentável e gestão sólida de ativos. Analisamos as operações para
  maximizar o desempenho, melhorar a estrutura de capital e garantir uma
  governança adequada, incluindo reorganização societária.`,
};

// src/data/strategyData.ts

// Interface para definir a estrutura de um recurso
export interface StrategyFeature {
  iconClass: string;
  title: string;
  description: string;
}

// Array contendo as funcionalidades da seção de estratégia
export const strategyFeatures: StrategyFeature[] = [
  {
    iconClass: "fa-chart-line", // Ícone de análise e gráficos
    title: "Análise e otimização da estrutura financeira",
    description:
      "Revisão estratégica da estrutura financeira para maximizar a eficiência e reduzir custos.",
  },
  {
    iconClass: "fa-briefcase", // Ícone para gestão de ativos
    title: "Gestão eficiente dos ativos empresariais",
    description:
      "Administração focada em aumentar a rentabilidade e segurança dos ativos da empresa.",
  },
  {
    iconClass: "fa-chart-pie", // Ícone de indicadores e relatórios
    title:
      "Elaboração de indicadores para controle e acompanhamento de desempenho",
    description:
      "Criação de análises personalizadas para monitorar e melhorar o desempenho operacional e financeiro.",
  },
  {
    iconClass: "fa-users", // Ícone de conselhos consultivos
    title: "Estruturação e participação em conselhos consultivos",
    description:
      "Implementação e atuação em conselhos para direcionamento estratégico e empresarial.",
  },
  {
    iconClass: "fa-university", // Ícone de reorganização societária
    title: "Reorganização societária",
    description:
      "Estruturação da sociedade empresarial para melhoria de eficiência e governança.",
  },
  {
    iconClass: "fa-handshake", // Ícone para planejamento sucessório
    title: "Planejamento sucessório",
    description:
      "Planejamento estratégico para garantir a continuidade da empresa em transições de liderança.",
  },
];
