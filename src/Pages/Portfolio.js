import React, { Component } from "react";
import "./styles/Portfolio.css";
import Project from "../Components/Project";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h2>Work</h2>
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
                  Title="Proyecto 1"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 2"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 3"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 3"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
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
                  Title="Proyecto 1"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 2"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 3"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 3"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
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
                  Title="Proyecto 1"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 2"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 3"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
                ></Project>
                <Project
                  Title="Proyecto 3"
                  Content="blah blah blah"
                  Web="www.yulieth.com"
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
