import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import { Games } from "../constants/data";
import { HiDownload } from "react-icons/hi";
import { GrStorage } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";
import VideoJS from "../components/VideoJS";
import { MdOutlineAddTask } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import PosterImage from "../components/PosterImage";
import { BsCart } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

function Game() {
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(0);
  const playerRef = React.useRef(null);

  // get game details
  const OpendGame = Games.find((game) => game.id === id);

  const handleCartCount = (id) => {
    const localStorageCount = localStorage.getItem("cartCount");
    if (localStorageCount) {
      const cartCountArray = JSON.parse(localStorageCount) || [];

      // increment cart and save to lcst
      if (!cartCountArray.includes(id)) {
        toast.success(" Item added to cart");
        cartCountArray.push(id);
        localStorage.setItem("cartCount", JSON.stringify(cartCountArray));
        setCartCount(cartCount + 1);
      } else {
        toast.warn("Item already in yout cart");
      }
    } else {
      localStorage.setItem("cartCount", JSON.stringify([id]));
      setCartCount(cartCount + 1);
    }
  };

  // get count when page loads
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount");
    if (storedCount) {
      const storedCountLength = JSON.parse(localStorage.getItem("cartCount"));
      setCartCount(storedCountLength.length);
    }
  }, []);

  // update Count
  const updateCount = (count) => {
    setCartCount(count);
  };

  function numberFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: OpendGame.trailer,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  // resetting the scroll position
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={` relative h-full flex flex-col  text-text-color  `}>
      <ToastContainer
        className="select-none"
        position="bottom-left"
        draggable
        autoClose={3000}
      />
      <Menu cartCount={cartCount} updateCount={updateCount} />

      <div className="h-full w-full relative  max-md:grid-cols-1 max-w-[1200px] px-5 mx-auto gap-2">
        {/* <div className="flex sticky top-[75px] w-full h-[90vh] pr-2 max-md:hidden">
          <Sidebar />
        </div> */}
        <section className="w-full h-full flex p-5 text-body-color dark:text-text-color/80 relative gap-10 ">
          
          <div className="w-full flex flex-col mb-10 ">
            <h1 className="font-light text-[45px] font-DMsans  ">
              {OpendGame.title}
            </h1>
            <div className="flex gap-5 mt-2">
              <p className="font-DMsans font-bold text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
                <span className="bg-stone-200 dark:bg-border-line-color p-1 rounded-md ">
                  <MdOutlineAddTask />
                </span>
                <span className="text-body-color/70 dark:text-text-color-light font-medium text-md ">
                  Uploaded:
                </span>
                12 Jun 2024
              </p>
              <p className="font-DMsans font-bold text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
                <span className="bg-stone-200 dark:bg-border-line-color p-1 rounded-md ">
                  <FaRegUser />
                </span>
                <span className="text-body-color/70 dark:text-text-color-light font-medium text-md ">
                  by:
                </span>
                Admin
              </p>
            </div>
            <button className="px-4 py-3 w-fit border-b-[2px] border-text-color-light font-DMsans font-medium mt-3 text-body-color dark:text-text-color/80 ">
              Overview
            </button>
            <div className="aspect-video bg-stone-200 dark:bg-container-color overflow-clip rounded-xl shadow-lg  mt-8 ">
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>

            <div className="font-DMsans font-medium mt-10 text-[22px] text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
              About: {OpendGame.title}
            </div>
            <div className=" font-light text-base font-DMsans opacity-80 ">
              {OpendGame.description}
            </div>

            <div className="font-DMsans font-medium mt-5 text-[22px] text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
              Genres:
            </div>
            <div className="flex gap-2 items-center justify-start   ">
              {OpendGame.genres.map((genre, index) => (
                <div
                  key={index}
                  className=" text-body-color dark:text-text-color/80 font-light text-base font-DMsans opacity-80"
                >
                  {genre},
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 mt-10">
              <p className="font-DMsans font-bold text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
                <span className="bg-stone-200 dark:bg-border-line-color p-1 rounded-md ">
                  <HiDownload />
                </span>
                <span className="text-body-color/70 dark:text-text-color-light font-medium text-md ">
                  Downloads:
                </span>
                {numberFormat(OpendGame.downloads)}
              </p>
              <p className="font-DMsans font-bold text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
                <span className="bg-stone-200 dark:bg-border-line-color p-1 rounded-md ">
                  <GrStorage />
                </span>
                <span className="text-body-color/70 dark:text-text-color-light font-medium text-md ">
                  Size:
                </span>
                {OpendGame.size}
              </p>
              <p className="font-DMsans font-bold text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
                <span className="bg-stone-200 dark:bg-border-line-color p-1 rounded-md ">
                  <FaRegFileLines />
                </span>
                <span className="text-body-color/70 dark:text-text-color-light font-medium text-md ">
                  Download by:
                </span>
                {OpendGame.downloadBy}
              </p>
            </div>

            <div className="font-DMsans font-medium mt-5 text-[22px] text-body-color dark:text-text-color/80 flex items-center justify-start gap-2">
              OS:
            </div>
            <div className="flex gap-2 items-center justify-start   ">
              {OpendGame.os.map((os, index) => (
                <div
                  key={index}
                  className=" text-body-color dark:text-text-color/80 font-light text-base font-DMsans opacity-80"
                >
                  {os},
                </div>
              ))}
            </div>
          </div>
          <div className="w-full min-w-[330px] mt-[15px] max-w-fit h-fit flex items-center gap-3 flex-col justify-start py-12 px-8 sticky top-[110px] rounded-2xl overflow-hidden ">
            {/* <img src={OpendGame.poster} className="-z-10 absolute top-0 left-0 right-0 blur-md opacity-5 dark:opacity-10 object-cover object-top h-full w-full" /> */}
            <div className="transition pointer-events-none select-none group-hover:opacity-90 dark:opacity-80 w-full max-w-[180px] shadow-xl ">
              <PosterImage src={OpendGame.poster} />
            </div>
            <span className="text-body-color dark:text-text-color font-normal text-lg line-clamp-2 font-DMsans py-1 ">
              {OpendGame.title}
            </span>
            <button
              className={`w-full mx-auto h-[40px] px-4 rounded-md transition text-white bg-main-color text-sm flex items-center justify-center font-bold active:scale-95  `}
            >
              <div className="flex items-center justify-center gap-1">
                <HiDownload className="text-lg " />
                <span className="capitalize font-DMsans">Download</span>
              </div>
            </button>
            <button
              className={`w-full mx-auto h-[40px] px-4 rounded-md transition bg-gray-300/80 dark:bg-gray-400/10 text-body-color dark:text-white ring-0 ring-body-color dark:ring-text-color-light/40 text-sm flex items-center justify-center font-bold active:scale-95  `}
            >
              <div className="flex items-center justify-center gap-1">
                <BsCart className="text-lg " />
                <span className="capitalize font-DMsans">Add to cart</span>
              </div>
            </button>

            <button
              className={`w-full mx-auto h-[40px] px-4 rounded-md transition bg-gray-300/80 dark:bg-gray-400/10 text-body-color dark:text-white ring-0 ring-body-color dark:ring-text-color-light/40 text-sm flex items-center justify-center font-bold active:scale-95  `}
            >
              <div className="flex items-center justify-center gap-1">
                <GoHeart className="text-lg " />
                <span className="capitalize font-DMsans">Add to Wishlist</span>
              </div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Game;
