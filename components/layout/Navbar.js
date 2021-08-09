import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavContext } from "../../context/NavContext";

function Navbar() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { open, setOpen } = useContext(NavContext);

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

  const mobileNavVariants = {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "tween",
      },
    },
    close: {
      opacity: 0,
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
      <div className="flex items-center p-4 sm:hidden relative text-gray-600 text-sm shadow-lg border-b-2 border-indigo-700 border-opacity-30">
        <button
          onClick={handleNavOpening}
          className="focus:outline-none focus:bg-indigo-200"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <Link href="/">
          <motion.a
            variants={logoVariants}
            initial="initial"
            animate="animate"
            className="ml-6 sm:inline text-lg"
          >
            DAN TRAN
          </motion.a>
        </Link>

        <motion.div
          variants={mobileNavVariants}
          animate={open ? "animate" : "close"}
          className={
            "absolute w-full top-full left-0 bg-white transform shadow-lg border-b-2 border-indigo-700 border-opacity-30"
          }
        >
          <ul
            onClick={closeMenuOnClick}
            className="flex flex-col ml-4 space-y-3 text-lg"
          >
            <motion.li
              onClick={closeMenuOnClick}
              variants={aboutVariant}
              initial="initial"
              animate="animate"
            >
              <a href="#about">About</a>
            </motion.li>
            <motion.li
              onClick={closeMenuOnClick}
              variants={projectsVariant}
              initial="initial"
              animate="animate"
            >
              <a href="#projects">Projects</a>
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
              className="pb-5"
            >
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <motion.header
        animate={controls}
        ref={ref}
        variants={navbarVariants}
        className="flex flex-row justify-between p-4 text-gray-700 text-sm shadow-none sm:shadow-lg border-b-2 border-indigo-800 border-opacity-30  absolute inset-x-0 top-0 transform -translate-y-full sm:translate-y-0 transition duration-200 ease-in"
      >
        <ul className="ml-10 text-base sm:inline">
          <motion.li
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Link href="/">
              <a>DAN TRAN</a>
            </Link>
          </motion.li>
        </ul>
        <ul className="flex flex-row text-sm space-x-8 mr-10 ">
          <motion.li
            variants={aboutVariant}
            initial="initial"
            animate="animate"
          >
            <Link href="#about">
              <a>About</a>
            </Link>
          </motion.li>
          <motion.li
            variants={projectsVariant}
            initial="initial"
            animate="animate"
          >
            <Link href="#projects">
              <a>Projects</a>
            </Link>
          </motion.li>
          <motion.li
            variants={resumeVariant}
            initial="initial"
            animate="animate"
          >
            <a href="https://drive.google.com/file/d/1PutAPqWTTxGek4keIRPeMQk8GxKpRj_W/view?usp=sharing">
              Resume
            </a>
          </motion.li>
          <motion.li
            variants={contactVariant}
            initial="initial"
            animate="animate"
          >
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </motion.li>
        </ul>
      </motion.header>
    </>
  );
}

export default Navbar;
