import React from "react";
import styles from "./Card02.module.css";

interface Card02Props {
  title: string;
  description: string;
}

const Card02: React.FC<Card02Props> = ({ title, description }) => (
  <div className={`card ${styles.customCard} d-flex flex-column`}>
    <div className="card-body flex-grow-1">
      <h5 className="card-title fw-bold">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default Card02;
