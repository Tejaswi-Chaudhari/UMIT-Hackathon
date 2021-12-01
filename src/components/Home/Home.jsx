import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Parallax } from "react-parallax";
import "./Home.css";

const Home = () => {

    const image1 = "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

    return (
        <div>
            <div className='home-wrapper'>
                <Parallax bgImage={image1} strength={500}>
                    <div className='home-fore'>
                        <div className='home-title'>
                            Arcturus
                        </div>
                        <center>
                            <div className='home-box'>
                                <div className='home-countdown'>
                                    <center>
                                        <iframe src="https://free.timeanddate.com/countdown/i837fkqv/cf100/cm0/cu4/ct0/cs1/ca0/co0/cr0/ss1/cacfff/cpcfff/pct/tcfff/fs400/szw448/szh189/iso2022-01-25T00:00:00" allowtransparency="true" frameborder="0" width="448" height="189"></iframe>
                                    </center>
                                </div>
                                <div className='home-nav'>
                                    <center>
                                        <Button variant='danger' className='home-nav-discord'>Discord</Button>
                                        <Button variant='danger' className='home-nav-devfolio'>Devfolio</Button>
                                    </center>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </center>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default Home
