import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SiteButton from "../SiteButton";
import ProjectCard from "../ProjectCard";

const projectsList = [
  {
    num: "Macbell Blog",
    type: "nextjs",
    image: "/siteImages/macbell-blog-2.png",
    github: "https://github.com/dtran5/macbell-blog",
    liveSite: "https://macbellclan.com",
    alt: "Macbell Blog website",
  },
  {
    num: "Companis Nonprofit",
    type: "other",
    image: "/siteImages/companis.png",
    liveSite: "https://companis.org",
    alt: "Companis website",
  },
  {
    num: "Workout Share App",
    type: "react",
    image: "/siteImages/workout-share.png",
    github: "https://github.com/dtran5/mern-workout-log",
    alt: "Workout share app",
  },
  {
    num: "Weather App",
    type: "react",
    image: "/siteImages/weather-app-2.png",
    github: "https://github.com/dtran5/react-weather-app",
    alt: "Weather app",
  },
  {
    num: "Weight Training Programming",
    type: "react",
    image: "/siteImages/liftweights-recordworkout-resized.jpg",
    github: "https://github.com/dtran5/liftweights",
    alt: "Weight training app",
  },
  {
    num: "Portfolio Website v1",
    type: "other",
    image: "/siteImages/portfolio-v1.png",
    github: "https://github.com/dtran5/dtran5.github.io",
    liveSite: "https://dtran5.github.io/",
    alt: "First iteration of portfolio website",
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

  const horizontalRuleVariant = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const projectsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      scale: 1,
      y: 0,

      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  const [projects, setProjects] = useState(projectsList);
  const [active, setActive] = useState("all");
  const [displayProject, setDisplayProject] = useState("all");

  const handleClickReact = () => {
    setDisplayProject("react");
  };

  const handleClickNext = () => {
    setDisplayProject("nextjs");
  };

  const handleClickOther = () => {
    setDisplayProject("other");
  };

  const handleClickAll = () => {
    setDisplayProject("all");
  };

  const buttonClassesAll = `${
    displayProject === "all" ? "bg-indigo-200" : ""
  }  (border border-b-8 border-indigo-200 mr-5 px-4 py-2 w-full sm:text-sm md:text-base hover:bg-indigo-200 text-indigo-800  border border-indigo-100 rounded shadow) `;
  const buttonClassesNext = `${
    displayProject === "nextjs" ? "bg-indigo-300" : ""
  } border border-b-8 border-indigo-300 mr-5 px-4 py-2 w-full sm:text-sm md:text-base hover:bg-indigo-300 text-gray-800  border border-indigo-100 rounded shadow`;
  const buttonClassesReact = `${
    displayProject === "react" ? "bg-indigo-400" : ""
  } border border-b-8 border-indigo-400 mr-5 px-4 py-2 w-full sm:text-sm md:text-base hover:bg-indigo-400 text-indigo-800  border border-indigo-400 rounded shadow`;
  const buttonClassesOther = `${
    displayProject === "other" ? "bg-indigo-500" : ""
  } border border-b-8 border-indigo-500 mr-5 px-4 py-2 w-full sm:text-sm md:text-base hover:bg-indigo-500 text-gray-800  border border-indigo-500 rounded shadow`;

  return (
    <>
      <motion.div
        animate={controls}
        ref={ref}
        variants={projectsVariants}
        className=" px-5 mb-44 justify-center items-center flex flex-col"
      >
        <h1 className="text-3xl text-gray-700">Projects</h1>
        <svg
          className="mx-auto w-32 mb-8"
          height="10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={horizontalRuleVariant}
            d="M 10 10 L 100 10"
            stroke="#374151"
            strokeWidth="5"
          />
        </svg>
        <div className="mb-10 flex flex-col space-y-2 md:space-y-0 md:flex-row">
          <SiteButton
            classes={buttonClassesAll}
            text="ALL"
            onClick={handleClickAll}
          ></SiteButton>

          <SiteButton
            classes={buttonClassesNext}
            text="NEXT.JS"
            onClick={handleClickNext}
          ></SiteButton>
          <SiteButton
            classes={buttonClassesReact}
            text="REACT/REDUX/NODE.JS"
            onClick={handleClickReact}
          ></SiteButton>
          <SiteButton
            classes={buttonClassesOther}
            text="OTHER"
            onClick={handleClickOther}
          ></SiteButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {projects.map((item, index) => (
            <ProjectCard
              display={displayProject}
              num={item.num}
              type={item.type}
              key={index}
              image={item.image}
              github={item.github}
              liveSite={item.liveSite}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
