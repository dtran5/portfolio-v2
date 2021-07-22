import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
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
      className="flex flex-col items-start lg:mb-44"
    >
      <h1 className="text-3xl font-medium text-gray-700">Let's Chat!</h1>
      <p className="w-1/2 text-left">
        I am currently looking for a new opportunity and would love meet with
        other software engineers. My inbox is always open and I am happy to meet
        with anyone!
      </p>
    </motion.div>
  );
}

export default Footer;
