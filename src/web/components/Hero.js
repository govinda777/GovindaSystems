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
            backgroundImage: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            color: 'white'
        }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <h1 className="display-3 fw-bold mb-4">Govinda Systems DAO</h1>
                        <p className="lead fs-4 mb-4">
                            Uma organização descentralizada autônoma que simplifica a tecnologia para todos
                        </p>
                        <p className="mb-5" style={{ fontSize: '1.1rem' }}>
                            A Govinda Systems DAO é uma comunidade descentralizada e autônoma formada por inovadores, 
                            desenvolvedores e especialistas unidos por propósitos comuns. Juntos, trabalhamos para criar 
                            soluções tecnológicas que transformam o ecossistema Web3, adaptando projetos às rápidas 
                            mudanças do mercado e alcançando resultados inovadores através da inteligência coletiva.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <Link href="#about">
                                <button className="btn btn-light btn-lg fw-bold px-4 me-3 mb-3 mb-md-0">
                                    Conheça a DAO
                                </button>
                            </Link>
                            <Link href="#services">
                                <button className="btn btn-outline-light btn-lg px-4">
                                    Nossas Soluções
                                </button>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5} className="text-center">
                        <div className="hero-image position-relative" style={{ 
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            padding: '3rem',
                            maxWidth: '450px',
                            margin: '0 auto'
                        }}>
                            <div className="position-relative" style={{ zIndex: 2 }}>
                                <div className="d-flex justify-content-center">
                                    <div className="blockchain-icon mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-braces" viewBox="0 0 16 16">
                                            <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6zM13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6z"/>
                                        </svg>
                                    </div>
                                </div>
                                <h2 className="h3 fw-bold mb-3">Somos uma organização descentralizada baseada em blockchain</h2>
                                <div className="d-flex flex-column gap-3 text-start mt-4">
                                    <div className="d-flex align-items-center">
                                        <div className="feature-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-white text-primary" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                            </svg>
                                        </div>
                                        <div>Governança coletiva</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="feature-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-white text-primary" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-shield-check" viewBox="0 0 16 16">
                                                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                                                <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                            </svg>
                                        </div>
                                        <div>Segurança e transparência</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="feature-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-white text-primary" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-currency-exchange" viewBox="0 0 16 16">
                                                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                                            </svg>
                                        </div>
                                        <div>Ecossistema de tokens próprio</div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute" style={{ 
                                width: '250px', 
                                height: '250px', 
                                background: 'rgba(255, 255, 255, 0.1)', 
                                borderRadius: '50%',
                                top: '-30px',
                                right: '-30px',
                                zIndex: 1
                            }}></div>
                            <div className="position-absolute" style={{ 
                                width: '150px', 
                                height: '150px', 
                                background: 'rgba(255, 255, 255, 0.1)', 
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