import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import Skills from "../components/layout/Skills";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

export default Home;
