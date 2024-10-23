import { StaticImageData } from "next/image";
import styles from "./Card01.module.css";

interface CardProps {
  id: string | number;
  imageSrc: StaticImageData;
  title: string;
  content: string;
}

const Card01: React.FC<CardProps> = ({ id, imageSrc, content, title }) => (
  <div
    className={`card ${styles.card}`}
    style={{ backgroundImage: `url(${imageSrc.src})` }}
  >
    <div className={styles.overlay} />
    <div className={styles.cardContent}>
      <h5 className={`text-white text-extrabold ${styles.cardTitle}`}>
        <span className={`${styles.cardId} `}>{id}</span> <br />
        {title}
      </h5>
      <p className={`${styles.cardDescription} text-white`}>{content}</p>
    </div>
  </div>
);

export default Card01;
