import { RECUPERATE_IMAGE } from "@/constants/images.c";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faFileAlt,
  faHandshake,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons"; // Importando os ícones corretos
import CollisionButton from "../common/Button/CollisionButton";

interface Service {
  title: string;
  description: string;
  icon: any; // Ícone para cada serviço
  aosDelay: number;
}

interface RecuperateImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Componente para exibir uma imagem com design responsivo
const RecuperateImage: React.FC<RecuperateImageProps> = ({
  src,
  alt,
  width,
  height,
}) => (
  <div className="col-lg-6 d-flex justify-content-center p-0 pr-5">
    <Image
      src={src}
      alt={alt || "Imagem de Recuperação"}
      width={width}
      height={height}
      layout="responsive"
      className="img-fluid rounded mb-3"
      style={{
        objectFit: "cover",
        maxHeight: "800px",
        marginTop: "-40px",
      }}
    />
  </div>
);

interface ServiceCardProps {
  services: Service[];
}

// Componente para renderizar a lista de serviços com ícones
const ServiceCard: React.FC<ServiceCardProps> = ({ services }) => {
  return (
    <>
      {services.map((service, index) => (
        <div
          key={index}
          className="mb-3"
          data-aos="fade-up"
          data-aos-delay={service.aosDelay}
        >
          <div className="service-1 h-100">
            <div className="card-body d-flex align-items-center">
              <span
                className="icon me-3 bg-golden p-4  d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  padding: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-white "
                  style={{
                    fontSize: "24px", // Tamanho do ícone consistente
                  }}
                />
              </span>
              <div className="d-flex flex-column">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-text text-white">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

interface RecuperateContentTitleProps {
  title: string;
}

const RecuperateContentTitle: React.FC<RecuperateContentTitleProps> = ({
  title,
}) => (
  <h2 className="display-5 my-3">
    Recuperação Judicial e Extrajudicial: Reorganize Suas Finanças com Suporte
    Jurídico Especializado {title}
  </h2>
);

interface RecuperateContentParagraphProps {
  description: string;
}

const RecuperateContentParagraph: React.FC<RecuperateContentParagraphProps> = ({
  description,
}) => <p className="text-white">{description}</p>;

// Componente que lida com o conteúdo textual e a lista de serviços
const RecuperateContent: React.FC = () => {
  const services = [
    {
      title: "Reestruturação de Dívidas",
      description:
        "Reestruturação de dívidas com apoio jurídico especializado.",
      icon: faBalanceScale, // Ícone de balança
      aosDelay: 100,
    },
    {
      title: "Plano de Recuperação Judicial",
      description:
        "Elaboração e acompanhamento do plano de recuperação judicial.",
      icon: faFileAlt, // Ícone de documento
      aosDelay: 200,
    },
    {
      title: "Acordos Extrajudiciais",
      description: "Acordos extrajudiciais para soluções rápidas e eficientes.",
      icon: faHandshake, // Ícone de aperto de mãos
      aosDelay: 300,
    },
    {
      title: "Suporte Completo",
      description:
        "Suporte completo em todas as fases do processo, buscando proporcionar as condições necessárias para a recuperação e continuidade do negócio.",
      icon: faShieldAlt, // Ícone de escudo
      aosDelay: 400,
    },
  ];

  return (
    <div className="col-lg-6 mb-4 bg-green p-5 text-white">
      <div data-aos="fade-up">
        <RecuperateContentTitle title="" />
        <RecuperateContentParagraph description="Nosso serviço de recuperação judicial e extrajudicial oferece um suporte completo para empresas em crise, contando com uma equipe jurídica própria que auxilia na reorganização de suas dívidas e busca proporcionar as condições necessárias para a continuidade do negócio. Atuamos de forma estratégica, tanto na recuperação judicial quanto na extrajudicial, negociando diretamente com credores e criando soluções que permitam à sua empresa restabelecer o equilíbrio financeiro." />
      </div>
      <div className="row flex-column">
        <ServiceCard services={services} />
        <CollisionButton
          buttonStyles="w-100"
          href=""
          text="Saiba Mais Sobre Recuperação Judicial e Extrajudicial"
        />
      </div>
    </div>
  );
};

// Componente da seção que agrupa conteúdo e imagem
const RecuperateSection: React.FC = () => (
  <div className="section my-5 py-100">
    <div className="container">
      <div className="row align-items-start g-4">
        <RecuperateContent />
        <RecuperateImage
          src={RECUPERATE_IMAGE}
          alt="Imagem de Recuperação Judicial"
          width={600}
          height={500}
        />
      </div>
    </div>
  </div>
);

export default RecuperateSection;
