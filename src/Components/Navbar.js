import React from "react";
import "./css/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";

const Menu = () => {
  const [MenuActivo, setMenuActivo] = useState("about__me");

  return (
    <Navbar sticky="top" className="navbar__container">
      <ul  >
        <li>
          <a
            className={
              MenuActivo === "about__me" ? "active__link" : "nav__link"
            }
            href="#about__me"
            onClick={() => setMenuActivo("about__me")}
          >
            About me
          </a>
        </li>
        <li>
          <a
            className={MenuActivo === "portfolio" ? "active__link" : "nav__link"}
            value="portfolio"
            href="#portfolio"
            onClick={() => setMenuActivo("portfolio")}
          >
            Portfolio
          </a>
        </li>
        {/* <li>
          <a
            className={MenuActivo === "achievements" ? "active__link" : "nav__link"}
            value="achievements"
            href="#achievements"
            onClick={() => setMenuActivo("achievements")}
          >
            Achievements
          </a>
        </li>
        <li>
          <a
            className={MenuActivo === "blog" ? "active__link" : "nav__link"}
            value="blog"
            href="#blog"
            onClick={() => setMenuActivo("blog")}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            className={MenuActivo === "contacts" ? "active__link" : "nav__link"}
            value="contacts"
            href="#contacts"
            onClick={() => setMenuActivo("contacts")}
          >
           Talk with me
          </a>
        </li> */}
      </ul>
    </Navbar>
  );
};

export default Menu;
