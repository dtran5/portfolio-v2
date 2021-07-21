import React, { useContext } from "react";
import Navbar from "./Navbar";
import { NavContext } from "../../context/NavContext";
import SidebarNav from "./SidebarNav";

function Layout(props) {
  const { open, setOpen } = useContext(NavContext);

  return (
    <>
      <div className="flex flex-col relative">
        <div className="z-10">
          <Navbar />
        </div>
        <div className="hidden sm:inline-block fixed bottom-0 left-5  z-10">
          <SidebarNav />
        </div>
        <main onClick={() => setOpen(false)} className="-z-10">
          {props.children}
        </main>
      </div>
    </>
  );
}

export default Layout;
