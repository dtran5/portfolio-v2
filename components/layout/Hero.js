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
    initial: { x: -50 },
    animate: {
      x: 0,
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
    initial: { x: 50 },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        delay: 1.2,
      },
    },
  };

  const horizontalRuleVariant = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 1.3,
      },
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        variants={heroVariants}
        className="w-full lg:w-9/12 mx-auto  flex justify-center lg:mt-20 lg:mb-8 sm:py-28"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={parentDivVariants}
          className=" flex flex-col items-center md:flex-row justify-center w-full pb-10"
        >
          <div className="sm:w-1/2 md:w-1/3 xl:w-1/3 ml-12 flex justify-center xl:justify-end items-center mt-20 lg:mt-5">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-72 md:w-72 xl:h-96 xl:w-96">
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

          <div className="ml-3 flex flex-col justify-evenly relative w-2/3 xl:w-1/2 text-center">
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
              <p className="font-light text-sm mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                tempore?
              </p>
              <svg
                className="mx-auto mb-5"
                width="310"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={horizontalRuleVariant}
                  d="M 10 10 L 300 10"
                  stroke="#000"
                  strokeWidth="5"
                />
              </svg>
            </motion.div>
            <div className="w-1/3 mx-auto md:absolute md:left-1/3 md:top-full flex flex-row  justify-evenly items-center">
              <motion.button
                initial="initial"
                animate="animate"
                variants={buttonVariants}
                className="bg-white md:w-full sm:text-sm md:text-base flex justify-start items-center w-10/12 hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-4 lg:w-4 mr-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
                Resume
              </motion.button>
              <motion.button
                initial="initial"
                animate="animate"
                variants={buttonVariants2}
                className="bg-white md:w-full sm:text-sm md:text-base flex justify-start items-center w-10/12 hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow mx-2 sm:mx-0"
              >
                <svg
                  className="mr-3 h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-4 lg:w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
                Github
              </motion.button>
              <motion.button
                initial="initial"
                animate="animate"
                variants={buttonVariants3}
                className="bg-white md:w-full sm:text-sm md:text-base flex justify-start items-center w-10/12 hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow mx-2 sm:mx-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mr-3 h-4.5 w-4.5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-4 lg:w-4"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </motion.button>
              {/* <motion.hr className="w-full border-2 border-green-300" /> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
