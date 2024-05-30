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
import { IconTrash } from "@tabler/icons-react";
import { PiGithubLogoLight } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";

function Menu({ cartCount, updateCount }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [username, setUserName] = useState("");
  const [userId, setUserId] = useState("none");
  const [cartbar, setCartbar] = useState(false);
  const [cartItemsArray, setCartItemsArray] = useState([]);
  const [itemData, setItemData] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

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
    const cartItems = JSON.parse(localStorage.getItem("cartCount")) || [];
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
    const cartItems = JSON.parse(localStorage.getItem("cartCount")) || [];
    if (cartItems) {
      setCartItemsArray(cartItems);
    }
  };

  const hideCartBar = () => {
    document.body.style.paddingRight = "0";
    document.body.style.overflowY = "auto";
    setCartbar(false);
  };

  //set cartCountArray to filterd minus item
  const deleteItem = (item) => {
    if (cartItemsArray.includes(item)) {
      const updatedCountArray = cartItemsArray.filter((id) => id !== item);
      if (updatedCountArray) {
        setCartItemsArray(updatedCountArray);
        localStorage.setItem("cartCount", JSON.stringify(updatedCountArray));
      }
      updateCount(updatedCountArray.length);
    }
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [cartItemsArray]);

  const calculateTotalPrice = () => {
    return cartItemsArray.reduce((acc, item) => {
      const game = Games.find((game) => game.id === item);
      return acc + (game ? game.price : 0);
    }, 0);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full -z-10 
      ${cartbar ? "transition duration-300 opacity-100 z-50 " : " opacity-0"}`}
      >
        <div
          onClick={hideCartBar}
          className={`h-full w-full absolute top-0 left-0 right-0 bottom-0 m-auto z-10 bg-black/20 dark:bg-black/70 `}
        ></div>
        <div
          className={`absolute top-0 right-0 bg-white dark:bg-body-color h-full max-h-[100vh] w-[90%] max-w-[350px] z-20 flex flex-col justify-between ${
            cartbar
              ? "transition duration-300 translate-x-[0px] "
              : "translate-x-[100%]"
          }`}
        >
          <div className="w-full h-fit p-[26px] relative flex items-center justify-center shadow">
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
          <div className="h-full w-full overflow-y-auto cursor-default ">
            <div className="h-full w-full ">
              <div className="w-full h-full flex flex-col items-start justify-start p-5 gap-2 text-black/40 dark:text-text-color/40 ">
                {cartItemsArray.length !== 0 ? (
                  <div className="w-full h-fit text-black dark:text-white text-sm flex flex-col gap-1">
                    {cartItemsArray.map((item, index) => (
                      <div
                        key={index}
                        className=" w-full flex items-center bg-stone-100  dark:bg-container-color rounded-md p-2 justify-start gap-2"
                      >
                        <div className="font-bold font-DMsans px-1 ">
                          {index + 1}.
                        </div>
                        <div className="flex gap-3 capitalize w-full h-full">
                          <img
                            src={Games.find((game) => game.id === item).poster}
                            className="h-16 max-w-14 min-w-14 object-cover object-top rounded-md"
                            alt=""
                          />
                          <div className="px-1 w-full h-full flex flex-col justify-between items-start">
                            <Link
                              to={`/`}
                              className=" font-medium line-clamp-2 font-DMsans text-[15px] capitalize max-w-[150px] hover:underline "
                            >
                              {Games.find((game) => game.id === item).title}
                            </Link>
                            <div className="w-full h-fit flex justify-between items-end text-text-color-light ">
                              {/* <p className=" font-semibold ">$0.00</p> */}
                              <p className="font-bold text-left font-DMsans text-[13px] line-clamp-1 my-1  text-text-color-light uppercase">
                                $
                                {Games.find(
                                  (game) => game.id === item
                                ).price.toFixed(2)}
                              </p>
                              <button
                                onClick={() => deleteItem(item)}
                                className="active:scale-75 transition duration-150 cursor-pointer hover:text-black dark:hover:text-white p-1 rounded-md hover:bg-stone-200   hover:dark:bg-gray-400/10  "
                                title="Remove item"
                              >
                                <IconTrash stroke={2} size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="h-full w-full flex items-center justify-center flex-col gap-2">
                    <BsCart className="text-[40px]" />
                    <p className="text-sm font-DMsans ">Cart Empty</p>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="h-fit min-h-fit w-full p-5 ">
            <p className="text-[14px] pb-2 text-right text-black dark:text-white font-semibold font-DMsans ">
              You have {cartCount} items in your cart
            </p>
            <p className="pb-5 text-black dark:text-white flex justify-between items-center font-DMsans font-semibold text-sm">
              <span className=" font-DMsans text-[15px]">Subtotal:</span>
              <span className=" font-DMsans">${totalPrice.toFixed(2)}</span>
            </p>
            <button
              className={` w-full h-[40px] px-4 rounded-md transition text-white bg-main-color text-sm flex items-center justify-center font-bold ${
                cartItemsArray.length === 0
                  ? "cursor-default opacity-85"
                  : "opacity-100 cursor-pointer active:scale-95 "
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <IoBagOutline className="text-lg " />
                <span className="capitalize">proceed to download</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`sticky top-0 z-30 min-h-fit w-full px-[24px] py-9 h-[60px] bg-white dark:bg-container-color text-body-color dark:text-text-color flex items-center gap-3 `}
      >
        <div className="w-full h-fit flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 justify-start">
            <Link
              to="/"
              className="font-bold text-[27px] w-fit min-w-fit tracking-tighter flex items-center justify-center gap-2 "
            >
              {/* <button><IoMdMenu /></button> */}
              <img src={Logo} className="h-10" />
              Gamezilla
            </Link>

            <div className="w-fit min-w-fit h-full flex items-center justify-start gap-4 ">
              <Link
                to={`/Allgames`}
                className={`text-[15px] capitalize hover:text-main-color text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors h-full cursor-pointer py-2 px-1`}
              >
                All games
              </Link>

              <Link
                to={`/`}
                className={`text-[15px] capitalize hover:text-main-color text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1`}
              >
                franchises
              </Link>

              <button
                className={`group text-[15px] h-[60px] capitalize hover:text-main-color text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1 flex items-center gap-1`}
              >
                genres
                <IoChevronDownSharp />
                <div className="h-0 group-hover:h-[350px] w-full opacity-100 group-hover:opacity-100 z-30 bg-white shadow-md dark:bg-container-color absolute top-[65px] left-0 right-0 mx-auto transition-all duration-200 cursor-default overflow-clip  ">
                  <div className="p-5 h-fit w-full max-w-[1200px] mx-auto flex items-start justify-center gap-[5%] ">
                    {Genres.map((genre, index) => (
                      <div
                        to={`/`}
                        key={index}
                        className="flex flex-col items-start justify-start bg-orange"
                      >
                        <h1 className="text-[16px] font-semibold font-DMsans text-body-color dark:text-text-color ">
                          {genre.section}
                        </h1>
                        <div className="flex flex-col items-start gap-3 justify-start mt-3 ">
                          {genre.genres.map((gen, index) => (
                            <Link
                              to={`/`}
                              key={index}
                              className="text-border-line-color/80 font-DMsans dark:text-text-color/50 text-[16px] line-clamp-2 max-w-[160px] flex gap-2 text-left cursor-pointer hover:text-main-color transition  "
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
                className={`text-[15px] capitalize hover:text-main-color text-black dark:text-text-color/80 font-DMsans font-medium tracking-tight transition-colors cursor-pointer py-2 px-1`}
              >
                Support
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5 justify-end">
            <form className=" w-full max-w-[300px]">
              <input
                type="search"
                name="search"
                className="h-[39px] font-DMsans w-full bg-stone-100 dark:bg-gray-400/10  text-black dark:text-white placeholder:text-text-color-light  px-6 font-medium text-sm rounded-full  "
                autoComplete="off"
                placeholder="Search Game"
              />
            </form>

            <div className={`h-full w-fit relative flex items-center gap-4 `}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
