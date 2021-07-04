import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/ava.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Sergey Ishimov</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              My Name is Sergey Ishimov. I am student of UNC coding bootcamp.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>+1704 345 7277</p>
            <h5>Email</h5>
            <p>sishimov@gmail.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={"January 2021"}
              endYear={"July 2021"}
              schoolName={"UNC coding Bootcamp"}
              degreeName={"Full Stack Develloper"}
            />
            <Education
              startYear={"September 2004"}
              endYear={"June 2008"}
              schoolName={
                "Siberian State University Of Telecommunications and Information Science"
              }
              degreeName={
                "IT Technologies and Communications Systems - Unfinished"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"January 2014"}
              endYear={"February 2018"}
              jobName={"AutoCareLLC"}
              jobDesc={
                "IT and Video Survailance (Taking Care of all Survailance cameras on all 3 facilites , Trouble shooting, monitoring,installing) Managing all work stations such as : PC, phones , printers , servers. Reserching equipment for stable and better productions."
              }
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={90} />
            <Skills skill={"ReactJS"} progress={60} />
            <Skills skill={"Node.js"} progress={60} />
            <Skills skill={"JavaSrcript"} progress={70} />
            <Skills skill={"MySQL"} progress={70} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
