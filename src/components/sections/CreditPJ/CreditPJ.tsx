import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Conta Corrente",
    description:
      "Serviços essenciais para a gestão financeira, incluindo abertura de contas empresariais e oferta de cartões de crédito com benefícios ajustados às necessidades corporativas.",
  },
  {
    title: "Capital de Giro",
    description:
      "Soluções financeiras para empresas que buscam melhorar o fluxo de caixa e garantir a continuidade de suas operações, com condições flexíveis e personalizadas para cada necessidade.",
  },
  {
    title: "Desconto de Recebíveis",
    description:
      "Antecipação de recebíveis, como duplicatas e cheques, com a possibilidade de contratação sem incidência de IOF, para otimizar o fluxo de caixa e garantir maior liquidez às empresas",
  },
  {
    title: "CDC Máquinas e Equipamentos",
    description:
      "Crédito direto para aquisição de maquinário e equipamentos, ideal para empresas que buscam modernizar sua infraestrutura e aumentar a produtividade.",
  },
  {
    title: "Financiamento de Frota",
    description:
      "Crédito voltado para a aquisição de veículos comerciais, permitindo às empresas renovarem ou expandirem suas frotas com condições facilitadas.",
  },
  {
    title: "Leasing",
    description:
      "Modalidade de financiamento que oferece flexibilidade para empresas adquirirem bens, como veículos e equipamentos, sem comprometer o capital de giro.",
  },
  {
    title: "Câmbio e Soluções de Exportação",
    description:
      "Serviços de câmbio para empresas que realizam operações internacionais, com foco em garantir segurança e melhores condições para transações de importação e exportação.",
  },
  {
    title: "Crédito para Condomínios",
    description:
      "Linha de crédito específica para condomínios, voltada para melhorias estruturais, reformas e manutenção predial",
  },
];

const CreditPJ: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Título e subtítulo antes dos cards */}
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold">Para sua Empresa</h2>
        <p className="lead pb-5">
          Conheça nossas soluções financeiras para pessoas  jurídicas
        </p>
      </div>

      <div className="row mb-60">
        {features.map((feature, index) => (
          <div key={index} className="my-60 col-md-3 mb-4">
            <div className="h-100">
              <div className="card-body">
                <h5 className="border-start border-3 ps-2 h4 fw-bold ">
                  {feature.title}
                </h5>
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditPJ;
