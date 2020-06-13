import React from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import UpButton from "./components/UpButton";

const Contact = () => {
  return (
    <>
      <Header Title="Contact"></Header>

      <section id="contact" class="contact mt-5">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <p>
              You can contact me or learn more about me through these social
              networks.
            </p>
          </div>

          <div class="row mt-5">
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="icofont-google-map"></i>
                  <h4>Location</h4>
                  <p>Cajamarca, Perú</p>
                </div>
                <div class="address">
                  <a
                    href="https://www.linkedin.com/in/yulieth/"
                    class="linkedin"
                    target="_blank"
                  >
                    <i class="icofont-linkedin"></i>
                    <h4 className="pt-2">LinkedIn</h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <a href="mailto:yuliethdotcom@gmail.com">
                    <i class="icofont-envelope"></i>
                    <h4 className="">Email</h4>
                    <p>yuliethdotcom@gmail.com</p>
                  </a>
                </div>

                <div class="address">
                  <a
                    href="https://www.behance.net/yulieth"
                    class="behance"
                    target="_blank"
                  >
                    <i class="icofont-behance"></i>

                    <h4 className="pt-2">Behance</h4>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="icofont-phone"></i>
                  <h4>Phone number</h4>
                  <p>+51 953 789 124</p>
                </div>

                <div class="address">
                  <a
                    href="https://github.com/yuliethc"
                    class="github"
                    target="_blank"
                  >
                    <i class="icofont-github"></i>

                    <h4 className="pt-2">Github</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Preloader></Preloader>
        <UpButton></UpButton>
      </section>
    </>
  );
};

export default Contact;
