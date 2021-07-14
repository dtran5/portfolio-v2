import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";

import styles from "../../styles/Projects.module.css";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

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

  return (
    <>
      <div className="bg-indigo-300 sm:bg-red-900 md:bg-blue-500 lg:bg-green-500 py-28 px-5 justify-center items-center flex mb-20 flex-col">
        <div>
          <button
            onClick={handleClickAll}
            className="bg-blue-500 mr-5"
            type="button"
          >
            ALL
          </button>
          <button
            onClick={handleClickReact}
            className="bg-yellow-500 mr-5"
            type="button"
          >
            React
          </button>
          <button
            onClick={handleClickNode}
            className="bg-red-500"
            type="button"
          >
            Node.js
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
          <AnimatePresence>
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
          </AnimatePresence>
        </div>
      </div>

      {/* <div className="bg-indigo-500 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5">


          <div className="bg-white p-1 rounded col-span-2">
            <Image
              src="/siteImages/portfolio.jpg"
              width={300}
              height={200}
              layout="intrinsic"
            />
          </div>
          <div className="bg-white p-3 rounded">
            <Image
              src="/siteImages/liftweights-recordworkout-resized.jpg"
              width={300}
              height={200}
              layout="responsive"
            />
          </div>

          {projects.map((project, index) => {
            if (index % 2 === 0) {
              return (
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  tech={project.technology}
                />
              );
            } else if (index % 2 === 1) {
              return (
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  tech={project.technology}
                />
              );
            }
          })}
        </div>



      </div>
      <div className="container mt-32 mx-auto p-4 md:p-0">
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative"
            style={{ backgroundImage: "url(/siteImages/portfolio.jpg)" }}
          >
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>

          <div className="bg-white w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
                <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                  <h3>Saint Basil's Cathedral</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                    Moscow - Russia
                  </p>
                  <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
                </div>

                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi tenetur officia enim assumenda deserunt modi
                    voluptates sequi deleniti dolorem necessitatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>

    // <motion.div
    //   initial="initial"
    //   animate="animate"
    //   variants={backgroundVariants}
    //   className="relative container mx-auto bg-indigo-50  px-6 flex flex-col space-y-8"
    // >
    //   <div className="flex flex-col justify-center items-center">
    //     <motion.h1
    //       initial="initial"
    //       animate="animate"
    //       variants={titleVariants}
    //       className="mt-12 mb-5 text-3xl tracking-wider"
    //     >
    //       Projects
    //     </motion.h1>
    //     <hr className="solid border-b-2 mb-5 border-indigo-900 w-28"></hr>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ad
    //       similique accusantium quam soluta, dolores quia! Facilis voluptas vel
    //       odit?
    //     </p>
    //   </div>
    //   <div class="relative z-10">
    //     <img src="/siteImages/portfolio.jpg" className="timeline-img " />
    //     <div className="timeline-container timeline-container-left">
    //       <div
    //         aria-hidden="true"
    //         className="timeline-pointer timeline-pointer-left"
    //       ></div>
    //       <div className="bg-white p-6 rounded-md shadow-md">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    //         voluptatibus quidem magnam. Tempore consectetur quis dolore harum
    //         corrupti odio exercitationem!
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute w-0.5 top-48 bg-indigo-900 shadow-md left-17.5 inset-0 z-0 md:mx-auto md:right-0 md:left-0"></div>
    //   <div className="relative z-10">
    //     <img
    //       src="/siteImages/portfolio.jpg"
    //       className="timeline-img timeline-img-left"
    //     />
    //     <div className="timeline-container ">
    //       <div aria-hidden="true" className="timeline-pointer "></div>
    //       <div className="bg-white p-6 rounded-md shadow-md">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    //         voluptatibus quidem magnam. Tempore consectetur quis dolore harum
    //         corrupti odio exercitationem!
    //       </div>
    //     </div>
    //   </div>
    //   <div class="relative z-10">
    //     <img src="/siteImages/portfolio.jpg" className="timeline-img " />
    //     <div className="timeline-container timeline-container-left">
    //       <div
    //         aria-hidden="true"
    //         className="timeline-pointer timeline-pointer-left"
    //       ></div>
    //       <div className="bg-white p-6 rounded-md shadow-md">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    //         voluptatibus quidem magnam. Tempore consectetur quis dolore harum
    //         corrupti odio exercitationem!
    //       </div>
    //     </div>
    //   </div>
    //   <div class="relative z-10">
    //     <img
    //       src="/siteImages/portfolio.jpg"
    //       className="timeline-img timeline-img-left"
    //     />
    //     <div className="timeline-container ">
    //       <div aria-hidden="true" className="timeline-pointer "></div>
    //       <div className="bg-white p-6 rounded-md shadow-md">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
    //         voluptatibus quidem magnam. Tempore consectetur quis dolore harum
    //         corrupti odio exercitationem!
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
  );
}

export default Projects;
