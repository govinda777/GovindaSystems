import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Governance = () => {
  return (
    <section className="governance py-5" id="governance">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="display-4 fw-bold mb-3">Governança Descentralizada</h2>
            <div className="mx-auto" style={{ maxWidth: '80px', height: '4px', background: '#6c5ce7', marginBottom: '2rem' }}></div>
            <p className="lead mb-5">
              Nossa comunidade opera através de processos decisórios descentralizados onde todos os 
              detentores de tokens GSTG têm direito a voto. Propostas são submetidas, discutidas e 
              votadas pelos membros, garantindo que o futuro da DAO seja determinado coletivamente.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h3 className="h4 fw-bold mb-4">Processo de Propostas</h3>
            <div className="governance-process">
              <div className="d-flex mb-4">
                <div className="process-number rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '40px', height: '40px' }}>1</div>
                <div>
                  <h4 className="h5 fw-bold mb-2">Submissão</h4>
                  <p>Qualquer membro pode submeter propostas para novos projetos, melhorias ou mudanças na DAO.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="process-number rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '40px', height: '40px' }}>2</div>
                <div>
                  <h4 className="h5 fw-bold mb-2">Discussão</h4>
                  <p>A comunidade discute e refina as propostas em nossos fóruns, garantindo que todas as vozes sejam ouvidas.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="process-number rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '40px', height: '40px' }}>3</div>
                <div>
                  <h4 className="h5 fw-bold mb-2">Votação</h4>
                  <p>Propostas são votadas pelos detentores de tokens GSTG, com peso proporcional à quantidade de tokens.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="process-number rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{ width: '40px', height: '40px' }}>4</div>
                <div>
                  <h4 className="h5 fw-bold mb-2">Implementação</h4>
                  <p>Implementação é executada de forma transparente com atualizações regulares à comunidade.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4" style={{ background: 'linear-gradient(160deg, #1e1e2d 0%, #2d2d3a 100%)', color: '#ffffff' }}>
                <h3 className="h4 fw-bold mb-4 text-white">Princípios de Governança</h3>
                <div className="governance-principles">
                  <div className="d-flex align-items-start mb-4">
                    <div className="principle-icon text-primary me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-2 text-white">Transparência</h4>
                      <p className="text-white">Todas as decisões, transações e atividades da DAO são registradas na blockchain, garantindo transparência total.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div className="principle-icon text-primary me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-2 text-white">Inclusão</h4>
                      <p className="text-white">Todos os membros têm voz na comunidade, independentemente do tamanho de sua participação.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-4">
                    <div className="principle-icon text-primary me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-2 text-white">Adaptabilidade</h4>
                      <p className="text-white">O sistema de governança evolui continuamente, adaptando-se às necessidades da comunidade.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="principle-icon text-primary me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-unlock" viewBox="0 0 16 16">
                        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-2 text-white">Descentralização</h4>
                      <p className="text-white">Nenhuma entidade central controla a DAO. O poder está distribuído entre todos os membros.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className="cta-box bg-gradient p-5 rounded-lg shadow" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
              <h3 className="h3 fw-bold mb-4 text-white">Quais as vantagens de participar de uma DAO?</h3>
              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <div className="advantage-card p-4 bg-dark text-white rounded-lg h-100 position-relative overflow-hidden transition-all hover-lift" 
                       style={{ 
                         boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
                         transition: 'all 0.3s ease',
                         border: '1px solid rgba(99, 102, 241, 0.1)',
                         background: 'linear-gradient(160deg, #1e1e2d 0%, #2d2d3a 100%)'
                       }}>
                    <div className="position-absolute opacity-10" style={{ top: '-20px', right: '-20px', zIndex: '0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" className="bi bi-graph-up text-primary opacity-10" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                      </svg>
                    </div>
                    <div className="text-primary mb-3 position-relative" style={{ zIndex: '1' }}>
                      <div className="icon-circle d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'rgba(99, 102, 241, 0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="h5 fw-bold mb-3 position-relative" style={{ zIndex: '1' }}>Governança democrática</h4>
                    <p className="mb-0 position-relative" style={{ zIndex: '1' }}>Todos os membros têm a oportunidade de contribuir e votar em decisões importantes.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="advantage-card p-4 bg-dark text-white rounded-lg h-100 position-relative overflow-hidden transition-all hover-lift" 
                       style={{ 
                         boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
                         transition: 'all 0.3s ease',
                         border: '1px solid rgba(99, 102, 241, 0.1)',
                         background: 'linear-gradient(160deg, #1e1e2d 0%, #2d2d3a 100%)'
                       }}>
                    <div className="position-absolute opacity-10" style={{ top: '-20px', right: '-20px', zIndex: '0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" className="bi bi-shield-lock text-primary opacity-10" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        <path d="M8 5.5a2.5 2.5 0 0 1 2.5 2.5v.764c.311.085.647.145 1 .145V8a3.5 3.5 0 0 0-7 0v.764a3.55 3.55 0 0 0 1-.145V8a2.5 2.5 0 0 1 2.5-2.5z"/>
                        <path d="M7 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v.75h-2v-.75z"/>
                      </svg>
                    </div>
                    <div className="text-primary mb-3 position-relative" style={{ zIndex: '1' }}>
                      <div className="icon-circle d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'rgba(99, 102, 241, 0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-shield-lock" viewBox="0 0 16 16">
                          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                          <path d="M8 5.5a2.5 2.5 0 0 1 2.5 2.5v.764c.311.085.647.145 1 .145V8a3.5 3.5 0 0 0-7 0v.764a3.55 3.55 0 0 0 1-.145V8a2.5 2.5 0 0 1 2.5-2.5z"/>
                          <path d="M7 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v.75h-2v-.75z"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="h5 fw-bold mb-3 position-relative" style={{ zIndex: '1' }}>Maior segurança</h4>
                    <p className="mb-0 position-relative" style={{ zIndex: '1' }}>As DAOs são construídas em blockchain, tornando-as altamente seguras e resistentes a fraudes.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="advantage-card p-4 bg-dark text-white rounded-lg h-100 position-relative overflow-hidden transition-all hover-lift" 
                       style={{ 
                         boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
                         transition: 'all 0.3s ease',
                         border: '1px solid rgba(99, 102, 241, 0.1)',
                         background: 'linear-gradient(160deg, #1e1e2d 0%, #2d2d3a 100%)'
                       }}>
                    <div className="position-absolute opacity-10" style={{ top: '-20px', right: '-20px', zIndex: '0' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="currentColor" className="bi bi-currency-dollar text-primary opacity-10" viewBox="0 0 16 16">
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                      </svg>
                    </div>
                    <div className="text-primary mb-3 position-relative" style={{ zIndex: '1' }}>
                      <div className="icon-circle d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '56px', height: '56px', background: 'rgba(99, 102, 241, 0.1)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg>
                      </div>
                    </div>
                    <h4 className="h5 fw-bold mb-3 position-relative" style={{ zIndex: '1' }}>Benefícios financeiros</h4>
                    <p className="mb-0 position-relative" style={{ zIndex: '1' }}>Membros podem receber recompensas financeiras por contribuir e pela valorização do token.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Governance; 