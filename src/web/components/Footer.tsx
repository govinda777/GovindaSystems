"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12" style={{
      backgroundColor: '#0F172A',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <Container>
        <Row className="mb-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h5 fw-bold mb-3" style={{ color: '#2ECAD5' }}>GovindaSystems</h3>
            <p className="fw-bold mb-2">Soluções em Inteligência Artificial</p>
            <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Transformamos empresas através da Inteligência Artificial e Automação Inteligente.
              Soluções personalizadas que geram resultados reais.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="https://github.com/govinda777/GovindaSystems" className="text-white hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a href="https://twitter.com/GovindasDao" className="text-white hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
            </div>
          </Col>

          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Soluções AI</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover:text-primary transition-colors">Atendimento Automatizado</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover:text-primary transition-colors">Automação Social Media</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover:text-primary transition-colors">Automação de Processos</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover:text-primary transition-colors">Agente SEO</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover:text-primary transition-colors">DAO Builder</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Empresa</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#about" className="text-white text-decoration-none hover:text-primary transition-colors">Sobre Nós</Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="text-white text-decoration-none hover:text-primary transition-colors">Projetos</Link>
              </li>
              <li className="mb-2">
                <Link href="/join" className="text-white text-decoration-none hover:text-primary transition-colors">Fale Conosco</Link>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Contato</h4>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ECAD5" className="mt-1" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <a href="mailto:contato@govindasystems.com" className="text-white text-decoration-none hover:text-primary transition-colors">contato@govindasystems.com</a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              © {new Date().getFullYear()} GovindaSystems. Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Link href="/privacy" className="small text-decoration-none me-3" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Privacidade
            </Link>
            <Link href="/terms" className="small text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              Termos de Uso
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
