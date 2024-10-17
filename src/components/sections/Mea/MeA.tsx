import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="py-10 px-12 ">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-4 mb-6 mb-xl-0">
              <h2 className="display-5 fw-bold ">
                Suporte Completo para Negociações Estratégicas
              </h2>
            </div>
            <div className="col-12 col-md-4 mb-6 mb-xl-0">
              <p className="mw-sm lh-lg">
                Nosso serviço de fusões e aquisições (M&A) oferece suporte
                completo para você que deseja vender ou comprar uma empresa,
                além de auxiliar na busca pelo financiamento ideal para essas
                operações. Atuamos de maneira estratégica, identificando as
                melhores oportunidades no mercado, avaliando o valor justo do
                negócio e intermediando todas as etapas da negociação.
              </p>
            </div>
            <div className="col-12 col-md-4 text-left">
              <p className="mw-sm lh-lg">
                Seja para expandir seu portfólio ou para realizar uma venda bem
                concluída, nossa equipe acompanha de perto cada fase do
                processo, garantindo que todas as decisões sejam fundamentadas e
                alinhadas com seus objetivos. Também atuamos buscando as
                melhores opções de financiamento, facilitando o acesso ao
                capital necessário para essas transações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
