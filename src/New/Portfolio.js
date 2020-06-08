import React from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import testpic from "./img/portfolio/portfolio-7.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./vendor/icofont/icofont.min.css";
import PortfolioDetail from "./components/PortfolioDetail";
import Modal from "./components/Modal";

const Portfolio = () => {
  const [valueStatusModal, setValueStatusModal] = React.useState(false);

  const onCloseModal = () => {
    setValueStatusModal(false);
  };
  const openModal = () => {
    setValueStatusModal(true);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Escape") {
      setValueStatusModal(false);
    }
  };

  return (
    <>
      <Header Title="Portfolio"></Header>
      <main id="main">
        <section id="portfolio" class="portfolio">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Portfolio</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              class="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img src={testpic} class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a
                        onClick={(event, newValue) => {
                          openModal();
                        }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={valueStatusModal}
            onClose={onCloseModal}
            handleKeyUp={handleKeyUp}
            title={"Portfolio Detail"}
          >
            <PortfolioDetail
            Title="Project 1"
              imageSlide1={testpic}
              imageSlide2={testpic}
              projectCategory={"Web design"}
              projectClient={"ASU Company"}
              projectDate={"01 March, 2020"}
              projectUrl={"www.example.com"}
              projectDescription={
                "ewfssedfsdsfsfsdfsdfff dfsf sdfsdfsdfsfsfsdf wfwef fwe fwefwew fwwwefwefw wefewfwefwefwfwfwef werwefewfwe wef wefwwrwerwerwerwe"
              }
              projectTech1={"react1"}
              projectTech2={"react2"}
            ></PortfolioDetail>
          </Modal>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
