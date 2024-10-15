import React from "react";
import cx from "classnames";
import { Container, Row, Col } from "react-bootstrap";

interface ColumnProps {
  children: React.ReactNode;
  colSize?: number;
  show?: boolean;
}

const Column: React.FC<ColumnProps> = ({
  children,
  colSize = 3,
  show = true,
}) => {
  return show ? <Col lg={colSize}>{children}</Col> : null;
};

interface SplitScreenProps {
  children: React.ReactNode[];
  colSizes?: number[];
  showColumns?: boolean[];
}

const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  colSizes = [3, 3, 3, 3, 3],
  showColumns = [true, true, true, true, true],
}) => {
  const childArray = React.Children.toArray(children);

  const adjustedColSizes = colSizes.slice(0, childArray.length);
  const adjustedShowColumns = showColumns.slice(0, childArray.length);

  return (
    <Container>
      <Container className="row align-items-center justify-content-center">
        <Container className={cx("z-2 my-120")}>
          <Row>
            {childArray.map((child, index) => (
              <Column
                key={index}
                show={adjustedShowColumns[index]}
                colSize={adjustedColSizes[index]}
              >
                {child}
              </Column>
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default SplitScreen;
