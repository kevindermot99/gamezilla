import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import MiniNavBar from "../components/MiniNavBar";
import Footer from "../components/Footer";

function Browse() {
  const [userId, setUserId] = useState("");

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem("gamezillaUserId");
    if (userId) {
      setUserId(userId);
    } else {
      setUserId("none");
    }
  }, []);

  return (
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col overflow-x-clip text-text-color  `}
    >
      <Menu userId={userId} />

      <div className="mb-2 w-full h-0"></div>

      {/* mini Navbar */}
      <MiniNavBar />

      {/* Discover */}
      <div className="h-[500px] w-full">
        browse
      </div>

      <Footer />
    </div>
  )
}

export default Browse;
