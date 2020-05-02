import React, { Component } from "react";
import "./styles/AboutMe.css";
import me from "./../src/img/me.jpg";
import Skills from "./../Components/Skills.js";

class AboutMe extends Component {
  render() {
    return (
      <div className="about__me">
        <div className="about__me_principal">
          <div className="about__me_imagen-container">
            <img src={me} alt="" />
          </div>
          <div className="about__me_text--container">
            <h2>I'm Yulieth Lubo de D'Agostini</h2>

            <p>
              I’m a venezuelan around the world, 29 years old, Front End
              developer with a Degree in Informatics Education.
              <p>I develop innovative and accessible web applications.</p>
            </p>
            <div className="about__me_text--container-skills">
              <Skills Name="React JS"></Skills>
              <Skills Name="HTML"></Skills>
              <Skills Name="CSS"></Skills>
              <Skills Name="UI/UX design"></Skills>
              <Skills Name="Design Thinking"></Skills>
              <Skills Name="Copywriting"></Skills>
              <Skills Name="Web Accessibility"></Skills>
              <Skills Name="Adobe XD"></Skills>
              <Skills Name="Photoshop"></Skills>
              <Skills Name="MySQL Database management"></Skills>
            </div>

            {/* <p>
                I have expertise in UI/UX design, design thinking and
                copywriting. I also design user interfaces and interactive
                prototypes with high-quality strategic texts. Likewise, I am
                passionate about Database management, from the creation of the
                database structure diagram, tables and functions to stored
                procedures.
              </p> */}

            {/* <p>
                I am an autodidact, I believe in excellence and I have always
                put all my values, skills and creativity to achieve any goal in
                the best way possible, this is my greatest asset that allows me
                to develop any task with high quality, always giving more than
                expected, building trust and respect.
              </p>
              <p>I'm ready to new challenges, looking for new opportunities.</p> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
