import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={6}>
            <h5>Govinda Systems DAO</h5>
            <div className="social-media">
                <a href="https://www.linkedin.com/company/govindasystems" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/govindasystems" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/govindasystems" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
          </Col>
          <Col md={6}>
            <h5>Links Úteis</h5>
            <ul>
              <li><a href="/">Página Inicial</a></li>
              <li><a href="/about">Sobre Nós</a></li>
              <li><a href="/services">Serviços</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="py-3">
            <p>Phone: (11) 93618-3997</p>
            <p>Email: govinda@govindasystems.com</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="footer-bottom">
              <p className="text-center">
                &copy; {new Date().getFullYear()} Govinda Systems DAO. Todos os direitos reservados.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
