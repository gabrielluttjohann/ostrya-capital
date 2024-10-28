import React from "react";
import Image from "next/image"; // se estiver utilizando Next.js
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import img from "@/assets/img/about/about.jpg";
import squares from "@/assets/img/utils/squares.png";

const About: React.FC = () => {
  const data = {
    imgSrc: img,
    altText: "",
    title: "Quem Somos",
    content:
      "Nossa equipe reúne profissionais de alta competência e sólida trajetória no mercado financeiro, com ampla experiência nas áreas comercial, análise de crédito e reestruturação financeira. Combinamos décadas de atuação e conhecimento profundo para oferecer soluções estratégicas e personalizadas aos nossos clientes. Comprometidos com os mais altos padrões de ética e excelência, trabalhamos para proporcionar segurança e valor em cada interação. Conheça nossos sócios e descubra como nossa expertise pode impulsionar seus objetivos financeiros.",
  };
  return (
    <section
      style={{
        backgroundColor: "#F5F5F5",
      }}
    >
      <div className="container px-4">
        <div className={`row align-items-center ${styles.spacing}`}>
          {/* Coluna da Imagem */}
          <div className="col-md-6">
            <Image
              src={data.imgSrc}
              alt={data.altText}
              width={500}
              height={500}
              className="img-fluid"
            />
          </div>

          <div className="col-md-6">
            <div className="pt-4">
              <span
                className="text-uppercase text-highlight fw-bold"
                style={{ letterSpacing: "5px" }}
              >
                QUEM SOMOS
              </span>
            </div>
            <h2 className="mb-4 text-medium mt-0 pt-0">{data.title}</h2>
            <p>{data.content}</p>
            <a href="" className="btn">
              Conheça os Sócios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
