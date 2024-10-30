import React from "react";
import Card01 from "@/components/common/Card01/Card01";
import Slider01 from "@/components/common/Slider01/Slider01";
import BG_ALT from "@/assets/img/placeholder/design-alt.png";
import HELP_IMAGE_01 from "@/assets/img/assistance/help-1.png";
import HELP_IMAGE_02 from "@/assets/img/assistance/help-2.png";
import HELP_IMAGE_03 from "@/assets/img/assistance/help-3.png";
import HELP_IMAGE_04 from "@/assets/img/assistance/help-4.png";
import styles from "./Assistance.module.css";
import assistanceData from "@/data/assistanceData.json";
import { StaticImageData } from "next/image";

// Definindo o tipo específico de IDs
type CardID = "01" | "02" | "03" | "04";

// Definindo o tipo do card data
interface CardData {
  id: CardID;
  title: string;
  content: string;
}

// Mapeamento de IDs para imagens
const cardImages: Record<CardID, StaticImageData> = {
  "01": HELP_IMAGE_01,
  "02": HELP_IMAGE_02,
  "03": HELP_IMAGE_03,
  "04": HELP_IMAGE_04,
};

// Função que faz o casting do JSON para o tipo correto
const loadCardData = (data: any[]): CardData[] => {
  return data.map((item) => ({
    id: item.id as CardID,
    title: item.title,
    content: item.content,
  }));
};

const Assistance: React.FC = () => {
  const cardsData = loadCardData(assistanceData);

  return (
    <div id="credito"
      className={`bg-light py-60 ${styles.spacing}`}
      style={{ backgroundImage: `url(${BG_ALT.src})` }}
    >
      <div className="container">
        <div className="text-center">
          <p className="text-highlight fs-1">|</p>
          <br />
          <p className="text-highlight fw-bold p-0 m-0">C R É D I T O</p>
          <h2 className="text-center fw-medium mb-3 mt-0">Acesso ao Crédito</h2>
          <p className="mb-4">Como podemos facilitar seu acesso ao crédito?</p>
        </div>
      </div>

      <Slider01 autoPlayInterval={3000} showControls={false}>
        {cardsData.map((cardData) => (
          <div key={cardData.id}>
            <Card01
              id={cardData.id}
              imageSrc={cardImages[cardData.id]} 
              title={cardData.title}
              content={cardData.content}
            />
          </div>
        ))}
      </Slider01>
    </div>
  );
};

export default Assistance;
