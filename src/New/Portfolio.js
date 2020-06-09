import React from "react";
import Header from "./components/Header";
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
    TechUsed: [
      "React",
      "NodeJs/Express",
      "MySQL",
      "Bootstrap",
      "Adobe Photoshop",
      "Adobe XD",
    ],
    Category: "Development",
    Client: "Escobedo Medina Auditores Asociados",
    ImageSlides: [
      project1Image1,
      project1Image2,
      project1Image3,
      project1Image4,
      project1Image5,
    ],
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
const getAllProjects = (projects, openModal) => {
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
  const [valueProjectSelected, setValueProjectSelected] = React.useState(null);

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
    setValueProjectSelected(filtered);
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
            <div
            class="portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
              // class="d-flex flex-wrap"
            >
              {getAllProjects(projects, openModal)}
            </div>
          </div>
          <Modal
            isOpen={valueStatusModal}
            onClose={onCloseModal}
            handleKeyUp={handleKeyUp}
            title={"Portfolio Detail"}
          >
            <PortfolioDetail project={valueProjectSelected}></PortfolioDetail>
          </Modal>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
