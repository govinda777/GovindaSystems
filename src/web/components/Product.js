import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import desenvolvimento from '../assets/desenvolvimento.png'
import mobileWeb from '../assets/mobile_web.png'
import consultoria from '../assets/consultoria.png'
import marketingDigital from '../assets/marketing_digital.png'
import solucoes from '../assets/solucoes.png'

const services = [
  {
    title: "Desenvolvimento de software personalizado",
    description: "Soluções de software sob medida, aplicações móveis e web, e soluções em blockchain e criptomoedas (Dapp, Web3, Defi).",
    imageUrl: desenvolvimento,
  },
  {
    title: "Consultoria e treinamento em tecnologia",
    description: "Serviços de consultoria e treinamento em várias áreas de tecnologia, ajudando as empresas a se manterem atualizadas com as tendências e práticas mais recentes do setor.",
    imageUrl: consultoria,
  },
  {
    title: "Automação de processos",
    description: "Ajudamos as empresas a otimizar suas operações, melhorar a eficiência e reduzir custos.",
    imageUrl: solucoes,
  },
  {
    title: "Soluções e Consultoria em marketing digital",
    description: "Marketing digital, oferecendo estratégias e soluções que ajudam as empresas a melhorar sua presença online, aumentar o engajamento dos clientes e gerar mais vendas.",
    imageUrl: marketingDigital,
  },
];

const Product = () => {
  const [expandedService, setExpandedService] = useState(null);

  const handleServiceCollapse = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <section className="token">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h2>Produtos & Serviços</h2>
          </Col>
        </Row>
        <Row>
          {services.map((service, idx) => (
            <Col xs={12} sm={6} md={4} key={idx} style={{ width: '15rem' }}>
              <Card className="my-3">
                <div className="d-flex justify-content-center mt-3">
                  <div className="overflow-hidden">
                    <Image src={service.imageUrl} alt={service.title} />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    {expandedService === idx
                      ? service.description
                      : `${service.description.substring(0, 30)}...`}
                  </Card.Text>
                  <button
                    className="btn btn-link"
                    onClick={() => handleServiceCollapse(idx)}
                  >
                    {expandedService === idx ? 'Leia menos' : 'Leia mais'}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
