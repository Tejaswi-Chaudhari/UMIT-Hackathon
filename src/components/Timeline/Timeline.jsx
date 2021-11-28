import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
    return (
        <div>
            <div class="container py-3">

                <div class="row text-center text-black">
                    <div class="col-lg-8 mx-auto">
                        <h1 class="display-4">TIMELINE</h1>
                    </div>
                </div>
            </div>

            <VerticalTimeline lineColor={"black"}>
                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Session 1</h3>
                    <h4 className="vertical-timeline-element-subtitle">Git & GitHub</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Session 2</h3>
                    <h4 className="vertical-timeline-element-subtitle">Introduction</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(80, 10, 43)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(80, 10, 43)' }}
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

                >
                    <h3 className="vertical-timeline-element-title">Session 3</h3>
                    <h4 className="vertical-timeline-element-subtitle">Web and App</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="November 2012"
                    contentStyle={{ background: 'rgb(80, 10, 43)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(80, 10, 43)' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Session 4</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Submission</h3>
                    <h4 className="vertical-timeline-element-subtitle">Deadline dates</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

                />
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
