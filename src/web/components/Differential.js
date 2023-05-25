import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Differential = () => {
  return (
    <section className="differential">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Por que escolher a Govinda Systems DAO?</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Expertise</Card.Title>
                <Card.Text>
                  A Govinda Systems DAO possui uma equipe experiente e altamente qualificada em tecnologia Blockchain e Web3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Flexibilidade</Card.Title>
                <Card.Text>
                  Como uma DAO, somos capazes de nos adaptar rapidamente e tomar decisões ágeis para superar qualquer desafio.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Inovação</Card.Title>
                <Card.Text>
                  Estamos na vanguarda da inovação em blockchain e Web3, sempre buscando novas maneiras de resolver problemas complexos.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Differential;