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

const Finance: React.FC = () => {
  return (
    <section className={`${styles.financeSection} px-4 mt-60`}>
      <Container>
        <div className={styles.financeGrid}>
          <div className={styles.content}>
            <span
              className="fw-bold text-highlight text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Consultoria
            </span>
            <h2 className="text-medium text-white">Consultoria Financeira</h2>
            <p className="text-white">
              Nossa consultoria financeira para empresas oferece soluções
              personalizadas para maximizar recursos, estruturar finanças e
              garantir estabilidade a longo prazo. Atuamos com um planejamento
              estratégico que considera o fluxo de caixa, reestruturação de
              dívidas e investimentos, sempre alinhado aos objetivos de
              crescimento sustentável de cada empresa.
            </p>

            {/* Substituição dos itens da lista por ícones e texto */}
            <div className="text-white fs-5 fw-bold">
              <div className={styles.iconText}>
                <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
                <span>
                  Análise Financeira Profunda para decisões fundamentadas.
                </span>
              </div>
              <div className={styles.iconText}>
                <FontAwesomeIcon icon={faChartPie} className={styles.icon} />
                <span>
                  Planejamento Estratégico com foco em expansão segura.
                </span>
              </div>
              <div className={styles.iconText}>
                <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
                <span>Gestão de Riscos para maior segurança patrimonial.</span>
              </div>
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
