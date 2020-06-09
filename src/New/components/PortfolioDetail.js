import React from "react";
import Skills from "../../Components/Skills";


const ImageStyle ={
    maxHeight:"400px",
    padding: "10px"
}
const getAllSlides = (slides) => {
  return slides.map((element, index) => {
    return (
      <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
        <img src={element} class="d-block w-100" style={ImageStyle} alt="Project Slide" />
      </div>
    );
  });
};

const getAllSlidesIndicators = (slides) => {
  return slides.map((element, index) => {
    return (
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to={`${index}`}
        class="active"
      ></li>
    );
  });
};
const getAllTech = (tech) => {
  return tech.map((item) => {
    return <Skills Name={item}></Skills>;
  });
};
const PortfolioDetail = (props) => {
  return (
    <>
      <main id="main">
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <h2 class="portfolio-title">{props.project.Title}</h2>

                <div
                  id="carouselExampleIndicators"
                  class="carousel slide portfolio-details-carousel pb-4"
                  data-ride="carousel"
                >
                  {props.project.ImageSlides && (
                    <ol class="carousel-indicators">
                      {getAllSlidesIndicators(props.project.ImageSlides)}
                    </ol>
                  )}
                  {props.project.ImageSlides && (
                    <div class="carousel-inner">
                      {getAllSlides(props.project.ImageSlides)}
                    </div>
                  )}
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
                  {props.project.Category && (
                    <li>
                      <strong>Category</strong>: {props.project.Category}
                    </li>
                  )}
                  {props.project.Client && (
                    <li>
                      <strong>Client</strong>: {props.project.Client}
                    </li>
                  )}
                  {props.project.ProjectDate && (
                    <li>
                      <strong>Project date</strong>: {props.project.ProjectDate}
                    </li>
                  )}
                  {props.project.Url && (
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="#">{props.project.Url}</a>
                    </li>
                  )}
                </ul>

                <p>{props.project.Description}</p>

                <p>
                  <strong>Technology used</strong>
                </p>

                {props.project.TechUsed && (
                  <div className="mb-4">{getAllTech(props.project.TechUsed)}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioDetail;
