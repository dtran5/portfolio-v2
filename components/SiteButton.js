import React from "react";

function SiteButton({ text, children }) {
  return (
    <button className="bg-white w-full sm:text-sm md:text-base flex justify-start items-center hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-100 rounded shadow">
      <div className="mr-2">{children}</div>

      {text}
    </button>
  );
}

export default SiteButton;
