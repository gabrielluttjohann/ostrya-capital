interface Assistance {
  id: number;
  title: string;
  description: string;
  icon: string;
  aosDelay: number;
}

const assistances: Assistance[] = [
  {
    id: 1,
    title: "Parceria",
    description:
      "Somos parceiros de diversos bancos, o que nos permite simular e comparar taxas, prazos e outras condições, garantindo a melhor opção para o seu perfil.",
    icon: "fas fa-handshake",
    aosDelay: 100,
  },
  {
    id: 2,
    title: "Projeto",
    description:
      "Elaboramos todos os projetos necessários para a aprovação do crédito, ajustando cada detalhe de acordo com as exigências do banco.",
    icon: "fas fa-tasks",
    aosDelay: 200,
  },
  {
    id: 3,
    title: "Proposta",
    description:
      "Encaminhamos a proposta completa, organizamos toda a documentação e acompanhamos de perto cada etapa até a liberação do crédito.",
    icon: "fas fa-file-alt",
    aosDelay: 300,
  },
  {
    id: 4,
    title: "Monitoramento",
    description:
      "Após a liberação, seguimos monitorando o mercado em busca de novas oportunidades para garantir sempre as melhores condições para você.",
    icon: "fas fa-chart-line",
    aosDelay: 400,
  },
];

export { assistances };
export type { Assistance };
