import React from "react";
import CollisionButton from "../common/Button/CollisionButton";

// Separação de estilos em constantes reutilizáveis
const sectionStyle = {
  backgroundImage: 'url("#")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const overlayStyle = {
  backgroundColor: "rgba(1, 50, 32, 0.7)",
  position: "absolute" as "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

// Componente reutilizável para o botão
interface CTAButtonProps {
  text: string;
  href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href }) => (
  <div className="cta-btn s-cta-btn wow fadeInRight animated">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn ss-btn smoth-scroll"
    >
      {text}
    </a>
  </div>
);

const Content: React.FC = () => {
  const content = {
    littleTitle: "Avaliação para fusões e aquisições (M&A).",
    title: "Suporte Completo para Negociações Estratégicas",
    descriptions: [
      "Nosso serviço de fusões e aquisições (M&A) oferece suporte completo para você que deseja vender ou comprar uma empresa, além de auxiliar na busca pelo financiamento ideal para essas operações. Atuamos de maneira estratégica, identificando as melhores oportunidades no mercado, avaliando o valor justo do negócio e intermediando todas as etapas da negociação.",
      "Seja para expandir seu portfólio ou para realizar uma venda bem concluída, nossa equipe acompanha de perto cada fase do processo, garantindo que todas as decisões sejam fundamentadas e alinhadas com seus objetivos. Também atuamos buscando as melhores opções de financiamento, facilitando o acesso ao capital necessário para essas transações.",
    ],
  };

  const { littleTitle, title, descriptions } = content;
  return (
    <div className="col-lg-6 col-md-12">
      <h5 className="fw-bold text-golden text-uppercase">{littleTitle}</h5>
      <h2 className="mb-3 display-5 text-white">{title}</h2>
      {descriptions.map((description, index) => {
        return (
          <>
            <p key={index} className="text-white">
              {description}
            </p>
          </>
        );
      })}
      <CollisionButton
        href=""
        buttonStyles="w-50"
        text="Fale Agora Com um Especialista"
      />
    </div>
  );
};

const FamilyOfficeSection: React.FC = () => {
  return (
    <div className="py-5 position-relative" style={sectionStyle}>
      <div className="overlay" style={overlayStyle}></div>
      <div className="container my-5 position-relative">
        <div className="row align-items-center">
          <Content />
          {/*  */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0"></div>
        </div>
      </div>
    </div>
  );
};

export default FamilyOfficeSection;
