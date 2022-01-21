import React from 'react'
import { Row, Col, Container, Image } from "react-bootstrap"
import './Teams.css'
import GDSCH from "../../media/GDSCTC.jpeg"
import GDSCLG from "../../media/GDSCLG6.png"
import CCLG from "../../media/CCLG.png"
import CCH from "../../media/CCH.jpg"
import WIELG from "../../media/WIELG.png"
import WIEH from "../../media/WIEH.png"
import IEEELG from "../../media/IEEELG.png"
import IEEEH from "../../media/IEEEH.jpg"
import CSILG from "../../media/CSILG.png"
import CSIH from "../../media/CSIH.jpg"
import ACMLG from "../../media/ACMLG.png"
import ACMH from "../../media/ACMH.jpg"
import ECELLLG from "../../media/ECELLLG.png"
import ECELLH from "../../media/ECELLH.jpg"
import POSTMANLG from "../../media/POSTMANLG.svg"
import POSTMANH from "../../media/POSTMANH.jpg"

const Teams = () => {
    return (
        <div id="teams">
            <h1 class="display-5">Our Team</h1>
            <Container align="center">
                <hr></hr>
                {/* FIRST ROW */}
                <Row style={{ paddingTop: '3em' }}>
                    <Col lg={3}>
                        <Image className='gdsclead' src={GDSCH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Tejaswi Chaudhari</h4>
                        <h5>Chapter Lead</h5>

                        <Image className='gdsclead' src={GDSCLG} style={{ height: '4em', alignContent: 'center' }} />
                        <p style={{ paddingTop: '1em' }}>Google Developer Student Clubs is a club led by brightest minds to provide practical knowledge of leading technologies to all aspiring learners.</p>
                    </Col>

                    <Col lg={3}>
                        <Image src={IEEEH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Anushka Jain</h4>
                        <h5>Chairperson</h5>
                        <Image className='gdsclead' src={IEEELG} style={{ height: '4em', alignContent: 'center' }} />
                        <p style={{ paddingTop: '1em' }}>IEEE is an international council where all the members get to enhance and broaden their technical skills in all areas. We bring skills to life.</p>

                    </Col>
                </Row>

                {/* SECOND ROW */}
                <Row classname="secondrow" style={{ paddingTop: '3em' }}>
                    <Col lg={3}>
                        <Image className='gdsclead' src={WIEH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Vijaya Govekar</h4>
                        <h5>Chairperson</h5>
                        <Image className='gdsclead' src={WIELG} style={{ height: '4em' }} />
                        <p style={{ paddingTop: '1em' }}>Women In Engineering (WIE UMIT) is a council dedicated to promote women engineers and scientists, and inspiring girls around the world.</p>
                    </Col>

                    <Col lg={3}>
                        <Image className='gdsclead' src={CSIH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Ramya Rajeshwari</h4>
                        <h5>Chairperson</h5>
                        <Image className='gdsclead' src={CSILG} style={{ height: '4em' }} /><br></br>
                        <p style={{ paddingTop: '1em' }}>CSI is a Family which belongs to all. Aiming Towards Learning, Building, Helping, Promoting, Training together. </p>
                    </Col>
                </Row>

                {/* THIRD ROW */}
                <Row className="thirdrow" style={{ paddingTop: '3em' }}>
                    <Col lg={3}>
                        <Image className='gdsclead' src={CCH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Shruti Rajput</h4>
                        <h5>President</h5>
                        <Image className='gdsclead' src={CCLG} style={{ height: '4em' }} />
                        <p style={{ paddingTop: '1em' }}> Our mission is to build a robust Competitive Programming culture on campus and help students to become better problem solvers, foster learning and professional development.</p>
                    </Col>

                    <Col lg={3}>
                        <Image className='gdsclead' src={ECELLH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Bhumi Sorathia</h4>
                        <h5>Chairperson</h5>
                        <Image className='gdsclead' src={ECELLLG} style={{ height: '4em' }} />
                        <p style={{ paddingTop: '1em' }}>Ecell aims to create opportunities, promote innovation and enhance the knowledge sharing among students that encourages them to
                            be unique </p>
                    </Col>
                </Row>

                {/* Fourth ROW */}
                <Row style={{ paddingTop: '3em' }}>
                    <Col lg={3}>
                        <Image className='gdsclead' src={POSTMANH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Kajal Hake</h4>
                        <h5>Postman Student Leader</h5>
                        <Image className='gdsclead' src={POSTMANLG} style={{ height: '4em'}} />
                        <p style={{ paddingTop: '1em' }}>Postman is the industry-standard API platform that makes you a key part of that foundation. Postman Student Program aims to promote API literacy amongst students and educators.</p>
                    </Col>
                    <Col lg={3} >
                        <Image className='gdsclead' src={ACMH} style={{ height: '18em', width: '16em', border: '3px solid', borderRadius: '10px' }} />
                    </Col>

                    <Col lg={3}>
                        <h4>Mansi Kortikar</h4>
                        <h5>Chairperson</h5>
                        <Image className='gdsclead' src={ACMLG} style={{ height: '4em' }} />
                        <p style={{ paddingTop: '1em' }}>ACM aims to develop leadership qualities and management skills in addition to enhancing technical competence in the members.</p>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default Teams
