
import Bubble from './Bubble'
import desenvolvimento from '../assets/desenvolvimento.png'
import mobileWeb from '../assets/mobile_web.png'
import consultoria from '../assets/consultoria.png'
import marketingDigital from '../assets/marketing_digital.png'
import solucoes from '../assets/solucoes.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'

const services = [
  {
    title: "Desenvolvimento de software personalizado",
    description: "A equipe da Govinda Systems pode criar soluções de software sob medida para atender às necessidades específicas dos clientes, seja para uma startup ou uma empresa estabelecida.",
    imageUrl: desenvolvimento,
  },
  {
    title: "Aplicações móveis e web",
    description: "A Govinda Systems tem experiência no desenvolvimento de aplicativos móveis e web eficientes e atraentes, que podem ajudar as empresas a expandir sua presença online e atrair novos clientes.",
    imageUrl: mobileWeb,
  },
  {
    title: "Soluções em blockchain e criptomoedas (Dapp, Web3, Defi)",
    description: "A equipe da Govinda Systems possui conhecimentos avançados no desenvolvimento de soluções baseadas em blockchain, como aplicativos descentralizados (Dapps), projetos Web3 e finanças descentralizadas (DeFi).",
    imageUrl: solucoes,
  },
  {
    title: "Consultoria e treinamento em tecnologia",
    description: "A Govinda Systems oferece serviços de consultoria e treinamento em várias áreas de tecnologia, ajudando as empresas a se manterem atualizadas com as tendências e práticas mais recentes do setor.",
    imageUrl: consultoria,
  },
  {
    title: "Soluções e Consultoria em marketing digital",
    description: "A Govinda Systems também possui experiência em marketing digital, oferecendo estratégias e soluções que ajudam as empresas a melhorar sua presença online, aumentar o engajamento dos clientes e gerar mais vendas.",
    imageUrl: marketingDigital,
  },
]

const Product = () => {
  return (
    <Container>
      <Row>
        {services.map((service, idx) => (
          <Col xs={12} sm={6} md={4} key={idx} style={{ width: '18rem' }}>
            <Card className="my-3">
              <div className="d-flex justify-content-center mt-3">
                <div className="overflow-hidden">
                  <Image src={service.imageUrl} alt={service.title} />
                </div>
              </div>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Product