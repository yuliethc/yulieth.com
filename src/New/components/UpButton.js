import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp } from "@fortawesome/free-solid-svg-icons";

const UpButton = () => {
  return (
    <>
      <a href="#" class="back-to-top" aria-label="Back to top">
        <FontAwesomeIcon icon={faArrowUp} class="bx bx-up-arrow-alt" />
      </a>
    </>
  );
};

export default UpButton;
