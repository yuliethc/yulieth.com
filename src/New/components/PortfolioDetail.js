import React from "react";
import testpic from "../img/portfolio/portfolio-7.jpg";

const PortfolioDetail = () => {
  return (
    <>
      <main id="main">
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h2 class="portfolio-title">
                  This is an example of portfolio detail
                </h2>
                {/* <div class="owl-carousel portfolio-details-carousel">
                  <img
                    src={testpic}
                    class="img-fluid"
                    alt=""
                  />
                  <img
                    src={testpic}
                    class="img-fluid"
                    alt=""
                  />
                  <img
                    src={testpic}
                    class="img-fluid"
                    alt=""
                  />
                </div> */}

                <div
                  id="carouselExampleIndicators"
                  class="carousel slide portfolio-details-carousel pb-4"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={testpic} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={testpic} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={testpic} class="d-block w-100" alt="..." />
                    </div>
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
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#">www.example.com</a>
                  </li>
                </ul>

                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioDetail;
