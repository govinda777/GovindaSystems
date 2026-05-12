"use client";

import React from 'react';
import Image from 'next/image';
import hero from '../assets/hero.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="bg-hero-gradient min-h-[85vh] flex items-center text-white relative overflow-hidden py-12">
            {/* Elementos decorativos de fundo */}
            <div className="absolute bg-primary/20 blur-[120px] rounded-full w-[300px] h-[300px] -top-[50px] -left-[50px] pointer-events-none"></div>
            <div className="absolute bg-secondary/20 blur-[120px] rounded-full w-[400px] h-[400px] -bottom-[100px] -right-[100px] pointer-events-none"></div>
            
            <Container className="relative z-10">
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent display-3 fw-bold mb-4">Govinda Systems DAO</h1>
                        <p className="lead fs-4 mb-4">
                            Uma comunidade de inovadores construindo o futuro da Inteligência Artificial.
                        </p>
                        <p className="mb-5 text-lg text-white/80">
                            Somos uma Organização Autônoma Descentralizada (DAO) focada em criar soluções de IA de código aberto.
                            Nossa comunidade colabora em projetos que vão desde automação inteligente até novas fronteiras em machine learning.
                            Junte-se a nós para construir, aprender e inovar no ecossistema de IA.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/join">
                                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-200">
                                    Junte-se à Comunidade
                                </button>
                            </Link>
                            <Link href="/projects">
                                <button className="border-2 border-secondary text-white hover:bg-secondary/10 px-8 py-3 rounded-lg font-bold transition-all duration-200">
                                    Conheça Nossos Projetos
                                </button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5} className="text-center">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-[450px] mx-auto relative shadow-2xl">
                            <div className="relative z-10">
                                <Image 
                                    src={hero} 
                                    alt="Govinda Systems DAO Hero" 
                                    className="img-fluid rounded-lg max-h-[400px] w-auto shadow-inner"
                                    priority
                                />
                            </div>
                            <div className="absolute bg-secondary/30 blur-[60px] rounded-full w-[250px] h-[250px] -top-[30px] -right-[30px] -z-10"></div>
                            <div className="absolute bg-primary/30 blur-[60px] rounded-full w-[150px] h-[150px] -bottom-[20px] -left-[20px] -z-10"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
