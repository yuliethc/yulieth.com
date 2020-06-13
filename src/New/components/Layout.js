import React from "react";
import Header from "./Header";
import Preloader from "../components/Preloader";
import UpButton from "../components/UpButton";

const Layout = ({ children }) => {
  return (
    <>
      <Header Title={"Home"}></Header>
      <section id="hero" class="d-flex align-items-center">
        {children}
      </section>

      <Preloader></Preloader>
      <UpButton></UpButton>
    </>
  );
};

export default Layout;
