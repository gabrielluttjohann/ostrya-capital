import React from "react";
import { strategyTexts, strategyFeatures } from "@/data/strategyData"; // Ajuste o caminho conforme necessário

const StrategySection: React.FC = () => {
  return (
    <section className="">
      <div className="bg-light py-5 my-60 ">
        <div className="container-xxl max-w-screen-xl ">
          <div className="row align-items-center ">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold display-5 mb-3 ">
                {strategyTexts.title}
              </h2>
              <p className="text-lg">{strategyTexts.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl max-w-screen-xl">
        <div className="row mt-20">
          <div className="col-lg-12 mx-auto">
            <div className="row g-16">
              {strategyFeatures.map((feature, index) => (
                <div className="col-sm-6 col-md-4" key={index}>
                  <section>
                    <div
                      className="icon icon-lg text-green mb-3"
                      style={{
                        width: "60px", // Ajuste o tamanho do círculo
                        height: "60px", // Ajuste o tamanho do círculo
                        borderRadius: "50%", // Círculo perfeito
                        border: "2px solid #ccc", // Borda circular
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i className={`fas ${feature.iconClass} fa-2x`}></i>
                    </div>
                    <h3 className="h4 fw-bold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </section>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
