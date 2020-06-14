import React from "react";
import Header from "./components/Header";
import "./vendor/icofont/icofont.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCode,
  faSearch,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import UpButton from "./components/UpButton";
import Preloader from "./components/Preloader";
import ServiceItem from "./components/ServiceItem";

const Services = () => {
  return (
    <>
      <Header Title="Services"></Header>
      <main id="main">
        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Services</h2>
              <p>
                My work focus on deliver high quality web designing and
                development using accessibility and innovation with trending
                tools and adaptability creating solutions to my clients.
              </p>
            </div>

            <div class="row">
              <ServiceItem
                Icon={faSearch}
                Title={"Ideation"}
                Description={
                  " I research the users in order to define their needs and create a unique experience."
                }
                Color={"yellow"}
              ></ServiceItem>

              <ServiceItem
                Icon={faCoffee}
                Title={"Wireframing and Prototyping"}
                Description={
                  "I create low and high fidelity wireframing and user story mapping, flows, iterative testing by prototyping."
                }
                Color={"teal"}
              ></ServiceItem>

              <ServiceItem
                Icon={faDesktop}
                Title={"Responsive design"}
                Description={
                  " I create functional websites, easy to use and aesthetically appealing to the user. These will show on different devices (smartphones, tablets, desktops, etc.)."
                }
                Color={"red"}
              ></ServiceItem>

              <ServiceItem
                Icon={faCode}
                Title={"Web development"}
                Description={
                  "I develop websites using the newest coding technology React.JS, HTML5 and CSS3."
                }
                Color={"orange"}
              ></ServiceItem>
            </div>
          </div>
        </section>
      </main>
      <UpButton></UpButton>
    </>
  );
};

export default Services;
