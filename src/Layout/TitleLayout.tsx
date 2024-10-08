import React from "react";

interface TitleProps {
  title: string;
  styles?: string;
}

const Little: React.FC<TitleProps> = ({ title, styles }) => (
  <h5 className={`${styles} text-golden fw-bold text-uppercase`}>{title}</h5>
);

const H2: React.FC<TitleProps> = ({ title, styles }) => (
  <h2 className={`mb-3 display-6 fw-bold ${styles}`}>{title}</h2>
);

export { Little, H2 };
