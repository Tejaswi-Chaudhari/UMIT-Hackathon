import { React, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { Parallax } from "react-parallax";
import "./Home.css";
import bg from '../../media/bg.gif'

const Home = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    // const image1 = "https://vod-progressive.akamaized.net/exp=1638821656~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4428%2F15%2F397143942%2F1690449774.mp4~hmac=eeeff42ef113c7e83b09205f4a7ef940aab0cb695fb4247a76bdf2d02939ad13/vimeo-prod-skyfire-std-us/01/4428/15/397143942/1690449774.mp4?filename=Circuit+-+33577.mp4";

    return (
        <div>
            <div className='home-wrapper'>
                <Parallax bgImage={bg} strength={500}>
                    <div className='home-fore'>
                        <div className='home-title'>
                            We-Accinge
                        </div>
                        <center>
                            <div className='home-box'>
                                <div className='home-countdown'>
                                    <center>
                                        <iframe src="https://free.timeanddate.com/countdown/i83i9ij1/cf100/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fs275/szw448/szh189/iso2022-01-30T00:00:00" allowtransparency="true" frameborder="0" width="448" height="189"></iframe>
                                    </center>
                                </div>
                                <div className='home-nav'>
                                    <center>
                                        <div
                                            className="apply-button"
                                            data-hackathon-slug="waccinge"
                                            data-button-theme="dark-inverted"
                                            style={{height: "44px", width: "312px"}}
                                        ></div>
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
