import React from "react";
import { Carousel } from "react-bootstrap"; // Importando o Carousel do React Bootstrap
import styles from "./Partners.module.css";
import TEAM_01 from "@/assets/img/team/team-01.png";
import TEAM_02 from "@/assets/img/team/team-02.png";
import bg from "@/assets/img/placeholder/design-alt.png"

// Definindo os tipos para os membros da equipe
interface SocialLinks {
  facebook: string;
  linkedin: string;
  twitter: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jorge Ferreira",
    role: "",
    image: TEAM_01.src,
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Geile Aline Lüttjohann",
    role: "",
    image: TEAM_02.src,
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

// Definindo os tipos para as props do Card
interface CardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
}

const Card: React.FC<CardProps> = ({ name, role, image, socialLinks }) => {
  return (
    <div className={`d-flex justify-content-center`} style={{ backgroundImage: `url(${bg.src})`}}>
      <div
        className={`bg-white ${styles.card}`}
        style={{ width: "386px", height: "576px" }}
      >
        <img
          src={image}
          className={`${styles.card}`}
          alt={name}
          style={{ width: "386px", height: "386px", objectFit: "cover" }} // Aumentei a altura da imagem
        />
        <div className="px-4 text-center" style={{ height: "150px" }}>
          <h5>{name}</h5>
          <p>{role}</p>
          <div className="d-flex justify-content-center">
            <a href={socialLinks.facebook} className="mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={socialLinks.linkedin} className="mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={socialLinks.twitter} className="mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="fw-bold mb-3">Conheça Nossa Equipe</h2>
          <p className="text-muted">
            Nossa equipe é composta por profissionais dedicados e apaixonados
            pelo que fazem. Cada um deles traz uma riqueza de experiências e
            conhecimentos, prontos para ajudar a transformar seus desafios em
            soluções. Explore os perfis abaixo e conheça um pouco mais sobre os
            sócios que estão à frente do nosso trabalho.
          </p>
          <a href="#" className="btn">
            Conheça o Time →
          </a>
        </div>
      </div>
      <Carousel>
        {teamMembers.map((member, index) => (
          <Carousel.Item key={index}>
            <Card
              name={member.name}
              role={member.role}
              image={member.image}
              socialLinks={member.socialLinks}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>{`
        .carousel-control-prev,
        .carousel-control-next {
          background-color: black; /* Altera a cor de fundo dos botões */
          border-radius: 50%; /* Opcional: adiciona bordas arredondadas */
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: black; /* Altera a cor dos ícones */
        }
      `}</style>
    </div>
  );
};

export default Team;
