import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./About.module.css";
import data from "@/data/aboutData.json";
import aboutImage from "@/assets/img/about/about.jpg";

const About: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container px-4">
        <div className={`row align-items-center ${styles.spacing}`}>
          <ImageColumn imgSrc={aboutImage} altText={data.altText} />
          <ContentColumn title={data.title} content={data.content} />
        </div>
      </div>
    </section>
  );
};

const ImageColumn: React.FC<{ imgSrc: StaticImageData; altText: string }> = ({
  imgSrc,
  altText,
}) => {
  return (
    <div className="col-md-6">
      <Image
        src={imgSrc}
        alt={altText}
        width={500}
        height={500}
        className="img-fluid"
        
      />
    </div>
  );
};

// Componente para a Coluna de Conteúdo
const ContentColumn: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="col-md-6">
      <div className="pt-4">
        <span
          className="text-uppercase text-highlight fw-bold"
          style={{ letterSpacing: "5px" }}
        >
          QUEM SOMOS
        </span>
      </div>
      <h2 className="mb-4 text-medium mt-0 pt-0">{title}</h2>
      <p>{content}</p>
      <a href="" className="btn">
        Conheça os Sócios
      </a>
    </div>
  );
};

export default About;
