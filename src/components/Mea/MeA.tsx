import React from "react";

const FamilyOfficeSection: React.FC = () => {
  return (
    <div
      className="py-5 position-relative"
      style={{
        backgroundImage: 'url("#")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(1, 50, 32, 0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div className="container my-5 position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <h6 className="text-white text-uppercase mb-2">FAMILY OFFICE</h6>
            <h2 className="text-white">
              Saiba mais sobre nossa atuação como um{" "}
              <span className="fw-bold text-oc-secondary">
                Multi-Family Office
              </span>{" "}
              exclusivo
            </h2>
            <p className="text-white">
              Nossa consultoria é especializada em investimentos e atuamos
              também como um Multi-Family Office. Trabalhamos com famílias que
              buscam uma administração completa de seus bens, oferecendo
              serviços de assessoria patrimonial, planejamento sucessório e
              gestão de investimentos. Nosso foco é garantir a segurança,
              preservação e crescimento do patrimônio, sempre com soluções
              personalizadas e estratégicas. Contamos com uma equipe altamente
              qualificada para proporcionar tranquilidade e eficiência na gestão
              financeira das famílias que atendemos, buscando sempre as melhores
              oportunidades no mercado.
            </p>
            <div className="col-lg-4">
              <div
                className="cta-btn s-cta-btn wow fadeInRight animated"
                data-animation="fadeInDown animated"
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ss-btn smoth-scroll"
                >
                  Fale Com Um Especialista
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0"></div>
        </div>
      </div>
    </div>
  );
};

export default FamilyOfficeSection;
