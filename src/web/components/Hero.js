import React from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function Hero() {
    
    return (
        <section className="bg-hero-gradient min-h-[85vh] flex items-center text-white relative overflow-hidden py-12">
            {/* Elementos decorativos de fundo */}
            <div className="bg-blur-circle bg-blur-circle-primary w-[300px] h-[300px] top-[-50px] left-[-50px]"></div>
            <div className="bg-blur-circle bg-blur-circle-accent w-[400px] h-[400px] bottom-[-100px] right-[-100px]"></div>
            
            <Container className="relative z-10">
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <h1 className="text-gradient display-3 fw-bold mb-4">Govinda Systems DAO</h1>
                        <p className="lead fs-4 mb-4">
                            Uma organização descentralizada autônoma que simplifica a tecnologia para todos
                        </p>
                        <p className="mb-5 text-body-lg text-white/80">
                            A Govinda Systems DAO é uma comunidade descentralizada e autônoma formada por inovadores, 
                            desenvolvedores e especialistas unidos por propósitos comuns. Juntos, trabalhamos para criar 
                            soluções tecnológicas que transformam o ecossistema Web3, adaptando projetos às rápidas 
                            mudanças do mercado e alcançando resultados inovadores através da inteligência coletiva.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="#about" className="btn btn-primary btn-lg me-3 mb-3 mb-md-0">
                                Conheça a DAO
                            </Link>
                            <Link href="#services" className="btn btn-outline-secondary btn-lg">
                                Nossas Soluções
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5} className="text-center">
                        <div className="glass-card p-6 max-w-[450px] mx-auto relative">
                            <div className="relative z-10">
                                <Image 
                                    src={hero} 
                                    alt="Govinda Systems DAO Hero" 
                                    className="img-fluid rounded-lg max-h-[400px] w-auto" 
                                    priority
                                />
                            </div>
                            <div className="bg-blur-circle bg-blur-circle-secondary w-[250px] h-[250px] top-[-30px] right-[-30px]"></div>
                            <div className="bg-blur-circle bg-blur-circle-primary w-[150px] h-[150px] bottom-[-20px] left-[-20px]"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}