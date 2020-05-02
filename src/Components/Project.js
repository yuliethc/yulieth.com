import React from "react";
import "./css/Project.css";

const Project = (props) => {
  return (
    <section className="work__container-card">
      <span> {props.Title}</span>
      <span>{props.Content}</span>
      <span>{props.Web}</span>
    </section>
  );
};

export default Project;
