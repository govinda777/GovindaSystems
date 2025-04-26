import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
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
            <h3 className="h5 fw-bold mb-3" style={{ color: '#2ECAD5' }}>Govinda Systems DAO</h3>
            <p>Simplificando a Tecnologia para Todos</p>
            <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Uma organização descentralizada autônoma que oferece soluções tecnológicas inovadoras e acessíveis.</p>
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
              <a href="https://discord.gg/govinda-systems" className="text-white me-3" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: 'opacity 0.2s, transform 0.2s', ':hover': { opacity: 1, transform: 'translateY(-3px)' } }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>
              </a>
              <a href="https://t.me/govindasystems" className="text-white" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7, transition: 'opacity 0.2s, transform 0.2s', ':hover': { opacity: 1, transform: 'translateY(-3px)' } }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
              </a>
            </div>
          </Col>
          <Col lg={2} md={4} className="mb-4 mb-md-0">
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Links Rápidos</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#about" className="text-white text-decoration-none hover-accent">Sobre a DAO</Link>
              </li>
              <li className="mb-2">
                <Link href="#governance" className="text-white text-decoration-none hover-accent">Governança</Link>
              </li>
              <li className="mb-2">
                <Link href="#tokens" className="text-white text-decoration-none hover-accent">Tokens</Link>
              </li>
              <li className="mb-2">
                <Link href="#services" className="text-white text-decoration-none hover-accent">Serviços</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3} md={4} className="mb-4 mb-md-0">
            <h4 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Recursos</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://github.com/govinda777/blog" className="text-white text-decoration-none hover-accent" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/govinda777/GovindaSystems" className="text-white text-decoration-none hover-accent" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li className="mb-2">
                <a href="https://govinda-systems-web-govinda777.vercel.app" className="text-white text-decoration-none hover-accent" target="_blank" rel="noopener noreferrer">Site Oficial</a>
              </li>
              <li className="mb-2">
                <a href="https://stackoverflowteams.com/c/govinda-systems-dao" className="text-white text-decoration-none hover-accent" target="_blank" rel="noopener noreferrer">Fórum Comunitário</a>
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
              <li className="mb-4 d-flex align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2ECAD5" className="bi bi-geo-alt me-2 mt-1" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Operamos globalmente através de nossa comunidade descentralizada
                </div>
              </li>
              <div className="newsletter">
                <h5 className="h6 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Inscreva-se na nossa newsletter</h5>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Seu e-mail" aria-label="Seu e-mail" />
                  <button className="btn" style={{ 
                    backgroundColor: '#FF6B6B', 
                    color: '#0F172A', 
                    border: 'none',
                    fontWeight: 'bold'
                  }} type="button">Enviar</button>
                </div>
              </div>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Row>
          <Col className="text-center">
            <p className="small mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>&copy; {new Date().getFullYear()} Govinda Systems DAO. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
