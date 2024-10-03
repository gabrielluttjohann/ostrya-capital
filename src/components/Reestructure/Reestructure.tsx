import React from "react";
import Image from "next/image";
import CollisionButton from "../common/Button/CollisionButton";
import { REESTRUCTURE_IMAGE } from "@/constants/images.c";

const SectionImage: React.FC = () => (
  <div className="col-lg-5" style={{ minHeight: "500px" }}>
    <div className="position-relative h-100">
      <Image
        className="position-absolute w-100 h-100 rounded"
        src={REESTRUCTURE_IMAGE}
        width={500}
        height={500}
        alt="Imagem da seção de reestruturação."
        onError={(e) =>
          (e.currentTarget.src =
            "https://via.placeholder.com/500x500.png?text=Image+Unavailable")
        }
        style={{ objectFit: "cover" }}
      />
    </div>
  </div>
);

const Contact: React.FC = () => {
  const contact = {
    icon: "fa fa-phone",
    text: "Fale agora com um especialista",
    phone: "+55 51 99509-9494",
  };

  const { icon, text, phone } = contact;

  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <div className="bg-golden d-flex align-items-center justify-content-center rounded icon-container">
          <i className={`${icon} text-white p-4`}></i>
        </div>
        <div className="ps-4">
          <h5 className="mb-2">{text}</h5>
          <h4 className="text-green mb-0">{phone}</h4>
        </div>
      </div>
    </>
  );
};

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="d-flex py-3">
    <div>
      <i className="fa fa-check text-golden me-3"></i>
    </div>
    <div>
      <span>{text}</span>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    "Negociação de dívidas",
    "Reestruturação de crédito personalizada",
    "Intermediação direta com grandes bancos ",
    "Soluções financeiras estratégicas para otimização de prazos e taxas.",
  ];
  return (
    <div className="row g-0 mb-3">
      {features.map((feature, index) => (
        <div className="col-sm-6" key={index}>
          <FeatureItem text={feature} />
        </div>
      ))}
    </div>
  );
};

const Descriptions: React.FC = () => {
  const descriptions = [
    "A nossa equipe tem ampla experiência em restruturação financeira de empresas, já tendo participado diretamente da recuperação de alguns dos maiores grupos econômicos do sul do país, somando mais de R$ 3,0 bilhões em crédito restruturado.",
    "A experiência nos mostra que a restruturação da empresa é mais importante do que apenas a restruturação do crédito, para que seja possível recuperar o negócio de forma sustentável. ",
  ];
  return (
    <>
      {descriptions.map((description, index) => (
        <p key={index} className="mb-4">
          {description}
        </p>
      ))}
    </>
  );
};

const Titles: React.FC<{
  littleTitle: string;
  title: string;
}> = ({ littleTitle, title }) => (
  <>
    <h5 className="fw-bold text-golden text-uppercase">{littleTitle}</h5>
    <h2 className="mb-3 display-5">{title}</h2>
  </>
);

const SectionContent: React.FC = () => (
  <div className="col-lg-7">
    <Titles
      littleTitle="Reestruturação"
      title="Reestruturação Financeira Empresarial"
    />
    <Descriptions />
    <Features />
    <Contact />
    <CollisionButton
      href="#"
      buttonStyles="w-50"
      text="Fale com um Consultor"
    />
  </div>
);

const ReestructureSection: React.FC = () => (
  <div className="section-title my-5">
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row g-5">
          <SectionContent />
          <SectionImage />
        </div>
      </div>
    </div>
  </div>
);

const Reestructure: React.FC = () => <ReestructureSection />;

export default Reestructure;
