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
import { MdClose } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { Games } from "../constants/data";
import { IconTrash } from '@tabler/icons-react';

function Menu({ cartCount }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [username, setUserName] = useState("");
  const [userId, setUserId] = useState("none");
  const [cartbar, setCartbar] = useState(false);
  const [cartItemsArray, setCartItemsArray] = useState("");
  const [itemData, setItemData] = useState("");

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem("gamezillaUserId");
    if (userId) {
      setUserId(userId);
    } else {
      setUserId("none");
    }
  }, []);

  // getting the username
  useEffect(() => {
    if (userId !== "") {
      const res = localStorage.getItem("gamezillaUsername");
      setUserName(res);
    }
  }, [userId]);

  // get cart items
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartCount"));

    if (cartItems) {
      setCartItemsArray(cartItems);
    }
  }, []);

  const showCartBar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflowY = "hidden";
    setCartbar(true);
  };

  const hideCartBar = () => {
    document.body.style.paddingRight = "0";
    document.body.style.overflowY = "auto";
    setCartbar(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full -z-10 
      ${cartbar ? "transition duration-300 opacity-100 z-50 " : "opacity-0"}`}
      >
        <div
          onClick={hideCartBar}
          className={`h-full w-full absolute top-0 left-0 right-0 bottom-0 m-auto z-10 bg-black/20 dark:bg-black/70 `}
        ></div>
        <div
          className={`absolute top-0 right-0 bg-white dark:bg-body-color h-full max-h-[100vh] max-sm:h-svh w-[90%] max-w-[350px] z-20 flex flex-col justify-between ${
            cartbar
              ? "transition duration-300 translate-x-[0px] "
              : "translate-x-[100px]"
          }`}
        >
          <div className="w-full h-fit p-5 relative flex items-center justify-center shadow">
            <button
              onClick={hideCartBar}
              className="text-black dark:text-white  bg-stone-200 dark:bg-gray-300/10 p-2 aspect-square rounded-full active:scale-75  transition duration-100 absolute top-0 bottom-0 left-5 h-fit m-auto"
            >
              <MdClose />
            </button>
            <p className="font-medium text-sm text-black dark:text-white ">
              Your Cart ({cartCount})
            </p>
          </div>
          <div className="h-full w-full overflow-y-auto ">
            <div className="h-full w-full ">
              <div className="w-full h-full flex flex-col items-start justify-start p-5 gap-2 text-black/40 dark:text-text-color/40 ">
                {cartItemsArray !== "" ? (
                  <div className="w-full h-fit text-black dark:text-white text-sm flex flex-col gap-2">
                    {cartItemsArray.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex items-center bg-stone-100  dark:bg-container-color rounded-md p-2 justify-start gap-2"
                      >
                        <div className="font-bold ">{index + 1}.</div>
                        <div className="flex gap-3 capitalize w-full h-full">
                          <img
                            src={Games.find((game) => game.id === item).poster}
                            className="h-16 max-w-12 min-w-12 object-cover"
                            alt=""
                          />
                          <div className="px-1 w-full h-full flex flex-col justify-between items-start">
                            <p className=" font-semibold line-clamp-2  max-w-[150px] ">
                              {Games.find((game) => game.id === item).title}
                            </p>
                            <div className="w-full h-fit flex justify-between items-start text-text-color-light ">
                              <p className=" font-semibold ">$0.00</p>
                              <button><IconTrash stroke={2} size={20} /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="h-full w-full flex items-center justify-center flex-col gap-2">
                    <BsCart className="text-[40px]" />
                    <p className="text-sm">Cart Empty</p>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="h-fit min-h-fit w-full p-5 ">
            <button
              className={` w-full h-[40px] px-4 transition bg-black dark:bg-white text-white dark:text-black text-sm flex items-center justify-center font-medium cursor-not-allowed `}
            >
              <div className="flex items-center justify-center gap-1">
                <IoBagOutline className="text-lg " />
                <span className="capitalize">proceed to checkout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`sticky top-0 z-30 min-h-fit w-full px-[24px] py-0 h-[60px] bg-white shadow dark:bg-container-color text-body-color dark:text-text-color flex items-center gap-3 `}
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

            <button
              onClick={showCartBar}
              className={` relative group flex px-1 gap-1 h-[35px] items-center `}
            >
              <BsCart className="text-2xl dark:text-text-color text-black" />
              <Badge count={cartCount} />
              <p className="absolute top-[60px] group-hover:top-[65px] transition-all duration-150 z-40 left-[-50px] right-[-50px] mx-auto w-fit px-3 flex items-center bg-body-color dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm py-1 font-montserrat font-medium opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 ">
                Cart
              </p>
            </button>

            {userId === "none" ? (
              <Link to={`/login`} className={` relative group px-1 `}>
                <div
                  className={`flex items-center justify-center gap-3 h-[32px] aspect-square rounded-full min-w-fit bg-transparent text-black dark:text-text-color ring-1 ring-black dark:ring-text-color font-Inter font-bold  text-[18px]  `}
                >
                  <AiOutlineUser className="text-[18px]" />
                </div>
                <p className="absolute top-[60px] group-hover:top-[65px] transition-all duration-150 z-40 left-[-50px] right-[-50px] mx-auto w-fit px-3 flex items-center bg-body-color dark:bg-white backdrop-blur-sm text-white dark:text-black text-sm py-1 font-montserrat font-medium opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 ">
                  Profile
                </p>
              </Link>
            ) : (
              <Link
                to={`/profile/${userId}`}
                className={` relative group px-1 `}
              >
                <div
                  className={`flex items-center justify-center gap-3 h-[32px] aspect-square rounded-full min-w-fit bg-transparent text-black dark:text-text-color ring-1 ring-black dark:ring-text-color font-Inter font-bold  text-[18px] `}
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
    </>
  );
}

export default Menu;
