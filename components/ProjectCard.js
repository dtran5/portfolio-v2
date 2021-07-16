import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCard({ num, type, display, image, github }) {
  const variants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
  };

  const textMotion = {
    rest: {
      opacity: 0,

      y: -40,
      transition: {
        duration: 0.25,
      },
    },
    hover: {
      opacity: 0.9,

      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  const buttonMotion = {
    rest: {
      opacity: 0,

      y: 40,
      transition: {
        duration: 0.25,
      },
    },
    hover: {
      opacity: 0.9,
      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      exit={{ opacity: 0 }}
      animate={
        display === "all" ? "animate" : display === type ? "animate" : "initial"
      }
      className="bg-gray-200 h-auto w-full"
    >
      <div className="w-full relative">
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="absolute top-0 left-0 w-full h-full text-center flex flex-col items-center justify-around hover:bg-indigo-500 hover:bg-opacity-90 transition ease-out duration-500"
        >
          <motion.h6 variants={textMotion} className="">
            {num}
          </motion.h6>
          <motion.button
            variants={buttonMotion}
            className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
          >
            <Link href={github}>
              <a>Github</a>
            </Link>
          </motion.button>
        </motion.div>
        <img src={image} className="w-80 h-auto" />

        {/* <motion.div
          whileHover={{ opacity: 0.9, zIndex: 10 }}
          className="absolute bg-red-900 -z left-0 top-0 w-full h-full"
        ></motion.div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;

// bg - opacity - 0;
