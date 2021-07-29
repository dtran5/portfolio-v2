import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import EmailCapture from "./EmailCapture";

function Footer() {
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
  const footerVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -100 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={footerVariants}
      className="flex flex-col items-center sm:items-start mb-20 md:mb-32"
    >
      <h1 className="text-3xl text-gray-700 relative mb-4">
        Let's Chat!
        <svg
          className="hidden sm:block w-auto mx-auto mb-5 absolute top-1/4 left-40 opacity-50"
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
      <p className="w-full md:w-11/12 text-left">
        I am currently looking for a new opportunity and would love meet with
        other software engineers. My inbox is always open and I am happy to meet
        with anyone!
      </p>
    </motion.div>
  );
}

export default Footer;
