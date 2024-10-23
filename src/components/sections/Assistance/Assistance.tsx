import React from "react";
import Card01 from "@/components/common/Card01/Card01";
import Slider01 from "@/components/common/Slider01/Slider01";
import BG_ALT from "@/assets/img/placeholder/design-alt.png";
import HELP_IMAGE_01 from "@/assets/img/assistance/help-1.png";
import HELP_IMAGE_02 from "@/assets/img/assistance/help-2.png";
import HELP_IMAGE_03 from "@/assets/img/assistance/help-3.png";
import HELP_IMAGE_04 from "@/assets/img/assistance/help-4.png";
import styles from "./Assistance.module.css";

const Assistance: React.FC = () => {
  const cardsData = [
    {
      id: "01",
      imageSrc: HELP_IMAGE_01,
      title: "Acesso aos Bancos",
      content:
        "Somos parceiros de diversos bancos, o que nos permite simular e comparar taxas, prazos e outras condições, garantindo a melhor opção para o seu perfil.",
    },
    {
      id: "02",
      imageSrc: HELP_IMAGE_02,
      title: "Projeto",
      content:
        "Elaboramos todos os projetos necessários para a aprovação do crédito, ajustando cada detalhe de acordo com as exigências do banco.",
    },
    {
      id: "03",
      imageSrc: HELP_IMAGE_03,
      title: "Proposta",
      content:
        "Encaminhamos a proposta completa, organizamos toda a documentação e acompanhamos de perto cada etapa até a liberação do crédito.",
    },
    {
      id: "04",
      imageSrc: HELP_IMAGE_04,
      title: "Monitoramento",
      content:
        "Após a liberação, seguimos monitorando o mercado em busca de novas oportunidades para garantir sempre as melhores condições para você.",
    },
  ];

  return (
    <div
      className={`bg-light ${styles.spacing}`}
      style={{ backgroundImage: `url(${BG_ALT.src})` }}
    >
      <div className="container">
        <div className="text-center ">
          <p className="text-highlight fs-1">|</p>
          <br />
          <p className="text-highlight fw-bold p-0 m-0">C R É D I T O</p>
          <h2 className="text-center fw-medium mb-3 mt-0 ">
            Acesso ao Crédito
          </h2>
          <p className="mb-4">Como podemos facilitar seu acesso ao crédito?</p>
        </div>
      </div>

      <Slider01 autoPlayInterval={3000} showControls={false}>
        {cardsData.map((cardData) => (
          <div key={cardData.id}>
            <Card01
              id={cardData.id}
              imageSrc={cardData.imageSrc}
              title={cardData.title}
              content={cardData.content}
            />
          </div>
        ))}
      </Slider01>
    </div>
  );
};

export default Assistance;
