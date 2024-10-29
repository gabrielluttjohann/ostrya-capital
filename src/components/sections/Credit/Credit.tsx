import React from "react";
import Card01 from "@/components/common/Card01/Card01";
import Slider01 from "@/components/common/Slider01/Slider01";
import BG_ALT from "@/assets/img/placeholder/design-alt.png";
import SERVICE_01 from "@/assets/img/services/service-01.png";
import SERVICE_02 from "@/assets/img/services/service-02.png";
import SERVICE_03 from "@/assets/img/services/service-03.png";
import SERVICE_04 from "@/assets/img/services/service-04.png";
import SERVICE_05 from "@/assets/img/services/service-05.png";
import SERVICE_06 from "@/assets/img/services/service-06.png";
import SERVICE_07 from "@/assets/img/services/service-07.png";
import SERVICE_08 from "@/assets/img/services/service-08.png";
import SERVICE_09 from "@/assets/img/services/service-09.png";
import SERVICE_10 from "@/assets/img/services/service-10.png";
import SERVICE_11 from "@/assets/img/services/service-11.png";
import creditData from "@/data/creditData.json";
import { StaticImageData } from "next/image";
import styles from "./Credit.module.css";

type CardID =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11";

interface CardData {
  id: CardID;
  title: string;
  content: string;
}

const cardImages: Record<CardID, StaticImageData> = {
  "01": SERVICE_01,
  "02": SERVICE_02,
  "03": SERVICE_03,
  "04": SERVICE_04,
  "05": SERVICE_05,
  "06": SERVICE_06,
  "07": SERVICE_07,
  "08": SERVICE_08,
  "09": SERVICE_09,
  "10": SERVICE_10,
  "11": SERVICE_11,
};

const loadCardData = (data: any[]): CardData[] => {
  return data.map((item) => ({
    id: item.id as CardID,
    title: item.title,
    content: item.content,
  }));
};

const Credit: React.FC = () => {
  const cardsData = loadCardData(creditData.cardsData);

  return (
    <section
      className={`bg-light py-60`}
      style={{ backgroundImage: `url(${BG_ALT.src})` }}
    >
      <div className="container">
        <CreditHeader />
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
    </section>
  );
};

// Componente de Cabeçalho
const CreditHeader: React.FC = () => (
  <div className="text-center">
    <p className="text-highlight fs-1">|</p>
    <h2 className="fw-medium mb-3 mt-0">{creditData.headerTitle}</h2>
    <p className="mb-60">{creditData.headerSubtitle}</p>
  </div>
);

export default Credit;
