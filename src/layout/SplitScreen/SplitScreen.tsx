import React from "react";
import cx from "classnames";
import { Container, Col } from "react-bootstrap";

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
  children: React.ReactNode | React.ReactNode[];
  colSizes?: number[];
  showColumns?: boolean[];
}

const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  colSizes = [12],
  showColumns = [true],
}) => {

  const childArray = React.Children.toArray(children);
  const adjustedColSizes = colSizes.slice(0, childArray.length);
  const adjustedShowColumns = showColumns.slice(0, childArray.length);

  return (
    <>
      {childArray.map((child, index) => (
        <Column
          key={index}
          show={adjustedShowColumns[index]}
          colSize={adjustedColSizes[index]}
        >
          {child}
        </Column>
      ))}
    </>
  );
};

export default SplitScreen;
