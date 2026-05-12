import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    budget: '',
    timeline: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simular envio - Substituir por API real
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setLoading(false)
      
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '', email: '', phone: '', company: '',
          service: '', description: '', budget: '', timeline: ''
        })
      }, 3000)
    }, 1500)
  }
  
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #111827 0%, #15293E 100%)' }}>
      <Head>
        <title>Solicitar Orçamento | GovindaSystems - Soluções em IA</title>
        <meta name="description" content="Solicite um orçamento personalizado para soluções de IA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <Container className="py-5">
        <Row className="mb-4">
          <Col className="text-center">
            <h1 className="display-4 fw-bold mb-3" style={{ 
              background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Solicitar Orçamento
            </h1>
            <div className="mx-auto mb-4" style={{ 
              maxWidth: '80px', height: '4px', 
              background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)' 
            }}></div>
            <p className="lead text-white">
              Conte-nos sobre seu projeto e receba uma proposta personalizada
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            {submitted && (
              <Alert variant="success" className="mb-4">
                <Alert.Heading>✅ Sucesso!</Alert.Heading>
                <p className="mb-0">Formulário enviado. Entraremos em contato em breve!</p>
              </Alert>
            )}
            
            <div className="p-4 rounded shadow-lg" style={{
              background: 'rgba(17, 24, 39, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white fw-bold">Nome Completo *</Form.Label>
                      <Form.Control
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} required placeholder="Seu nome"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff'
                        }}
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white fw-bold">E-mail *</Form.Label>
                      <Form.Control
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} required placeholder="seu@email.com"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff'
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white fw-bold">Telefone/WhatsApp *</Form.Label>
                      <Form.Control
                        type="tel" name="phone" value={formData.phone}
                        onChange={handleChange} required placeholder="(00) 00000-0000"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff'
                        }}
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white fw-bold">Empresa</Form.Label>
                      <Form.Control
                        type="text" name="company" value={formData.company}
                        onChange={handleChange} placeholder="Nome da empresa (opcional)"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff'
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label className="text-white fw-bold">Serviço de Interesse *</Form.Label>
                  <Form.Select
                    name="service" value={formData.service}
                    onChange={handleChange} required
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff'
                    }}
                  >
                    <option value="">Selecione</option>
                    <option value="ai-support">🤖 Atendimento Automatizado</option>
                    <option value="social-automation">📱 Automação Social Media</option>
                    <option value="workflow">⚙️ Automação de Processos</option>
                    <option value="seo">📊 Agente SEO</option>
                    <option value="dao">🏛️ DAO Builder</option>
                    <option value="custom">🎯 Solução Customizada</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label className="text-white fw-bold">Descrição do Projeto *</Form.Label>
                  <Form.Control
                    as="textarea" rows={4} name="description"
                    value={formData.description} onChange={handleChange} required
                    placeholder="Conte-nos sobre seu projeto..."
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff'
                    }}
                  />
                </Form.Group>
                
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white fw-bold">Orçamento Estimado</Form.Label>
                      <Form.Select
                        name="budget" value={formData.budget} onChange={handleChange}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff'
                        }}
                      >
                        <option value="">Selecione</option>
                        <option value="0-5k">Até R$ 5.000</option>
                        <option value="5k-15k">R$ 5.000 - R$ 15.000</option>
                        <option value="15k-30k">R$ 15.000 - R$ 30.000</option>
                        <option value="30k+">Acima de R$ 30.000</option>
                        <option value="discuss">Prefiro discutir</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="text-white fw-bold">Prazo Desejado</Form.Label>
                      <Form.Select
                        name="timeline" value={formData.timeline} onChange={handleChange}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          color: '#fff'
                        }}
                      >
                        <option value="">Selecione</option>
                        <option value="urgent">Urgente (1-2 semanas)</option>
                        <option value="1month">1 mês</option>
                        <option value="2-3months">2-3 meses</option>
                        <option value="flexible">Flexível</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Form.Text className="text-white-50">* Campos obrigatórios</Form.Text>
                  <Button
                    type="submit" disabled={loading}
                    style={{
                      background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                      border: 'none', padding: '12px 40px',
                      fontWeight: 'bold', fontSize: '1.1rem'
                    }}
                  >
                    {loading ? 'Enviando...' : 'Enviar Solicitação'}
                  </Button>
                </div>
              </Form>
            </div>
            
            <Row className="mt-5">
              <Col md={4} className="mb-3">
                <div className="text-center p-3" style={{
                  background: 'rgba(46, 202, 213, 0.1)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '2rem' }}>⚡</div>
                  <h5 className="fw-bold" style={{ color: '#2ECAD5' }}>Resposta Rápida</h5>
                  <p className="small text-white mb-0">Retorno em 24h</p>
                </div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="text-center p-3" style={{
                  background: 'rgba(255, 107, 107, 0.1)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '2rem' }}>🎯</div>
                  <h5 className="fw-bold" style={{ color: '#FF6B6B' }}>Personalizado</h5>
                  <p className="small text-white mb-0">Solução sob medida</p>
                </div>
              </Col>
              <Col md={4} className="mb-3">
                <div className="text-center p-3" style={{
                  background: 'rgba(46, 202, 213, 0.1)',
                  borderRadius: '8px'
                }}>
                  <div style={{ fontSize: '2rem' }}>🤝</div>
                  <h5 className="fw-bold" style={{ color: '#2ECAD5' }}>Sem Compromisso</h5>
                  <p className="small text-white mb-0">Orçamento gratuito</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  )
}

