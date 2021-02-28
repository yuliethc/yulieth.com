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
              {/* <a class="skills__container m-0" href={ResumeEN} target="_blank">
                Download
              </a> */}
            </div>

            <div class="row">
              <div class="col-lg-6">
                <h3 class="resume-title">Summary</h3>
                <div class="resume-item pb-0">
                  <h4>
                    {" "}
                    <p>Yulieth Lubo de D'Agostini </p>Software Developer •
                    Front-End • Content Creator{" "}
                  </h4>
                  <p>
                    <em>
                      <ul>
                        <li>
                          <strong>
                            {" "}
                            A Software Developer and Content Creator 
                          </strong>{" "}
                          with 2 + years of experience, an insatiable curiosity and constant learning.
                        </li>
                        <li>
                          <strong> Develop responsive and accessible websites</strong> 
                          {" "} with demonstrated experience. 
                        </li>
                        <li>
                          <strong> 
                            Experience in graphic design and good UX intuitions
                         </strong> 
                            </li>
    
                        <li>
                          <strong> 
                            Passionate about database management, photography and digital content creation.
                         </strong> 
                            </li>
                        <li>
                          <strong>Teamwork skills</strong>, well-organized,
                          manage activities and delivery times efficiently;
                          excellent communication skills developed by working at
                          an office and remotely in a 6 people team. In this
                          way, I have experience in tools such as Kanban,
                          communication platforms and version control systems.
                        </li>
                      </ul>
                    </em>
                  </p>
                  <p>
                    <ul>
                      <li>+58 96 88 400</li>
                      <li>yuliethdotcom@gmail.com</li>
                    </ul>
                  </p>
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
                    <Skills Name="Adobe XD"></Skills>
                    <Skills Name="Photoshop"></Skills>
                    <Skills Name="Kanban"></Skills>
                    <Skills Name="Solcial Media Management"></Skills>
                  </div>
                </div>
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
                    <a href="https://platzi.com/@luboyulieth/" aria-label="Plazi courses Link">Platzi</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <h3 class="resume-title">Professional Experience</h3>

                <div class="resume-item">
                  <h4>Front-End Developer and Content Creator</h4>
                  <h5>Jul. 2020 - Dic. 2020</h5>
                  <p>
                    <em>
                      <strong>Freelance</strong>
                    </em>
                    
                  </p>
                  <p>
                    <p><em><strong>My work</strong></em></p>
                    <em>
                      Working as Independent developing Front-End websites using React JS,
    HTML and CSS. Also, creating digital content using graphic design, photography, 
    writing, copywriting and social media management.
                    </em>
                  </p>
                  
                </div>
  
    
                <div class="resume-item">
                  <h4>Full Stack Developer</h4>
                  <h5>Feb. 2019 - Jul. 2020</h5>
                  <p>
                    <em>
                      <strong>Escobedo Medina Auditores Asociados, Perú</strong>
                    </em>
                    <p>
                      <em>
                        It is a company of accounting consultants; its main goal
                        is to revolutionize the industry of accounting processes
                        and electronic invoicing emerging in the country.
                      </em>
                    </p>
                  </p>
                  <p>
                    <p><em><strong>My work</strong></em></p>
                    <em>
                      Developing a web-based ERP, maintaining and developing new
                      characteristics to an electronic invoice desktop system,
                      learning concepts related to accounting, business and
                      Peruvian national regulations.
                    </em>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Participating in all the steps of the process of
                        development of an ERP (Contatrib ERP - Mi factura Peru)
                        from the analysis of the problem, user research,
                        database modeling and creation of tables, functions,
                        store procedures and triggers; API routes creation;
                        designing and prototyping UI & UX and the front-end
                        development. Using React JS, Node.JS/Express, MySQL,
                        Adobe Photoshop and Adobe XD.
                      </li>
                      <li>
                        Maintaining and developing new characteristics to a
                        desktop app using VB .NET and MySQL that handles
                        administrative functions needed to generate electronic
                        invoices in a multi-business system.
                      </li>
                    </ul>
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
                    <Skills Name="Multi-tasking"></Skills>
                    <Skills Name="Well-Organized"></Skills>
                    <Skills Name="Quick learner"></Skills>
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
