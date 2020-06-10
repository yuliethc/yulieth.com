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
import prject2Thumbnail from "./img/project2/mfoconsulta.jpg";
import prject2Image1 from "./img/project2/landing.png";
import prject2Image2 from "./img/project2/consultation.png";
import prject2Image3 from "./img/project2/contact.png";
import prject3Thumbnail from "./img/project3/thumbnail.jpg";
import prject3Image1 from "./img/project3/ifirst.png";
import prject3Image2 from "./img/project3/second.png";
import prject3Image3 from "./img/project3/third.png";
import prject3Image4 from "./img/project3/fourth.png";
import prject3Image5 from "./img/project3/fift.png";
import prject3Image6 from "./img/project3/sixth.png";
import prject3Image7 from "./img/project3/seventh.png";
import prject3Image8 from "./img/project3/ocho.png";
import prject3Image9 from "./img/project3/nineth.png";
import project4Image1 from "./img/project4/1.png";
import project4Image2 from "./img/project4/2.png";
import project4Image3 from "./img/project4/3.png";
import project4Image4 from "./img/project4/4.png";
import project4Image5 from "./img/project4/5.png";
import project4Image6 from "./img/project4/6.png";
import project5Thumbnail from "./img/project5/cupcake.jpg";
import project6Thumbnail from "./img/project6/thumbnail.jpg";
import project7Thumbnail from "./img/project7/1.png";
import project8Thumbnail from "./img/project8/thumbnail.jpg";

const projects = [
  {
    Id: 1,
    Title: "Contatrib ERP - Mi Factura Perú",
    Subtitle: "A web based ERP",
    Description: "A web-based ERP that control.",
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
  {
    Id: 2,
    Title: "Mi Factura Perú",
    Subtitle: "Web system for invoice consultation",
    Description:
      "Developed the Frontend architecture of the Web of an electronic desktop invoicing system to give access to the clients of the companies affiliated to their invoices",
    Thumbnail: prject2Thumbnail,
    URL: "http://www.mifacturaperu.com/",
    TechUsed: ["HTML", "CSS"],
    Category: "Development",
    Client: "Escobedo Medina Auditores Asociados",
    ImageSlides: [prject2Image1, prject2Image2, prject2Image3],
    ProjectDate: "2019",
    Filter: "filter-dev",
  },
  {
    Id: 3,
    Title: "Mi Factura Perú",
    Subtitle: "System Desktop Administrator",
    Description:
      "I was maintaining and developing new characteristics to a desktop app, that handles configuration of administrative functions needed to generate electronic invoices in a multi-business system.",
    Thumbnail: prject3Thumbnail,
    URL: "http://www.mifacturaperu.com/descargas",
    TechUsed: ["VB .NET", "MySQL"],
    Category: "Development",
    Client: "Escobedo Medina Auditores Asociados",
    ImageSlides: [
      prject3Image1,
      prject3Image2,
      prject3Image3,
      prject3Image6,
      prject3Image7,
      prject3Image8,
      prject3Image9,
    ],
    ProjectDate: "2019-2020",
    Filter: "filter-dev",
  },
  {
    Id: 4,
    Title: "Contatrib ERP - Mi Factura Perú",
    Subtitle: "High Quality Wireframe",
    Description:
      "I am developing a web-based ERP. I am also in charge of designing and prototyping the model of the project.",
    Thumbnail: project1Thumbnail,
    URL: null,
    TechUsed: ["Adobe Photoshop", "Adobe XD"],
    Category: "UI & UX",
    Client: "Escobedo Medina Auditores Asociados",
    ImageSlides: [
      project4Image1,
      project4Image2,
      project4Image3,
      project4Image4,
      project4Image5,
      project4Image6,
    ],
    ProjectDate: "2019-2020",
    Filter: "filter-ux",
  },

  {
    Id: 5,
    Title: "Cupcake World",
    Subtitle: "Mobile App Landing Page",
    Description: "Mobile UI design and copywriting",
    Url:
      "https://www.behance.net/gallery/96469701/Cupcake-World-Mobile-App-Landing-Page",
    Thumbnail: project5Thumbnail,
    TechUsed: ["Marvel", "Figma"],
    Category: "UI & UX",
    Client: null,
    ImageSlides: [
      project5Thumbnail,
    ],
    ProjectDate: "2020",
    Filter: "filter-ux",
  },
  {
    Id: 6,
    Title: "Flick",
    Subtitle: "Movie social network and rating App",
    Description: "Movie social network and rating App design",
    Url:
      "https://www.behance.net/gallery/97457551/Flick-app",
    Thumbnail: project8Thumbnail,
    TechUsed: ["Adobe XD"],
    Category: "UI & UX",
    Client: null,
    ImageSlides: [
      project8Thumbnail,
    ],
    ProjectDate: "2020",
    Filter: "filter-ux",
  },
  {
    Id: 7,
    Title: "Time…",
    Subtitle: "What is time?",
    Description: "Time is our company in all our life, wherever we go it's with us. So, is it our friend? Or is it our enemy?",
    Url:
      "https://yuliethlubo.blogspot.com/2015/10/time-what-is-time.html",
    Thumbnail: project6Thumbnail,
    TechUsed: null,
    Category: "Writing",
    Client: null,
    ImageSlides: [
      project6Thumbnail,
    ],
    ProjectDate: "2015",
    Filter: "filter-writing",
  },
  {
    Id: 8,
    Title: "My Pragmatic World",
    Subtitle: "English Book",
    Description: "I create an English book, here I show some of its content",
    Url:
      "https://mypragmaticworld.wordpress.com/category/english-classes/",
    Thumbnail: project7Thumbnail,
    TechUsed: null,
    Category: "Writing",
    Client: null,
    ImageSlides: [
      project7Thumbnail,
    ],
    ProjectDate: "2018",
    Filter: "filter-writing",
  },
  
];
const getAllProjects = (projects, openModal) => {
  return projects.map((project) => {
    return (
      <PortfolioItem
        Thumbnail={project.Thumbnail}
        Title={project.Title}
        SubTitle={project.Subtitle}
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
              This is the collection of my most relevant work.
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
