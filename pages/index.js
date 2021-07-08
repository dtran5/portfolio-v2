import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../components/layout/Hero";

function Home() {
  const Box1 = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
      if (!inView) {
        controls.start("hidden");
      }
    }, [controls, inView]);
    const boxVariants = {
      hidden: { scale: 0 },
      visible: {
        scale: 1,
        transition: {
          duration: 0.5,
        },
      },
    };

    return (
      <motion.div
        animate={controls}
        ref={ref}
        variants={boxVariants}
        className={styles.box}
      ></motion.div>
    );
  };

  return (
    <>
      <Hero />
      <Box1 />
      <Box1 />
      <Box1 />
      <Box1 />
      <Box1 />
      <Box1 />
      <Box1 />
    </>
  );
}

export default Home;
