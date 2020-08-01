import React, { Component } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import "./vendor/icofont/icofont.min.css";
import photo from "./img/photo.jpg";
import "../../src/Pages/styles/AboutMe.css";
import Preloader from "./components/Preloader";
import UpButton from "./components/UpButton";

class About extends Component {
  render() {
    return (
      <>
        <Header Title={"About"}></Header>
        <main id="main">
          <section id="about" class="about">
            <div class="container" data-aos="fade-up">
              <div class="section-title">
                <h2>About</h2>
                {/* <p>
                  I design and develop experiences that make people's lives
                  simple.
                </p> */}
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <img src={photo} class="img-fluid" alt="" />
                </div>
                <div class="col-lg-8 pt-3 pt-lg-0 mt-4 content">
                  <h3>Yulieth Lubo de D'Agistini. </h3>
                  <h3> Front-End Developer</h3>
                  <p class="font-italic">
                    <p>
                      I’m a venezuelan around the world. 
                    </p>
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i class="icofont-rounded-right"></i>{" "}
                          <strong>Birthday:</strong> April 29th of 1991
                        </li>
                        <li>
                          <i class="icofont-rounded-right"></i>{" "}
                          <strong>Phone:</strong> +51 953 789 124
                        </li>
                        <li>
                          <i class="icofont-rounded-right"></i>{" "}
                          <strong>Age:</strong> 29
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i class="icofont-rounded-right"></i>{" "}
                          <strong>Degree:</strong> Informatics Education
                        </li>
                        <li>
                          <i class="icofont-rounded-right"></i>{" "}
                          <strong>Email:</strong>{" "}
                          <a href="mailto:yuliethdotcom@gmail.com" aria-label="Email">
                            yuliethdotcom@gmail.com
                          </a>
                        </li>
                        <li>
                          <i class="icofont-rounded-right"></i>{" "}
                          <strong>Freelance:</strong> Available
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    I develop innovative and accessible websites. I also have experience in UI/UX, designing user interfaces and interactive
                    prototypes with high-quality strategic texts. Likewise, I am
                    passionate about Database management, from the creation of
                    the database structure diagram, tables and functions to
                    stored procedures.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <UpButton></UpButton>
      </>
    );
  }
}

export default About;
