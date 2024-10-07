import { CREDIT_IMAGE } from "@/constants/images.c";
import React, { useState } from "react";
// Definindo os tipos para as variáveis
import styles from "@/components/sections/Credit/Credit.module.css";

interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
}

const Home: React.FC = () => {
  const credit = {
    imageSrc: CREDIT_IMAGE,
    descriptions: [
      "A nossa equipe tem ampla experiência na análise e deliberação de crédito para empresas de diversos portes e segmentos e para pessoas físicas, <strong>já tendo participado diretamente da concessão de mais de R$ 50,0 bilhões em crédito</strong>. Assim, você terá ao seu lado profissionais com muito conhecimento e experiência em crédito.",
      "<strong>Como parceira de diversas instituições financeiras, oferecemos um serviço personalizado que permite comparar taxas de juros e demais condições disponíveis em vários bancos, de forma que podemos oferecer a solução de crédito mais interessante para você</strong>. Assim, atuamos como consultores especializados, conectando você às melhores opções de crédito disponíveis no mercado. ",
      "<strong>Nosso compromisso é encontrar as soluções mais vantajosas</strong>, comparando taxas e benefícios de forma transparente e personalizada.",
    ],
  };

  const serviceList: Service[] = [
    {
      title: "Para Você",
      icon: "fa-user",
      description:
        "Soluções de financiamento para atender suas necessidades pessoais.",
      features: [
        "Financiamento Imobiliário",
        "Crédito com Garantia de Imóvel",
        "Crédito com Garantia de Veículo",
        "Financiamento de Veículo",
        "Crédito Consignado Privado",
      ],
      link: "#",
    },
    {
      title: "Para sua Empresa",
      icon: "fa-building",
      description: "Soluções financeiras específicas para o seu negócio.",
      features: [
        "Conta corrente",
        "Cartão de crédito",
        "Desconto de recebíveis",
        "Capital de giro",
        "CDC máquinas e equipamentos",
        "Financiamento de frota",
        "Leasing",
        "Câmbio",
      ],
      link: "#",
    },
    {
      title: "Para o Agronegócio",
      icon: "fa-leaf",
      description: "Financiamentos voltados para o desenvolvimento agrícola.",
      features: [
        "Custeio",
        "Investimento",
        "Comercialização",
        "Cédula de Produto Rural",
        "Certificado Depósito Agropecuário",
      ],
      link: "#",
    },
    {
      title: "Outras Soluções",
      icon: "fa-cogs",
      description:
        "Outras opções financeiras que podem atender suas necessidades.",
      features: [
        "Conta Escrow",
        "Cessão de Precatórios",
        "Cessão de direitos Creditórios",
        "Mercado Livre de Energia",
        "Consórcio",
        "Seguros",
      ],
      link: "#",
    },
  ];

  const ServiceItem = ({
    service,
    isActive,
    onClick,
  }: {
    service: Service;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      className={`nav-link border w-100 d-flex align-items-center text-start p-4 mb-4 ${
        isActive ? `bg-golden text-white` : "bg-white text-black credit"
      }`}
      onClick={onClick}
      type="button"
    >
      <i className={`fa ${service.icon} fa-2x me-3`}></i>
      <h4 className="m-0">{service.title}</h4>
    </button>
  );

  const ServiceTab = ({
    service,
  }: {
    service: Service & { active: boolean };
  }) => (
    <div className={`tab-pane fade ${service.active ? "show active" : ""}`}>
      <div className="row g-1">
        {/* <div className="col-md-6" style={{ minHeight: "350px" }}>
        </div> */}
        <h3 className="mb-3 fw-bold fs-2">{service.description}</h3>
        {service.features.map((feature: string, index: number) => (
          <p key={index}>
            <i className="fa fa-check text-success me-3"></i>
            {feature}
          </p>
        ))}
        <a href={service.link} className="btn btn-primary py-3 px-5 mt-3">
          Fale com um especialista <i className="fa fa-arrow-right ms-2"></i>
        </a>
      </div>
    </div>
  );

  const ServiceSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
      <section
        className={`${styles["credit-bg-image"]} rellax container-xx my-5`}
      >
        <div className="container">
          <div className="row g-5 d-flex align-items-center justify-content-center ">
            <div className="col-lg-4">
              <div className="nav w-100 d-flex flex-column" id="v-pills-tab">
                {serviceList.map((service, index) => (
                  <ServiceItem
                    key={index}
                    service={service}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-6 card p-5 bg-white my-5 ">
              <div className="tab-content w-100 h-100">
                {serviceList.map((service, index) => (
                  <ServiceTab
                    key={index}
                    service={{ ...service, active: activeIndex === index }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="my-5 ">
      <ServiceSection />
    </div>
  );
};

export default Home;
