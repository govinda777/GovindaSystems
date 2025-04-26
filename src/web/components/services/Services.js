import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
  return (
    <section className="services py-5" id="services" style={{ 
      background: 'linear-gradient(180deg, #15293E 0%, #111827 100%)'
    }}>
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="display-4 fw-bold mb-3" style={{ 
              background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Nossas Soluções</h2>
            <div className="mx-auto" style={{ maxWidth: '80px', height: '4px', background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)', marginBottom: '2rem', borderRadius: '2px' }}></div>
            <p className="lead mb-5">
              Nossa comunidade colabora para criar soluções tecnológicas que transformam o ecossistema Web3, 
              aplicando tecnologias emergentes e metodologias ágeis.
            </p>
          </Col>
        </Row>

        <Row className="gx-5">
          <Col lg={6} className="mb-5">
            <div className="service-card p-4 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-4 p-3 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2ECAD5" className="bi bi-mortarboard" viewBox="0 0 16 16">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                </svg>
              </div>
              <h3 className="h4 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Govinda Systems School & Consulting</h3>
              <div className="mb-4">
                <h4 className="h6 fw-bold" style={{ color: '#2ECAD5' }}>Treinamentos práticos com AI</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Introdução à Inteligência Artificial</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Engenharia de Prompt</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Criação de Conteúdo com AI</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Aplicações Práticas de AI</span>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="h6 fw-bold" style={{ color: '#2ECAD5' }}>Treinamentos práticos com Blockchain</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Introdução ao Blockchain</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Engenharia de Smart Contracts</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Criação de Dapps</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="h6 fw-bold" style={{ color: '#2ECAD5' }}>Consultoria em tecnologia</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Consultoria e treinamento em tecnologias emergentes</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Soluções e Consultoria em marketing digital</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Consultoria em AI para Desenvolvimento de Novos Serviços e Produtos</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-5">
            <div className="service-card p-4 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-4 p-3 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2ECAD5" className="bi bi-code-slash" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
              </div>
              <h3 className="h4 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Govinda Systems Farm</h3>
              <div className="mb-4">
                <h4 className="h6 fw-bold" style={{ color: '#2ECAD5' }}>Desenvolvimento de Software</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Desenvolvimento de software personalizado</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Aplicações móveis e web</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Soluções em blockchain e criptomoedas (Dapp, Web3, Defi)</span>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="h6 fw-bold" style={{ color: '#2ECAD5' }}>Desenvolvimento Web3 Comunitário</h4>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Construção colaborativa de aplicativos descentralizados (dApps)</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Desenvolvimento conjunto de contratos inteligentes</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Integração de soluções DeFi (Finanças Descentralizadas)</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Revisão comunitária de segurança e auditoria de contratos</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="h6 fw-bold" style={{ color: '#2ECAD5' }}>Automação e Telemetria com IOT</h4>
                <p className="small" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Nosso framework colaborativo proporciona agilidade no registro e gerenciamento de dispositivos IOT para coleta de dados e execução de ações.</p>
                <p className="small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Utilizamos as tecnologias AWS IOT, Esp8266, MQTT Protocol, Blockchain, Next.js em nosso desenvolvimento colaborativo.</p>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col md={4} className="mb-4">
            <div className="service-card p-4 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-4 p-3 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2ECAD5" className="bi bi-badge-ad" viewBox="0 0 16 16">
                  <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"/>
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Marketing Digital</h3>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Co-criação de Sites e Plataformas Web3</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Gestão Comunitária de Mídias Sociais</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Estratégias coletivas para campanhas de anúncios</span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Análise participativa de métricas para otimização</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card p-4 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-4 p-3 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2ECAD5" className="bi bi-shop" viewBox="0 0 16 16">
                  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>E-Commerce</h3>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Co-criação de lojas virtuais completas</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Implementação colaborativa de sistemas de pagamento</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Soluções comunitárias para controle de estoque</span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Desenvolvimento conjunto de sistemas de atendimento</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="service-card p-4 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-4 p-3 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2ECAD5" className="bi bi-journal-check" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Compliance & Jurídico</h3>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Desenvolvimento de smart contracts para automação de garantias</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Implementação de processos Escrow para garantia de transações</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Desenvolvimento de sistemas de auditoria</span>
                </li>
                <li className="d-flex align-items-start">
                  <span className="me-2" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Implementação de sistemas de votação e compliance financeira</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <div className="p-5 rounded shadow" style={{
              background: 'linear-gradient(135deg, #2ECAD5 0%, #FF6B6B 100%)',
              color: '#111827'
            }}>
              <h3 className="fw-bold mb-3">Quer saber mais sobre nossos serviços?</h3>
              <p className="mb-4">Conheça mais sobre como nossas soluções podem transformar seu negócio.</p>
              <a href="#contact" className="btn fw-bold px-4 py-2" style={{
                backgroundColor: '#111827',
                color: 'white',
                border: 'none'
              }}>Entre em contato</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services; 