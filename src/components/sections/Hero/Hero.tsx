import React from "react";
import { Carousel } from "react-bootstrap";
import HERO_IMAGE_1 from "../../../assets/img/hero/hero.png"; // Adicione suas imagens
import HERO_IMAGE_2 from "../../../assets/img/hero/hero-2.jpg"; // Adicione suas imagens
import HERO_IMAGE_3 from "../../../assets/img/hero/hero-3.png"; // Adicione suas imagens

const HeroSection: React.FC = () => {
  return (
    <div>
      <Carousel interval={2000}>
        <Carousel.Item>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              minHeight: "70vh",
              backgroundImage: `url("${HERO_IMAGE_1.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              transition: "opacity 1s ease-in-out", // Animação de transição
            }}
          >
            <div className="container text-left" style={{ zIndex: 1 }}>
              <h1 className="display-4 fw-bold text-white w-50 mt-2 mb-4">
                Consultoria em finanças e gestão de projetos.
              </h1>
              <a className="btn btn-secondary p-4 mb-4" href="#">
                Fale Agora com um Especialista
              </a>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.5,
              }}
            ></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              minHeight: "70vh",
              backgroundImage: `url("${HERO_IMAGE_2.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              transition: "opacity 1s ease-in-out", // Animação de transição
            }}
          >
            <div className="container text-left" style={{ zIndex: 1 }}>
              <h1 className="display-4 fw-bold text-white w-50 mt-2 mb-4">
                Soluções Personalizadas para Seu Negócio.
              </h1>
              <a className="btn btn-secondary p-4 mb-4" href="#">
                Fale Agora com um Especialista
              </a>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.5,
              }}
            ></div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              minHeight: "70vh",
              backgroundImage: `url("${HERO_IMAGE_3.src}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              transition: "opacity 1s ease-in-out", // Animação de transição
            }}
          >
            <div className="container text-left" style={{ zIndex: 1 }}>
              <h1 className="display-4 fw-bold text-white w-50 mt-2 mb-4">
                Transforme seus Desafios em Oportunidades.
              </h1>
              <a className="btn btn-secondary p-4 mb-4" href="#">
                Fale Agora com um Especialista
              </a>
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.5,
              }}
            ></div>
          </div>
        </Carousel.Item>
      </Carousel>

      <FeatureSection />
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      title: "Análise Rápida",
      description: "Oferecemos diagnósticos precisos para decisões informadas.",
      icon: "fas fa-chart-line", // Ícone para Análise Rápida
    },
    {
      title: "Flexibilidade",
      description: "Adaptações rápidas às suas necessidades e objetivos.",
      icon: "fas fa-exchange-alt", // Ícone para Flexibilidade
    },
    {
      title: "Apoio Contínuo",
      description: "Suporte contínuo para garantir seu sucesso financeiro.",
      icon: "fas fa-users", // Ícone para Apoio Contínuo
    },
  ];

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

const FeatureItem: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 d-flex mb-4 justify-content-center">
      <div
        className="card bg-green shadow-sm text-center w-100"
        style={{ maxWidth: "600px" }} // Define uma largura máxima opcional
      >
        <div className="card-body d-flex align-items-center justify-content-center flex-column">
          <i
            className={`${icon} text-white`}
            style={{ fontSize: "48px", marginBottom: "1rem" }}
          ></i>
          <h4 className="fw-bold text-white">{title}</h4>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <section className="pb-5">
      <HeroSection />
    </section>
  );
};

export default App;
