import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem = (props) => {
  return (
    <div
      class="row portfolio-container"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
          <img src={props.Thumbnail} class="img-fluid" alt="" />
          <div class="portfolio-info">
            <h4>{props.Title}</h4>
            <p>{props.SubTitle}</p>
            <div class="portfolio-links">
              <a
                onClick={(event, newValue) => {
                  props.openModal();
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
