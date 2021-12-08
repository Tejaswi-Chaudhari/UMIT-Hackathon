import React from 'react'
import "./About.css";
import about from '../../media/about.gif';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const About = () => {
    return (
        <div id="about-comp">
            <section id="about" class="about-section">
                <div class="container">
                    <div class="row">
                        <div data-animate="fadeInUp" class="col-lg-6 text">
                            <p>We-Accinge <i>(W-Accinge)</i> a <strong>Hackathon</strong> of Usha Mittal Institute of Technology. A collaborative effort of GDSC, IEEE, CodeChef, CSI, WIE, ACM and E-Cell UMIT. We Accinge means bracing ourselves for giving our best. We motivate young and curious minds to be a part of this hackathon, give their best and learn.</p>
                            <p>'A finger cannot lift a weight but, the strength of multiple hands can'. Like us, we encourage you to team-up and give it a shot.</p>
                            <p className='lead about-l-txt'>Team Size: 1-4 Participants<br></br>Eligibility Criteria: Students Only</p>
                            <Button className='about-btn btn-grad'>
                                Check out the domains
                            </Button>
                            <Button className='about-btn btn-grad'>
                                Register Now
                            </Button>
                        </div>
                        <div class="col-lg-6">
                            <Image src={about} className='about-img'></Image>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
