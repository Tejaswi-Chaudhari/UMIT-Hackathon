import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'
import Postman from "../../media/postman.svg"
import Devfolio from "../../media/Devfolio_Logo-White.png"
import Polygon from "../../media/Polygon_Logo-White.png"
import Celo from "../../media/Celo_Logo-White.png"
import Filecoin from "../../media/Filecoin_Logo-White.png"
import Tezos from "../../media/Tezos_Logo-White.png"
import MentorX from "../../media/Mentorx_Logo.png"
import HoverRobotix from "../../media/HoverRobotix_logo.png"
import Newton from "../../media/NewtonSchool.png"
import LeadingLearners from "../../media/LeadingL_logo.png"
import XYZ from "../../media/XYZ_logo.png"
import Echo from "../../media/Echo_logo.png"
import Circle from "../../media/Circle_logo.png"
import Smiley from "../../media/Smiley_logo.png"
import Fuschia from "../../media/Fuschia_logo.png"
import StreamYard from "../../media/StreamYard_logo.png"
import Noescape from "../../media/Noescape.png"
import './Sponsors.css'

const Sponsors = () => {
  return (
    <div id="sponsors">
      <h1 class="display-5">Sponsors</h1>
      <Container align="center">
        <hr></hr>
        <h4 class="display-6">Diamond Sponsors</h4>
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
        <h4 class="display-6">Platinum Sponsors</h4>
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
        <Row>
        
          <Col>
            <a href="https://www.newtonschool.co/" target="_blank">
              <Image className='sponsor-img' src={Newton} width="400px" />
            </a>
          </Col>
        

         <Col style={{paddingTop:"1em"}}>
          <a href="https://tezos.com" target="_blank">
            <Image className='sponsor-img' src={Tezos}  />
          </a>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="https://thementorx.com/" target="_blank">
              <Image className='sponsor-img' src={MentorX} width="200px" />
            </a>
          </Col>
          <Col>
            <a href="https://hoverrobotix.com/" target="_blank">
              <Image className='sponsor-img' src={HoverRobotix} width="200px" />
            </a>
          </Col>
        </Row>

      <h4 class="display-6">Golden Sponsors</h4>
      <Row>
          <Col>
            <a href="https://linktr.ee/leadinglearners" target="_blank">
              <Image className='sponsor-img' src={LeadingLearners} width="400px" />
            </a>
          </Col>
          <Col style={{paddingTop:"1em"}}>
            <a href="https://www.echo3d.co/" target="_blank">
              <Image className='sponsor-img' src={Echo} width="300px" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.newolf.tech/" target="_blank">
              <Image className='sponsor-img' src={Circle} width="200px" />
            </a>
          </Col>
          <Col>
            <a href="https://balsamiq.com/" target="_blank">
              <Image className='sponsor-img' src={Smiley} width="200px" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
          <a href="https://gen.xyz/links" target="_blank">
              <Image className='sponsor-img' src={XYZ} width="200px" />
            </a>
          </Col>
        </Row>

        <h4 class="display-6">Silver Sponsors</h4>
        <Row>
          <Col>
              <a href="https://streamyard.com/" target="_blank">
                <Image className='sponsor-img' src={StreamYard} width="400px" />
              </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://noescape.in/" target="_blank">
              <Image className='sponsor-img' src={Noescape} width="550px" />
            </a>
          </Col>
          <Col style={{paddingTop:"1em"}}>
            <a href="https://www.myfuschia.com/" target="_blank">
              <Image className='sponsor-img' src={Fuschia} width="550px" />
            </a>
          </Col>
        </Row>

        

        
      </Container>
    </div>
  )
}

export default Sponsors

