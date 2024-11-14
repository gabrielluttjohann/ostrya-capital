import React from "react";
import Slider01 from "@/components/common/Slider01/Slider01";
import teamData from "@/data/teamData.json";
import styles from "./Team.module.css";
import bg from "@/assets/img/placeholder/design-alt.png";
import TEAM_01 from "@/assets/img/team/team-01.png";
import TEAM_02 from "@/assets/img/team/team-02.png";
import { StaticImageData } from "next/image";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

interface SocialLinks {
  facebook?: string;
  linkedin: string;
  twitter?: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  socialLinks: SocialLinks;
  image: StaticImageData;
  descriptions: Array<string>;
}

const teamMembers: TeamMember[] = teamData.members.map((member) => ({
  ...member,
  image: member.id === "01" ? TEAM_01 : TEAM_02,
}));

interface ProfileHighlightProps {
  name: string;
  role: string;
  image: StaticImageData;
  socialLinks: SocialLinks;
  descriptions: Array<string>;
}

const ProfileHighlight: React.FC<ProfileHighlightProps> = ({
  name,
  role,
  image,
  socialLinks,
  descriptions,
}) => {
  return (
    <div className={styles.profileHighlight} style={{ minHeight: "800px" }}>
      <div className={`text-center`}>
        <div className={`${styles.profileImageContainer}`}>
          <img src={image.src} alt={name} className={styles.profileImage} />
        </div>
        <div className={`${styles.cardContent} p-4`}>
          <h4 className="text-dark">{name}</h4>
          <p className="text-primary">{role}</p>
          <ul className={`${styles.descriptionList}`}>
            {descriptions.map((description, index) => (
              <li key={index} className={` ${styles.description}`}>
                {description}
              </li>
            ))}
          </ul>
          <div className={`d-flex justify-content-center`}>
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`mx-2 ${styles.social}`}
              >
                <i className="fab fa-linkedin"></i>
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
    <section id="time" className="container pb-120">
      <div className="row mb-60">
        <div className="col-12 text-center mb-5">
          <h2 className={`${styles.highlightText}`}>{teamData.title}</h2>
          <p className={`text-muted ${styles.description}`}>
            {teamData.description}
          </p>
        </div>
      </div>
      <Slider01
        autoPlayInterval={4000}
        showControls={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1200: { slidesPerView: 2 },
        }}
      >
        {teamMembers.map((member) => (
          <ProfileHighlight
            key={member.id}
            name={member.name}
            role={member.role}
            image={member.image}
            descriptions={member.descriptions}
            socialLinks={member.socialLinks}
          />
        ))}
      </Slider01>
    </section>
  );
};

export default Team;
