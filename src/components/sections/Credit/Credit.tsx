import React from "react";
import styles from "./Credit.module.css";
import FOR_YOU from "@/assets/img/credit/for-you.png";

const FeaturesSection: React.FC = () => {
  return (
    <section className="pt-60 bg-light  overflow-hidden">
      <div className="container">
        <div
          className="border-start lead ps-4 border-3 mb-5"
          style={{ maxWidth: "900px" }}
        >
          <h2 className="display-5  mb-4 fw-bold">Para Você</h2>
          <p className="lead">
            Soluções de Crédito Personalizadas para Pessoas Físicas:
            Financiamentos e Linhas de Crédito com Garantia, Desenvolvidas para
            Atender às Suas Necessidades de Aquisição, Reestruturação e
            Crescimento Patrimonial.
          </p>
        </div>

        <div
          style={{
            backgroundImage: `url(${FOR_YOU.src})`,
            height: "400px",
            backgroundSize: "cover",
          }}
          className="d-block d-lg-none"
        ></div>

        <div
          style={{
            backgroundImage: `url(${FOR_YOU.src})`,
            height: "700px",
            backgroundSize: "cover",
          }}
          className="d-none d-lg-block"
        ></div>

        <div className="row my-5">
          <div className="col-12 col-lg-4 mb-4">
            <div>
              <h2>Financiamento de Veículo</h2>
              <p className="fs-5">
                Linhas de crédito para aquisição de veículos novos e usados,
                incluindo veículos leves, utilitários, caminhões e motocicletas.
                Prazos de até 60 meses e financiamento de até 80% do valor.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div>
              <h2>Financiamento Imobiliário</h2>
              <p className="fs-5">
                Crédito destinado à compra, construção ou reforma de imóveis
                residenciais e comerciais. Prazos longos e taxas atrativas para
                aquisição de imóveis ou melhorias.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div>
              <h2>Crédito com Garantia de Imóvel ou Veículo</h2>
              <p className="fs-5">
                Utilize um imóvel ou veículo como garantia para obter valores
                maiores e taxas mais competitivas. Ideal para consolidar dívidas
                ou investir em novos projetos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
