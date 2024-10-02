import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  aosDelay: number;
}

const services: Service[] = [
  {
    title: "Tourism",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "images/svg/01.svg",
    aosDelay: 100,
  },
  {
    title: "Package Tours",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "images/svg/02.svg",
    aosDelay: 200,
  },
  {
    title: "Travel Insurance",
    description:
      "Far far away, behind the word mountains, far from the países Vokalia and Consonantia, there live the blind texts.",
    image: "images/svg/03.svg",
    aosDelay: 300,
  },
  {
    title: "Airport Lounge Access",
    description:
      "Far far away, behind the word mountains, far from the países Vokalia and Consonantia, there live the blind texts.",
    image: "images/svg/04.svg",
    aosDelay: 400,
  },
];

// Component to render a single service card
const ServiceCard: React.FC<Service> = ({
  title,
  description,
  image,
  aosDelay,
}) => (
  <div className="mb-3" data-aos="fade-up" data-aos-delay={aosDelay}>
    <div className="service-1 h-100">
      <div className="card-body d-flex align-items-center">
        <span className="icon me-3">
          <i className="fab fa-whatsapp text-white rounded-circle p-4 bg-golden" />
        </span>
        <div className="d-flex flex-column">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

// Main services section component
const ServicesSection: React.FC = () => (
  <div className="section my-5 py-100">
    <div className="container">
      <div className="row align-items-start">
        {/* Coluna para a imagem */}
        <div className="col-lg-6 d-flex justify-content-center p-0 pr-5">
          {" "}
          {/* p-0 para remover padding */}
          <img
            src="https://placehold.co/400x400" // Substitua pelo caminho da sua imagem
            alt="Descrição da Imagem"
            className="img-fluid rounded mb-3" // Remove mb-4
            style={{
              width: "100%", // Garantir que a imagem ocupe toda a largura
              height: "50%", // Garantir que a imagem ocupe toda a altura
              objectFit: "cover", // Cobre a área da coluna
              marginTop: "-40px", // Ajuste a margem superior conforme necessário
            }}
          />
        </div>

        {/* Coluna para a descrição e cartões de serviço */}
        <div className="col-lg-6 mb-4">
          <div className="heading-content" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>
              Far far away, behind the word mountains, far from the países
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="row flex-column">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesSection;
