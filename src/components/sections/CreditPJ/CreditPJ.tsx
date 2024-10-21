import React from "react";
import {
  FaBuilding,
  FaMoneyBillWave,
  FaTruck,
  FaExchangeAlt,
  FaHome,
  FaTools,
  FaCreditCard,
  FaDollarSign,
} from "react-icons/fa";
import styles from "./CreditPJ.module.css";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Conta Corrente",
    description:
      "Serviços essenciais para a gestão financeira, incluindo abertura de contas empresariais e oferta de cartões de crédito com benefícios ajustados às necessidades corporativas.",
    icon: <FaBuilding />,
  },
  {
    title: "Capital de Giro",
    description:
      "Soluções financeiras para empresas que buscam melhorar o fluxo de caixa e garantir a continuidade de suas operações, com condições flexíveis e personalizadas para cada necessidade.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Desconto de Recebíveis",
    description:
      "Antecipação de recebíveis, como duplicatas, cheques e recebíveis de cartões, com a possibilidade de contratação sem incidência de IOF, para otimizar o fluxo de caixa e garantir maior liquidez às empresas.",
    icon: <FaCreditCard />,
  },
  {
    title: "Financiamento para Investimentos",
    description:
      "Crédito direto para aquisição de maquinário e equipamentos, ideal para empresas que buscam modernizar sua infraestrutura e aumentar a produtividade.",
    icon: <FaTools />,
  },
  {
    title: "Financiamento de Frota",
    description:
      "Crédito voltado para a aquisição de veículos comerciais, permitindo às empresas renovarem ou expandirem suas frotas com condições facilitadas.",
    icon: <FaTruck />,
  },
  {
    title: "Leasing",
    description:
      "Modalidade de financiamento que oferece flexibilidade para empresas adquirirem bens, como veículos e equipamentos, sem comprometer o capital de giro.",
    icon: <FaDollarSign />,
  },
  {
    title: "Câmbio e Soluções de Exportação",
    description:
      "Serviços de câmbio para empresas que realizam operações internacionais, com foco em garantir segurança e melhores condições para transações de importação e exportação, incluindo linhas de crédito em moeda estrangeira.",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Crédito para Condomínios",
    description:
      "Linha de crédito específica para condomínios, voltada para melhorias estruturais, reformas e manutenção predial.",
    icon: <FaHome />,
  },
];

const CreditPJ: React.FC = () => {
  return (
    <section className="animated fadeInUp wow">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="display-5 fw-bold">Para sua Empresa</h2>
          <p className="lead pb-5">
            Conheça nossas soluções financeiras para pessoas jurídicas
          </p>
        </div>

        <div className="row mb-60">
          {features.map((feature, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className={`${styles.card} h-100 text-center card`}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <div className={styles["icon-container"]}>
                    <i className={styles.icon}>{feature.icon}</i>
                  </div>
                  <h5>{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditPJ;
