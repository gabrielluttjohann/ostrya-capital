import React from "react";

const CallToAction: React.FC = () => {
  const CallToActionCard = ({
    iconClass,
    title,
    description,
  }: {
    iconClass: string;
    title: string;
    description: string;
  }) => {
    return (
      <div className="col-12 col-lg-4 mb-8 mb-lg-0">
        <div className="mw-xs mx-auto text-center">
          <div
            style={{
              width: "60px", // Tamanho do círculo
              height: "60px", // Tamanho do círculo
              backgroundColor: "#f0f0f0", // Cor de fundo do círculo
              borderRadius: "50%", // Círculo perfeito
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem", // Espaçamento abaixo do círculo
              border: "2px solid #ccc", // Borda circular (pode ser ajustada)
              margin: "0 auto", // Alinhamento central
            }}
          >
            <i className={`${iconClass} fa-2x`} aria-hidden="true"></i>
          </div>
          <h5 className="mt-6 mb-2 lh-lg font-heading">{title}</h5>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="py-24 bg-light py-5">
        <div className="container">
          <div className="w-50 mx-auto text-center">
            <h2 className="mb-6 display-5 fw-bold mb-4">
              Reestruturação Financeira Empresarial.
            </h2>
            <p className="mb-6 lh-lg">
              A nossa equipe tem ampla experiência em restruturação financeira
              de empresas, já tendo participado diretamente da recuperação de
              alguns dos maiores grupos econômicos do sul do país, somando mais
              de R$ 3,0 bilhões em crédito restruturado.
            </p>
            <p className="mb-6 lh-lg">
              A experiência nos mostra que a restruturação da empresa é mais
              importante do que apenas a restruturação do crédito, para que seja
              possível recuperar o negócio de forma sustentável.
            </p>
            <a className="btn btn-primary p-3 rounded-pill" href="#">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white my-60">
        <div className="container">
          <div className="row">
            <CallToActionCard
              iconClass="fas fa-handshake"
              title="Negociação de dívidas"
              description="Reestruturação de crédito personalizada"
            />
            <CallToActionCard
              iconClass="fas fa-building"
              title="Intermediação direta com grandes bancos"
              description="Equipes especializadas para intermediação"
            />
            <CallToActionCard
              iconClass="fas fa-chart-line"
              title="Soluções financeiras estratégicas"
              description="Otimização de prazos e taxas"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
