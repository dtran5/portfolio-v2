import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
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

  const aboutVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -100 },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      animate={controls}
      ref={ref}
      variants={aboutVariants}
      className="w-full lg:w-10/12 mt-12 lg:mt-0 mb-20"
    >
      <h1 className="text-3xl text-gray-700 tracking-wider mb-4 text-center  sm:text-left relative">
        About Me
        <svg
          className="hidden sm:block w-auto mx-auto mb-5 absolute top-1/3 left-38 opacity-50"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            //   variants={horizontalRuleVariant}
            d="M 10 10 L 700 10"
            stroke="#000"
            strokeWidth="5"
          />
        </svg>
      </h1>

      <p className="text-sm text-left text-gray-700">
        Hello! My name is Dan, software developer and student of code. As a
        former strength and conditioning coach, I recently developed a curiosity
        for technology and code during my time at UCLA. The computer science
        department had developed a simple application for athlete fatigue
        management, providing coaches with valuable information that took almost
        no effort to collect. Athletes could easily enter information such as
        soreness of specific muscles, external stressors, hours of sleep, and
        the program even collected countermovement jump heights daily and sent
        them directly to the coaches.
        <br></br>
        <br></br>
        The application, while simple, streamlined such a crucial part of a
        coach&apos;s job and I found myself curious about how these programs
        were created and what else could be done to improve our coaching
        workflow. My limited understanding of the program&apos;s inner workings
        led me to begin learning to code. I fully dove in without previous
        knowledge and while it started out as overwhelming I took it one step at
        a time, stayed consistent, and with help from fellow coders I have been
        able to build a solid foundation.
        <br></br>
        <br></br>I was determined to learn and along the way my curiosity turned
        to genuine enjoyment. The process has been a humbling experience but one
        that I am so excited to continue. At this point, my only regret has been
        not learning to code earlier!
      </p>
    </motion.div>
  );
}

export default About;
