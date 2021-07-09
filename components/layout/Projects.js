import React from "react";
import ProjectCard from "../ProjectCard";
import ProjectCardRight from "../ProjectCardRight";
import styles from "../../styles/Projects.module.css";
import Image from "next/image";

function Projects() {
  return (
    <div className="relative container mx-auto bg-indigo-50  px-6 flex flex-col space-y-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-12 mb-5 text-3xl tracking-wider">Projects</h1>
        <hr className="solid border-b-2 mb-5 border-indigo-900 w-28"></hr>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ad
          similique accusantium quam soluta, dolores quia! Facilis voluptas vel
          odit?
        </p>
      </div>
      <div class="relative z-10">
        <img src="/siteImages/portfolio.jpg" className="timeline-img " />
        <div className="timeline-container timeline-container-left">
          <div
            aria-hidden="true"
            className="timeline-pointer timeline-pointer-left"
          ></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatibus quidem magnam. Tempore consectetur quis dolore harum
            corrupti odio exercitationem!
          </div>
        </div>
      </div>

      <div className="absolute w-0.5 top-48 bg-indigo-900 shadow-md left-17.5 inset-0 z-0 md:mx-auto md:right-0 md:left-0"></div>
      <div class="relative z-10">
        <img
          src="/siteImages/portfolio.jpg"
          className="timeline-img timeline-img-left"
        />
        <div className="timeline-container ">
          <div aria-hidden="true" className="timeline-pointer "></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatibus quidem magnam. Tempore consectetur quis dolore harum
            corrupti odio exercitationem!
          </div>
        </div>
      </div>
      <div class="relative z-10">
        <img src="/siteImages/portfolio.jpg" className="timeline-img " />
        <div className="timeline-container timeline-container-left">
          <div
            aria-hidden="true"
            className="timeline-pointer timeline-pointer-left"
          ></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatibus quidem magnam. Tempore consectetur quis dolore harum
            corrupti odio exercitationem!
          </div>
        </div>
      </div>
      <div class="relative z-10">
        <img
          src="/siteImages/portfolio.jpg"
          className="timeline-img timeline-img-left"
        />
        <div className="timeline-container ">
          <div aria-hidden="true" className="timeline-pointer "></div>
          <div className="bg-white p-6 rounded-md shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptatibus quidem magnam. Tempore consectetur quis dolore harum
            corrupti odio exercitationem!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
