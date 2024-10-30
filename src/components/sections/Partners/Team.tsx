import React from "react";
import Slider01 from "@/components/common/Slider01/Slider01";
import teamData from "@/data/teamData.json";
import styles from "./Team.module.css";
import bg from "@/assets/img/placeholder/design-alt.png";
import TEAM_01 from "@/assets/img/team/team-01.png";
import TEAM_02 from "@/assets/img/team/team-02.png";
import { StaticImageData } from "next/image";

// Definindo os tipos para os links sociais, tornando facebook e twitter opcionais
interface SocialLinks {
  facebook?: string;
  linkedin: string;
  twitter?: string;
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
  image: member.id === "01" ? TEAM_01 : TEAM_02,
}));

// Definindo os tipos para as props do Card
interface CardProps {
  name: string;
  role: string;
  image: StaticImageData;
  socialLinks: SocialLinks;
}

const Card: React.FC<CardProps> = ({ name, role, image, socialLinks }) => {
  return (
    <div
      className={`d-flex justify-content-center`}
      style={{ background: `url(${bg.src})`, padding: "20px" }}
    >
      <div
        className={`bg-white ${styles.card}`}
        style={{ width: "368px", height: "576px" }}
      >
        <img
          src={image.src}
          className={`${styles.card}`}
          alt={name}
          style={{ width: "100%", height: "386px", objectFit: "cover" }}
        />
        <div className="px-4 text-center" style={{ height: "150px" }}>
          <h5>{name}</h5>
          <p>{role}</p>
          <div className="d-flex justify-content-center">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div id="time" className="container pb-120">
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
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
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
    </div>
  );
};

export default Team;
