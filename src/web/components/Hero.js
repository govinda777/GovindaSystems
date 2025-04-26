import React, { useState } from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

export default function Hero() {
    
    return (
        <section className="hero py-5" id="hero" style={{ 
            background: 'linear-gradient(135deg, #111827 0%, #1E3D59 100%)',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Elementos decorativos de fundo */}
            <div className="position-absolute" style={{ 
                width: '300px', 
                height: '300px', 
                background: 'radial-gradient(circle, rgba(46, 202, 213, 0.15) 0%, rgba(46, 202, 213, 0) 70%)', 
                borderRadius: '50%',
                top: '-50px',
                left: '-50px',
                zIndex: 0
            }}></div>
            <div className="position-absolute" style={{ 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(242, 95, 148, 0.1) 0%, rgba(242, 95, 148, 0) 70%)', 
                borderRadius: '50%',
                bottom: '-100px',
                right: '-100px',
                zIndex: 0
            }}></div>
            
            <Container className="position-relative" style={{ zIndex: 1 }}>
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <h1 className="display-3 fw-bold mb-4" style={{ 
                            background: 'linear-gradient(90deg, #2ECAD5, #FF6B6B)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Govinda Systems DAO</h1>
                        <p className="lead fs-4 mb-4">
                            Uma organização descentralizada autônoma que simplifica a tecnologia para todos
                        </p>
                        <p className="mb-5" style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                            A Govinda Systems DAO é uma comunidade descentralizada e autônoma formada por inovadores, 
                            desenvolvedores e especialistas unidos por propósitos comuns. Juntos, trabalhamos para criar 
                            soluções tecnológicas que transformam o ecossistema Web3, adaptando projetos às rápidas 
                            mudanças do mercado e alcançando resultados inovadores através da inteligência coletiva.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <Link href="#about" className="btn btn-lg fw-bold px-4 me-3 mb-3 mb-md-0" style={{ 
                                backgroundColor: '#2ECAD5',
                                color: '#111827',
                                border: 'none'
                            }}>
                                Conheça a DAO
                            </Link>
                            <Link href="#services" className="btn btn-lg px-4" style={{ 
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid #FF6B6B'
                            }}>
                                Nossas Soluções
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5} className="text-center">
                        <div className="hero-image position-relative" style={{ 
                            background: 'rgba(31, 41, 55, 0.5)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            padding: '1.5rem',
                            maxWidth: '450px',
                            margin: '0 auto',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                        }}>
                            <div className="position-relative" style={{ zIndex: 2 }}>
                                <Image 
                                    src={hero} 
                                    alt="Govinda Systems DAO Hero" 
                                    className="img-fluid" 
                                    style={{ 
                                        borderRadius: '10px',
                                        maxHeight: '400px',
                                        width: 'auto'
                                    }}
                                    priority
                                />
                            </div>
                            <div className="position-absolute" style={{ 
                                width: '250px', 
                                height: '250px', 
                                background: 'rgba(255, 107, 107, 0.08)', 
                                borderRadius: '50%',
                                top: '-30px',
                                right: '-30px',
                                zIndex: 1
                            }}></div>
                            <div className="position-absolute" style={{ 
                                width: '150px', 
                                height: '150px', 
                                background: 'rgba(46, 202, 213, 0.08)', 
                                borderRadius: '50%',
                                bottom: '-20px',
                                left: '-20px',
                                zIndex: 1
                            }}></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}