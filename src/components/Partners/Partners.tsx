import React, { useState } from "react";
import styles from "@/components/Partners/Partners.module.css";
import Image from "next/image";
import { PARTNER_01 } from "@/constants/images.c";

interface Partner {
  id: string;
  imageUrl: string;
  title: string;
  descriptions: string[];
}

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  isFlipping: boolean; // Estado de virada
  isActive: boolean; // Estado ativo
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  isFlipping,
  isActive,
}) => (
  <div
    className={`${styles.card} ${isFlipping ? styles.flipping : ""} ${
      isActive ? styles.active : ""
    }`}
  >
    <div className={styles.Box}>
      <Image src={imageUrl} alt={title} />
    </div>
    <div className={styles.details}>
      <h2>{title}</h2>
      <p>{description}</p>
      <i className="fal fa-whatsapp"></i>
    </div>
  </div>
);

const CardContainer: React.FC = () => {
  const partnersData: Partner[] = [
    {
      id: "1",
      imageUrl: PARTNER_01,
      title: "Geile Aline Lüttjohann",
      descriptions: [
        "Bacharel em Direito pela UNISINOS...",
        "Especialização em Direito Empresarial e Direito Bancário...",
      ],
    },
    {
      id: "2",
      imageUrl: PARTNER_01,
      title: "Jane Doe",
      descriptions: [
        "Profissional com experiência em marketing digital.",
        "Focada em estratégias de crescimento de negócios.",
      ],
    },
    // Adicione mais partners aqui
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const totalPages = partnersData.length;

  const navigatePage = (direction: "next" | "prev") => {
    setIsFlipping(true); // Ativa o estado de virada
    setTimeout(() => {
      setIsFlipping(false); // Reseta a animação de virada
      setCurrentPage((prevPage) =>
        direction === "next"
          ? Math.min(prevPage + 1, totalPages - 1)
          : Math.max(prevPage - 1, 0)
      );
    }, 600); // Duração da animação
  };

  return (
    <div className={styles.container}>
      {partnersData.map((card, index) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.descriptions[0]} // Acesso à primeira descrição
          isFlipping={isFlipping && index === currentPage}
          isActive={index === currentPage}
        />
      ))}
    </div>
  );
};

export default CardContainer;
