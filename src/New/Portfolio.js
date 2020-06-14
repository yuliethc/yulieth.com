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
import project2Thumbnail from "./img/project2/mfoconsulta.jpg";
import project2Image1 from "./img/project2/landing.png";
import project2Image2 from "./img/project2/consultation.png";
import project2Image3 from "./img/project2/contact.png";
import project3Thumbnail from "./img/project3/thumbnail.jpg";
import project3Image1 from "./img/project3/ifirst.png";
import project3Image2 from "./img/project3/second.png";
import project3Image3 from "./img/project3/third.png";
import project3Image4 from "./img/project3/fourth.png";
import project3Image5 from "./img/project3/fift.png";
import project3Image6 from "./img/project3/sixth.png";
import project3Image7 from "./img/project3/seventh.png";
import project3Image8 from "./img/project3/ocho.png";
import project3Image9 from "./img/project3/nineth.png";
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
import project9Thumbnail from "./img/project9/thumbnail.png";
import project9Image1 from "./img/project9/Imagen1.png";
import project9Image2 from "./img/project9/Imagen2.png";
import project9Image3 from "./img/project9/Imagen3.png";
import project9Image4 from "./img/project9/Imagen4.png";
import project9Image5 from "./img/project9/Imagen5.png";
import Preloader from "./components/Preloader";
import UpButton from "./components/UpButton";


const projects = [
  {
    Id: 1,
    Title: "Contatrib ERP - Mi Factura Perú",
    Subtitle: "A web based ERP",
    Description:
      "A web-based ERP system integrated to an electronic invoicing system.",
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
      "Developed the Frontend architecture of the Web of an electronic desktop invoicing system to give access to the clients of the companies affiliated to their invoices.",
    Thumbnail: project2Thumbnail,
    URL: "http://www.mifacturaperu.com/",
    TechUsed: ["HTML", "CSS"],
    Category: "Development",
    Client: "Escobedo Medina Auditores Asociados",
    ImageSlides: [project2Image1, project2Image2, project2Image3],
    ProjectDate: "2019",
    Filter: "filter-dev",
  },
  {
    Id: 3,
    Title: "Mi Factura Perú",
    Subtitle: "System Desktop Administrator",
    Description:
      "I was maintaining and developing new characteristics to a desktop app, that handles configuration of administrative functions needed to generate electronic invoices in a multi-business system.",
    Thumbnail: project3Thumbnail,
    URL: "http://www.mifacturaperu.com/descargas",
    TechUsed: ["VB .NET", "MySQL"],
    Category: "Development",
    Client: "Escobedo Medina Auditores Asociados",
    ImageSlides: [
      project3Image1,
      project3Image2,
      project3Image3,
      project3Image6,
      project3Image7,
      project3Image8,
      project3Image9,
    ],
    ProjectDate: "2019-2020",
    Filter: "filter-dev",
  },
  {
    Id: 4,
    Title: "Delupar",
    Subtitle: "On-demand delivery and money transfer App",
    Description:
      "I worked remotely with Avalon team developing a multi-platform app using Ionic-React and Material UI for on-demand delivery, money transfer, business payments, and commercial services. There I created: Layout, Menu, Login, Sign Up, Password Recovery, User and Security.",
    Thumbnail: project9Thumbnail,
    URL: null,
    TechUsed: ["Adobe Photoshop", "Adobe XD"],
    Category: "Development",
    Client: "Avalon",
    ImageSlides: [
      project9Image1,
      project9Image2,
      project9Image3,
      project9Image4,
      project9Image5,
    ],
    ProjectDate: "2020",
    Filter: "filter-dev",
  },
  {
    Id: 5,
    Title: "Contatrib ERP - Mi Factura Perú",
    Subtitle: "High Quality Wireframe",
    Description:
      "I designed and prototyped the model of the project Contatrib ERP - Mi Factura Perú.",
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
    Id: 6,
    Title: "Cupcake World",
    Subtitle: "Mobile App Landing Page",
    Description: "Mobile UI design and copywriting.",
    Url:
      "https://www.behance.net/gallery/96469701/Cupcake-World-Mobile-App-Landing-Page",
    Thumbnail: project5Thumbnail,
    TechUsed: ["Marvel", "Figma"],
    Category: "UI & UX",
    Client: null,
    ImageSlides: [project5Thumbnail],
    ProjectDate: "2020",
    Filter: "filter-ux",
  },
  {
    Id: 7,
    Title: "Flick",
    Subtitle: "Movie social network and rating App",
    Description: "Movie social network and rating App design.",
    Url: "https://www.behance.net/gallery/97457551/Flick-app",
    Thumbnail: project8Thumbnail,
    TechUsed: ["Adobe XD"],
    Category: "UI & UX",
    Client: null,
    ImageSlides: [project8Thumbnail],
    ProjectDate: "2020",
    Filter: "filter-ux",
  },
  {
    Id: 8,
    Title: "Time…",
    Subtitle: "What is time?",
    Description:
      "Time is our company in all our life, wherever we go it's with us. So, is it our friend? Or is it our enemy?",
    Url: "https://yuliethlubo.blogspot.com/2015/10/time-what-is-time.html",
    Thumbnail: project6Thumbnail,
    TechUsed: null,
    Category: "Writing",
    Client: null,
    ImageSlides: [project6Thumbnail],
    ProjectDate: "2015",
    Filter: "filter-writing",
  },
  {
    Id: 9,
    Title: "My Pragmatic World",
    Subtitle: "English Book",
    Description: "I create an English book, here I show some of its content",
    Url: "https://mypragmaticworld.wordpress.com/category/english-classes/",
    Thumbnail: project7Thumbnail,
    TechUsed: null,
    Category: "Writing",
    Client: null,
    ImageSlides: [project7Thumbnail],
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
              <p>This is the collection of my most relevant work.</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" class="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-dev">
                    Development
                  </li>
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

          <Preloader></Preloader>
          <UpButton></UpButton>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
