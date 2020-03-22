import React from "react";
import "./css/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";

const Menu = () => {

    const [MenuActivo, setMenuActivo] = useState("about__me")

    return (
        <Navbar sticky="top">
          <li>
              <ul>
                  <a className={MenuActivo ==="about__me"?("active__link"):("nav__link")} href="#about__me"
            onClick={()=> setMenuActivo("about__me")}>About me</a>
              </ul>
              <ul>
                  <a className={MenuActivo ==="projects"?("active__link"):("nav__link")} value="projects" href="#projects"
            onClick={()=> setMenuActivo("projects")}
            >Projects</a>
              </ul>
          </li>                 
        </Navbar>
      );
};

export default Menu;
