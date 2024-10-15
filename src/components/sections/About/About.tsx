import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/components/sections/About/About.module.css";
import { ABOUT_IMAGE_01, ABOUT_IMAGE_02 } from "@/constants/images.c";
import Rellax from "rellax";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";
import CTAButton from "@/components/common/button/CTAButton/CTAButton";

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
      className={`${itemClass} ${styles.aboutMargin}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      data-rellax-speed="2"
    >
      <div className={`${styles.aboutMargin}`}>
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className={`${styles.aboutMargin} img-fluid ${
            isRellax ? `rellax ` : ""
          }`}
        />
      </div>
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

const Content: React.FC = () => (
  <>
    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
      {content.heading}
    </h2>
    {content.descriptions.map((description, index) => (
      <p key={index} data-aos="fade-up">
        {description}
      </p>
    ))}
    {/* <p className="my-4">
      <CTAButton href="" text={content.buttonText} />
    </p> */}
  </>
);

// Componente principal Section
const About: React.FC = () => {
  const [isImageNear, setIsImageNear] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rellax = new Rellax(".rellax");

    const handleScroll = () => {
      if (textRef.current && imageRef.current) {
        const textRect = textRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();

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
      rellax.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SplitScreen colSizes={[6, 6]} showColumns={[true, true]}>
      <Content />
      <div className={styles.imageStack} ref={imageRef}>
        <ImageStackItem src={content.img1Src} alt="" isRellax />
        <ImageStackItem src={content.img2Src} alt="" delay={100} isTop />
      </div>
    </SplitScreen>
  );
};

export default About;
