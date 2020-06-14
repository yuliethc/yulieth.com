import React from "react";
import "../vendor/icofont/icofont.min.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header id="header" class="fixed-top">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <h1 class="logo">
          <Link to="/">Yulieth</Link>
        </h1>

        <nav class="nav-menu  d-lg-block">
          <ul>
            {props.Title === "Home" ? (
              <li class="active">
                <Link to="/">Home</Link>
              </li>
            ) : (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {props.Title === "About" ? (
              <li class="active">
                <Link
                 to="/about">About</Link>
              </li>
            ) : (
              <li>
                <Link
                 to="/about">About</Link>
              </li>
            )}
            {props.Title === "Resume" ? (
              <li class="active">
                <Link to="/resume">Resume</Link>
              </li>
            ) : (
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            )}
            {props.Title === "Services" ? (
              <li class="active">
                <Link to="/services">Services</Link>
              </li>
            ) : (
              <li>
                <Link to="/services">Services</Link>
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
                <Link to="/contact">Contact</Link>
              </li>
            ) : (
              <li>
                <Link to="/contact">Contact</Link>
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
