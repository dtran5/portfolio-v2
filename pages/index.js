import React from "react";
import Head from "next/head";

import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import Skills from "../components/layout/Skills";
import About from "../components/layout/About";
import Footer from "../components/layout/Footer";
import EmailCapture from "../components/layout/EmailCapture";

function Home() {
  return (
    <>
      <Head>
        <title>Dan Tran</title>
        <meta property="og:image" content="/siteImages/thumbnail.png" />
      </Head>
      <div className="w-11/12 sm:w-10/12 md:w-10/12 mx-auto overflow-x-hidden">
        <Hero />
        <div id="projects">
          <Projects />
        </div>

        <div id="about" className="w-full md:w-11/12 lg:w-3/4 mx-auto">
          <About />
          <div>
            <Skills />
          </div>

          <Footer />
          <div id="contact" className="flex justify-center">
            <EmailCapture />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

