import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceItem = (props) => {
  return (
    <>
      <div
        class="col-lg-6 col-md-6 d-flex align-items-stretch mt-4  mb-3 mt-4 md-0"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div class={`icon-box iconbox-${props.Color}`}>
          <div class="icon">
            <FontAwesomeIcon icon={props.Icon} class="bx bx-layer" />
          </div>
          <h4>{props.Title}</h4>
          <p>
            {props.Description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
