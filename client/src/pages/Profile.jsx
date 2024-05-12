import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import MiniNavBar from "../components/MiniNavBar";
import Footer from "../components/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { TbLoader2 } from "react-icons/tb";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { VscHistory } from "react-icons/vsc";

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
      className={` relative h-fit flex flex-col gap-3 overflow-x-clip text-text-color  `}
    >
      <Menu />

      <div className=" w-full h-full flex flex-col justify-center items-center p-5 gap-0 max-w-[1100px] mx-auto">
        <p className="font-bold text-black dark:text-text-color text-[20px] capitalize truncate max-w-[90%] leading-[28px] ">
          My profile
        </p>
        <div className="w-full h-fit flex flex-col items-center justify-start mb-5">
          <div className="h-[100px] w-fit p-5 aspect-square rounded-full ring-2 ring-black dark:ring-text-color  text-black dark:text-text-color flex justify-center items-center text-[50px] font-bold font-montserrat mb-3 ">
            {userName.charAt(0)}
          </div>
          <p className="font-bold text-black dark:text-text-color text-[25px] truncate max-w-[90%] leading-[28px] ">
            {userName}
          </p>
          <p className="font-medium text-black/60 dark:text-text-color-light text-base truncate max-w-[90%]">
            mbonimpayekevin@gmail.com
          </p>
          <div className="flex items-center justify-between gap-3 text-black dark:text-text-color w-fit mt-3">
            <span className="w-fit min-w-[170px] flex flex-col justify-center items-center py-3 px-10 transition hover:bg-stone-100 dark:hover:bg-gray-300/10 cursor-pointer   ">
              <h1 className="font-extrabold text-[22px] leading-[25px] truncate max-w-[90%]">
                33
              </h1>
              <p className="capitalize font-medium text-sm  ">
                Games wishlisted
              </p>
            </span>
            <span className="w-fit min-w-[170px] flex flex-col justify-center items-center py-3 px-10 transition hover:bg-stone-100 dark:hover:bg-gray-300/10 cursor-pointer   ">
              <h1 className="font-extrabold text-[22px] leading-[25px] truncate max-w-[90%]">
                30.3K
              </h1>
              <p className="capitalize font-medium text-sm  ">
                Games Purchased
              </p>
            </span>
          </div>
          <div className="w-full flex items-center justify-center gap-3">
            <button
              className={` w-full max-w-[200px] h-[40px] px-4 transition bg-stone-100 dark:bg-container-color text-black dark:text-white text-sm flex items-center justify-center font-medium mt-4`}
            >
              Settings
            </button>
            <button
              onClick={handeLogout}
              className={` w-full max-w-[200px] h-[40px] px-4 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium mt-4 ${
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
        </div>
        <div className="w-full h-fit flex flex-col p-5">
          <p className="font-bold text-black dark:text-text-color text-[20px] h-fit leading-[28px] capitalize ">
            wishlist <span className="text-base font-normal ">(0)</span>
          </p>
          <div className="flex flex-col justify-center items-center bg-stone-100 dark:bg-container-color w-full h-full min-h-[300px] mt-5">
            <div className="flex flex-col items-center justify-center gap-2 text-black/40 dark:text-text-color/40 ">
              <IoHeartDislikeOutline className="text-[40px]" />
              <p className="text-sm">No items in your wishlist</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col p-5">
          <p className="font-bold text-black dark:text-text-color text-[20px] h-fit leading-[28px] capitalize ">
            Purchase history <span className="text-base font-normal ">(0)</span>
          </p>
          <div className="flex flex-col justify-center items-center bg-stone-100 dark:bg-container-color w-full h-full min-h-[300px] mt-5">
            <div className="flex flex-col items-center justify-center gap-2 text-black/40 dark:text-text-color/40 ">
              <VscHistory className="text-[40px]" />
              <p className="text-sm">You haven't purchased any item yet</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : null;
}

export default Profile;
