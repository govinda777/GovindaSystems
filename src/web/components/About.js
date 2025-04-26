import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

const About = () => {
  return (
    <section className="about py-5" id="about" style={{ 
      background: 'linear-gradient(180deg, #111827 0%, #15293E 100%)'
    }}>
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold mb-3" style={{ 
              background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>O que é a Govinda Systems DAO?</h2>
            <div className="mx-auto" style={{ maxWidth: '80px', height: '4px', background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)', marginBottom: '2rem', borderRadius: '2px' }}></div>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <h3 className="h4 fw-bold mb-3" style={{ color: '#2ECAD5' }}>Uma Organização Autônoma Descentralizada</h3>
            <p className="lead mb-4">
              A Govinda Systems DAO é uma comunidade descentralizada e autônoma formada por inovadores, desenvolvedores e 
              especialistas unidos por propósitos comuns.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Nossa estrutura é completamente horizontalizada, sem hierarquias tradicionais, onde todos os membros podem 
              contribuir e participar das decisões através de um sistema de votação baseado em tokens.
            </p>
          </Col>
          <Col md={6}>
            <div className="p-4 rounded shadow-sm" style={{ 
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <h4 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Características de uma DAO:</h4>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#2ECAD5',
                    color: '#111827',
                    fontWeight: 'bold'
                  }}>1</div>
                  <div>Não depende de indivíduos, empresas ou governos</div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#2ECAD5',
                    color: '#111827',
                    fontWeight: 'bold'
                  }}>2</div>
                  <div>Possui seu próprio sistema de tokens para governança</div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#2ECAD5',
                    color: '#111827',
                    fontWeight: 'bold'
                  }}>3</div>
                  <div>Opera através de contratos inteligentes na blockchain</div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: '#2ECAD5',
                    color: '#111827',
                    fontWeight: 'bold'
                  }}>4</div>
                  <div>Possui códigos abertos e transparentes</div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="card h-100 border-0" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 30px -5px rgba(0, 0, 0, 0.2), 0 15px 15px -5px rgba(0, 0, 0, 0.1)'
              }
            }}>
              <div className="card-body p-4">
                <div className="mb-3" style={{ color: '#2ECAD5' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5c0 1.113.433 2.13 1.143 2.88.71.75 1.275 1.418 1.68 2.132.405.714.573 1.356.573 1.988 0 .362.196.638.476.807.278.169.657.237 1.128.237.472 0 .851-.068 1.129-.237.28-.169.476-.445.476-.807 0-.632.168-1.274.573-1.988.405-.714.97-1.382 1.68-2.132A4.9 4.9 0 0 0 13 6a5 5 0 0 0-5-5zM9 13.8V13h2v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6z"/>
                  </svg>
                </div>
                <h4 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Missão</h4>
                <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Impulsionar a inovação e transformar o ecossistema digital através da aplicação colaborativa de tecnologias emergentes e metodologias ágeis.</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <div className="card h-100 border-0" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 30px -5px rgba(0, 0, 0, 0.2), 0 15px 15px -5px rgba(0, 0, 0, 0.1)'
              }
            }}>
              <div className="card-body p-4">
                <div className="mb-3" style={{ color: '#2ECAD5' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                  </svg>
                </div>
                <h4 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Visão</h4>
                <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Criar um modelo autosustentável e autônomo, onde o desenvolvimento de sistemas Web3 e estratégias de crescimento beneficiem toda a comunidade.</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card h-100 border-0" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 25px 30px -5px rgba(0, 0, 0, 0.2), 0 15px 15px -5px rgba(0, 0, 0, 0.1)'
              }
            }}>
              <div className="card-body p-4">
                <div className="mb-3" style={{ color: '#2ECAD5' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                  </svg>
                </div>
                <h4 className="h5 fw-bold mb-3" style={{ color: '#FF6B6B' }}>Propósito</h4>
                <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Desenvolver soluções financeiras baseadas em tecnologia blockchain, acessíveis para indivíduos e organizações, compartilhando conhecimento sobre agilidade e otimização de processos.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
