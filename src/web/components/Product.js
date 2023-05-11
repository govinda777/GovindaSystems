import React, { useEffect, useState, useMemo } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import Bubble from './Bubble'
import desenvolvimento from '../assets/desenvolvimento.png'
import consultoria from '../assets/consultoria.png'
import marketingDigital from '../assets/marketing_digital.png'
import solucoes from '../assets/solucoes.png'
import mobileWeb from '../assets/mobile_web.png'
import { Container } from 'react-bootstrap'

const Product = () => {

    return (
        <section className='product'>
            <Container>

                <Row>
                    <Col className="text-center">
                        <Bubble src={desenvolvimento} alt="Description" />
                    </Col>
                    <Col className="text-center">
                        <Bubble src={desenvolvimento} alt="Description" />
                    </Col>
                    <Col className="text-center">
                        <Bubble src={desenvolvimento} alt="Description" />
                    </Col>
                    <Col className="text-center">
                        <Bubble src={desenvolvimento} alt="Description" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Product