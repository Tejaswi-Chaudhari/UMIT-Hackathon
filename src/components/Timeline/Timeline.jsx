import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
    return (
        <div id="timeline">
            <div class="container py-3">

                <div class="row text-center text-black">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="display-5">Timeline</h1>
                        <br></br>
                    </div>
                </div>
            </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    contentStyle={{ background: 'linear-gradient(to right, #0061bf 0%, #9167f1  51%, #d200a3  100%)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  linear-gradient(to right, #0061bf 0%, #9167f1  51%, #d200a3  100%)' }}
                    date="20 Jan"
                    iconStyle={{ background: 'linear-gradient(to right, #0061bf 0%, #9167f1  51%, #d200a3  100%)', color: '#fff' }}
                >
                    <h3>Inaugration</h3>
                    <h4>What is We-Accinge?</h4>
                    <p>
                        Introduction about the hackathon, timeline and submissions
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: 'linear-gradient(to left, #0061bf 0%, #9167f1  51%, #d200a3  100%)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  linear-gradient(to left, #0061bf 0%, #9167f1  51%, #d200a3  100%)' }}
                    date="21 Jan"
                    iconStyle={{ background: 'linear-gradient(to left, #0061bf 0%, #9167f1  51%, #d200a3  100%)', color: '#fff' }}
                >
                    <h3>Tech Talk 1</h3>
                    <h4>Get Started with Web Dev</h4>
                    <p>
                        --soon be revealed--
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    contentStyle={{ background: 'linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)' }}
                    date="22 Jan"
                    iconStyle={{ background: 'linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}

                >
                    <h3>Tech Talk 2</h3>
                    <h4>Get Started with App Dec</h4>
                    <p>
                        --soon be revealed--
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="23 Jan"
                    contentStyle={{ background: 'linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)' }}
                    iconStyle={{ background: 'linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                >
                    <h3>Tech Talk 3</h3>
                    <h4>Git/GitHub Basics</h4>
                    <p>
                        --soon be revealed--
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: 'linear-gradient(to right, #000000  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)' }}
                    date="24 Jan"
                    iconStyle={{ background: 'linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                >
                    <h3>Proposal Submission</h3>
                    <p>
                        --soon be integrated--
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'linear-gradient(to left, #000000  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)' }}
                    date="25 Jan - 30 Jan"
                    iconStyle={{ background: 'linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)', color: '#fff' }}
                >
                    <h3>Coding Period</h3>
                    <p>
                        --soon be integrated--
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
