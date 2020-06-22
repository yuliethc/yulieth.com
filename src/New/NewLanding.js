import React, { Component, useEffect } from "react";
import Layout from "./components/Layout";
import { Link } from "react-router-dom";

const NewLanding = () => {

    return (
      <>
        <Layout>
          <div
            class="container d-flex flex-column align-items-center justify-content-end"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h1>Yulieth Lubo</h1>
            <h1>de D'Agostini</h1>
            <h2>Front-End Developer</h2>
            <Link to="/about" class="btn-about" aria-label="Go to About">
              About Me
            </Link>
          </div>
        </Layout>
      </>
    );
}

export default NewLanding;
