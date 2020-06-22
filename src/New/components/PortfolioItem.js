import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PortfolioItem = (props) => {
  return (
    <div
    // class="portfolio-container"
    // data-aos="fade-up"
    // data-aos-delay="200"
    >
      <div class={`col-lg-4 portfolio-item ${props.Filter}`}>
        <div
          class="portfolio-wrap"
          onClick={(event, newValue) => {
            props.openModal(props.Id);
          }}
        >
          <img src={props.Thumbnail} class="img-fluid" alt="Thumbnail" />
          <div class="portfolio-info">
            <h4>{props.Title}</h4>
            <p>{props.SubTitle}</p>
            <div className="portfolio-links">
              <a>
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
