import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards/Card";
import WhatToWatch from "../WhatToWatch/WhatToWatch";

import "./Grid.css";

function Grid() {
  return (
    <div className="grid-main">
      <Container>
        <Row className="Gallary_Container">
          <h1 className="grid-heading">What to Watch</h1>
          {Array.from({ length: 15 }, (_, i) => (
            <Col key={i} className="Grid-Card">
              <Cards />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Grid;
