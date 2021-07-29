import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import Skills from "../components/layout/Skills";
import About from "../components/layout/About";
import Footer from "../components/layout/Footer";
import EmailCapture from "../components/layout/EmailCapture";

function Home() {
  return (
    <>
      <div className="w-11/12 sm:w-10/12 md:w-10/12 mx-auto">
        <Hero />
        <Projects />
        <div id="about" className="w-full md:w-11/12 lg:w-3/4 mx-auto">
          <About />
          <div>
            <Skills />
          </div>

          <Footer />
          <div className="flex justify-center">
            <EmailCapture />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
