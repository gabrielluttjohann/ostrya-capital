import React from "react";
import styles from "./Hero.module.css";
import { Container, Row } from "react-bootstrap";

const cardData = [
  {
    title: "Crédito",
    text: "Oferecemos soluções de crédito flexíveis para atender às diversas necessidades de pessoas físicas e jurídicas.",
    iconClass: "fas fa-money-check-alt",
  },
  {
    title: "Consultoria Financeira",
    text: "Auxiliamos empresas na organização e otimização de suas finanças, promovendo segurança e crescimento patrimonial.",
    iconClass: "fas fa-chart-line",
  },
  {
    title: "Consultoria de Investimentos",
    text: "Elaboramos estratégias personalizadas de investimentos, alinhadas aos objetivos e perfil de cada cliente.",
    iconClass: "fas fa-coins",
  },
];

const socialLinks = [
  { href: "#", iconClass: "fab fa-facebook-f", alt: "Facebook" },
  { href: "#", iconClass: "fab fa-twitter", alt: "Twitter" },
  { href: "#", iconClass: "fab fa-linkedin-in", alt: "LinkedIn" },
  { href: "#", iconClass: "fab fa-instagram", alt: "Instagram" },
];

const contentData = {
  title:
    "Conte com uma equipe que já participou da análise de mais de R$ 50,0 bilhões em crédito",
  description:
    "Como parceira de diversas instituições financeiras, oferecemos um serviço personalizado que permite comparar taxas de juros e demais condições disponíveis em vários bancos, de forma que podemos oferecer a solução de crédito mais interessante para você. Conheça todos os nossos serviços e entenda como a Ostrya Capital pode auxiliar você e sua empresa.",
  buttonText: "Fale Agora Com um Especialista",
};

const MobileCards: React.FC = () => (
  <Container className={` mt-60 px-4 ${styles.outCardContainer}`}>
    <Row>
      {cardData.map((card, index) => (
        <div key={index} className="col-12 g-3">
          <div className={`card ${styles.customCardMobile}`}>
            <div
              className="card-body d-flex flex-column"
              style={{ height: "100%" }}
            >
              <div className={`${styles.cardTitleContainer} `}>
                <div className={`${styles.circle}`}>
                  <i className={`${card.iconClass} ${styles.cardIcon} fs-3`} />
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {card.title}
                  </h5>
                </div>
              </div>
              <p className={`card-text ${styles.colorLight}`}>{card.text}</p>
              <div className={styles.bottomBorder}></div>
            </div>
          </div>
        </div>
      ))}
    </Row>
  </Container>
);

const DesktopCards: React.FC = () => (
  <div
    className={`position-absolute start-50 translate-middle-x my-60 px-3 ${styles.cardContainer}`}
  >
    <Row>
      {cardData.map((card, index) => (
        <div key={index} className="col-md-4 g-0">
          <div className={`card ${styles.customCard}`}>
            <div
              className="card-body px-5 d-flex flex-column"
              style={{ height: "100%" }}
            >
              <div className={`${styles.cardTitleContainer}`}>
                <div className={`${styles.circle} mb-3`}>
                  <i className={`${card.iconClass} ${styles.cardIcon} fs-3`} />
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {card.title}
                  </h5>
                </div>
              </div>
              <p className={`color-light ${styles.cardParagraph}`}>
                {card.text}
              </p>
              <div className={styles.bottomBorder}></div>
            </div>
          </div>
        </div>
      ))}
    </Row>
  </div>
);

const HeroContent: React.FC = () => {
  return (
    <div className="offset-lg-4 offset-xl-5 pt-12 pb-12 px-4">
      <div className="mb-12 mb-lg-16">
        <h1
          className="mb-3 display-5 text-white text-medium my-4 pt-120"
          style={{ letterSpacing: "-1px" }}
        >
          {contentData.title}
        </h1>
        <p className="mb-4 text-white">{contentData.description}</p>
        <div className="my-60">
          <a className={`${styles.btn} fw-bold`} href="#">
            {contentData.buttonText}
          </a>
        </div>

        <div className="d-flex justify-content-start my-4 pb-120">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              className="mx-2"
              aria-label={link.alt}
            >
              <i
                className={`${link.iconClass} ${styles.iconClass}`}
                style={{ fontSize: "24px", color: "#000" }}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <>
      <section className={styles.background}>
        <div className={` ${styles.heroSection}`}>
          <div className="container d-flex flex-column justify-content-center position-relative h-100">
            <HeroContent />
          </div>
          <DesktopCards />
        </div>
      </section>
      <MobileCards />
    </>
  );
};

export default Hero;
