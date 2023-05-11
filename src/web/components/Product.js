import React, { useEffect, useState, useMemo } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import consultoria from '../assets/consultoria.png'
import marketingDigital from '../assets/marketing_digital.png'
import solucoes from '../assets/solucoes.png'
import mobileWeb from '../assets/mobile_web.png'

const Product = () => {

    return (
        <div className='product'>
            <Row>
                <Col className="text-center">
                    <Image src={logo} height={40} width={40} />
                </Col>
                <Col className="text-center">
                    <Image src={logo} height={40} width={40} />
                </Col>
                <Col className="text-center">
                    <Image src={logo} height={40} width={40} />
                </Col>
                <Col className="text-center">
                    <Image src={logo} height={40} width={40} />
                </Col>
            </Row>
        </div>
    )
}