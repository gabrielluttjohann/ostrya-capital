import React from "react";
import styles from "./Solutions.module.css"; // Importando o arquivo CSS Module
import { Card, Col, Row, Container } from "react-bootstrap";
import IMAGE_01 from "@/assets/img/services/service-01.png";
import IMAGE_02 from "@/assets/img/services/service-02.png";
import IMAGE_03 from "@/assets/img/services/service-03.png";

// Componente reutilizável para os cards
interface CustomCardProps {
  title: string;
  text: string;
  image: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, text, image }) => {
  return (
    <Card className={`${styles.customCard} h-100 shadow-sm border-0`}>
      <div
        className={`${styles.cardImage} bg-light`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      ></div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-center fs-4 fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted lead mt-4">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const CardSection: React.FC = () => {
  return (
    <section className={`${styles.cardSection} my-120`}>
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          Outras soluções Customizadas
        </h2>
        <Row xs={1} sm={1} md={2} lg={3} className="g-4">
          <Col>
            <CustomCard
              title="Energia Sustentável: Economize Até 35% na Conta de Luz"
              text="Adote soluções sustentáveis e reduza seus custos com energia elétrica. Nossa proposta ajuda sua empresa a economizar até 35% na conta de luz, promovendo a eficiência energética e contribuindo para o meio ambiente."
              image={IMAGE_01.src}
            />
          </Col>
          <Col>
            <CustomCard
              title="Negociação de Precatório: Agilidade e Segurança no Processo"
              text="Garanta mais agilidade e segurança na negociação de precatórios. Oferecemos um processo transparente e eficiente, assegurando que você possa resolver pendências financeiras de forma rápida e segura."
              image={IMAGE_02.src}
            />
          </Col>
          <Col>
            <CustomCard
              title="Crédito Consignado para seus Funcionários: Vantagem Exclusiva"
              text="Proporcione uma opção de crédito vantajosa e com condições diferenciadas para seus funcionários. Oferecemos uma solução exclusiva, com benefícios que podem melhorar a qualidade de vida da sua equipe."
              image={IMAGE_03.src}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CardSection;
