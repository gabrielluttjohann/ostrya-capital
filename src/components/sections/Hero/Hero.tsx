import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { HERO_IMAGE } from "@/constants/images.c";

const HeroContent: React.FC<{ title: string; paragraph: string }> = ({
  title,
  paragraph,
}) => (
  <div className="col-lg-5">
    <h1 className={styles.heading} data-aos="fade-up">
      {title}
    </h1>
    <p className="mb-5" data-aos="fade-up">
      {paragraph}
    </p>
  </div>
);

const HeroImage: React.FC = () => (
  <div className="img-bg rellax">
    <Image
      src={HERO_IMAGE}
      alt="Imagem Principal do site."
      className="img-fluid"
    />
  </div>
);

const HeroSection: React.FC = () => {
  const content = {
    title: "Bem-Vindo à Ostrya Capital",
    paragraph: "Conheça as nossas soluções financeiras",
  };
  return (
    <div className={`${styles.hero} overlay`}>
      <HeroImage />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center justify-content-start">
          <HeroContent title={content.title} paragraph={content.paragraph}/>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC = () => <HeroSection />;

export default Hero;
