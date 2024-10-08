import React from "react";
import cx from "classnames";
import { Row, Col, Button, Card } from "react-bootstrap";
import { strategyFeatures, strategyTexts } from "@/data/strategyData";
import SplitScreen from "@/Layout/SplitScreen";

const CustomButton: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <Button
    variant="primary"
    className={cx("rounded-pill", "py-3", "px-5", "mt-2")}
    href={href}
  >
    {text}
  </Button>
);

const StrategyHeader: React.FC = () => (
  <div>
    <h5
      className={cx(
        "d-inline-block",
        "rounded-pill",
        "mb-3",
        "text-golden",
        "text-uppercase",
        "fw-bold"
      )}
    >
      {strategyTexts.header}
    </h5>
    <h2 className={cx("display-7", "mb-4")}>{strategyTexts.title}</h2>
    <p>{strategyTexts.description}</p>
    <CustomButton href="#" text="Saiba Mais" />
  </div>
);

const StrategyItem: React.FC<{
  iconClass: string;
  title: string;
  description: string;
}> = ({ iconClass, title, description }) => (
  <Col sm={12} className={cx("mb-3")}>
    <Card className="border-0">
      <Card.Body className="d-flex align-items-start">
        <div className="flex-shrink-0 me-3">
          <i
            className={cx(
              "fa",
              iconClass,
              "p-3",
              "rounded-circle",
              "text-white",
              "bg-green"
            )}
          ></i>
        </div>
        <div>
          <Card.Title className="mb-2">{title}</Card.Title>
          <Card.Text className="text-alt">{description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

const StrategySection: React.FC = () => {
  const renderStrategyItems = (start: number, end: number) => (
    <Row>
      {strategyFeatures.slice(start, end).map((feature, index) => (
        <StrategyItem
          key={index + start}
          iconClass={feature.iconClass}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </Row>
  );

  return (
    <SplitScreen colSizes={[4, 4, 4]} showColumns={[true, true, true]}>
      <StrategyHeader />
      {renderStrategyItems(0, 3)}
      {renderStrategyItems(3, 6)}
    </SplitScreen>
  );
};

export default StrategySection;
