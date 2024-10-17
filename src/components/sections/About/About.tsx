import React from "react";
import Image from "next/image";
import styles from "@/components/sections/About/About.module.css";
import { ABOUT_IMAGE_01, ABOUT_IMAGE_02 } from "@/constants/images.c";
import SplitScreen from "@/layouts/SplitScreen/SplitScreen";

// Interface para as propriedades da seção
interface SectionProps {
  heading: string;
  descriptions: Array<string>;
  buttonText: string;
  img1Src: string;
  img2Src: string;
}

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

// Componente para exibir a imagem
const ImageStackItem: React.FC<{ src: string; alt: string }> = ({
  src,
  alt,
}) => (
  <div className={`${styles.imageStackItem} ${styles.aboutMargin}`}>
    <Image src={src} alt={alt} width={500} height={500} className="img-fluid" />
  </div>
);

// Componente de conteúdo
const Content: React.FC = () => (
  <div className="d-flex flex-column align-items-center">
    <h2 className={styles.heading} data-aos="fade-up" data-aos-delay="100">
      {content.heading}
    </h2>
    {content.descriptions.map((description, index) => (
      <p key={index} data-aos="fade-up">
        {description}
      </p>
    ))}
  </div>
);

// Componente principal Section
const About: React.FC = () => {
  return (
    <SplitScreen colSizes={[6, 6]} showColumns={[true, true]}>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <Content />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <Image alt="" width={500} height={500} src={content.img1Src} />
      </div>
    </SplitScreen>
  );
};

export default About;
