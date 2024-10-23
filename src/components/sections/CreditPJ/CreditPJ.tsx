import React from "react";
import Card01 from "@/components/common/Card01/Card01";
import Slider01 from "@/components/common/Slider01/Slider01";
import BG_ALT from "@/assets/img/placeholder/design-alt.png";
import HELP_IMAGE_01 from "@/assets/img/assistance/help-1.png";
import HELP_IMAGE_02 from "@/assets/img/assistance/help-2.png";
import HELP_IMAGE_03 from "@/assets/img/assistance/help-3.png";
import HELP_IMAGE_04 from "@/assets/img/assistance/help-4.png";
import styles from "./CreditPJ.module.css";

const CreditPJ: React.FC = () => {
  const cardsData = [
    {
      id: "01",
      imageSrc: HELP_IMAGE_01,
      title: "Conta Corrente",
      content:
        "Serviços essenciais para a gestão financeira, incluindo abertura de contas empresariais e oferta de cartões de crédito com benefícios ajustados às necessidades corporativas.",
    },
    {
      id: "02",
      imageSrc: HELP_IMAGE_02,
      title: "Capital de Giro",
      content:
        "Soluções financeiras para empresas que buscam melhorar o fluxo de caixa e garantir a continuidade de suas operações, com condições flexíveis e personalizadas para cada necessidade.",
    },
    {
      id: "03",
      imageSrc: HELP_IMAGE_03,
      title: "Desconto de Recebíveis",
      content:
        "Antecipação de recebíveis, como duplicatas, cheques e recebíveis de cartões, com a possibilidade de contratação sem incidência de IOF, para otimizar o fluxo de caixa e garantir maior liquidez às empresas.",
    },
    {
      id: "04",
      imageSrc: HELP_IMAGE_04,
      title: "Financiamento para Investimentos",
      content:
        "Crédito direto para aquisição de maquinário e equipamentos, ideal para empresas que buscam modernizar sua infraestrutura e aumentar a produtividade.",
    },
    {
      id: "05",
      imageSrc: HELP_IMAGE_01,
      title: "Financiamento de Frota",
      content:
        "Crédito voltado para a aquisição de veículos comerciais, permitindo às empresas renovarem ou expandirem suas frotas com condições facilitadas.",
    },
    {
      id: "06",
      imageSrc: HELP_IMAGE_02,
      title: "Leasing",
      content:
        "Modalidade de financiamento que oferece flexibilidade para empresas adquirirem bens, como veículos e equipamentos, sem comprometer o capital de giro.",
    },
    {
      id: "07",
      imageSrc: HELP_IMAGE_03,
      title: "Câmbio e Soluções de Exportação",
      content:
        "Serviços de câmbio para empresas que realizam operações internacionais, com foco em garantir segurança e melhores condições para transações de importação e exportação, incluindo linhas de crédito em moeda estrangeira.",
    },
    {
      id: "08",
      imageSrc: HELP_IMAGE_04,
      title: "Crédito para Condomínios",
      content:
        "Linha de crédito específica para condomínios, voltada para melhorias estruturais, reformas e manutenção predial.",
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
          <h2 className="text-center fw-medium mb-3 mt-0 ">
            Para Sua Empresa{" "}
          </h2>
          <p className="mb-4">
            Conheça nossas soluções financeiras para pessoas jurídicas
          </p>
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

export default CreditPJ;
