import React from "react";
import styles from "./Hero.module.css";
import BackgroundImage from "@/components/common/background/BackgroundImage";
import { HERO_IMAGE } from "@/constants/images.c";

const HeroContent: React.FC<{ title: string; paragraph: string }> = ({
  title,
  paragraph,
}) => (
  <div className="col-lg-5 text-white " style={{ zIndex: 2 }}>
    <h1 className={`${styles.heading} fw-bold display-4`} data-aos="fade-up">
      {title}
    </h1>
    <p className=" text-white" data-aos="fade-up">
      {paragraph}
    </p>
  </div>
);

const HeroSection: React.FC = () => {
  const content = {
    title: "Bem-Vindo à Ostrya Capital",
    paragraph: "Conheça as nossas soluções financeiras",
  };
  return (
    <BackgroundImage imageSrc={HERO_IMAGE} alt="">
      <HeroContent title={content.title} paragraph={content.paragraph} />
    </BackgroundImage>
  );
};

const Hero: React.FC = () => <HeroSection />;

export default Hero;
