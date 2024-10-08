import React from "react";
import styles from "./GridLayout.module.css";

interface GridColumnProps {
  sizeLg: number;
  sizeMd?: number;
  sizeSm?: number;
  children: React.ReactNode;
  className?: string;
  hasBackgroundImage?: boolean;
}

const GridColumn: React.FC<GridColumnProps> = ({
  sizeLg,
  sizeMd,
  sizeSm,
  children,
  className,
  hasBackgroundImage,
}) => {
  const columnClass = `
    col-lg-${sizeLg}
    ${sizeMd ? `col-md-${sizeMd}` : ""}
    ${sizeSm ? `col-sm-${sizeSm}` : ""}
    ${className ? className : ""}
  `.trim();

  const renderContent = (content: React.ReactNode) => {
    return hasBackgroundImage ? (
      <div className={styles.backgroundImage}>{content}</div>
    ) : (
      <>{content}</>
    );
  };

  return <div className={columnClass}>{renderContent(children)}</div>;
};

export default GridColumn;
