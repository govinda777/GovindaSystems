import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="services py-4" id="projects" style={{
      background: 'linear-gradient(180deg, #15293E 0%, #111827 100%)'
    }}>
      <Container>
        <Row className="mb-3">
          <Col className="text-center">
            <h2 className="display-5 fw-bold mb-2" style={{ 
              color: '#FF6B6B'
            }}>Soluções AI</h2>
          </Col>
        </Row>

        <Row className="gx-4">
          {/* Projeto 1: Atendimento Automatizado */}
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100 bg-better-contrast" style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-chat-dots" viewBox="0 0 16 16">
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Atendimento Automatizado</h3>
              <div className="mb-2">
                <ul className="list-unstyled mb-0">
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Chatbot com IA que entende contexto</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Integração com CRM e APIs abertas</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Atendimento 24/7 em múltiplos canais</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Projeto comunitário e colaborativo</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/projects/chatbot" className="btn btn-outline-info py-1 px-2">
                  Saber Mais
                </Link>
                <Link href="https://github.com/GovindaSystems" className="btn btn-primary py-1 px-2" style={{
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none'
                }}>
                  Ver no GitHub
                </Link>
              </div>
            </div>
          </Col>

          {/* Projeto 2: Automação de Redes Sociais */}
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100 bg-better-contrast" style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Automação Social Media</h3>
              <div className="mb-2">
                <ul className="list-unstyled mb-0">
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Criação de conteúdo com um prompt</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Geração de posts, imagens e legendas</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Agendamento automático multiplataforma</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Aumente o engajamento de forma criativa</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/projects/social-automation" className="btn btn-outline-info py-1 px-2">
                  Saber Mais
                </Link>
                <Link href="https://github.com/GovindaSystems" className="btn btn-primary py-1 px-2" style={{
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none'
                }}>
                  Ver no GitHub
                </Link>
              </div>
            </div>
          </Col>

          {/* Projeto 3: Automação de Processos */}
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100 bg-better-contrast" style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-gear" viewBox="0 0 16 16">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Automação de Processos</h3>
              <div className="mb-2">
                <ul className="list-unstyled mb-0">
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Automação de workflows empresariais</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Integração de sistemas e APIs</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>RPA + IA para tarefas complexas</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Otimize tempo e reduza custos operacionais</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/projects/automation" className="btn btn-outline-info py-1 px-2">
                  Saber Mais
                </Link>
                <Link href="https://github.com/GovindaSystems" className="btn btn-primary py-1 px-2" style={{
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none'
                }}>
                  Ver no GitHub
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          {/* Projeto 4: Agente SEO */}
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100 bg-better-contrast" style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Agente SEO</h3>
              <div className="mb-2">
                <ul className="list-unstyled mb-0">
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Otimização automática de conteúdo</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Análise de concorrentes com IA</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Geração de keywords e backlinks</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Aumente o tráfego orgânico do seu projeto</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/projects/seo-agent" className="btn btn-outline-info py-1 px-2">
                  Saber Mais
                </Link>
                <Link href="https://github.com/GovindaSystems" className="btn btn-primary py-1 px-2" style={{
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none'
                }}>
                  Ver no GitHub
                </Link>
              </div>
            </div>
          </Col>

          {/* Projeto 5: DAO Builder */}
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100 bg-better-contrast" style={{
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-bank" viewBox="0 0 16 16">
                  <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>DAO Builder</h3>
              <div className="mb-2">
                <ul className="list-unstyled mb-0">
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Construção de DAOs com infusão de IA</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Smart contracts, governança, tokens</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Integração com NFT, DeFi e Games</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Iniciativa open source para a comunidade</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/projects/dao-framework" className="btn btn-outline-info py-1 px-2">
                  Saber Mais
                </Link>
                <Link href="https://github.com/GovindaSystems" className="btn btn-primary py-1 px-2" style={{
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none'
                }}>
                  Ver no GitHub
                </Link>
              </div>
            </div>
          </Col>

          {/* Espaço para novas ideias */}
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100 d-flex align-items-center justify-content-center" style={{
              backdropFilter: 'blur(10px)',
              border: '2px dashed rgba(46, 202, 213, 0.3)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)',
              background: 'rgba(255, 255, 255, 0.02)'
            }}>
              <div className="text-center">
                <h4 className="h6 fw-bold mb-2" style={{ color: '#2ECAD5' }}>Tem uma ideia?</h4>
                <p className="small text-readable mb-3">Proponha um novo projeto para a comunidade e vamos construir juntos.</p>
                <Link href="/join" className="btn btn-outline-info py-1 px-3">
                  Propor Projeto
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-3">
          <Col className="text-center">
            <Link href="/projects" className="btn btn-outline-light px-4 py-2" style={{
              borderImage: 'linear-gradient(90deg, #2ECAD5, #FF6B6B) 1',
              borderWidth: '2px',
              borderStyle: 'solid'
            }}>
              Ver Todos os Projetos
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
