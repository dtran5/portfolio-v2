import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SiteButton from "../SiteButton";
import DocumentIcon from "../../svgIcons/DocumentIcon";
import GithubIcon from "../../svgIcons/GithubIcon";
import LinkedInIcon from "../../svgIcons/LinkedInIcon";

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

  const imageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        delay: 1,
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

  const iconClasses = "h-5 w-5 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5";
  const buttonClassesResume =
    "bg-white w-full sm:text-sm md:text-base flex justify-start items-center hover:bg-gray-100 text-gray-700  py-2 px-4 border border-b-8 border-gray-100 rounded shadow";
  const buttonClassesGithub =
    "bg-white w-full sm:text-sm md:text-base flex justify-start items-center hover:bg-gray-200 text-gray-700  py-2 px-4 border border-b-8 border-gray-200 rounded shadow";
  const buttonClassesLinkedIn =
    "bg-white w-full sm:text-sm md:text-base flex justify-start items-center hover:bg-gray-300 text-gray-700  py-2 px-4 border border-b-8 border-gray-300 rounded shadow";

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        variants={heroVariants}
        className="w-full h-screen flex sm:mt-20 justify-center mb-40 sm:mb-20 md:mb-12 lg:mb-12 sm:py-28"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={parentDivVariants}
          className=" flex flex-col items-center md:flex-row justify-center w-full pb-10"
        >
          <div className="sm:w-1/2 md:w-5/12 xl:w-1/3 ml-12 flex justify-center xl:justify-end items-center mt-20 lg:mt-5">
            <motion.div
              initial="initial"
              animate="animate"
              variants={imageVariants}
              className="-ml-10 sm:ml-0 relative h-72 w-72 sm:h-72 sm:w-72 md:h-72 md:w-72 xl:h-96 xl:w-96"
            >
              <Image
                src="/siteImages/portfolio2.jpg"
                layout="fill"
                className="rounded-full"
                objectFit="cover"
              />
            </motion.div>
          </div>

          <div className="  flex flex-col justify-evenly relative w-2/3 xl:w-1/2 text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={introVariants}
            >
              <h6 className="text-xl font-light tracking-wider text-gray-700 mt-10 ">
                Hi, my name is
              </h6>
              <h1 className="text-4xl tracking-wider text-indigo-900 mb-4">
                Dan Tran
              </h1>
            </motion.div>
            <motion.div
              className="text-gray-700"
              initial="initial"
              animate="animate"
              variants={introNameVariants}
            >
              <p className="font-light tracking-tight text-md mb-5 w-full md:w-2/3 xl:w-1/2 mx-auto">
                I&apos;m a self-taught software developer focused on continually
                learning, creating quality projects and staying humble as I
                progress on my coding journey!
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
                  stroke="#374151"
                  strokeWidth="3"
                />
              </svg>
            </motion.div>
            <div className="w-2/3 md:w-1/2 lg:w-1/2  mx-auto md:absolute md:left-1/4 md:top-full flex flex-row  justify-evenly items-center">
              <motion.a
                initial="initial"
                animate="animate"
                variants={buttonVariants}
                href="https://drive.google.com/file/d/1C7BJTEMMc-wYu1XMGpyGoRiT3eDcCS3t/view"
              >
                <SiteButton text="Resume" classes={buttonClassesResume}>
                  <DocumentIcon classes={iconClasses} />
                </SiteButton>
              </motion.a>
              <motion.a
                initial="initial"
                animate="animate"
                variants={buttonVariants2}
                href="https://github.com/dtran5"
              >
                <SiteButton text="Github" classes={buttonClassesGithub}>
                  <GithubIcon classes={iconClasses} />
                </SiteButton>
              </motion.a>
              <motion.a
                initial="initial"
                animate="animate"
                variants={buttonVariants3}
                href="https://www.linkedin.com/feed/"
              >
                <SiteButton text="LinkedIn" classes={buttonClassesLinkedIn}>
                  <LinkedInIcon classes={iconClasses} />
                </SiteButton>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
