import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import MiniNavBar from "../components/MiniNavBar";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbLoader2 } from "react-icons/tb";

function Profile({ userId, userName }) {
  const [authing, setAuthing] = useState(false);
  const navigate = useNavigate();

  const handeLogout = () => {
    setAuthing(true);
    setInterval(() => {
      localStorage.clear();
      window.location.reload();
      setAuthing(false);
    }, 500);
  };

  // checking logged in user
  const loggedInUser = localStorage.getItem("gamezillaUserId");
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/", { replace: true });
    }
  }, [loggedInUser]);
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return loggedInUser !== null ? (
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col gap-3 overflow-x-clip text-text-color  `}
    >
      <Menu />

      <div className=" w-full h-full flex justify-center items-start p-5 gap-5 max-w-[1100px] mx-auto">
        <div className="w-1/3 h-fit bg-stone-100 dark:bg-container-color sticky top-20 flex flex-col items-center justify-start p-6">
          <div className="h-[100px] w-fit p-5 aspect-square rounded-full ring-2 ring-black dark:ring-text-color  text-black dark:text-text-color flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 ">
            {userName.charAt(0)}
          </div>
          <p className="font-bold text-black dark:text-text-color text-[25px] truncate max-w-[90%] leading-[28px] ">
            {userName}
          </p>
          <p className="font-medium text-black/60 dark:text-text-color-light text-base truncate max-w-[90%]">
            mbonimpayekevin@gmail.com
          </p>
          <div className="flex items-center justify-between gap-2 text-black dark:text-text-color w-full mt-3">
            <span className="w-1/2 flex flex-col justify-center items-center p-3 transition hover:bg-stone-200 dark:hover:bg-gray-300/10 cursor-pointer   ">
              <h1 className="font-extrabold text-[22px] leading-[20px] truncate max-w-[90%]">
                3
              </h1>
              <p className="capitalize font-medium text-sm  ">wishlist</p>
            </span>
            <span className="w-1/2 flex flex-col justify-center items-center p-3 transition hover:bg-stone-200 dark:hover:bg-gray-300/10 cursor-pointer   ">
              <h1 className="font-extrabold text-[22px] leading-[20px] truncate max-w-[90%]">
                32
              </h1>
              <p className="capitalize font-medium text-sm  ">My Downloads</p>
            </span>
          </div>
          <button
            onClick={handeLogout}
            className={` w-full h-[40px] px-4 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium mt-4 ${
              authing && "pointer-events-none "
            }`}
          >
            {authing ? (
              <div className="flex items-center justify-center gap-1">
                <TbLoader2 className="animate-spinLoader text-[23px] " />
                <span className="capitalize ">logging out</span>
              </div>
            ) : (
              "Logout"
            )}
          </button>
        </div>
        <div className="w-2/3 h-fit min-h-[900px] bg-stone-100 dark:bg-container-color"></div>
      </div>

      {/* <Footer /> */}
    </div>
  ) : null;
}

export default Profile;
