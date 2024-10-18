import React from "react";
import SplitScreen from "@/layout/SplitScreen/SplitScreen";
import cx from "classnames";
import { strategyTexts, strategyFeatures } from "@/data/strategyData";
import { Container, Row } from "react-bootstrap";
import styles from "./Strategy.module.css";

const StrategyContent: React.FC = () => {
  return (
    <SplitScreen colSizes={[8]} showColumns={[true]}>
      <div>
        <h2 className="display-5 fw-bold display-5 mb-3 ">
          {strategyTexts.title}
        </h2>
        <p> {strategyTexts.description}</p>
      </div>
    </SplitScreen>
  );
};

const StrategyFeatures: React.FC = () => {
  return (
    <Row>
      {strategyFeatures.map((feature, index) => (
        <SplitScreen colSizes={[4]} key={index}>
          <div className="py-4 text-center">
            <div className={`text-green text-center`}>
              <i
                className={`fas ${feature.iconClass} fa-2x mb-3 rounded border p-4 bg-light`}
              ></i>
            </div>
            <h3 className="h4 fw-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </SplitScreen>
      ))}
    </Row>
  );
};

function Strategy() {
  return (
    <section>
      <div className="bg-light py-5 my-60 ">
        <Container>
          <StrategyContent />
        </Container>
      </div>
      <div className="mb-60">
        <Container>
          <StrategyFeatures />
        </Container>
      </div>
    </section>
  );
}

export default Strategy;
