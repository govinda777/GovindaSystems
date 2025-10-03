import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" style={{ 
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
              <a href="https://github.com/govinda777/GovindaSystems" className="text-white me-3" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: 'opacity 0.2s, transform 0.2s', ':hover': { opacity: 1, transform: 'translateY(-3px)' } }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a href="https://twitter.com/GovindasDao" className="text-white me-3" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: 'opacity 0.2s, transform 0.2s', ':hover': { opacity: 1, transform: 'translateY(-3px)' } }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/govindasystems" className="text-white me-3" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: 'opacity 0.2s, transform 0.2s', ':hover': { opacity: 1, transform: 'translateY(-3px)' } }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Soluções AI</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover-accent">Atendimento Automatizado</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover-accent">Automação Social Media</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover-accent">Automação de Processos</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover-accent">Agente SEO</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-white text-decoration-none hover-accent">DAO Builder</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Empresa</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#about" className="text-white text-decoration-none hover-accent">Sobre Nós</Link>
              </li>
              <li className="mb-2">
                <Link href="/projects" className="text-white text-decoration-none hover-accent">Projetos</Link>
              </li>
              <li className="mb-2">
                <a href="https://github.com/govinda777/blog" className="text-white text-decoration-none hover-accent" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
              <li className="mb-2">
                <Link href="/join" className="text-white text-decoration-none hover-accent">Fale Conosco</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} md={4}>
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Contato</h4>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ECAD5" className="bi bi-envelope me-2 mt-1" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <div>
                  <a href="mailto:contato@govindasystems.com" className="text-white text-decoration-none hover-accent">contato@govindasystems.com</a>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ECAD5" className="bi bi-whatsapp me-2 mt-1" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  WhatsApp: Disponível em breve
                </div>
              </li>
            </ul>
            
            <div className="newsletter mt-4">
              <h5 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Newsletter</h5>
              <p className="small mb-2" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Receba novidades sobre IA e automação
              </p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="seu@email.com" 
                  aria-label="Seu e-mail"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff'
                  }}
                />
                <button 
                  className="btn" 
                  style={{ 
                    background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                    color: '#FFFFFF',
                    border: 'none',
                    fontWeight: 'bold'
                  }} 
                  type="button"
                >
                  Enviar
                </button>
              </div>
            </div>
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
