import React from "react";
import "../vendor/icofont/icofont.min.css";

const Header = (props) => {
  return (
    <header id="header" class="fixed-top">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <h1 class="logo">
          <a href="/">Yulieth</a>
        </h1>

        <nav class="nav-menu  d-lg-block">
          <ul>
            {props.Title === "Home" ? (
              <li class="active">
                <a href="/">Home</a>
              </li>
            ) : (
              <li>
                <a href="/">Home</a>
              </li>
            )}
            {props.Title === "About" ? (
              <li class="active">
                <a href="/about">About</a>
              </li>
            ) : (
              <li>
                <a href="/about">About</a>
              </li>
            )}
            {props.Title === "Resume" ? (
              <li class="active">
                <a href="/resume">Resume</a>
              </li>
            ) : (
              <li>
                <a href="/resume">Resume</a>
              </li>
            )}
            {props.Title === "Services" ? (
              <li class="active">
                <a href="/services">Services</a>
              </li>
            ) : (
              <li>
                <a href="/services">Services</a>
              </li>
            )}
            {props.Title === "Portfolio" ? (
              <li class="active">
                <a href="/portfolio">Portfolio</a>
              </li>
            ) : (
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
            )}
            {props.Title === "Contact" ? (
              <li class="active">
                <a href="/contact">Contact</a>
              </li>
            ) : (
              <li>
                <a href="/contact">Contact</a>
              </li>
            )}
          </ul>
        </nav>

        <div class="header-social-links">
          <a
            href="https://www.linkedin.com/in/yulieth/"
            target="_blank"
            class="linkedin"
          >
            <i class="icofont-linkedin"></i>
          </a>
          <a href="https://github.com/yuliethc" target="_blank" class="github">
            <i class="icofont-github"></i>
          </a>
          <a
            href="https://www.behance.net/yulieth"
            target="_blank"
            class="behance"
          >
            <i class="icofont-behance"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
