import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import MiniNavBar from "../components/MiniNavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Browse() {
  // resetting the scroll position
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col overflow-x-clip text-text-color  `}
    >
      <Menu />

      {/* mini Navbar */}
      <MiniNavBar />

      {/* Discover */}
      <div className="h-[500px] w-full">browse</div>

      <Footer />
    </div>
  );
}

export default Browse;
