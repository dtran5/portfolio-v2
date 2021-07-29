import React, { useEffect } from "react";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import MongodbIcon from "../../svgIcons/MongodbIcon";
import JavaIcon from "../../svgIcons/JavaIcon";
import HtmlIcon from "../../svgIcons/HtmlIcon";
import CssIcon from "../../svgIcons/CssIcon";
import JavascriptIcon from "../../svgIcons/JavascriptIcon";
import ReactIcon from "../../svgIcons/ReactIcon";
import NextjsIcon from "../../svgIcons/NextjsIcon";
import NodeIcon from "../../svgIcons/NodeIcon";
import ReduxIcon from "../../svgIcons/ReduxIcon";
import WordpressIcon from "../../svgIcons/WordpressIcon";

function Skills() {
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

  const skillsVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 100 },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const iconClasses = "h-8 w-8 xs:h-12 xs:w-12 sm:h-12 sm:w-12";

  return (
    <motion.div
      className="w-full flex flex-col  mb-20 lg:ml-10"
      animate={controls}
      ref={ref}
      variants={skillsVariants}
    >
      <div className="flex flex-col lg:flex-row lg:justify-end">
        <div className="w-full lg:w-10/12">
          <h1 className="text-3xl text-gray-700 tracking-wider mb-4 text-center sm:text-right lg:ml-20 xl:ml-20 relative">
            Technical Skills
            <svg
              className="hidden sm:block mb-5 absolute top-1/3 right-52 opacity-50"
              height="10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                //   variants={horizontalRuleVariant}
                d="M 10 10 L 245 10"
                stroke="#000"
                strokeWidth="5"
              />
            </svg>
          </h1>
          <div className="grid grid-cols-5 gap-2">
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* HTML----------------------- */}
              <i title="HTML" alt="HTML">
                <HtmlIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* CSS------------------------- */}
              <i title="CSS" alt="CSS">
                <CssIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* JAVASCRIPT------------------------- */}
              <i title="Javascript" alt="Javascript">
                <JavascriptIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* REACT----------------- */}
              <i title="React" alt="React">
                <ReactIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* REDUX------------------ */}
              <i title="Redux/Redux Toolkit" alt="Redux/Redux Toolkit">
                <ReduxIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* NEXT------------------ */}
              <i title="Next.js" alt="Next.js">
                <NextjsIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* NODE-------------- */}
              <i title="Node.js" alt="Node.js">
                <NodeIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* MONGODB-------------------- */}
              <i title="MongoDB" alt="MongoDB">
                <MongodbIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* JAVA------------------- */}
              <i title="Java" alt="Java">
                <JavaIcon classes={iconClasses} />
              </i>
            </div>
            <div className="rounded-full h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 border-2 flex items-center justify-center sm:justify-self-end justify-self-center">
              {/* JAVA------------------- */}
              <i title="Wordpress" alt="Wordpress">
                <WordpressIcon classes={iconClasses} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
