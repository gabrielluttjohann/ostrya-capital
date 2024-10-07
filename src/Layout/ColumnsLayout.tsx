import React from "react";
import styles from "./ColumnsLayout.module.css";

interface LayoutProps {
  hasBackgroundImage?: boolean;
  columns: React.ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({ columns, hasBackgroundImage }) => {
  const renderContent = (content: React.ReactNode) => {
    return hasBackgroundImage ? (
      <div className={`${styles.backgroundImage}`}>{content}</div>
    ) : (
      <>{content}</>
    );
  };

  const columnClass = `col-lg-${12 / columns.length} col-md-12`;

  return (
    <div className="row align-items-center justify-content-center">
      {columns.map((content, index) => (
        <div key={index} className={columnClass}>
          {renderContent(content)}
        </div>
      ))}
    </div>
  );
};

// Componente de 2 colunas
export const TwoColumnLayout: React.FC<
  Omit<LayoutProps, "columns"> & {
    leftContent: React.ReactNode;
    rightContent: React.ReactNode;
  }
> = ({ leftContent, rightContent, hasBackgroundImage }) => {
  return (
    <Layout
      columns={[leftContent, rightContent]}
      hasBackgroundImage={hasBackgroundImage}
    />
  );
};

// Componente de 3 colunas
export const ThreeColumnLayout: React.FC<
  Omit<LayoutProps, "columns"> & {
    leftContent: React.ReactNode;
    centerContent: React.ReactNode;
    rightContent: React.ReactNode;
  }
> = ({ leftContent, centerContent, rightContent, hasBackgroundImage }) => {
  return (
    <Layout
      columns={[leftContent, centerContent, rightContent]}
      hasBackgroundImage={hasBackgroundImage}
    />
  );
};

// Componente de 4 colunas
export const FourColumnLayout: React.FC<
  Omit<LayoutProps, "columns"> & {
    firstContent: React.ReactNode;
    secondContent: React.ReactNode;
    thirdContent: React.ReactNode;
    fourthContent: React.ReactNode;
  }
> = ({
  firstContent,
  secondContent,
  thirdContent,
  fourthContent,
  hasBackgroundImage,
}) => {
  return (
    <Layout
      columns={[firstContent, secondContent, thirdContent, fourthContent]}
      hasBackgroundImage={hasBackgroundImage}
    />
  );
};

export default TwoColumnLayout;
