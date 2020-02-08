import React, { Component } from "react";
import "./styles/Landing.css";
import Github from "../src/img/github.png"
import Linkedin from "../src/img/linkedin.png"
import Instagram from "../src/img/instagram.png"
import ResumeEN from "../src/pdf/resumeEN.pdf"

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing__container">
          <div className="landing__first">
            <div className="landing__hello">
              <span>Hello! I'm Yulieth</span>
            </div>
            <div className="landing__activities">
              <span>Full Stack Developer</span>
            </div>
          </div>
          <div className="landing__footer-container">
            <div className="landing__second">
              <a>Learn more</a>
              <a href = {ResumeEN} target = "_blank">Just Resume</a>
            </div>
            <div className="landing__footer">
             <img src={Github} alt=""with="30" height="28"/>
             <img src={Linkedin} alt=""with="30" height="28"/>
             <img src={Instagram} alt=""with="30" height="28"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;