import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import Box from "../components/layout/Box";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Projects />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </>
  );
}

export default Home;
