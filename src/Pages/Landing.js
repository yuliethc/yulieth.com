import React, { Component } from "react";
import "./styles/Landing.css";
import Github from "../src/img/github.png";
import Linkedin from "../src/img/linkedin.png";
import Instagram from "../src/img/instagram.png";
import ResumeEN from "../src/pdf/resumeEN.pdf";
import Menu from "../Components/Navbar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Achievements from "./Achievements";
import Blog from "./Blog";
import Contacts from "./Contacts";

class Landing extends Component {

  render() {
    // let MenuActive = "about__me"
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
              <a className="landing__second-more" href="#content__container">More</a>
              <div>

              </div>
              <a className="landing__second-resume" href={ResumeEN} target="_blank" tabIndex="1" autofocus="true">
                CV
              </a>
            </main>
            <footer className="landing__footer">
              <a href="https://github.com/yuliethc" target="_blank">
                <span>Github</span>
                <img src={Github}  alt="Github" with="30" height="28" />
              </a>
              <a href="https://www.linkedin.com/in/yulieth/" target="_blank">
                <span>LinkeIn</span>
                <img src={Linkedin}  alt="Linkedin" with="30" height="28" />
              </a>
              <a href="https://www.instagram.com/yuliethdotcom/" target="_blank">
                <span>Instagram</span>
                <img src={Instagram}  alt="Instagram" with="40" height="38" />
              </a>
            </footer>
          </div>
        </div>
        <div id="content__container">
          <Menu
          // MenuActive={MenuActive}
          ></Menu>
          <div id="about__me">
            <AboutMe></AboutMe>
          </div>
          <div id="portfolio"> <Portfolio></Portfolio></div>
          <div id="achievements">
           <Achievements></Achievements>
          </div>  
          <div id="blog">
           <Blog></Blog>
          </div>
          <div id="contacts">
            <Contacts></Contacts>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
