import React from "react";
import IMAGE_01 from "@/assets/img/agro/agro-01.png";

const Agro = () => {
  return (
    <section className="bg-light my-60 overflow-hidden bg-whitemb-5">
      <div className="mb-12 mb-md-24 pb-8 pb-md-16 border-bottom">
        <div className="container">
          <div className="mw-5xl mx-auto text-center">
            <h2 className="my-60 fw-bold display-5">
              Nossas Soluções Para o Agronegócio
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="my-5 fs-5 ">
          <div className="row mb-16 mb-5">
            <div className="col-12 col-lg-6 mb-6 mb-lg-0  ">
              <div>
                <p className="text-light-dark mb-0">
                  A Ostrya oferece soluções financeiras abrangentes para o
                  agronegócio, atendendo às necessidades de Pessoas Físicas,
                  Jurídicas e Cooperativas de Produtores Rurais. Entre os
                  produtos disponibilizados, destacam-se linhas de crédito
                  voltadas para custeio, investimento e comercialização,
                  assegurando o suporte necessário para o desenvolvimento e
                  expansão das atividades agropecuárias. As condições de
                  financiamento são adaptáveis às necessidades específicas de
                  cada cliente, sempre sujeitas à análise e aprovação da
                  política de crédito da instituição financeira parceira.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <p className="text-light-dark mb-0">
                  Além disso, a Ostrya facilita a emissão de Cédulas de Produto
                  Rural (CPR) e Certificados de Depósito Agropecuário (CDA). A
                  CPR é um título de crédito essencial para captação de
                  recursos, vinculado a produtos rurais, com opções de pagamento
                  em produto ou liquidação financeira, atendendo a produtores
                  rurais, associações e cooperativas. Já o CDA permite ao
                  proprietário de mercadorias agropecuárias armazenadas obter
                  financiamento, funcionando como um título que representa os
                  produtos estocados. Essas soluções são projetadas para
                  fortalecer o fluxo financeiro no setor agropecuário,
                  oferecendo maior previsibilidade e segurança aos negócios
                  rurais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-24">
        <div
          className="img-fluid flex-shrink-0 col-4 me-4 rounded-2"
          style={{
            backgroundImage: `url(${IMAGE_01.src})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
            width: "100%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Agro;
