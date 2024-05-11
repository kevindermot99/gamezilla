import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import MiniNavBar from "../components/MiniNavBar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Profile({ userId }) {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col gap-3 overflow-x-clip text-text-color  `}
    >
      <Menu />

      <div className=" w-full h-full flex justify-center items-start p-5 gap-5 max-w-[1100px] mx-auto">
        <div className="w-1/3 h-fit min-h-[300px] bg-stone-100 dark:bg-container-color sticky top-20"></div>
        <div className="w-2/3 h-fit min-h-[900px] bg-stone-100 dark:bg-container-color"></div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Profile;
