import React from "react";
import Header from "./components/Header";
import Skills from "./../Components/Skills.js";
import ResumeEN from "./pdf/resume.pdf";
import Preloader from "./components/Preloader";
import UpButton from "./components/UpButton";

const Resume = () => {
  return (
    <>
      <Header Title="Resume"></Header>
      <main id="main">
        <section id="resume" class="resume">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Resume</h2>
              <a class="skills__container m-0" href={ResumeEN} target="_blank">
                Download
              </a>
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
                <h3 class="resume-title">Soft Skils</h3>
                <div class="resume-item">
                  <div class="row justify-content-center">
                    <Skills Name="Honesty"></Skills>
                    <Skills Name="Accountability"></Skills>
                    <Skills Name="Teamwork"></Skills>
                    <Skills Name="Problem solving"></Skills>
                    <Skills Name="Patience"></Skills>
                    <Skills Name="Proactive"></Skills>
                    <Skills Name="Good communication"></Skills>
                    <Skills Name="Empathy"></Skills>
                    <Skills Name="Time management"></Skills>
                    <Skills Name="Multi-tasking"></Skills>
                    <Skills Name="Collaborative"></Skills>
                    <Skills Name="Quick learner"></Skills>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <h3 class="resume-title">Professional Experience</h3>
                <div class="resume-item">
                  <h4>Front-End Developer</h4>
                  <h5> Apr. 2020 - Present</h5>
                  <p>
                    <em>Freelancer, Remote</em>
                  </p>
                  <p>
                    I am working remotely as independent in different projects
                    of web designing and development.
                  </p>
                </div>
                <div class="resume-item">
                  <h4>Front-End Developer</h4>
                  <h5>May 2020</h5>
                  <p>
                    <em>Avalon, Remote</em>
                  </p>
                  <p>
                    I worked remotely with Avalon team developing a
                    multi-platform app using Ionic-React and Material UI for
                    on-demand delivery, money transfer, business payments, and
                    commercial services. There I created: Layout, Menu, Login,
                    Sign Up, Password Recovery, User and Security.
                  </p>
                </div>
                <div class="resume-item">
                  <h4>Full Stack Developer</h4>
                  <h5>Feb. 2019 - Apr. 2020</h5>
                  <p>
                    <em>Escobedo Medina Auditores Asociados, Perú</em>
                  </p>
                  <p>
                    I was developing a web-based ERP with React, NodeJs/Express,
                    and MySQL. Also I was in charge of design and prototype the
                    model of the project using Adobe Photoshop and Adobe XD.
                    Additionally, I was maintaining and developing new
                    characteristics to an electronic invoice system in VB .NET
                    and MySQL.
                  </p>
                </div>

                <h3 class="resume-title">Technical Skils</h3>
                <div class="resume-item">
                  <div class="row justify-content-center">
                    <Skills Name="React JS"></Skills>
                    <Skills Name="HTML"></Skills>
                    <Skills Name="CSS"></Skills>
                    <Skills Name="Git"></Skills>
                    <Skills Name="Web Accessibility"></Skills>
                    <Skills Name="MySQL"></Skills>
                    <Skills Name="UI/UX design"></Skills>
                    <Skills Name="Design Thinking"></Skills>
                    <Skills Name="Copywriting"></Skills>
                    <Skills Name="Adobe XD"></Skills>
                    <Skills Name="Photoshop"></Skills>
                    <Skills Name="Kanban"></Skills>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <UpButton></UpButton>
    </>
  );
};

export default Resume;
