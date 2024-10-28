import { Container, Row } from "react-bootstrap";
import img from "@/assets/img/placeholder/design-alt.png";

const CTA2: React.FC = () => {
  return (
    <section style={{ backgroundImage: `url(${img.src})` }} className="bg-light py-60">
      <Container>
        <Row>
          <div className="text-center  px-4">
            <span className="fs-1 text-highlight">|</span>
            <h2 className="text-medium mb-4 mt-3">
              Fale com um de nossos especialistas
            </h2>
            <p>
              {" "}
              Fale com um de nossos especialistas e descubra as melhores
              soluções para suas necessidades financeiras.
            </p>
            <a href="" className="btn fw-bold mt-5">
              Fale agora com um especialista
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CTA2;
