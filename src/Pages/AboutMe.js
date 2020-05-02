import React, { Component } from "react";
import "./styles/AboutMe.css";
import me from "./../src/img/me.jpg";

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
             
            
            <div>
              <p>
                I’m a venezuelan around the world, 29 years old, Front End
                developer with a Degree in Informatics Education. I speak
                Spanish and English. I develop innovative and accessible web
                applications.
              </p>
              <p>
                I have expertise in UI/UX design, design thinking and
                copywriting. I also design user interfaces and interactive
                prototypes with high-quality strategic texts. Likewise, I am
                passionate about Database management, from the creation of the
                database structure diagram, tables and functions to stored
                procedures.
              </p>

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
      </div>
    );
  }
}

export default AboutMe;
