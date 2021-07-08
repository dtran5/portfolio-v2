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
  return (
    <>
      <motion.div ref={ref} animate={controls} variants={heroVariants}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={parentDivVariants}
          className="flex flex-col items-center h-40 bg-purple-300 relative"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={introVariants}
          >
            <h6 className="text-md tracking-wider text-gray-700  text-left">
              Hi, my name is
            </h6>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={introNameVariants}
          >
            {/* <div classsName="flex absolute bottom-0">
              <Image
                src="/siteImages/Portfolio.png"
                width={300}
                height={200}
                layout="fixed"
              />
            </div> */}

            <h1 className="text-2xl tracking-wider text-gray-700">Dan Tran</h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
