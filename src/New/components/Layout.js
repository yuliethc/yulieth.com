import React from "react";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <section id="hero" class="d-flex align-items-center">
      {children}
      </section>

     

      {/* <div id="preloader"></div>
      <a href="#" class="back-to-top">
        <i class="bx bx-up-arrow-alt"></i>
      </a> */}
    </>
  );
};

export default Layout;
