import React from "react";
import styles from "@/components/sections/Analysis/Analysis.module.css";

// Componente principal About
const About: React.FC = () => {
  return (
    <div className={`container-xxl ${styles.about} rounded my-5`}>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6"></div>
          <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white rounded-top p-5 mt-lg-5">
              <p className="px-2 d-inline-block fs-5 fw-medium text-green border rounded-pill">
                Análise
              </p>
              <h2 className="display-6 mb-4">
                Análise de Viabilidade de Projetos de Investimento
              </h2>
              <p className="mb-4">
                Nosso serviço de análise de viabilidade de projetos de
                investimento oferece uma avaliação completa para garantir que as
                suas decisões estratégicas sejam bem fundamentadas.
              </p>
              <p>
                Contamos com uma equipe especializada que estuda detalhadamente
                as perspectivas de novos projetos de investimentos (expansões,
                abertura de filiais, aquisição de máquinas e equipamentos,
                renovação de frotas, entre outros), bem como, a captação de
                recursos para o financiamento desses projetos.
              </p>
              <p>
                A análise de viabilidade de projetos de investimento é essencial
                para empresas que buscam crescer de maneira sustentável e com
                segurança, avaliando todos os riscos e retornos financeiros
                envolvidos antes de tomar decisões relevantes. Oferecemos uma
                visão clara e objetiva, possibilitando que você tenha todas as
                informações necessárias para conduzir o seu negócio e tomar
                decisões com confiança.
              </p>
              <a className="btn btn-secondary rounded-pill py-3 px-5" href="">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
