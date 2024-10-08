import React from "react";
import Image from "next/image";
import CollisionButton from "../../common/button/CollisionButton/CollisionButton";
import { EVALUATION_IMAGE } from "@/constants/images.c";

// Componente de imagem sobreposta
const Images: React.FC = () => (
  <div
    className="position-relative overflow-hidden pt-5 h-100"
    style={{ minHeight: "400px" }}
  >
    <Image
      className="position-absolute w-100 h-100"
      src={EVALUATION_IMAGE}
      width={500}
      height={500}
      alt=""
      style={{ objectFit: "cover" }}
    />
  </div>
);

// Componente de botões de ação
const Actions: React.FC = () => (
  <div className="row g-4">
    <div className="col-sm-6">
      <CollisionButton href="" text="Saiba Mais" />
    </div>
    <div className="col-sm-6">
      {/* <CollisionButton href="" text="+51 995099-494" /> */}
    </div>
  </div>
);

// Componente de conteúdo textual
const Content: React.FC = () => {
  const content = {
    littleTitle: "Avaliação",
    title: "Avaliação de Empresas: Decisões Estratégicas Baseadas em Valor",
    descriptions: [
      "A avaliação de empresas  é fundamental para subsidiar decisões estratégicas em diversos momentos do ciclo de vida de uma empresa. Nosso serviço de avaliação oferece uma análise detalhada para estimar o valor do seu negócio.",
      "Essa avaliação é essencial em situações como venda de participação, fusões e aquisições, atração de investidores, reorganização societária ou até mesmo para planejamento sucessório. A avaliação da sua empresa contribui para que você tenha informações relevantes para fundamentar a tomada de decisões estratégicas.",
    ],
  };

  const { littleTitle, title, descriptions } = content;

  return (
    <div className="h-100">
      <h5 className="fw-bold text-golden text-uppercase">{littleTitle}</h5>
      <h2 className="display-5 mb-4">{title}</h2>
      {descriptions.map((description, index) => {
        return (
          <>
            <p key={index} className="mb-4">
              {description}
            </p>
          </>
        );
      })}

      <Actions />
    </div>
  );
};

// Componente principal AboutSection
const EvaluationSection: React.FC = () => (
  <div className="my-120">
    <div className="container-xxl  animated wow fadeInUp">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <Images />
          </div>
          <div className="col-lg-6">
            <Content />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Evaluation: React.FC = () => <EvaluationSection />;

export default Evaluation;
