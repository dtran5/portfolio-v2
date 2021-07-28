import React from "react";

function SiteButton({ text, children, onClick, classes }) {
  return (
    <button onClick={onClick} className={classes}>
      <div className="mr-2">{children}</div>

      {text}
    </button>
  );
}

export default SiteButton;
