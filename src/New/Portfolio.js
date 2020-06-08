import React from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import testpic from "./img/portfolio/portfolio-7.jpg";
import "./vendor/icofont/icofont.min.css";
import PortfolioDetail from "./components/PortfolioDetail";
import PortfolioItem from "./components/PortfolioItem";
import Modal from "./components/Modal";
import project1Thumbnail from "./img/project1/contatrib.jpg";
import project1Image1 from "./img/project1/first.png";
import project1Image2 from "./img/project1/second.jpg";
import project1Image3 from "./img/project1/third.png";
import project1Image4 from "./img/project1/fourth.png";
import project1Image5 from "./img/project1/fift.png";

const projects = [
  {
    Id: 1,
    Title: "Contatrib ERP - Mi Factura Perú",
    Subtitle: "A web based ERP",
    Description:
      "I am developing a web-based ERP. I am also in charge of designing and prototyping the model of the project.",
    Thumbnail: project1Thumbnail,
    URL: "https://app.mifacturaperu.com/",
    TechUsed1: "React",
    TechUsed2: "NodeJs/Express",
    TechUsed3: "MySQL",
    TechUsed4: "Bootstrap",
    TechUsed5: "Adobe Photoshop",
    TechUsed6: "Adobe XD",
    TechUsed7: null,
    Category: "Development",
    Client: "Escobedo Medina Auditores Asociados",
    Image1: project1Image1,
    Image2: project1Image2,
    Image3: project1Image3,
    Image4: project1Image4,
    Image5: project1Image5,
    Image6: null,
    ProjectDate: "2019-2020",
    Filter: "filter-dev",
  },
  // {
  //   Id: 2,
  //   Title: "",
  //   Subtitle: "",
  //   Thumbnail: testpic,
  // },
];
const getAllProjects = (projects,openModal) => {
  return projects.map((project) => {
    return (
      <PortfolioItem
        Thumbnail={project.Thumbnail}
        Title={project.Title}
        Subtitle={project.SubTitle}
        openModal={openModal}
        Filter={project.Filter}
        Id={project.Id}
      ></PortfolioItem>
    );
  });
};

const Portfolio = () => {
  const [valueStatusModal, setValueStatusModal] = React.useState(false);
  const [valueProjectTitle, setValueProjectTitle] = React.useState(null);
  const [valueImageSlide1, setValueImageSlide1] = React.useState(null);
  const [valueImageSlide2, setValueImageSlide2] = React.useState(null);
  const [valueImageSlide3, setValueImageSlide3] = React.useState(null);
  const [valueImageSlide4, setValueImageSlide4] = React.useState(null);
  const [valueImageSlide5, setValueImageSlide5] = React.useState(null);
  const [valueImageSlide6, setValueImageSlide6] = React.useState(null);
  const [valueProjectCategory, setValueProjectCategory] = React.useState(null);
  const [valueProjectCLient, setValueProjectCLient] = React.useState(null);
  const [valueProjectDate, setValueProjectDate] = React.useState(null);
  const [valueProjectUrl, setValueProjectUrl] = React.useState(null);
  const [valueProjectDescription, setValueProjectDescription] = React.useState(
    null
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
  const filterProject = (id, projects) => {
    return projects.find((project) => project.Id === id);
  };
  const getProjectDetail = (id) => {
    let filtered = filterProject(id, projects);
    setValuesToProjectDetail(filtered);
  };
  const setValuesToProjectDetail = (filtered) => {
    setValueProjectTitle(filtered.Title);
    setValueImageSlide1(filtered.Image1);
    setValueImageSlide2(filtered.Image2);
    setValueImageSlide3(filtered.Image3);
    setValueImageSlide4(filtered.Image4);
    setValueImageSlide5(filtered.Image5);
    setValueImageSlide6(filtered.Image6);
    setValueProjectCategory(filtered.Category);
    setValueProjectCLient(filtered.Client);
    setValueProjectDate(filtered.ProjectDate);
    setValueProjectUrl(filtered.URL);
    setValueProjectDescription(filtered.Description);
    setValueProjectTech1(filtered.TechUsed1);
    setValueProjectTech2(filtered.TechUsed2);
    setValueProjectTech3(filtered.TechUsed3);
    setValueProjectTech4(filtered.TechUsed4);
    setValueProjectTech5(filtered.TechUsed5);
    setValueProjectTech6(filtered.TechUsed6);
    setValueProjectTech7(filtered.TechUsed7);
    console.log(filtered);
  };

  const openModal = (id) => {
    setValueStatusModal(true);
    getProjectDetail(id);
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
                  <li data-filter=".filter-dev">Development</li>
                  <li data-filter=".filter-ux">UI & UX</li>
                  <li data-filter=".filter-writing">Writing</li>
                </ul>
              </div>
            </div>

            {getAllProjects(projects, openModal)}
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
