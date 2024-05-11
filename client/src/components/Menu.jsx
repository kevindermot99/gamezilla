import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { TbSearch } from "react-icons/tb";
import { GoGitBranch } from "react-icons/go";
import Logo from "../assets/logo.png";
import Badge from "./Badge";
import { TbLogout2 } from "react-icons/tb";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineDownloading } from "react-icons/md";
import { HiCollection } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import ButtonLink from "./ButtonLink";
import { IoChevronDownSharp } from "react-icons/io5";
import { Genres } from "../constants/data";
import { GoHeart } from "react-icons/go";

function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [username, setUserName] = useState("");
  const [userId, setUserId] = useState("none");

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem("gamezillaUserId");
    if (userId) {
      setUserId(userId);
    } else {
      setUserId("none");
    }
  }, []);

  const changeBg = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
  }, []);

  window.addEventListener("load", () => {
    setScrollPosition(window.scrollY);
  });

  useEffect(() => {
    if (userId !== "") {
      const res = localStorage.getItem("gamezillaUsername");
      setUserName(res);
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("gamezillaUsername");
    localStorage.removeItem("gamezillaUserId");

    window.location.reload();
  };

  return (
    <div
      className={`sticky top-0 z-30 min-h-fit w-full px-[24px] py-0 h-[60px] bg-white shadow dark:bg-container-color text-body-color dark:text-text-color flex items-center gap-3 ${
        scrollPosition > 60 ? "  " : "  "
      } `}
    >
      <div className="w-full h-fit flex items-center justify-between">
        <div className="w-fit min-w-fit h-full flex items-center justify-start gap-4 ">
          <Link
            to="/"
            className="font-bold text-2xl tracking-tighter flex items-center justify-center mr-3 gap-1 "
          >
            <img src={Logo} className="h-11" />
            Gamezilla
          </Link>

          <Link
            to={`/`}
            className={`text-[15px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors h-full cursor-pointer py-2 px-1`}
          >
            All games
          </Link>

          <Link
            to={`/`}
            className={`text-[15px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1`}
          >
            collections
          </Link>

          <button
            className={`group text-[15px] h-[60px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1 flex items-center gap-1`}
          >
            genres
            <IoChevronDownSharp />
            {/* ganres dropdown */}
            <div className="h-0 group-hover:h-[350px]  w-full opacity-100 group-hover:opacity-100 z-30 bg-white shadow dark:bg-container-color absolute top-[60px] left-0 right-0 mx-auto transition-all duration-200 cursor-default overflow-clip  ">
              <div className="p-5 h-fit w-full max-w-[1200px] mx-auto flex items-start justify-center gap-[5%] ">
                {Genres.map((genre, index) => (
                  <div
                    to={`/`}
                    key={index}
                    className="flex flex-col items-start justify-start bg-orange"
                  >
                    <h1 className="text-sm text-black dark:text-white">
                      {genre.section}
                    </h1>
                    <div className="flex flex-col items-start gap-3 justify-start mt-3 ">
                      {genre.genres.map((gen, index) => (
                        <Link
                          to={`/`}
                          key={index}
                          className="text-border-line-color/80   dark:text-text-color/50 text-[1em] line-clamp-2 max-w-[160px] flex gap-2 text-left cursor-pointer hover:text-black dark:hover:text-white transition  "
                        >
                          <span>&#x2022;</span>
                          {gen}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </button>

          <Link
            to={`/`}
            className={`text-[15px] capitalize text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1`}
          >
            Support
          </Link>
        </div>

        <div className={`h-full w-fit relative flex items-center gap-4`}>
          <Link
            to={`/login`}
            className={` relative group flex px-1 gap-1  h-[35px] items-center`}
          >
            <GoHeart className="text-2xl dark:text-text-color text-black" />
            <Badge count={0} />
            <p className="absolute top-[60px] group-hover:top-[65px] transition-all duration-150 z-40 left-[-50px] right-[-50px] mx-auto w-fit px-3 flex items-center bg-body-color dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm py-1 font-montserrat font-medium opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 ">
              Wishlist
            </p>
          </Link>

          <Link
            to={`/login`}
            className={` relative group flex px-1 gap-1 h-[35px] items-center `}
          >
            <BsCart className="text-2xl dark:text-text-color text-black" />
            <Badge count={20} />
            <p className="absolute top-[60px] group-hover:top-[65px] transition-all duration-150 z-40 left-[-50px] right-[-50px] mx-auto w-fit px-3 flex items-center bg-body-color dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm py-1 font-montserrat font-medium opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 ">
              Cart
            </p>
          </Link>

          {userId === "none" ? (
            <Link to={`/login`} className={` relative group px-1 `}>
              <div
                className={`flex items-center justify-center gap-3 h-[32px] aspect-square rounded-full min-w-fit bg-stone-300 text-black dark:text-text-color dark:bg-stone-500/20  `}
              >
                <AiOutlineUser className="text-[18px]" />
              </div>
              <p className="absolute top-[60px] group-hover:top-[65px] transition-all duration-150 z-40 left-[-50px] right-[-50px] mx-auto w-fit px-3 flex items-center bg-body-color dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm py-1 font-montserrat font-medium opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 ">
                Profile
              </p>
            </Link>
          ) : (
            <Link to={`/profile/${userId}`} className={` relative group px-1 `}>
              <div
                className={`flex items-center justify-center gap-3 h-[32px] aspect-square rounded-full min-w-fit bg-transparent text-black dark:text-white ring-1 ring-black dark:ring-white   font-Inter font-bold  text-[18px] `}
              >
                {username.charAt(0)}
              </div>
              <p className="absolute top-[60px] group-hover:top-[65px] transition-all duration-150 z-40 left-[-50px] right-[-50px] mx-auto w-fit px-3 flex items-center bg-body-color dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm py-1 font-montserrat font-medium opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 ">
                {username}
              </p>
            </Link>
          )}

          <div className="w-fit h-[25px] border-l-[2px] border-l-stone-500/60"></div>
          <a
            href="https://github.com/kevindermot99/gamezilla"
            target="_blank"
            className="text-sm font-semibold flex items-center tracking-wide h-fit transition hover:text-main-color"
            title={`Source Code`}
          >
            SC <GoGitBranch className="ml-[5px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
