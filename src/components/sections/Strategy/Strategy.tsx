import React from "react";

// Componente para o cabeçalho da seção de recursos
const StrategyHeader: React.FC = () => {
  return (
    <div className="col-lg-5">
      <div className="d-inline-block text-green border rounded-pill px-4 mb-3">
        Estratégia
      </div>
      <h2 className="display-7 mb-4">
        Consultoria Financeira e Societária: Planejamento Estratégico para
        Crescimento Sustentável
      </h2>
      <p>
        Nossa equipe tem vasta experiência em concessão de crédito para empresas
        saudáveis ​​e na reestruturação de empresas em crise, o que nos permite
        identificar melhorias financeiras, estratégicas e de gestão. Oferecemos
        consultoria empresarial e societária com estratégias personalizadas para
        fortalecer a saúde financeira e gerenciar eficientemente o patrimônio.
        Atuamos junto com você para garantir equilíbrio financeiro, crescimento
        sustentável e gestão sólida de ativos. Analisamos as operações para
        maximizar o desempenho, melhorar a estrutura de capital e garantir uma
        governança adequada, incluindo reorganização societária.
      </p>

      <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href="">
        Saiba Mais
      </a>
    </div>
  );
};

// Componente para um item de recurso
interface StrategyItemProps {
  iconClass: string;
  title: string;
  description: string;
}

const StrategyItem: React.FC<StrategyItemProps> = ({
  iconClass,
  title,
  description,
}) => {
  return (
    <div className="col-sm-6">
      <div className="d-flex align-items-start mb-3">
        <div className="flex-shrink-0  me-3">
          <i
            className={`fa ${iconClass} bg-green p-3 rounded-circle text-white`}
          ></i>
        </div>
        <div>
          <h6 className="mb-2 ">{title}</h6>
          <span className="text-alt">{description}</span>
        </div>
      </div>
    </div>
  );
};

// Componente principal da seção de recursos
const StrategySection: React.FC = () => {
  const features = [
    {
      iconClass: "fa-chart-line", // Ícone de análise e gráficos
      title: "Análise e otimização da estrutura financeira",
      description:
        "Revisão estratégica da estrutura financeira para maximizar a eficiência e reduzir custos.",
    },
    {
      iconClass: "fa-briefcase", // Novo ícone para gestão de ativos
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
      iconClass: "fa-handshake", // Novo ícone para planejamento sucessório
      title: "Planejamento sucessório",
      description:
        "Planejamento estratégico para garantir a continuidade da empresa em transições de liderança.",
    },
  ];

  return (
    <div className="container-xxl my-5">
      <div className="container">
        <div className="row g-5">
          <StrategyHeader />
          <div className="col-lg-7">
            <div className="row g-5">
              {features.map((feature, index) => (
                <StrategyItem
                  key={index}
                  iconClass={feature.iconClass}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategySection;
