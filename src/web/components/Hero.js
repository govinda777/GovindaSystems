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
                            Uma comunidade de inovadores construindo o futuro da Inteligência Artificial.
                        </p>
                        <p className="mb-5 text-body-lg text-white/80">
                            Somos uma Organização Autônoma Descentralizada (DAO) focada em criar soluções de IA de código aberto.
                            Nossa comunidade colabora em projetos que vão desde automação inteligente até novas fronteiras em machine learning.
                            Junte-se a nós para construir, aprender e inovar no ecossistema de IA.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/join" className="btn btn-primary btn-lg me-3 mb-3 mb-md-0">
                                Junte-se à Comunidade
                            </Link>
                            <Link href="#projects" className="btn btn-outline-secondary btn-lg">
                                Conheça Nossos Projetos
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