import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Navbar() {
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

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const logoVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: -0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  };

  const aboutVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: -0, opacity: 1, transition: { duration: 1, delay: 0.1 } },
  };
  const projectsVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: -0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };
  const resumeVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: -0, opacity: 1, transition: { duration: 1, delay: 0.3 } },
  };
  const contactVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: -0, opacity: 1, transition: { duration: 1, delay: 0.4 } },
  };

  return (
    <>
      <motion.header
        animate={controls}
        ref={ref}
        variants={navbarVariants}
        className="flex flex-row justify-between p-4  text-gray-600 text-sm"
      >
        <ul className="ml-10">
          <motion.li
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            DAN TRAN
          </motion.li>
        </ul>
        <ul className="flex flex-row space-x-8 mr-10">
          <motion.li
            variants={aboutVariant}
            initial="initial"
            animate="animate"
          >
            About
          </motion.li>
          <motion.li
            variants={projectsVariant}
            initial="initial"
            animate="animate"
          >
            Projects
          </motion.li>
          <motion.li
            variants={resumeVariant}
            initial="initial"
            animate="animate"
          >
            Resume
          </motion.li>
          <motion.li
            variants={contactVariant}
            initial="initial"
            animate="animate"
          >
            Contact
          </motion.li>
        </ul>
      </motion.header>
    </>
  );
}

export default Navbar;
