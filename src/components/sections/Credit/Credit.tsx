import React from "react";
import Image from "next/image";
import FOR_YOU_IMAGE from "@/assets/img/credit/for-you.png";
import styles from "./Credit.module.css";

interface FeatureProps {
  title: string;
  description: string;
  linkHref: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, linkHref }) => {
  return (
    <div className="mb-4">
      <div className="my-4 d-flex align-items-center justify-content-between">
        <h3 className="h4 fw-bold">{title}</h3>
      </div>
      <div>
        <p className="text-muted lead">{description}</p>
      </div>
      <div className="border"></div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-light py-5 overflow-hidden">
      <div className="container">
        <div
          className="border-start lead ps-4 border-3 mb-60"
          style={{ maxWidth: "900px" }}
        >
          <h2 className="display-5 mb-4 fw-bold">Para Você</h2>
          <p>
            Soluções de Crédito Personalizadas para Pessoas Físicas:
            Financiamentos e Linhas de Crédito com Garantia, Desenvolvidas para
            Atender às Suas Necessidades de Aquisição, Reestruturação e
            Crescimento Patrimonial
          </p>
        </div>

        <div className={`row align-items-center mb-5 ${styles.imgResponsive}`}>
          <div className="col-12  order-lg-1">
            <div className="d-flex justify-content-center">
              <Image
                className="position-relative w-100 img-fluid"
                src={FOR_YOU_IMAGE}
                alt="Team"
                layout="fill"
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/500x300.png"
              />
            </div>
          </div>
          {/* Conteúdo (com tamanho fixo ao lado da imagem em desktop e embaixo no mobile) */}
          <div className="col-12  order-lg-2 my-5">
            <div>
              <Feature
                title="Financiamento de Veículo"
                description="Linhas de crédito para aquisição de veículos novos e usados, incluindo veículos leves, utilitários, caminhões e motocicletas. Oferece prazos de pagamento de até 60 meses, financiando até 80% do valor do veículo, com condições especiais para diferentes tipos de veículos."
                linkHref="#"
              />
              <Feature
                title="Financiamento Imobiliário"
                description="Crédito destinado à compra, construção ou reforma de imóveis residenciais e comerciais, com opções de prazos longos e taxas atrativas para pessoas físicas e jurídicas que desejam adquirir seu imóvel ou realizar melhorias."
                linkHref="#"
              />
              <Feature
                title="Crédito com Garantia de Imóvel ou Veículo"
                description="Linha de crédito que utiliza um imóvel ou veículo como garantia para obtenção de valores maiores e taxas mais competitivas. Ideal para consolidar dívidas, investir em novos projetos ou obter capital para diversas finalidades pessoais ou empresariais."
                linkHref="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
