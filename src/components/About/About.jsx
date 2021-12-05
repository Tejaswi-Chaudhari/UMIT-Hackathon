import React from 'react'
import "./About.css";
import about from "./about.svg";
const About = () => {
    return (
        <div id="about-comp">
            <section id="about" class="about-section">
                <div class="container">
                    <header class="text-center">
                        <h2 data-animate="fadeInDown" class="title">About us</h2>
                    </header>
                    <div class="row">
                        <div data-animate="fadeInUp" class="col-lg-6 text">
                            <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
                            <p>Received overcame oh sensible so at an. Formed do change merely to county it. <strong>Am separate contempt</strong> domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.</p>
                            <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
                        </div>
                        <div data-animate="fadeInUp" class="col-lg-6">
                        <img src = {about} width="500" alt="About"/>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
