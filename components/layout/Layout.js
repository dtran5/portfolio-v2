import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <>
      <div className="flex flex-col">
        <div className="z-10">
          <Navbar />
        </div>

        <main className="-z-10">{props.children}</main>
      </div>
    </>
  );
}

export default Layout;
