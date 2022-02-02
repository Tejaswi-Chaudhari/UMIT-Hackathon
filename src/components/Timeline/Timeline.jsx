import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
          contentStyle={{
            background:
              "linear-gradient(to right, #0061bf 0%, #9167f1  51%, #d200a3  100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to right, #0061bf 0%, #9167f1  51%, #d200a3  100%)",
          }}
          date="30 Jan"
          iconStyle={{
            background:
              "linear-gradient(to right, #0061bf 0%, #9167f1  51%, #d200a3  100%)",
            color: "#fff",
          }}
        >
          <h3>Inaugration</h3>
          <h4>What is We-Accinge?</h4>
          <p>Introduction about the hackathon, timeline and submissions</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(to left, #0061bf 0%, #9167f1  51%, #d200a3  100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to left, #0061bf 0%, #9167f1  51%, #d200a3  100%)",
          }}
          date="31 Jan"
          iconStyle={{
            background:
              "linear-gradient(to left, #0061bf 0%, #9167f1  51%, #d200a3  100%)",
            color: "#fff",
          }}
        >
          <h3>Tech Talk 1</h3>
          <h4>Git &#38; Github</h4>
          <p>Speaker - Ms. Vaishnavi Desai</p>
          <p>Time - 6:30 onwards</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
          }}
          date="01 Feb"
          iconStyle={{
            background:
              "linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
        >
          <h3>Tech Talk 2</h3>
          <h4>Introduction to Cloud Computing with Microsoft Azure</h4>
          <p>Speaker - Ms. Anika Tibrewala</p>
          <p>Time - 6:30 onwards</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="02 Feb"
          contentStyle={{
            background:
              "linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
          }}
          iconStyle={{
            background:
              "linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
        >
          <h3>Tech Talk 3</h3>
          <h4>Web Development</h4>
          <p>Speaker - Ms. Bhoomika Wahal</p>
          <p>Time - 6:30 onwards</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(to right, #000000  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
          }}
          date="03 Feb"
          iconStyle={{
            background:
              "linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
        >
          <h3>Abstract Submission</h3>
          <p> Deadline - 12 PM </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(to left, #000000  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
          }}
          date="3 Feb - 9 Feb"
          iconStyle={{
            background:
              "linear-gradient(to left, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
        >
          <h3>Coding Period</h3>
          <p>Participants are required to submit a working prototype</p>
          <br />
          <a href="waccinge.devfolio.co" target="_blank" className="about-btn">
            Submit<strong> your</strong> project
          </a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background:
              "linear-gradient(to right, #000000  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
          contentArrowStyle={{
            borderRight:
              "7px solid  linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
          }}
          date="08 Feb"
          iconStyle={{
            background:
              "linear-gradient(to right, #9167f1  0%, #d200a3  51%,  #0061bf 100%)",
            color: "#fff",
          }}
        >
          <h3>Devfolio Submission Session</h3>
          <p> Time : 6:30 pm </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
