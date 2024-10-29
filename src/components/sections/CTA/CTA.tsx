import React from "react";
import { Container, Row } from "react-bootstrap";
import img from "@/assets/img/placeholder/design-alt.png";
import ctaData from "@/data/ctaData.json";

// Componente CTAHeader
const CTAHeader: React.FC = () => (
  <>
    <span className="fs-1 text-highlight">|</span>
    <h2 className="text-medium mb-4 mt-3">{ctaData.header}</h2>
  </>
);

// Componente CTAContent
const CTAContent: React.FC = () => <p>{ctaData.content}</p>;

// Componente CTAButton
const CTAButton: React.FC = () => (
  <a href="" className="btn fw-bold mt-5">
    {ctaData.buttonText}
  </a>
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
