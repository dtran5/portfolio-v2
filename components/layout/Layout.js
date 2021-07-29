import React, { useContext } from "react";
import Navbar from "./Navbar";
import { NavContext } from "../../context/NavContext";
import SidebarNav from "./SidebarNav";
import MobileFooterNav from "./MobileFooterNav";
import EmailCapture from "./EmailCapture";

function Layout(props) {
  const { open, setOpen } = useContext(NavContext);

  return (
    <>
      <div className="flex flex-col relative">
        <div className="z-10">
          <Navbar />
        </div>
        <div className="hidden lg:inline-block fixed bottom-0 left-5  z-10">
          <SidebarNav />
        </div>
        <main onClick={() => setOpen(false)} className="-z-10">
          {props.children}
        </main>

        <div className=" lg:hidden">
          <MobileFooterNav />
        </div>
      </div>
    </>
  );
}

export default Layout;
