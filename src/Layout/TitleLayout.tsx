import React from "react";

interface TitleProps {
  title: string;
  color?: string;
}

const LittleTitle: React.FC<TitleProps> = ({ title }) => (
  <h5 className="text-golden fw-bold text-uppercase">{title}</h5>
);

const TitleH2: React.FC<TitleProps> = ({ title, color }) => (
  <h2 className={`mb-3 display-5 ${color}`}>{title}</h2>
);

interface TitleComponentProps {
  type: "h2" | "h3" | "h4" | "h5" | "h6" | "littleTitle";
  title: string;
  color?: string;
}
const TitleLayout: React.FC<TitleComponentProps> = ({ type, title, color }) => {
  const renderTitle = () => {
    switch (type) {
      case "littleTitle":
        return <LittleTitle title={title} />;
      case "h2":
        return <TitleH2 title={title} color={color} />;
      default:
        return null;
    }
  };

  return <>{renderTitle()}</>;
};

export default TitleLayout;
