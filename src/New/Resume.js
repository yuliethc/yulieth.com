import React from "react";
import Header from "./components/Header";

const Resume = () => {
  return (
    <>
      <Header Title="Resume"></Header>
      <main id="main">
        <section id="resume" class="resume">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Resume</h2>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <h3 class="resume-title">Sumary</h3>
                <div class="resume-item pb-0">
                  <h4>Yulieth Lubo de D'Agostini</h4>
                  <p>
                    <em>
                      I’m from Venezuela, 29 years old, Front End developer with
                      a Degree in Informatics Education. I speak Spanish and
                      English. I develop innovative and accessible web
                      applications. I have expertise in UI/UX design, design
                      thinking and copywriting. I also design user interfaces
                      and interactive prototypes with high-quality strategic
                      texts. Likewise, I am passionate about Database
                      management, from the creation of the database structure
                      diagram, tables and functions to stored procedures.
                    </em>
                  </p>
                  <p>
                    <ul>
                      <li>+51 953 789 124</li>
                      <li>yuliethdotcom@gmail.com</li>
                    </ul>
                  </p>
                </div>

                <h3 class="resume-title">Education</h3>
                <div class="resume-item">
                  <h4>
                    Degree in Informatics Education. Cum Laude distinction
                  </h4>
                  <h5>2009 - 2014</h5>
                  <p>
                    <em>La Universidad del Zulia, Venezuela.</em>
                  </p>
                </div>
                <div class="resume-item">
                  <h4>
                    Software Development, Design and UI & UX Certifications
                  </h4>
                  <h5>2018 - 2020</h5>
                  <p>
                    <a href="https://platzi.com/@luboyulieth/">Platzi</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-item">
                  <h4>Front-End Developer</h4>
                  <h5>2020 - Present</h5>
                  <p>
                    <em>Avalon, Remote</em>
                  </p>
                  <p>
                    I am developing a multiplataform app using Ionic-React for on-demand delivery, money transfer, business payments, and commercial services.
                  </p>
                </div>
                <div class="resume-item">
                  <h4>Full Stack Developer</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Escobedo Medina Auditores Asociados, Perú</em>
                  </p>
                  <p>
                    I am developing a web-based ERP with React, NodeJs/Express,
                    and MySQL. Also I am in charge of design and prototype the
                    model of the project using Adobe Photoshop and Adobe XD.
                    Additionally, I am maintaining and developing new
                    characteristics to an electronic invoice system in VB .NET
                    and MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="preloader"></div>

      <a href="#" class="back-to-top">
        <i class="bx bx-up-arrow-alt"></i>
      </a>
    </>
  );
};

export default Resume;
