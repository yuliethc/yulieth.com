import React, { Component } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";

class NewLanding extends Component {
  render() {
    return (
      <>
        <Layout>
          <div
            class="container d-flex flex-column align-items-center justify-content-end"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h1>Yulieth Lubo</h1>
            <h2>Front-End Developer</h2>
            <a href="/about" class="btn-about">
              About Me
            </a>
          </div>
        </Layout>
      </>
    );
  }
}

export default NewLanding;
