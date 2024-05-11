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

      <div>
        
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Profile;
