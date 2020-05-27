import React from 'react';
import "../vendor/icofont/icofont.min.css";

const Header = () => {
    return (
       
        <header id="header" class="fixed-top">
          <div class="container-fluid d-flex justify-content-between align-items-center">
      
            <h1 class="logo"><a href="index.html">Yulieth</a></h1>
              
            <nav class="nav-menu  d-lg-block">
              <ul>
                <li class="active"><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </nav>
      
            <div class="header-social-links">
              <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
              <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
              <a href="#" class="github"><i class="icofont-github"></i></a>
              <a href="#" class="behance"><i class="icofont-behance"></i></a>
            </div>
      
      </div>
        </header>
    );
};

export default Header;