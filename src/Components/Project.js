import React from "react";
import "./css/Project.css";

const Project = (props) => {
  return (
    <section className="work__container-card">
      <div className="work__container-card-img-container">
        <p className="work__container-card-tech-text-1">{props.TecnologiaUsada1}</p>
        <p className="work__container-card-tech-text-2">{props.TecnologiaUsada2}</p>
        <p className="work__container-card-tech-text-3">{props.TecnologiaUsada3}</p>
        <p className="work__container-card-tech-text-4">{props.TecnologiaUsada4}</p>
        <p className="work__container-card-tech-text-5">{props.TecnologiaUsada5}</p>
        <img
          className="work__container-card-img"
          src={props.Image}
          alt="Project Image"
        />
      </div>
      <a className="work__container-card-web" href={props.Web} target="_blank">
      {props.TituloWeb}
      </a>
      <span className="work__container-card-title"> {props.Title}</span>
      <p className="work__container-card-content">{props.Content}</p>
    </section>
  );
};

export default Project;
