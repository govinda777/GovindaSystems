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
                        <h1 className="text-gradient display-3 fw-bold mb-4">GovindaSystems</h1>
                        <p className="lead fs-4 mb-4">
                            Soluções em Inteligência Artificial para o seu negócio
                        </p>
                        <p className="mb-5 text-body-lg text-white/80">
                            Transformamos empresas através da Inteligência Artificial e Automação Inteligente. 
                            Desenvolvemos soluções de IA personalizadas que otimizam processos, reduzem custos 
                            e aumentam a produtividade do seu negócio. Do atendimento automatizado à automação 
                            de redes sociais, oferecemos tecnologia de ponta para impulsionar seus resultados.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/join" className="btn btn-primary btn-lg me-3 mb-3 mb-md-0">
                                Solicitar Orçamento
                            </Link>
                            <Link href="#services" className="btn btn-outline-secondary btn-lg">
                                Nossas Soluções AI
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