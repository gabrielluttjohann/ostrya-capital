import { useState, useEffect } from "react";

const sections = [
  {
    id: "personal",
    title: "Para Você",
    description:
      "Soluções de financiamento para atender suas necessidades pessoais.",
    items: [
      "Financiamento Imobiliário",
      "Crédito com Garantia de Imóvel",
      "Crédito com Garantia de Veículo",
      "Financiamento de Veículo",
      "Crédito Consignado Privado",
    ],
  },
  {
    id: "business",
    title: "Para Sua Empresa",
    description: "Soluções financeiras específicas para o seu negócio.",
    items: [
      "Conta corrente",
      "Cartão de crédito",
      "Desconto de recebíveis",
      "Capital de giro",
      "CDC máquinas e equipamentos",
      "Financiamento de frota",
      "Leasing",
      "Câmbio",
    ],
  },
  {
    id: "agro",
    title: "Para o Agronegócio",
    description: "Financiamentos voltados para o desenvolvimento agrícola.",
    items: [
      "Custeio",
      "Investimento",
      "Comercialização",
      "Cédula de Produto Rural",
      "Certificado Depósito Agropecuário",
    ],
  },
  {
    id: "other",
    title: "Outras Soluções",
    description:
      "Outras opções financeiras que podem atender suas necessidades.",
    items: [
      "Conta Escrow",
      "Cessão de Precatórios",
      "Cessão de direitos Creditórios",
      "Mercado Livre de Energia",
      "Consórcio",
      "Seguros",
    ],
  },
];

const FinancialSolutions = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  // Faz a troca automática dos slides a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5 bg-green">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-auto d-none d-lg-block">
            <button
              className="btn bg-white d-flex align-items-center justify-content-center p-0"
              style={{ width: "64px", height: "64px" }}
              onClick={() =>
                setSelectedSection(
                  (selectedSection - 1 + sections.length) % sections.length
                )
              }
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.70711 12H18.5C18.7761 12 19 12.2239 19 12.5C19 12.7761 18.7761 13 18.5 13H8.70711L11.8536 16.1464C12.0488 16.3417 12.0488 16.6583 11.8536 16.8536C11.6583 17.0488 11.3417 17.0488 11.1464 16.8536L7.14645 12.8536C6.95118 12.6583 6.95118 12.3417 7.14645 12.1464L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L8.70711 12Z"
                  fill="#1C1917"
                />
              </svg>
            </button>
          </div>

          <div className="col-12 col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4 text-white">
              {sections[selectedSection].title}
            </h2>
            <p className="text-white">
              {sections[selectedSection].description}
            </p>
            <div className="lead">
              <div className="d-flex flex-column align-items-center justify-content-center">
                {sections[selectedSection].items.map((item, index) => (
                  <div className="col-md-6 text-start" key={index}>
                    <i className="fas fa-check text-white me-2"></i>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-auto d-none d-lg-block">
            <button
              className="btn bg-white d-flex align-items-center justify-content-center p-0"
              style={{ width: "64px", height: "64px" }}
              onClick={() =>
                setSelectedSection((selectedSection + 1) % sections.length)
              }
            >
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2929 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H17.2929L14.1464 8.85355C13.9512 8.65829 13.9512 8.34171 14.1464 8.14645C14.3417 7.95118 14.6583 7.95118 14.8536 8.14645L18.8536 12.1464C19.0488 12.3417 19.0488 12.6583 18.8536 12.8536L14.8536 16.8536C14.6583 17.0488 14.3417 17.0488 14.1464 16.8536C13.9512 16.6583 13.9512 16.3417 14.1464 16.1464L17.2929 13Z"
                  fill="#1C1917"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSolutions;
