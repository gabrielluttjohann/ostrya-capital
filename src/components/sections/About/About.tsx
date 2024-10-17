import React from "react";
import ABOUT_IMAGE from "@/assets/img/about/about.jpg";

const Section: React.FC = () => {
  return (
    <section className="bg-light position-relative py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex flex-column align-items-start">
            <img
              className="img-fluid mb-5 d-lg-none"
              src={ABOUT_IMAGE.src}
              alt=""
            />
            <h2 className="display-6 mb-4 fw-bold">
              Conte com uma equipe que já participou da análise de mais de R$
              50,0 bilhões em crédito
            </h2>
            <p className="text-muted mb-4">
              Como parceira de diversas instituições financeiras, oferecemos um
              serviço personalizado que permite comparar taxas de juros e demais
              condições disponíveis em vários bancos, de forma que podemos
              oferecer a solução de crédito mais interessante para você.
            </p>
            <p className="text-muted mb-4">
              Conheça todos os nossos serviços e entenda como a Ostrya Capital
              pode auxiliar você e sua empresa.
            </p>
          </div>
          <div
            className="d-none d-lg-block position-absolute top-0 end-0 h-100"
            style={{
              width: "50%",
              backgroundImage: `url('${ABOUT_IMAGE.src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section;
