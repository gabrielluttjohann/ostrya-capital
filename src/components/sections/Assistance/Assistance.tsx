import React from "react";
import styles from "./Assistance.module.css";
import { assistances } from "@/data/assistanceData";
import CTAButton from "@/components/common/button/CTAButton/CTAButton";
import { H2 } from "@/Layout/TitleLayout";
import SplitScreen from "@/Layout/SplitScreen"; // Assumindo que o SplitScreen foi salvo neste caminho

const ServiceItem: React.FC<{
  title: string;
  description: string;
  icon: string;
  aosDelay: number;
}> = ({ title, description, aosDelay }) => (
  <div className="mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay={aosDelay}>
    <div
      className={`${styles.serviceItem} d-flex flex-column align-items-start`}
    >
      <div className="text-left mt-3">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

const ServiceSection: React.FC = () => (
  <SplitScreen
    colSizes={[4, 2, 2, 2, 2]}
    showColumns={[true, true, true, true, true]}
  >
    <div className="heading-content" data-aos="fade-up">
      <H2 title="Como Facilitamos seu acesso ao crédito?" />
      <CTAButton href="" text="Saiba Mais" />
    </div>

    {assistances.map((assistance) => (
      <ServiceItem key={assistance.id} {...assistance} />
    ))}
  </SplitScreen>
);

export default ServiceSection;
