import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    image: "/siteImages/companis-website.jpg",
    title: "Test",
    technology: ["react", "express", "javascript"],
  },
  {
    image: "/siteImages/mern-workout-log-resized.jpg",
    title: "Test",
    technology: ["react", "express", "javascript"],
  },
  {
    image: "/siteImages/mern-workout-log-resized.jpg",
    title: "Test",
    technology: ["react", "express", "javascript"],
  },
];

const TEST_ARRAY = [
  {
    num: 1,
    type: "react",
    image: "/siteImages/companis-website.jpg",
    github: "https://github.com/dtran5",
  },
  {
    num: 2,
    type: "node.js",
    image: "/siteImages/companis-website.jpg",
    github: "https://github.com/dtran5",
  },
  {
    num: 3,
    type: "react",
    image: "/siteImages/liftweights-recordworkout-resized.jpg",
    github: "https://github.com/dtran5",
  },
  {
    num: 4,
    type: "node.js",
    image: "/siteImages/liftweights-recordworkout-resized.jpg",
    github: "https://github.com/dtran5",
  },
  {
    num: 5,
    type: "node.js",
    image: "/siteImages/companis-website.jpg",
    github: "https://github.com/dtran5",
  },
  {
    num: 6,
    type: "react",
    image: "/siteImages/liftweights-recordworkout-resized.jpg",
    github: "https://github.com/dtran5",
  },
];

function Projects() {
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

  const projectsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      y: 0,

      opacity: 1,
      transition: {
        duration: 1,
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

  useEffect(() => {
    setProjects(TEST_ARRAY);
  }, []);

  const [projects, setProjects] = useState(TEST_ARRAY);
  const [displayProject, setDisplayProject] = useState("all");

  const handleClickReact = () => {
    setDisplayProject("react");
  };

  const handleClickNode = () => {
    setDisplayProject("node.js");
  };

  const handleClickAll = () => {
    setDisplayProject("all");
  };

  console.log(inView);
  return (
    <>
      <motion.div
        animate={controls}
        ref={ref}
        variants={projectsVariants}
        className=" px-5 mb-12 lg:mb-44 justify-center items-center flex flex-col "
      >
        <h1 className="text-3xl ">Projects</h1>

        <div className="mb-10">
          <button
            onClick={handleClickAll}
            className="bg-blue-500 mr-5 tracking-wider"
            type="button"
          >
            ALL
          </button>
          <button
            onClick={handleClickReact}
            className="bg-yellow-500 mr-5 tracking-wider"
            type="button"
          >
            REACT/NEXT.JS
          </button>
          <button
            onClick={handleClickNode}
            className="bg-red-500 tracking-wider"
            type="button"
          >
            REACT/NODE.JS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((item, index) => (
            <ProjectCard
              display={displayProject}
              num={item.num}
              type={item.type}
              key={index}
              image={item.image}
              github={item.github}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
