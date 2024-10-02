import React from "react";
import HiddenButton from "../common/Button/HiddenButton";

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    icon: "fa fa-lightbulb", // Novo ícone
    title: "Contratação de Crédito",
    description:
      "Atuamos como parceiros de grandes bancos e auxiliamos você na escolha e contratação de crédito para que você possa realizar projetos e alcançar os seus objetivos.",
    link: "#",
  },
  {
    icon: "fa fa-chart-line", // Novo ícone
    title: "Reestruturação de Dívidas:",
    description:
      "Organizamos as finanças e auxiliamos na recuperação da sua empresa para que ela volte a crescer e gerar valor.",
    link: "#",
  },
  {
    icon: "fa fa-briefcase",
    title: "Consultoria Financeira e Societária",
    description:
      "Estratégias sob medida para otimizar a saúde financeira, incrementar os ganhos e gerenciar o patrimônio da sua empresa.",
    link: "#",
  },
  {
    icon: "fa fa-chart-bar",
    title: "Avaliação de Empresas",
    description:
      "Oferecemos uma análise completa do valor de sua empresa, auxiliando em decisões estratégicas.",
    link: "#",
  },
  {
    icon: "fa fa-exchange-alt",
    title: "Compra e Venda de Empresas (M&A)",
    description:
      "Suporte completo no processo de compra e venda de empresas, da análise à prospecção de players estratégicos e ao fechamento do negócio.",
    link: "#",
  },
  {
    icon: "fa fa-gavel",
    title: "Recuperação Judicial e Extrajudicial",
    description:
      "Auxiliamos empresas em dificuldades a reorganizarem suas dívidas, buscando estruturar as condições necessárias para a continuidade do negócio.",
    link: "#",
  },
  {
    icon: "fa fa-check-circle",
    title: "Análise de Viabilidade",
    description:
      "Avaliamos a viabilidade de projetos de investimento de capital, bem como as fontes de financiamento para a obtenção do capital necessário para a execução do projeto.",
    link: "#",
  },
  {
    icon: "fa fa-dollar-sign",
    title: "Ostrya Investimentos",
    description:
      "Na Ostrya Capital, nosso foco é oferecer soluções completas de crédito, reestruturação financeira e consultoria empresarial. Quando se trata de consultoria de investimentos, contamos com uma empresa coligada, totalmente independente, a Ostrya Investimentos.",
    link: "#",
  },
];

const ServiceItem: React.FC<Service> = ({ icon, title, description, link }) => (
  <div className="col-md-6 col-lg-3 wow fadeIn">
    <div className="service-item border h-100 p-5 d-flex flex-column justify-content-between text-center">
      <div>
        <div
          className="btn-square bg-light rounded-circle mb-4 d-flex justify-content-center align-items-center mx-auto"
          style={{ width: "64px", height: "64px" }}
        >
          <i className={`${icon} fs-3 text-green img-fluid`} aria-hidden="true"></i>
        </div>
        <h4 className="mb-3">{title}</h4>
        <p className="mb-4" style={{ minHeight: "60px" }}>
          {description}
        </p>
      </div>
      <HiddenButton
        href={link}
        text="Saiba Mais"
        icon="fa fa-arrow-right px-2"
      />
    </div>
  </div>
);

const Services: React.FC = () => (
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center">
        <div
          className="mb-3 mx-auto"
          style={{ background: "#b68d40", width: "60px", height: "2px" }}
        ></div>
        <h1 className="display-5 mb-5">Nossa Solução Completa</h1>
      </div>
      <div className="row g-0 service-row">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  </div>
);

export default Services;
