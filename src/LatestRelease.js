import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { horror } from "./horror.js";

const LatestReleases = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {horror.map((item) => {
          return (
            <Col key={item.asin}>
              <Card>
                <Card.Img variant="top" src={item.img} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.category}</Card.Text>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default LatestReleases;
