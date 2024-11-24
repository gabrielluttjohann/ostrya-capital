// components/ResourceFunding.tsx
import React from "react";
import RESOURCES_IMAGE from "@/assets/img/resources/resources.png";

const Resources: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-medium">
          Transforme Sua Ideia em Realidade
        </h2>
        <p className="lead">
          Captação de Recursos e Elaboração de Projetos de Alto Impacto
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="">
          <p className="text-muted">
            Na <strong>Ostrya</strong>, ajudamos empresas, empreendedores e
            instituições a acessar recursos subsidiados e linhas de
            financiamento específicas para projetos que promovem crescimento
            sustentável, inovação e impacto social. Nossa equipe é especializada
            em identificar oportunidades e transformar ideias em projetos
            financiáveis.
          </p>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="fs-2 text-center">Nossos Serviços</h2>
        <div className="row align-items-center mt-4">
          <div className="d-none d-md-block col-md-6 text-center">
            <img
              src={RESOURCES_IMAGE.src}
              alt="Nossos serviços ilustrados"
              className="img-fluid order-2 order-md-1"
            />
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <ul>
              <li className="">
                <h5 className="lead m-0 fw-bold">
                  Captação de Recursos Subsidiados
                </h5>
                <p>
                  Identificamos editais e programas de fomento que melhor se
                  adequam às suas necessidades.
                </p>
              </li>
              <li className="">
                <h5 className="lead m-0 fw-bold">
                  Elaboração de Projetos Técnicos
                </h5>
                <p>
                  Desenvolvemos projetos estratégicos com foco em inovação,
                  sustentabilidade e alto impacto.
                </p>
              </li>
              <li className="mb-3">
                <h5 className="lead  m-0 fw-bold">Gestão e Acompanhamento</h5>
                <p>
                  Auxiliamos no cumprimento de requisitos e acompanhamento das
                  fases do projeto.
                </p>
              </li>
              <li>
                <h5 className="lead m-0 fw-bold">
                  Consultoria em Programas Governamentais
                </h5>
                <p>
                  Orientamos sobre incentivos fiscais, financiamentos e linhas
                  de crédito subsidiado.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-block text-center">
          <img
            src={RESOURCES_IMAGE.src}
            alt="Nossos serviços ilustrados"
            className="d-md-none img-fluid "
          />
        </div>
      </div>

      <div className="mb-5">
        <h2 className="fs-2 text-center">Como Funciona?</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4 text-center">
            <h5 className="lead fw-bold">Diagnóstico Gratuito</h5>
            <p>
              Avaliamos suas necessidades e verificamos sua elegibilidade para
              recursos subsidiados.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <h5 className="lead fw-bold">Estratégia Personalizada</h5>
            <p>
              Construímos o projeto ideal para você e conectamos às melhores
              fontes de financiamento.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <h5 className="lead fw-bold">Acompanhamento Completo</h5>
            <p>
              Desde a elaboração até a prestação de contas, você tem suporte em
              todas as etapas.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://wa.me/5551999984375"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Entre em Contato Agora
        </a>
      </div>
    </div>
  );
};

export default Resources;
