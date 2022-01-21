import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import Postman from "../../media/postman.svg"
import Devfolio from "../../media/Devfolio_Logo-White.png"
import Polygon from "../../media/Polygon_Logo-White.png"
import Celo from "../../media/Celo_Logo-White.png"
import Filecoin from "../../media/Filecoin_Logo-White.png"
import Tezos from "../../media/Tezos_Logo-White.png"
import './Sponsors.css'

const Sponsors = () => {
  return (
    <div id="sponsors">
      <h1 class="display-5">Sponsors</h1>
      <Container align="center">
        <hr></hr>
        <h4 class="display-6">Platinum Sponsors</h4>
        <Row>
          <Col lg={6} sm={12} xs={12}>
            <a href="https://www.postman.com/" target="_blank">
              <Image className='sponsor-img' src={Postman} style={{ height: '8em' }} />
            </a>
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <a href="https://devfolio.co" target="_blank">
              <Image className='sponsor-img' src={Devfolio} style={{ paddingTop: '1em' }} />
            </a>
          </Col>
          <a href="https://polygon.technology/" target="_blank">
            <Image className='sponsor-img' src={Polygon} />
          </a>
        </Row>
        <h4 class="display-6">Diamond Sponsors</h4>
        <Row>
          <Col lg={6} sm={12} xs={12}>
            <a href="https://celo.org" target="_blank">
              <Image className='sponsor-img' src={Celo} />
            </a>
          </Col>
          <Col lg={6} sm={12} xs={12}>
            <a href="https://filecoin.io" target="_blank">
              <Image className='sponsor-img' src={Filecoin} width="300px" />
            </a>
          </Col>
        </Row>
        <a href="https://tezos.com" target="_blank">
          <Image className='sponsor-img' src={Tezos} />
        </a>
        <Row>

        </Row>

      </Container>
    </div>
  )
}

export default Sponsors

