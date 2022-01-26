import React from 'react'
import { Carousel, Row, Col, Container, Image } from "react-bootstrap"
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

const Teams = () => {
    return (
        <div id="teams">
            <h1 class="display-5">Our Team</h1>
            <Container align="center">
                <hr></hr>
                {/* FIRST ROW */}
                <Row>
                    <Col lg={3}>
                    <Image className='gdsclead' src={GDSCH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={3}>
                    <h2>Tejaswi Chaudhari</h2>
                    <h5>Chapter Lead</h5>
                    
                    <Image className='gdsclead' src={GDSCLG} style={{paddingTop:'1em',height:'6em', borderRadius:'10px', alignContent:'center'}}/>
                    <p style={{paddingTop:'1em'}}>Google Developer Student Clubs is a club led by brightest minds to provide practical knowledge of leading technologies to all aspiring learners.<hr></hr></p>
                    </Col>

                    <Col lg={3}>
                    <Image  src={IEEEH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={3}>
                    <h2>Anushka Jain</h2>
                    <h5>Chairperson</h5>
                    <Image className='gdsclead' src={IEEELG} style={{height:'6em', borderRadius:'10px', alignContent:'center'}}/>
                    <p style={{paddingTop:'1em'}}>IEEE is an international council where all the members get to enhance and broaden their technical skills in all areas. We bring skills to life.<hr></hr></p>

                    </Col>
                </Row>

                {/* SECOND ROW */}
                <Row classname="secondrow">
                    <Col lg={3}>
                    <Image className='gdsclead' src={WIEH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={3}>
                    <h2>Vijaya Govekar</h2>
                    <h5>Chairperson</h5>
                    <Image className='gdsclead' src={WIELG} style={{height:'6em', borderRadius:'10px', alignContent:'center'}}/>
                    <p style={{paddingTop:'1em'}}>Women In Engineering (WIE UMIT) is a council dedicated to promote women engineers and scientists, and inspiring girls around the world.<hr></hr></p>
                    </Col>

                    <Col lg={3}>
                    <Image className='gdsclead' src={CSIH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={3}>
                    <h2>Ramya Rajeshwari</h2>
                    <h5>Chairperson</h5>
                    <Image className='gdsclead' src={CSILG} style={{height:'6em', borderRadius:'10px', alignContent:'center'}}/><br></br>
                    <p style={{paddingTop:'2em'}}>CSI is a Family which belongs to all. Aiming Towards Learning, Building, Helping, Promoting, Training together. <hr></hr></p>
                    </Col>
                </Row>

                {/* THIRD ROW */}
                <Row className="thirdrow" style={{paddingTop:'3em'}}>
                    <Col lg={3}>
                    <Image className='gdsclead' src={CCH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={3}>
                    <h2>Shruti Rajput</h2>
                    <h5>President</h5>
                    <Image className='gdsclead' src={CCLG} style={{height:'6em', borderRadius:'10px', alignContent:'center'}}/>
                    <p style={{paddingTop:'1em'}}> Our mission is to build a robust Competitive Programming culture on campus and help students to become better problem solvers, foster learning and professional development.<hr></hr></p>
                    </Col>

                    <Col lg={3}>
                    <Image className='gdsclead' src={ECELLH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={3}>
                    <h2>Bhumi Sorathia</h2>
                    <h5>Chairperson</h5>
                    <Image className='gdsclead' src={ECELLLG} style={{height:'6em', borderRadius:'10px', alignContent:'center'}}/>
                    <p style={{paddingTop:'2.5em'}}>Ecell aims to create opportunities, promote innovation and enhance the knowledge sharing among students that encourages them to be unique<hr></hr></p>
                    </Col>
                </Row>

                {/* Fourth ROW */}
                <Row style={{width:'60em', paddingTop:'3em'}}>
                <Col lg={6} >
                    <Image className='gdsclead' src={ACMH} style={{height:'18em', width:'16em',border:'3px solid', borderRadius:'10px'}} />
                    </Col>

                    <Col lg={6}>
                    <h2>Mansi Kortikar</h2>
                    <h5>Chairperson</h5>
                    <Image className='gdsclead' src={ACMLG} style={{height:'6em', borderRadius:'10px', alignContent:'center'}}/>
                    <p style={{paddingTop:'1em'}}> ACM aims to develop leadership qualities and management skills in addition to enhancing technical competence in the members.<hr></hr></p>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Teams
