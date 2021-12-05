import React from 'react'
import { Carousel } from "react-bootstrap"

import teams from "./teams.jpg"


const Teams = () => {
    return (
        <div id="teams">
            <div class="container py-3">

                <div class="row text-center text-black">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="display-4">TEAMS</h1>
                    </div>
                </div>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 teamImg"
                        src={teams}
                        alt="First slide"
                        height="650px"
                    />
                    <Carousel.Caption>
                        <h3>GDSC</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teams}
                        alt="Second slide"
                        height="650px"
                    />

                    <Carousel.Caption>
                        <h3>IEEE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teams}
                        alt="Third slide"
                        height="650px"
                    />

                    <Carousel.Caption>
                        <h3>CSI</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teams}
                        alt="First slide"
                        height="650px"
                    />
                    <Carousel.Caption>
                        <h3>CodeChef</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teams}
                        alt="First slide"
                        height="650px"
                    />
                    <Carousel.Caption>
                        <h3>ACM</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teams}
                        alt="First slide"
                        height="650px"
                    />
                    <Carousel.Caption>
                        <h3>E-cell</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={teams}
                        alt="First slide"
                        height="650px"
                    />
                    <Carousel.Caption>
                        <h3>WIE</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


        </div>
    )
}

export default Teams
