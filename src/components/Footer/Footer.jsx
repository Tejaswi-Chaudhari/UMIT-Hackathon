import React from 'react'
import './Footer.css'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  return (
    <div className='footer'>
      <hr></hr>
      <Container className='footer-container'>
        <Row>
          <Col className='footer-socials'>
            <p className='lead footer-h'>Connect with us via</p>
            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='footer-icon instagram' icon={faInstagram} size="3x"/></a>
            <a href='https://discord.gg/5vvFMFefs5' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='footer-icon discord' icon={faDiscord} size="3x"/></a>
            <p className='lead footer-mail'>Write us on - waccinge@gmail.com</p>
            <p className='footer-cr'>2022 © All rights reserved.</p>
          </Col>
          <Col className='footer-form'>
            <Form>
              <Form.Group className='footer-formgrp' controlId="formGroupName">
                <Form.Control className='footer-formfield' type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group className='footer-formgrp' controlId="formGroupEmail">
                <Form.Control className='footer-formfield' type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className='footer-formgrp' controlId="formGroupMessage">
                <Form.Control className='footer-formfield' as="textarea" rows={3} placeholder="Write your message here..." />
              </Form.Group>
            </Form>
            <Button type="submit" className='footer-btn btn-grad'>
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>

    // <section className="contactus-section">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12 col-lg-10 mx-auto">
    //         <div className="row">
    //           <div className="contact-leftside col-12 col-lg-5">
    //             <h1 className="main-heading fw-bold">
    //               Connect With Our <br /> Arcturus team.
    //             </h1>


    //           </div>

    //           {/* right side contact form  */}
    //           <div className="contact-rightside col-12 col-lg-7">
    //             <form method="POST">
    //               <div className="row">
    //                 <div className="col-12 col-lg-6 contact-input-feild">
    //                   <input
    //                     type="text"
    //                     name="firstName"
    //                     id=""
    //                     className="form-control"
    //                     placeholder="First Name"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="row">
    //                 <div className="col-12 col-lg-6 contact-input-feild">
    //                   <input
    //                     type="text"
    //                     name="email"
    //                     id=""
    //                     className="form-control"
    //                     placeholder="Email ID"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="row">
    //               </div>

    //               <div className="row">
    //               </div>


    //               <button

    //                 type="submit"
    //                 className="btn btn-style w-100">
    //                 Submit
    //               </button>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div class='footer1'>

    //     <p>2022 All rights reserved. Hackathon conducted by UMIT Councils team, Mumbai.<div><br></br></div> Site developed by- <a href="#">Developer's team</a></p>
    //   </div>
    // </section>

  )
}

export default Footer
