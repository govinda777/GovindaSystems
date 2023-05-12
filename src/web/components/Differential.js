import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Differential = () => {
  return (
    <section className="porque-escolher">
      <Container>
        <h2 className="section-title">🏆 Por que escolher a Govinda Systems DAO?</h2>
        <Row>
          <Col md={6}>
            <div className="feature">
              <h3 className="feature-title">Atendimento personalizado e adaptado às suas necessidades</h3>
              <p className="feature-description">
                Estamos comprometidos em entender suas necessidades individuais e fornecer um atendimento personalizado para garantir a melhor solução para você.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Transparência e comunicação eficiente</h3>
              <p className="feature-description">
                Valorizamos a transparência em todas as etapas do projeto e mantemos uma comunicação eficiente para mantê-lo informado e envolvido.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="feature">
              <h3 className="feature-title">Soluções inovadoras e de alta qualidade</h3>
              <p className="feature-description">
                Utilizamos tecnologias emergentes, como blockchain e criptomoedas, para oferecer soluções inovadoras e de alta qualidade aos nossos clientes.
              </p>
            </div>
            <div className="feature">
              <h3 className="feature-title">Uso de tecnologias modernas</h3>
              <p className="feature-description">
                Desenvolvemos nossos projetos utilizando Next.js e React, aproveitando todo o potencial dessas tecnologias modernas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Differential;