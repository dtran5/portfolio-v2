import React from "react";
import Image from "next/image";

function ProjectCardRight({ image }) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <h3>Project Title</h3>
      </div>
      <div>
        <Image src={image} height={200} width={300} />
      </div>
    </div>
  );
}

export default ProjectCardRight;
