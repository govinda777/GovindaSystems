import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="services py-4" id="services" style={{ 
      background: 'linear-gradient(180deg, #15293E 0%, #111827 100%)'
    }}>
      <Container>
        <Row className="mb-3">
          <Col className="text-center">
            <h2 className="display-5 fw-bold mb-2" style={{ 
              background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Nossas Soluções</h2>
            <div className="mx-auto" style={{ maxWidth: '80px', height: '4px', background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)', marginBottom: '1rem', borderRadius: '2px' }}></div>
            <p className="lead mb-3">
              Nossa comunidade colabora para criar soluções tecnológicas que transformam o ecossistema Web3, 
              aplicando tecnologias emergentes e metodologias ágeis.
            </p>
          </Col>
        </Row>

        <Row className="gx-4">
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-mortarboard" viewBox="0 0 16 16">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Consultoria para Criação de DAOs</h3>
              <div className="mb-2">
                <h4 className="h6 fw-bold mb-1" style={{ color: '#2ECAD5' }}>Serviços Completos de Consultoria</h4>
                <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Criação e gestão de canais de comunicação no Telegram ou Discord</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Desenvolvimento de tokens de participação, votação e pagamento</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Definição do tipo de DAO mais adequado</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Elaboração de planejamento financeiro detalhado</span>
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <h4 className="h6 fw-bold mb-1" style={{ color: '#2ECAD5' }}>Tipos de DAOs Suportados</h4>
                <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>DAOs de Leilão, Seguro, Filiação/Associação</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>DAOs de Pagamentos Recorrentes, Automação de Aluguéis e Seguros</span>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>DAOs de IoT, Vending Machines, Staking, Beats e Música</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/services#consultoria-dao" className="btn btn-outline-info btn-sm py-1 px-2" style={{ fontSize: '0.75rem' }}>
                  Ver Detalhes
                </Link>
                <Link href="/join?service=dao-consultoria" className="btn btn-primary btn-sm py-1 px-2" style={{ 
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none',
                  fontSize: '0.75rem'
                }}>
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-code-slash" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Produtos e Serviços Web3</h3>
              <div className="mb-2">
                <h4 className="h6 fw-bold mb-1" style={{ color: '#2ECAD5' }}>Desenvolvimento Blockchain</h4>
                <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Contratos inteligentes personalizados</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>DApps (aplicações descentralizadas)</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Soluções de integração de blockchain para empresas</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Tokenização de ativos reais</span>
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <h4 className="h6 fw-bold mb-1" style={{ color: '#2ECAD5' }}>Vending Machines Descentralizadas</h4>
                <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Infraestrutura de &quot;vending as a service&quot;</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Integração de dispositivos IoT para coleta de dados</span>
                  </li>
                  <li className="mb-1 d-flex align-items-start">
                    <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                    <span>Gestão comunitária de rede de dispositivos</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <Link href="/services#web3-development" className="btn btn-outline-info btn-sm py-1 px-2" style={{ fontSize: '0.75rem' }}>
                  Ver Detalhes
                </Link>
                <Link href="/join?service=web3-development" className="btn btn-primary btn-sm py-1 px-2" style={{ 
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none',
                  fontSize: '0.75rem'
                }}>
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-badge-ad" viewBox="0 0 16 16">
                  <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"/>
                  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Publicidade e Propaganda</h3>
              <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Criação, customização e gestão de redes sociais</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Desenvolvimento de sites e plataformas web</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Rebranding de marcas, serviços e produtos</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Estratégias de marketing para ecossistema Web3</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/services#marketing" className="btn btn-outline-info btn-sm py-1 px-2" style={{ fontSize: '0.75rem' }}>
                  Ver Detalhes
                </Link>
                <Link href="/join?service=marketing" className="btn btn-primary btn-sm py-1 px-2" style={{ 
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none',
                  fontSize: '0.75rem'
                }}>
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                  <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.5A.25.25 0 0 0 4.5 3.25v.5c0 .138.112.25.25.25h.5v7.75h-.5a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5zm2.518-6.023h.43c.86 0 1.51.249 1.51 1.22 0 .964-.48 1.22-1.225 1.22h-.715V6.977zm0 2.802h.84c.9 0 1.378.269 1.378 1.257 0 .993-.543 1.256-1.426 1.256h-.792V9.78z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Serviços Financeiros DeFi</h3>
              <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Sistema de pagamentos recorrentes</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Serviços de staking para redes Proof-of-Stake</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Plataformas de empréstimos peer-to-peer</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Tokenização de ativos financeiros</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/services#defi" className="btn btn-outline-info btn-sm py-1 px-2" style={{ fontSize: '0.75rem' }}>
                  Ver Detalhes
                </Link>
                <Link href="/join?service=defi" className="btn btn-primary btn-sm py-1 px-2" style={{ 
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none',
                  fontSize: '0.75rem'
                }}>
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-rocket" viewBox="0 0 16 16">
                  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z"/>
                  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7-.3 1.9-.855 3.25-1.5.827-.4 1.847-.449 2.412-.225.703.276 1.44.92 3.66.92.222 0 .414-.149.489-.353l.125-.356c.15-.426.19-.83.19-1.434 0-.767-.36-1.466-.876-1.98l-1.801-1.803ZM3 15.5v-.902c0-.06-.173.08-.172.08l.886 1.19L3 15.5Zm7-12.25c.48.082.928.26 1.244.543.036.032.07.066.103.102l-1.51.169L10 3.25Zm-9 12v-1.833l.5.333L1 15.5Z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Incubadora de Projetos</h3>
              <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Mentoria e suporte técnico para startups</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Acesso à rede de contatos e investidores</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Infraestrutura para desenvolvimento de protótipos</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Orientação sobre modelos de negócio</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/services#incubadora" className="btn btn-outline-info btn-sm py-1 px-2" style={{ fontSize: '0.75rem' }}>
                  Ver Detalhes
                </Link>
                <Link href="/join?service=incubadora" className="btn btn-primary btn-sm py-1 px-2" style={{ 
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none',
                  fontSize: '0.75rem'
                }}>
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-3">
            <div className="service-card p-3 rounded h-100" style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div className="service-icon mb-2 p-2 rounded-circle d-inline-block" style={{ background: 'rgba(46, 202, 213, 0.2)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2ECAD5" className="bi bi-file-earmark-code" viewBox="0 0 16 16">
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"/>
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2" style={{ color: '#FF6B6B' }}>Desenvolvimento de Software</h3>
              <ul className="list-unstyled mb-0" style={{ fontSize: '0.85rem' }}>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Aplicativos web e mobile personalizados</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Integração com APIs e serviços de terceiros</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Desenvolvimento ágil com metodologia Scrum</span>
                </li>
                <li className="mb-1 d-flex align-items-start">
                  <span className="me-1" style={{ color: '#2ECAD5' }}>•</span>
                  <span>Manutenção e atualização de sistemas legados</span>
                </li>
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <Link href="/services#software" className="btn btn-outline-info btn-sm py-1 px-2" style={{ fontSize: '0.75rem' }}>
                  Ver Detalhes
                </Link>
                <Link href="/join?service=software" className="btn btn-primary btn-sm py-1 px-2" style={{ 
                  background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                  border: 'none',
                  fontSize: '0.75rem'
                }}>
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-3">
          <Col className="text-center">
            <Link href="/services" className="btn btn-outline-light px-4 py-2" style={{ 
              borderImage: 'linear-gradient(90deg, #2ECAD5, #FF6B6B) 1',
              borderWidth: '2px',
              borderStyle: 'solid'
            }}>
              Ver Todos os Serviços
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services; 