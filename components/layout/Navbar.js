import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const [open, setOpen] = useState(false);

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

  const handleNavOpening = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeMenuOnClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex w-full items-center p-4 sm:hidden relative text-gray-600 text-sm shadow-lg border-b-2 border-indigo-700 border-opacity-30">
        <button
          onClick={handleNavOpening}
          className="focus:outline-none focus:bg-indigo-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <motion.a
          variants={logoVariants}
          initial="initial"
          animate="animate"
          href="#"
          className="ml-6 sm:inline"
        >
          DAN TRAN
        </motion.a>
        <div
          className={`${
            open ? "translate-y-0" : "-translate-y-96"
          } absolute w-full top-full left-0 bg-white transform shadow-lg shadow-lg border-b-2 border-indigo-700 border-opacity-30`}
        >
          <ul onClick={closeMenuOnClick} className="flex flex-col ml-4">
            <motion.li
              onClick={closeMenuOnClick}
              variants={aboutVariant}
              initial="initial"
              animate="animate"
            >
              About
            </motion.li>
            <motion.li
              onClick={closeMenuOnClick}
              variants={projectsVariant}
              initial="initial"
              animate="animate"
            >
              Projects
            </motion.li>
            <motion.li
              onClick={closeMenuOnClick}
              variants={resumeVariant}
              initial="initial"
              animate="animate"
            >
              Resume
            </motion.li>
            <motion.li
              onClick={closeMenuOnClick}
              variants={contactVariant}
              initial="initial"
              animate="animate"
              className="mb-4"
            >
              Contact
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.header
        animate={controls}
        ref={ref}
        variants={navbarVariants}
        className="flex flex-row justify-between p-4 text-gray-600 text-sm shadow-none sm:shadow-lg border-b-2 border-indigo-800 border-opacity-30  absolute inset-x-0 top-0 transform -translate-y-full sm:translate-y-0 transition duration-500 ease-in-out"
      >
        <ul className="ml-10  sm:inline">
          <motion.li
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            DAN TRAN
          </motion.li>
        </ul>
        <ul className="flex flex-row space-x-8 mr-10 ">
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
