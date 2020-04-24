import React, { Component } from "react";
import "./styles/Landing.css";
import Github from "../src/img/github.png";
import Linkedin from "../src/img/linkedin.png";
import Instagram from "../src/img/instagram.png";
import ResumeEN from "../src/pdf/resumeEN.pdf";

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing__container">
          <header className="landing__first">
            <section className="landing__hello">
              <span>Hello! I'm Yulieth</span>
            </section>
            <section className="landing__activities">
              <span>Front-End Developer</span>
            </section>
          </header>
          <div className="landing__footer-container">
            <main className="landing__second">
              <a className="landing__second-more" href="https://yulieth.myportfolio.com/">
                More
              </a>
              <div></div>
              <a
                className="landing__second-resume"
                href={ResumeEN}
                target="_blank"
                tabIndex="1"
                autofocus="true"
              >
                CV
              </a>
              {/* <a href = {"/#"} target = "_blank">Just Resume</a> */}
            </main>
            <footer className="landing__footer">
              <a href="https://github.com/yuliethc" target="_blank">
                Github
                <img src={Github} alt="Github" with="30" height="28" />
              </a>
              <a href="https://www.linkedin.com/in/yulieth/" target="_blank">
                LinkeIn
                <img src={Linkedin} alt="Linkedin" with="30" height="28" />
              </a>
              <a
                href="https://www.instagram.com/yuliethdotcom/"
                target="_blank"
              >
                <span>Instagram</span>
                <img src={Instagram} alt="Instagram" with="40" height="38" />
              </a>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
