import React from "react";
import Header from "./components/Header";
import "./vendor/icofont/icofont.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPalette, faCode, faSearch, faDesktop, faArrowUp } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
  return (
    <>
      <Header Title="Services"></Header>
      <main id="main">
        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Services</h2>
              <p>
                My work focus on deliver high quality web designing and development
                using accessibility and innovation with trending tools and
                adaptability creating solutions to my clients.
              </p>
            </div>

            <div class="row">
              <div
                class="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mb-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="icon-box iconbox-yellow">
                  <div class="icon">
                    <FontAwesomeIcon icon={faSearch} class="bx bx-layer" />
                  </div>
                  <h4>
                    Ideation
                  </h4>
                  <p>
                   I research the users in order to define their needs and create a unique experience.
                  </p>
                </div>
              </div>
            

              <div
                class="col-lg-6 col-md-6 d-flex align-items-stretch mt-4  mb-3"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div class="icon-box iconbox-teal">
                  <div class="icon">
                    <FontAwesomeIcon icon={faCoffee} class="bx bx-layer" />
                  </div>
                  <h4>
                    Wireframing and Prototyping
                  </h4>
                  <p>
                  I create low and high fidelity wireframing and user story mapping, flows, iterative testing by prototyping.
                  </p>
                </div>
              </div>

              <div
                class="col-lg-6 col-md-6 d-flex align-items-stretch mt-4  mb-3"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="icon-box iconbox-red">
                  <div class="icon">
                    <FontAwesomeIcon icon={faDesktop} class="bx bx-layer" />
                  </div>
                  <h4>
                    Responsive design
                  </h4>
                  <p>
                  I create functional websites, easy to use and aesthetically appealing to the user. These will show on different devices (smartphones, tablets, desktops, etc.). 
                  </p>
                </div>
              </div>

              <div
                class="col-lg-6 col-md-6 d-flex align-items-stretch mt-4  mb-3 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div class="icon-box iconbox-orange ">
                  <div class="icon">
                    <FontAwesomeIcon icon={faCode} class="bx bx-layer" />
                  </div>
                  <h4>
                    Web development
                  </h4>
                  <p>
                    I develop websites using the newest coding technology React.JS, HTML 5 and CSS3.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <div id="preloader"></div>

      <a href="#" class="back-to-top">
      <FontAwesomeIcon icon={faArrowUp} class="bx bx-up-arrow-alt" />
      </a>
    </>
  );
};

export default Services;
