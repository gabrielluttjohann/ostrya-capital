// components/About/Section.tsx
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/components/sections/About/About.module.css";
import { ABOUT_IMAGE_01, ABOUT_IMAGE_02 } from "@/constants/images.c";
import Rellax from "rellax";

interface SectionProps {
  heading: string;
  descriptions: Array<string>;
  buttonText: string;
  img1Src: string;
  img2Src: string;
}

// Componente para exibir a imagem
const ImageStackItem: React.FC<{
  src: string;
  alt: string;
  delay?: number;
  isTop?: boolean;
  isRellax?: boolean;
}> = ({ src, alt, delay = 0, isTop = false, isRellax = false }) => {
  const itemClass = isTop
    ? styles.imageStack__item__top
    : styles.imageStack__item__bottom;

  return (
    <div
      className={`${itemClass} `}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-rellax-speed="2"
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className={`img-fluid ${isRellax ? "rellax" : ""}`}
      />
    </div>
  );
};

// Conteúdo da seção
const content: SectionProps = {
  heading:
    "Conte com uma equipe que já participou da análise de mais de R$ 50,0 bilhões em crédito",
  descriptions: [
    "Como parceira de diversas instituições financeiras, oferecemos um serviço personalizado que permite comparar taxas de juros e demais condições disponíveis em vários bancos, de forma que podemos oferecer a solução de crédito mais interessante para você.",
    "Conheça todos os nossos serviços e entenda como a Ostrya Capital pode auxiliar você e sua empresa.",
  ],
  buttonText: "Fale Com Um Especialista",
  img1Src: ABOUT_IMAGE_01,
  img2Src: ABOUT_IMAGE_02,
};

// Componente principal Section
const Section: React.FC = () => {
  const [isImageNear, setIsImageNear] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rellax = new Rellax(".rellax"); // Inicializando o Rellax

    const handleScroll = () => {
      if (textRef.current && imageRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();

        // Verifica se o texto está próximo da imagem
        const distanceThreshold = window.innerWidth < 768 ? 80 : 100; // Ajuste para telas menores

        if (textRect.top < imageRect.bottom + distanceThreshold) {
          setIsImageNear(true);
        } else {
          setIsImageNear(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      rellax.destroy(); // Limpeza ao desmontar
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.section} ${styles["about-margin"]} animated wow fadeInUp`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className={styles.imageStack} ref={imageRef}>
              <ImageStackItem src={content.img1Src} alt="Imagem 1" isRellax />
              <ImageStackItem
                src={content.img2Src}
                alt="Imagem 2"
                delay={100}
                isTop
              />
            </div>
          </div>
          <div className="col-lg-4 order-lg-1">
            <div
              ref={textRef}
              style={{
                transition: "margin-top 0.3s ease",
                marginTop: isImageNear
                  ? window.innerWidth < 768
                    ? "30px"
                    : "50px"
                  : "0px", // Ajuste a distância em telas menores
              }}
            >
              <h2
                className={styles.heading}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {content.heading}
              </h2>
              {content.descriptions.map((description, index) => (
                <p
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  {description}
                </p>
              ))}
              <p className="my-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="btn btn-primary">
                  {content.buttonText}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
