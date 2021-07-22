import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import Skills from "../components/layout/Skills";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <div className="w-10/12 md:w-9/12 mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default Home;
