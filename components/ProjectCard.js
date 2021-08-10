import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

function ProjectCard({ num, type, display, image, github, liveSite, alt }) {
  const variants = {
    initial: { opacity: 0.2 },
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
          className="absolute top-0 left-0 w-full h-full text-center flex flex-col items-center justify-around hover:bg-indigo-500 hover:bg-opacity-95 transition ease-out duration-500 border-2 border-indigo-700 border-opacity-10 border-collapse"
        >
          <motion.h6
            variants={textMotion}
            className="text-white tracking-wider"
          >
            {num}
          </motion.h6>
          <div className="space-x-3">
            {github ? (
              <motion.button
                variants={buttonMotion}
                className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
              >
                <Link href={github}>
                  <a>Github</a>
                </Link>
              </motion.button>
            ) : (
              ""
            )}

            {liveSite ? (
              <motion.button
                variants={buttonMotion}
                className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
              >
                <Link href={liveSite}>
                  <a>Visit Site!</a>
                </Link>
              </motion.button>
            ) : (
              ""
            )}
          </div>
        </motion.div>
        <img
          alt={alt}
          src={image}
          className="w-112  md:w-80 lg:w-96 xl:w-120 md:h-64 xl:h-72 xxl:h-80 "
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
