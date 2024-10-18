import React from "react";
import styles from "./Assistance.module.css";

// Componente para o cartão
const Card: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => (
  <div className="col-12 col-lg-3 mb-4">
    {" "}
    {/* Alterado para col-lg-3 */}
    <div className="text-left">
      <h4 className="fw-bold h3 my-5 text-white">{title}</h4>
      <p className="text-white lead">{description}</p>
    </div>
  </div>
);

// Componente principal da seção
const MainSection: React.FC = () => {
  const cardData = [
    {
      title: "Parceria",
      description:
        "Somos parceiros de diversos bancos, o que nos permite simular e comparar taxas, prazos e outras condições, garantindo a melhor opção para o seu perfil.",
    },
    {
      title: "Projeto",
      description:
        "Elaboramos todos os projetos necessários para a aprovação do crédito, ajustando cada detalhe de acordo com as exigências do banco.",
    },
    {
      title: "Proposta",
      description:
        "Encaminhamos a proposta completa, organizamos toda a documentação e acompanhamos de perto cada etapa até a liberação do crédito.",
    },
    {
      title: "Monitoramento",
      description:
        "Após a liberação, seguimos monitorando o mercado em busca de novas oportunidades para garantir sempre as melhores condições para você.",
    },
  ];

  return (
    <section
      className={`py-120 position-relative overflow-hidden bg-blue`}
    >
      <img
        className="position-absolute top-0 start-100 translate-middle"
        src="flaro-assets/images/cta/gradient4.svg"
        alt=""
      />
      <div className="container position-relative">
        <div className="mb-4 pb-4 border-bottom">
          <h2 className="display-5 fw-bold mb-5 text-white">
            Como Facilitamos Seu Acesso ao Crédito?
          </h2>
        </div>
        <div className="row">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
