import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <h2>Sobre nós</h2>
            <p>
            A Govinda Systems DAO é uma organização descentralizada autônoma (DAO) especializada em fornecer soluções tecnológicas e consultorias para empresas. Nossa missão é impulsionar a inovação e transformar negócios por meio da aplicação de tecnologias emergentes e metodologias ágeis. Nosso propósito é ajudar nossos clientes a se adaptarem às rápidas mudanças do mercado, otimizando seus processos e alcançando melhores resultados.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
