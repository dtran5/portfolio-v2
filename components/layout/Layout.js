import React, { useContext } from "react";
import Navbar from "./Navbar";
import { NavContext } from "../../context/NavContext";

function Layout(props) {
  const { open, setOpen } = useContext(NavContext);

  return (
    <>
      <div className="flex flex-col">
        <div className="z-10">
          <Navbar />
        </div>

        <main onClick={() => setOpen(false)} className="-z-10">
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Layout;
