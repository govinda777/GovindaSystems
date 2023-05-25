import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Token = () => {
  return (
    <section className="token">
        <Container>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h2>Conheça os nossos Tokens</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
            <Card>
                <Card.Body>
                    <Card.Title>Facilidade e Rapidez</Card.Title>
                    <Card.Text>
                        Com GOV_COINS, suas transações são processadas de forma rápida e segura, sem a necessidade de intermediários.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={6}>
            <Card>
                <Card.Body>
                    <Card.Title>Descentralização</Card.Title>
                    <Card.Text>
                        GOV_COINS é uma criptomoeda descentralizada. Isso significa que você tem controle total sobre seu dinheiro, sem a necessidade de um banco.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    </section>
  );
}

export default Token;
