import React from "react";
import testpic from "../img/portfolio/portfolio-7.jpg";
import Skills from "../../Components/Skills";

const PortfolioDetail = (props) => {
  return (
    <>
      <main id="main">
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h2 class="portfolio-title">{props.projectTitle}</h2>

                <div
                  id="carouselExampleIndicators"
                  class="carousel slide portfolio-details-carousel pb-4"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    {props.imageSlide1 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                      ></li>
                    )}
                    {props.imageSlide2 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                    )}
                    {props.imageSlide3 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    )}

                    {props.imageSlide4 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="3"
                        class="active"
                      ></li>
                    )}
                    {props.imageSlide5 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="4"
                      ></li>
                    )}
                    {props.imageSlide6 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="5"
                      ></li>
                    )}
                  </ol>
                  <div class="carousel-inner">
                    {props.imageSlide1 && (
                      <div class="carousel-item active">
                        <img
                          src={props.imageSlide1}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    )}
                    {props.imageSlide2 && (
                      <div class="carousel-item">
                        <img
                          src={props.imageSlide2}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    )}
                    {props.imageSlide3 && (
                      <div class="carousel-item">
                        <img
                          src={props.imageSlide3}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    )}
                    {props.imageSlide4 && (
                      <div class="carousel-item">
                        <img
                          src={props.imageSlide4}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    )}
                    {props.imageSlide5 && (
                      <div class="carousel-item">
                        <img
                          src={props.imageSlide5}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    )}
                    {props.imageSlide6 && (
                      <div class="carousel-item">
                        <img
                          src={props.imageSlide6}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    )}
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 portfolio-info">
                <h3>Project information</h3>
                <ul>
                 {props.projectCategory && 
                 <li>
                    <strong>Category</strong>: {props.projectCategory}
                  </li>}
                  {props.projectClient && 
                  <li>
                    <strong>Client</strong>: {props.projectClient}
                  </li>
                  }
                  {props.projectDate && 
                  <li>
                    <strong>Project date</strong>: {props.projectDate}
                  </li>}
                  {props.projectUrl && 
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#">{props.projectUrl}</a>
                  </li>}
                </ul>

                <p>{props.projectDescription}</p>

                <p><strong>Technology used</strong></p>

               {props.projectTech1 && <Skills Name={props.projectTech1}></Skills>}
               {props.projectTech2 && <Skills Name={props.projectTech2}></Skills>}
               {props.projectTech3 && <Skills Name={props.projectTech3}></Skills>}
               {props.projectTech4 && <Skills Name={props.projectTech4}></Skills>}
               {props.projectTech5 && <Skills Name={props.projectTech5}></Skills>}
               {props.projectTech6 && <Skills Name={props.projectTech6}></Skills>}
               {props.projectTech7 && <Skills Name={props.projectTech7}></Skills>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioDetail;
