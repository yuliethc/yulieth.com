import React from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import testpic from "./img/portfolio/portfolio-7.jpg";
import "./vendor/icofont/icofont.min.css";
import PortfolioDetail from "./components/PortfolioDetail";
import PortfolioItem from "./components/PortfolioItem";
import Modal from "./components/Modal";

const Portfolio = () => {
  const [valueStatusModal, setValueStatusModal] = React.useState(false);
  const [valueProjectTitle, setValueProjectTitle] = React.useState("Project 1");
  const [valueImageSlide1, setValueImageSlide1] = React.useState(testpic);
  const [valueImageSlide2, setValueImageSlide2] = React.useState(testpic);
  const [valueImageSlide3, setValueImageSlide3] = React.useState(testpic);
  const [valueImageSlide4, setValueImageSlide4] = React.useState(testpic);
  const [valueImageSlide5, setValueImageSlide5] = React.useState(testpic);
  const [valueImageSlide6, setValueImageSlide6] = React.useState(testpic);
  const [valueProjectCategory, setValueProjectCategory] = React.useState(
    "Web design"
  );
  const [valueProjectCLient, setValueProjectCLient] = React.useState(
    "ASU Company"
  );
  const [valueProjectDate, setValueProjectDate] = React.useState(
    "01 March, 2020"
  );
  const [valueProjectUrl, setValueProjectUrl] = React.useState(
    "www.example.com"
  );
  const [valueProjectDescription, setValueProjectDescription] = React.useState(
    "ewfssedfsdsfsfsdfsdfff dfsf sdfsdfsdfsfsfsdf wfwef fwe fwefwew fwwwefwefw wefewfwefwefwfwfwef werwefewfwe wef wefwwrwerwerwerwe"
  );
  const [valueProjectTech1, setValueProjectTech1] = React.useState("Tech 1");
  const [valueProjectTech2, setValueProjectTech2] = React.useState("Tech 2");
  const [valueProjectTech3, setValueProjectTech3] = React.useState(null);
  const [valueProjectTech4, setValueProjectTech4] = React.useState(null);
  const [valueProjectTech5, setValueProjectTech5] = React.useState(null);
  const [valueProjectTech6, setValueProjectTech6] = React.useState(null);
  const [valueProjectTech7, setValueProjectTech7] = React.useState(null);

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

            <PortfolioItem
              Thumbnail={testpic}
              Title={"App1"}
              Subtitle={"React app"}
              openModal={openModal}
            ></PortfolioItem>
          </div>
          <Modal
            isOpen={valueStatusModal}
            onClose={onCloseModal}
            handleKeyUp={handleKeyUp}
            title={"Portfolio Detail"}
          >
            <PortfolioDetail
              projectTitle={valueProjectTitle}
              imageSlide1={valueImageSlide1}
              imageSlide2={valueImageSlide2}
              imageSlide3={valueImageSlide3}
              imageSlide4={valueImageSlide4}
              imageSlide5={valueImageSlide5}
              imageSlide6={valueImageSlide6}
              projectCategory={valueProjectCategory}
              projectClient={valueProjectCLient}
              projectDate={valueProjectDate}
              projectUrl={valueProjectUrl}
              projectDescription={valueProjectDescription}
              projectTech1={valueProjectTech1}
              projectTech2={valueProjectTech2}
              projectTech3={valueProjectTech3}
              projectTech4={valueProjectTech4}
              projectTech5={valueProjectTech5}
              projectTech6={valueProjectTech6}
              projectTech7={valueProjectTech7}
            ></PortfolioDetail>
          </Modal>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
