import React from "react";
import Image from "next/image";

function ProjectCardRight({ image, title, tech }) {
  return (
    <div className="container mt-32 mx-auto p-4 md:p-0 rounded">
      <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto rounded">
        <div className="bg-white w-full md:w-2/3 rounded">
          <div className="h-56 md:h-full text-center xs:ml-8 xs:text-left mx-auto px-6 xs:px-0 xs:pt-4 xs:-mr-6 z-10 relative">
            <h3 className="text-grey-dark mb-1">{title}</h3>
            <h5 className="invisible xs:visible">Featured Project</h5>
            <div className="bg-indigo-700 text-gray-200 shadow-lg rounded xs:h-7/12 p-5 xs:p-5 xs:pr-0 -mt-6 xs:mt-2 relative mb-4 xs:-mb-2 flex flex-wrap xs:flex-wrap items-center">
              <p className="mr-3 text-sm lg:mt-0 xs:text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                tenetur officia enim assumenda deserunt modi voluptates sequi
                deleniti dolorem necessitatibus!
              </p>
              <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center sm:text-left"></div>
            </div>
            <div className="absolute inset-0 top-44 fle sm:static  lg:mt-6  w-full justify-center  flex flex-row xs:justify-start">
              <ul className="flex flex-row flex-wrap mt-5 mb-1 lg:mt-0 xs:text-left text-sm">
                {tech.map((technology, index) => (
                  <li key={technology[index]} className="ml-2 mr-2 xs:mr-0">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-cover  bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative rounded">
          <div className="w-full">
            <Image
              src={image}
              className="object-cover w-full relative sm:object-cover rounded"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardRight;
