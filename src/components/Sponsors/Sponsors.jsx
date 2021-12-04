import React from 'react'
import {Row, Col, Container, Image} from 'react-bootstrap'
import sp4 from './sp4.jpg'

const Sponsors = () => {
    return (
      <Container align="center">
  <Row>
    <Col lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
    <Col lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
    <Col lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
    <Col lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
  </Row>
  <Row>
    <Col  lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
    <Col  lg={3} >
      <Image src={sp4} roundedCircle />
    </Col>
    <Col  lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
    <Col  lg={3}>
      <Image src={sp4} roundedCircle />
    </Col>
  </Row>

</Container>

    )
}

export default Sponsors

