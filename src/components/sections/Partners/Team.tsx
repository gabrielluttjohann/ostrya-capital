import React from "react";
import Slider01 from "@/components/common/Slider01/Slider01"; // Ajuste o caminho conforme necessário
import teamData from "@/data/teamData.json"; // Altere para o caminho correto
import styles from "./Team.module.css";

import bg from "@/assets/img/placeholder/design-alt.png";
// Importando imagens dos membros da equipe
import TEAM_01 from "@/assets/img/team/team-01.png";
import TEAM_02 from "@/assets/img/team/team-02.png";
import { StaticImageData } from "next/image";

// Definindo os tipos para os links sociais
interface SocialLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
}

// Definindo os tipos para os membros da equipe
interface TeamMember {
  id: string;
  name: string;
  role: string;
  socialLinks: SocialLinks;
  image: StaticImageData;
}

// Mapeando os membros da equipe com as imagens correspondentes
const teamMembers: TeamMember[] = teamData.members.map((member) => ({
  ...member,
  image: member.id === "01" ? TEAM_01 : TEAM_02, // Atribuindo a imagem com base no ID
}));

// Definindo os tipos para as props do Card
interface CardProps {
  name: string;
  role: string;
  image: StaticImageData; // Mudando o tipo para StaticImageData
  socialLinks: SocialLinks;
}

const Card: React.FC<CardProps> = ({ name, role, image, socialLinks }) => {
  return (
    <div
      className={`d-flex justify-content-center`}
      style={{ background: `url(${bg.src})`, padding: "20px" }} // Adicionando padding
    >
      <div
        className={`bg-white ${styles.card}`}
        style={{ width: "368px", height: "576px" }}
      >
        <img
          src={image.src}
          className={`${styles.card}`}
          alt={name}
          style={{ width: "100%", height: "386px", objectFit: "cover" }} // Ajustando o tamanho da imagem
        />
        <div className="px-4 text-center" style={{ height: "150px" }}>
          <h5>{name}</h5>
          <p>{role}</p>
          <div className="d-flex justify-content-center">
            <a href={socialLinks.linkedin} className="mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="container pb-120">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <p className="fs-1 text-highlight">|</p>
          <h2 className="text-medium mb-3">{teamData.title}</h2>
          <p className="text-muted">{teamData.description}</p>
        </div>
      </div>
      <Slider01
        autoPlayInterval={3000}
        showControls={false}
        breakpoints={{
          0: {
            slidesPerView: 1, // 1 card em telas menores que 768px
          },
          768: {
            slidesPerView: 2, // 2 cards em telas de 768px ou maiores
          },
        }}
      >
        {teamMembers.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            socialLinks={member.socialLinks}
          />
        ))}
      </Slider01>
      <style jsx>{`
        /* Estilos do slider (opcional) */
      `}</style>
    </div>
  );
};

export default Team;
