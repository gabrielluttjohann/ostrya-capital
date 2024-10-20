import React from "react";
import IMAGE from "@/assets/img/bg/cta.png";

const CTASection: React.FC = () => {
  return (
    <section className="bg-white overflow-hidden position-relative">
      <div className="py-120">
        <div className="container">
          <div className="row align-items-center ">
            {/* Texto à esquerda */}
            <div className="col-12 col-md-8 ">
              <div className="p-16 px-xxl-24 py-xxl-20">
                <h2 className="display-5 fw-bold me-5 mb-4">
                  Converse com um Especialista e Encontre a Solução Financeira
                  Ideal para Você ou sua Empresa
                </h2>
                <p className="lead text-muted me-5 mb-4">
                  Receba informações detalhadas e simulações personalizadas para
                  suas necessidades financeiras. Fale conosco e descubra as
                  melhores opções de crédito!
                </p>
                <div className="d-md-inline-block">
                  <button
                    className="btn btn-primary fs-18 px-6 py-4 w-100 h-100"
                    type="button"
                  >
                    Fale Com um Consultor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem de fundo à direita, não alcançada pelo conteúdo */}
        <div
          className="position-absolute top-0 end-0 h-100"
          style={{
            width: "40%",
            backgroundImage: `url(${IMAGE.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default CTASection;
