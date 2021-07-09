import React from "react";
import Image from "next/image";

function ProjectCard({ image }) {
  return (
    <div className="flex flex-row relative">
      <div className="w-1/2">
        <Image src={image} height={300} width={500} />
      </div>
      <div className="flex flex-col w-1/2">
        <h3>Title</h3>
        <div className="absolute right-0 top-20 bg-gray-700 w-7/12 h-1/2">
          <h3>Description</h3>
        </div>
        <div>
          <h3>Technologies</h3>
        </div>
        <div>Github Link</div>
      </div>
    </div>
  );
}

export default ProjectCard;
