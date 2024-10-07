import React from "react";
import styles from "./Help.module.css";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Classe do Font Awesome
  aosDelay: number;
}

const services: Service[] = [
  {
    id: 1,
    title: "Parceria",
    description:
      "Somos parceiros de diversos bancos, o que nos permite simular e comparar taxas, prazos e outras condições, garantindo a melhor opção para o seu perfil.",
    icon: "fas fa-handshake", // Ícone do Font Awesome
    aosDelay: 100,
  },
  {
    id: 2,
    title: "Projeto",
    description:
      "Elaboramos todos os projetos necessários para a aprovação do crédito, ajustando cada detalhe de acordo com as exigências do banco.",
    icon: "fas fa-tasks", // Novo ícone do Font Awesome
    aosDelay: 200,
  },
  {
    id: 3,
    title: "Proposta",
    description:
      "Encaminhamos a proposta completa, organizamos toda a documentação e acompanhamos de perto cada etapa até a liberação do crédito.",
    icon: "fas fa-file-alt", // Ícone do Font Awesome
    aosDelay: 300,
  },
  {
    id: 4,
    title: "Monitoramento",
    description:
      "Após a liberação, seguimos monitorando o mercado em busca de novas oportunidades para garantir sempre as melhores condições para você.",
    icon: "fas fa-chart-line", // Ícone do Font Awesome
    aosDelay: 400,
  },
];

const ServiceItem: React.FC<Service> = ({
  title,
  description,
  icon,
  aosDelay,
}) => (
  <div
    className={`col-6 col-md-6 col-lg-3 mb-4 mb-lg-0`}
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    <div
      className={`${styles.serviceItem} d-flex flex-column align-items-start`}
    >
      {/* <div className={`${styles.iconWrapper}`}>
        <i className={`${icon} ${styles.icon} fs-2 text-white`} />
      </div> */}
      <div className="text-left mt-3">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const ServiceSection: React.FC = () => (
  <div className="section service-section-1 my-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mb-4 mb-lg-0">
          <div className="heading-content" data-aos="fade-up">
            <h2 className="fw-bold">
              Como facilitamos{" "}
              <span className="d-block">
                seu <strong className="text-green">acesso ao crédito</strong>?
              </span>
            </h2>
            <p className="my-4" data-aos="fade-up" data-aos-delay="300">
              <a href="#" className="btn btn-primary rounded-pill">
                Saiba Mais
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {services.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServiceSection;
