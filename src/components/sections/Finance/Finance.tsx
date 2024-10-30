import Image from "next/image";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartPie,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import img from "@/assets/img/analysis/analysis.png";
import styles from "./Finance.module.css";
import financeData from "@/data/financeData.json";

// Mapeamento dos ícones
const iconMap = {
  faChartLine,
  faChartPie,
  faShieldAlt,
} as const; // Usando 'as const' para inferir tipos literais

// Obtenha as chaves do objeto iconMap
type IconKey = keyof typeof iconMap;

const IconText: React.FC<{ icon: IconKey; text: string }> = ({
  icon,
  text,
}) => (
  <div className={styles.iconText}>
    <FontAwesomeIcon icon={iconMap[icon]} className={styles.icon} />
    <span>{text}</span>
  </div>
);

const Finance: React.FC = () => {
  const { title, description, consultingLabel, iconTexts } = financeData;

  return (
    <section id="consultoria-financeira" className={`${styles.financeSection} px-4 my-120`}>
      <Container>
        <div className={styles.financeGrid}>
          <div className={styles.content}>
            <span
              className="fw-bold text-highlight text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              {consultingLabel}
            </span>
            <h2 className="text-medium text-white">{title}</h2>
            <p className="text-white">{description}</p>

            <div className="text-white fs-5 fw-bold">
              {iconTexts.map((item, index) => (
                <IconText
                  key={index}
                  icon={item.icon as IconKey}
                  text={item.text}
                />
              ))}
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={img}
              alt="Consultoria Financeira"
              height={500}
              className="w-100"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Finance;
