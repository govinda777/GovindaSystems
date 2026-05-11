"use client";

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About: React.FC = () => {
  return (
    <section className="about py-20" id="about" style={{
      background: 'linear-gradient(180deg, #111827 0%, #15293E 100%)'
    }}>
      <Container>
        <Row className="mb-12">
          <Col className="text-center">
            <h2 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Quem Somos</h2>
            <div className="mx-auto" style={{ maxWidth: '80px', height: '4px', background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)', marginBottom: '2rem', borderRadius: '2px' }}></div>
          </Col>
        </Row>

        <Row className="align-items-center mb-12">
          <Col md={6} className="mb-8 mb-md-0">
            <h3 className="h4 fw-bold mb-4" style={{ color: '#2ECAD5' }}>Uma Organização Autônoma e Descentralizada</h3>
            <p className="text-lg mb-4 text-white/80 leading-relaxed">
              Govinda Systems DAO é uma comunidade global de desenvolvedores, pesquisadores e entusiastas de IA, unidos por uma paixão por inovação aberta e descentralizada.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Não somos uma empresa tradicional. Somos um coletivo que colabora em projetos de código aberto, impulsionando o avanço da inteligência artificial de forma transparente e acessível a todos.
            </p>
          </Col>
          <Col md={6}>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <h4 className="h5 fw-bold mb-6" style={{ color: '#FF6B6B' }}>Por que uma DAO?</h4>
              <ul className="list-unstyled mb-0">
                {[
                  'Governança comunitária e transparente',
                  'Inovação aberta e código-fonte acessível',
                  'Propriedade e recompensas para contribuidores',
                  'Desenvolvimento colaborativo e global'
                ].map((text, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-4 last:mb-0">
                    <div className="rounded-full d-flex align-items-center justify-content-center me-4 flex-shrink-0" style={{
                      width: '32px',
                      height: '32px',
                      background: '#2ECAD5',
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>{idx + 1}</div>
                    <div className="text-white/90 font-medium">{text}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        <Row className="mt-12">
          {[
            {
              title: 'Missão',
              icon: 'M8 1a5 5 0 0 0-5 5c0 1.113.433 2.13 1.143 2.88.71.75 1.275 1.418 1.68 2.132.405.714.573 1.356.573 1.988 0 .362.196.638.476.807.278.169.657.237 1.128.237.472 0 .851-.068 1.129-.237.28-.169.476-.445.476-.807 0-.632.168-1.274.573-1.988.405-.714.97-1.382 1.68-2.132A4.9 4.9 0 0 0 13 6a5 5 0 0 0-5-5zM9 13.8V13h2v.8a.6.6 0 0 1-.6.6h-.8a.6.6 0 0 1-.6-.6z',
              desc: 'Construir um ecossistema de IA descentralizado e de código aberto, onde qualquer pessoa pode contribuir e se beneficiar da inovação.'
            },
            {
              title: 'Visão',
              icon: 'M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z',
              desc: 'Ser a principal DAO para o desenvolvimento de tecnologias de IA, fomentando a colaboração global e a distribuição justa de valor.'
            },
            {
              title: 'Propósito',
              icon: 'M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
              desc: 'Empoderar indivíduos para colaborar na criação de tecnologias de IA, garantindo que o futuro da inteligência artificial seja aberto, justo e descentralizado.'
            }
          ].map((item, idx) => (
            <Col md={4} key={idx} className="mb-6 mb-md-0">
              <div className="h-100 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="mb-4" style={{ color: '#2ECAD5' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h4 className="h5 fw-bold mb-4" style={{ color: '#FF6B6B' }}>{item.title}</h4>
                <p className="mb-0 text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;
