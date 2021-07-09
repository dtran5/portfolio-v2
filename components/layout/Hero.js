import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
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
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const parentDivVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const introVariants = {
    initial: { x: "-100vw" },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const introNameVariants = {
    initial: { x: "-100vw" },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        delay: 1,
      },
    },
  };

  const buttonVariants = {
    initial: { y: "-100vw" },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        delay: 1,
      },
    },
  };
  const buttonVariants2 = {
    initial: { y: "-100vw" },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        delay: 1.1,
      },
    },
  };
  const buttonVariants3 = {
    initial: { y: "-100vw" },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        delay: 1.2,
      },
    },
  };
  return (
    <>
      <motion.div ref={ref} animate={controls} variants={heroVariants}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={parentDivVariants}
          className="flex flex-row  bg-gray-100"
        >
          <div className="w-1/3">
            <div>
              <Image
                src="/siteImages/portfolio2.jpg"
                height={238}
                width={341}
                layout="responsive"
              />
            </div>
          </div>

          <div className="ml-3 flex flex-col justify-evenly relative w-1/2 text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={introVariants}
            >
              <h6 className="text-xl font-light tracking-wider text-gray-700 ">
                Hi, my name is
              </h6>
              <h1 className="text-4xl tracking-wider text-indigo-900">
                Dan Tran
              </h1>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              variants={introNameVariants}
            >
              <p className="font-light text-sm -mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                tempore?
              </p>
            </motion.div>
          </div>
          <div className="1/3 flex flex-col justify-evenly">
            <motion.button
              initial="initial"
              animate="animate"
              variants={buttonVariants}
              className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
            >
              Resume
            </motion.button>
            <motion.button
              initial="initial"
              animate="animate"
              variants={buttonVariants2}
              className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
            >
              Github
            </motion.button>
            <motion.button
              initial="initial"
              animate="animate"
              variants={buttonVariants3}
              className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-2 border border-gray-100 rounded shadow"
            >
              LinkedIn
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
