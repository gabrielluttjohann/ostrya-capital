import React from "react";
import contactData from "@/data/contactData.json"; 
import BG from "@/assets/img/placeholder/design-alt.png";

const ContactWithMap: React.FC<{ mapIframe: string }> = ({ mapIframe }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 map-box">
        <iframe
          src={mapIframe}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const { title, description, mapIframe } = contactData; // Desestruturando os dados

  return (
    <section
      className="py-60 px-4 bg-light"
      style={{ backgroundImage: `url(${BG.src})` }}
    >
      <div className="container mb-5">
        <div className="text-center">
          <p className="text-highlight fs-1">|</p>
          <h2 className="text-medium text-center">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="container mb-120">
        <ContactWithMap mapIframe={mapIframe} />
        <div className="container" style={{ marginTop: "-96px" }}>
          <div className="row">
            <div className="col-12 col-md-9 col-lg-7 mx-auto">
              {/* Formulário de contato pode ser adicionado aqui */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
