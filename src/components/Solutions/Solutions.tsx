import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCar,
  faMoneyBill,
  faIndustry,
  faLeaf,
  faTractor,
  faFileInvoiceDollar,
  faCashRegister,
  faGlobe,
  faHandshake,
  faUniversity,
  faTools,
} from "@fortawesome/free-solid-svg-icons"; // Ícones importados

interface CauseCardProps {
  icon: any;
  title: string;
  description: string;
}

const CauseCard: React.FC<CauseCardProps> = ({ icon, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="card h-100 d-flex flex-column justify-content-center align-items-center">
        <FontAwesomeIcon
          icon={icon}
          className="fs-2 bg-green-alt rounded-circle p-4 mt-2"
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer bg-transparent text-center">
          <a href="donate.html" className="btn bg-gold">
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

const CausesSection: React.FC = () => {
  const causes = [
    {
      icon: faHome,
      title: "Financiamento Imobiliário",
      description: "Compra ou refinanciamento de imóveis.",
    },
    {
      icon: faMoneyBill,
      title: "Crédito com Garantia de Imóvel ou Veículo",
      description:
        "Use seu imóvel ou veículo como garantia para obter crédito com condições diferenciadas.",
    },
    {
      icon: faHandshake,
      title: "Capital de Giro",
      description:
        "Crédito para sustentar operações diárias e expandir seu negócio.",
    },
    {
      icon: faCashRegister,
      title: "Antecipação de Recebíveis",
      description:
        "Melhore o fluxo de caixa, antecipando valores a receber de clientes.",
    },
    {
      icon: faCar,
      title: "Financiamento de Veículos",
      description:
        "Aquisição de automóveis novos ou usados ​​para uso pessoal ou empresarial.",
    },
    {
      icon: faGlobe,
      title: "Câmbio",
      description:
        "Soluções de câmbio para empresas que lidam com operações internacionais.",
    },
    {
      icon: faUniversity,
      title: "Convênio de Crédito Consignado para Empresas",
      description:
        "Facilite o acesso dos seus colaboradores a linhas de crédito consignado.",
    },
    {
      icon: faTractor,
      title: "Crédito para o Agronegócio",
      description: "Financiamento para produtores rurais.",
    },
    {
      icon: faFileInvoiceDollar,
      title: "Venda de Precatórios",
      description: "Antecipe o valor de precatórios judiciais.",
    },
    {
      icon: faLeaf,
      title: "Energia Solar",
      description:
        "Financiamento para instalação de sistemas de energia solar.",
    },
    {
      icon: faTools,
      title: "Crédito para Condomínios",
      description: "Crédito para reformas ou melhorias em condomínios.",
    },
    {
      icon: faIndustry,
      title: "CDC (Máquinas e Equipamentos)",
      description: "Financiamento para compra de máquinas e equipamentos.",
    },
  ];

  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h5 className="fw-bold text-golden text-uppercase mt-5">
              Soluções
            </h5>
            <h2 className="mb-3 display-5">
              Soluções de crédito para pessoas físicas e jurídicas
            </h2>
          </div>
          {causes.map((cause, index) => (
            <CauseCard key={index} {...cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
