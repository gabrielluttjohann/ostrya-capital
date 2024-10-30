import React from "react";
import { Container, Row } from "react-bootstrap";
import img from "@/assets/img/placeholder/design-alt.png";
import ctaData from "@/data/ctaData.json";

// Função de rolagem suave com offset para a seção "Team"
const scrollToTeam = () => {
  const teamSection = document.getElementById("time");
  const offset = 86; // Ajuste este valor conforme necessário

  if (teamSection) {
    const topPosition =
      teamSection.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: "smooth" });
  }
};

// Componente CTAHeader
const CTAHeader: React.FC = () => (
  <>
    <span className="fs-1 text-highlight">|</span>
    <h2 className="text-medium mb-4 mt-3">{ctaData.header}</h2>
  </>
);

// Componente CTAContent
const CTAContent: React.FC = () => <p>{ctaData.content}</p>;

// Componente CTAButton com rolagem suave e offset
const CTAButton: React.FC = () => (
  <button onClick={scrollToTeam} className="btn fw-bold mt-5">
    {ctaData.buttonText}
  </button>
);

// Componente principal CTA
const CTA: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${img.src})` }}
      className="bg-light py-60"
    >
      <Container>
        <Row>
          <div className="text-center px-4">
            <CTAHeader />
            <CTAContent />
            <CTAButton />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CTA;
