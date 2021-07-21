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
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const introNameVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
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
      <motion.div
        ref={ref}
        animate={controls}
        variants={heroVariants}
        className="w-full lg:w-2/3 mx-auto  flex justify-center lg:mt-36 sm:py-28"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={parentDivVariants}
          className=" flex flex-col items-center sm:flex-row justify-center w-full pb-10"
        >
          <div className="sm:w-1/3 ml-8 flex justify-center items-center mt-20 lg:mt-5">
            <div className="relative h-72 w-72 sm:h-60 sm:w-60">
              <Image
                src="/siteImages/portfolio2.jpg"
                // height={238}
                // width={341}
                layout="fill"
                className="rounded-full"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="ml-3 flex flex-col justify-evenly relative w-1/2 text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={introVariants}
            >
              <h6 className="text-xl font-light tracking-wider text-gray-700 mt-10 ">
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
              <p className="font-light text-sm mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                tempore?
              </p>
            </motion.div>
          </div>
          <div className="w-1/3 flex flex-row sm:flex-col justify-evenly items-center">
            <motion.button
              initial="initial"
              animate="animate"
              variants={buttonVariants}
              className="bg-white w-3/5 hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
            >
              Resume
            </motion.button>
            <motion.button
              initial="initial"
              animate="animate"
              variants={buttonVariants2}
              className="bg-white w-3/5 hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow mx-2 sm:mx-0"
            >
              Github
            </motion.button>
            <motion.button
              initial="initial"
              animate="animate"
              variants={buttonVariants3}
              className="bg-white w-3/5 hover:bg-gray-100 text-gray-800  py-2 px-2 border border-gray-100 rounded shadow"
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
