import React from "react";
import Card01 from "@/components/common/Card01/Card01";
import Slider01 from "@/components/common/Slider01/Slider01";
import BG_ALT from "@/assets/img/placeholder/design-alt.png";
import SERVICE_01 from "@/assets/img/services/service-01.png";
import SERVICE_02 from "@/assets/img/services/service-02.png";
import SERVICE_03 from "@/assets/img/services/service-03.png";
import SERVICE_04 from "@/assets/img/services/service-04.png";
import SERVICE_05 from "@/assets/img/services/service-05.png";
import SERVICE_06 from "@/assets/img/services/service-06.png";
import SERVICE_07 from "@/assets/img/services/service-07.png";
import SERVICE_08 from "@/assets/img/services/service-08.png";
import SERVICE_09 from "@/assets/img/services/service-09.png";
import SERVICE_10 from "@/assets/img/services/service-10.png";
import SERVICE_11 from "@/assets/img/services/service-11.png";

import styles from "./CreditPJ.module.css";

const CreditPJ: React.FC = () => {
  const cardsData = [
    {
      id: "01",
      imageSrc: SERVICE_01,
      title: "Conta Corrente",
      content:
        "Serviços essenciais para a gestão financeira, incluindo abertura de contas empresariais e oferta de cartões de crédito com benefícios ajustados às necessidades corporativas.",
    },
    {
      id: "02",
      imageSrc: SERVICE_02,
      title: "Capital de Giro",
      content:
        "Soluções financeiras para empresas que buscam melhorar o fluxo de caixa e garantir a continuidade de suas operações, com condições flexíveis e personalizadas para cada necessidade.",
    },
    {
      id: "03",
      imageSrc: SERVICE_03,
      title: "Desconto de Recebíveis",
      content:
        "Antecipação de recebíveis, como duplicatas, cheques e recebíveis de cartões, com a possibilidade de contratação sem incidência de IOF, para otimizar o fluxo de caixa e garantir maior liquidez às empresas.",
    },
    {
      id: "04",
      imageSrc: SERVICE_04,
      title: "Financiamento para Investimentos",
      content:
        "Crédito direto para aquisição de maquinário e equipamentos, ideal para empresas que buscam modernizar sua infraestrutura e aumentar a produtividade.",
    },
    {
      id: "05",
      imageSrc: SERVICE_05,
      title: "Financiamento de Frota",
      content:
        "Crédito voltado para a aquisição de veículos comerciais, permitindo às empresas renovarem ou expandirem suas frotas com condições facilitadas.",
    },
    {
      id: "06",
      imageSrc: SERVICE_06,
      title: "Leasing",
      content:
        "Modalidade de financiamento que oferece flexibilidade para empresas adquirirem bens, como veículos e equipamentos, sem comprometer o capital de giro.",
    },
    {
      id: "07",
      imageSrc: SERVICE_07,
      title: "Câmbio e Soluções de Exportação",
      content:
        "Serviços de câmbio para empresas que realizam operações internacionais, com foco em garantir segurança e melhores condições para transações de importação e exportação, incluindo linhas de crédito em moeda estrangeira.",
    },
    {
      id: "08",
      imageSrc: SERVICE_08,
      title: "Crédito para Condomínios",
      content:
        "Linha de crédito específica para condomínios, voltada para melhorias estruturais, reformas e manutenção predial.",
    },
    {
      id: "09",
      imageSrc: SERVICE_09,
      title: "Financiamento de Veículo",
      content:
        "Linhas de crédito para aquisição de veículos novos e usados, incluindo veículos leves, utilitários, caminhões e motocicletas. Prazos de 60 meses e financiamento de até 80% do valor. ",
    },
    {
      id: "10",
      imageSrc: SERVICE_10,
      title: "Financiamento Imobiliário",
      content:
        "Crédito destinado à compra, construção ou reforma de imóveis residenciais e comerciais. Prazos longos e taxas atrativas para aquisição de imóveis ou melhorias",
    },
    {
      id: "11",
      imageSrc: SERVICE_11,
      title: "Crédito com Garantia de Imóvel ou Véiculo",
      content:
        "Utilize um imóvel ou veículo como garantia para obter valores maiores e taxas mais competitivas. Ideal para consolidar dívidas ou investir em novos projetos.",
    },
  ];

  return (
    <div
      className={`bg-light pt-60`}
      style={{ backgroundImage: `url(${BG_ALT.src})` }}
    >
      <div className="container">
        <div className="text-center ">
          <p className="text-highlight fs-1">|</p>
          <br />
          <h2 className="text-center fw-medium mb-3 mt-0 ">Crédito </h2>
          <p className="mb-4">
            Conehça nossas soluções de crédito para pessoas físicas e jurídicas.
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
