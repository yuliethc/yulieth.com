import React, { Component } from "react";
import "./styles/Portfolio.css";
import Project from "../Components/Project";
import devProject1 from "./img/devProject1.jpg";
import devProject2 from "./img/devProject2.jpg";
import devProject3 from "./img/devProject3.jpg";
import devProject4 from "./img/devProject4.jpg";
import blogPost1 from "./img/blogPost1.jpg";
import blogPost2 from "./img/blogPost2.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="">
          <ul className="nav nav-pills mt-1" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="portfolio___tabs active"
                id="work__container-development-tab"
                data-toggle="pill"
                href="#work__container-development"
                role="tab"
                aria-controls="work__container-development"
                aria-selected="true"
              >
                Development
              </a>
            </li>

            <li className="nav-item">
              <a
                className=" portfolio___tabs"
                id="work__container-design-tab"
                data-toggle="pill"
                href="#work__container-design"
                role="tab"
                aria-controls="work__container-design"
                aria-selected="false"
              >
                Design UI and UX
              </a>
            </li>

            <li className="nav-item">
              <a
                className=" portfolio___tabs"
                id="work__container-copy-tab"
                data-toggle="pill"
                href="#work__container-copy"
                role="tab"
                aria-controls="work__container-copy"
                aria-selected="true"
              >
                Copywriting
              </a>
            </li>

            <li className="nav-item">
              <a
                className="portfolio___tabs"
                id="work__container-blog-tab"
                data-toggle="pill"
                href="#work__container-blog"
                role="tab"
                aria-controls="work__container-blog"
                aria-selected="true"
              >
                Writing
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="work__container-development"
              role="tabpanel"
              aria-labelledby="work__container-development-tab"
            >
              <h4>Development</h4>
              <section className="work__container">
              <Project
                  TituloWeb="Visit Site"
                  Image={devProject1}
                  Title="Contatrib ERP - Mi Factura Perú"
                  Content="A web-based ERP"
                  Web="https://app.mifacturaperu.com/"
                  TecnologiaUsada1="React"
                  TecnologiaUsada2="NodeJs/Express"
                  TecnologiaUsada3="MySQL"
                  TecnologiaUsada4="Bootstrap"
                ></Project> 
                  <Project
                  TituloWeb="Visit Site"
                  Image={devProject2}
                  Title="Mi Factura Perú"
                  Content="Web system for invoice
                  consultation"
                  Web="http://mifacturaperu.com/"
                  TecnologiaUsada1="HTML"
                  TecnologiaUsada2="CSS"
                  TecnologiaUsada3="Bootstrap"
                ></Project>  
                <Project
                TituloWeb="Visit Site"
                Image={devProject3}
                Title="Mi Factura Perú - System Administrator"
                Content="Maintained and developed new characteristics to this Desktop App"
                Web="http://mifacturaperu.com/descargas"
                TecnologiaUsada1="VB .NET"
                TecnologiaUsada2="MySQL"
              ></Project>   
              
              <Project
                TituloWeb="View source"
                Image={devProject4}
                Title="Personal Web-site"
                Content="Portfolio"
                Web="https://github.com/yuliethc/yulieth.com"
                TecnologiaUsada1="HTML"
                TecnologiaUsada2="CSS"
                TecnologiaUsada3="Bootstrap"
                TecnologiaUsada4="React"
              ></Project>     
         
              </section>
            </div>

            <div
              className="tab-pane fade"
              id="work__container-design"
              role="tabpanel"
              aria-labelledby="work__container-design-tab"
            >
              <h4> Design UI and UX</h4>
              <section className="work__container">
                <Project
                  TituloWeb="Visit Site"
                  Image={devProject1}
                  Title="Contatrib ERP - Mi Factura Perú"
                  Content="A web-based ERP"
                  Web="https://app.mifacturaperu.com/"
                  TecnologiaUsada1="Adobe Photoshop"
                  TecnologiaUsada2="Adobe XD"
                ></Project>                
              </section>
            </div>

            <div
              className="tab-pane fade"
              id="work__container-copy"
              role="tabpanel"
              aria-labelledby="work__container-copy-tab"
            >
              <h4>Copywriting</h4>
              <section className="work__container">
                <Project
                  TituloWeb="Visit Site"
                  // Image={}
                  Title="Proyecto 1"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>              
              </section>
            </div>

            <div
              className="tab-pane fade"
              id="work__container-blog"
              role="tabpanel"
              aria-labelledby="work__container-blog-tab"
            >
              <h4>Writing</h4>
              <section className="work__container">
                <Project
                  TituloWeb="View post"
                  Image={blogPost1}
                  Title="Time… What is time?"
                  Content="Time is our company in all our life, wherever we go it's with us. So, is it our friend? Or is it our enemy?"
                  Web="https://yuliethlubo.blogspot.com/2015/10/time-what-is-time.html"
                ></Project> 

                 <Project
                  TituloWeb="View post"
                  Image={blogPost2}
                  Title="My Pragmatic World - English Book"
                  Content="I create an English book, here I show some of its content"
                  Web="https://mypragmaticworld.wordpress.com/category/english-classes/"
                ></Project>  

              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
