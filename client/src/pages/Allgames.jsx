import React, { useState, useEffect, useRef } from "react";
import Menu from "../components/Menu";
import { Franchise, Games } from "../constants/data";
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { Link, useLocation, useParams } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import Sidebar from "../components/Sidebar";
import { FiPlus } from "react-icons/fi";
import Footer from "../components/Footer";
import PosterImage from "../components/PosterImage";
import CollectionImage from "../components/CollectionImage";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa6";
import MiniNavBar from "../components/MiniNavBar";
import { HiMiniRectangleStack } from "react-icons/hi2";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Swiper
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import SWPImage from "../components/SWPImage";
import SwiperButtons from "../components/SwiperButtons";

function Allgames() {
  const [cartCount, setCartCount] = useState(0);
  const sortedBydowns = Games.sort((a, b) => b.downloads - a.downloads);
  const top5 = sortedBydowns.slice(0, 10);

  function numberFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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

  // // resetting the scroll position
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}`;
  };

  return (
    <div className={` relative h-full flex flex-col  text-text-color  `}>
      <ToastContainer
        className="select-none"
        position="bottom-left"
        draggable
        autoClose={3000}
      />
      <Menu cartCount={cartCount} updateCount={updateCount} />

      <div className=" h-full w-full relative grid grid-cols-5 max-md:grid-cols-1 max-w-[1300px] px-5 mx-auto gap-2 ">
        <div className="flex sticky top-[75px] w-full h-[90vh] pr-2 max-md:hidden">
          <Sidebar />
        </div>
        <section className="w-full col-span-4 h-fit flex flex-col">
          <div className={`w-full h-fit `}>
            {/* Games */}
            <div className="w-full h-fit pt-3 ">
              <div className=" font-DMsans w-full min-h-[180px] flex items-center justify-center flex-col bg-stone-100 dark:bg-container-color rounded-3xl  ">
                <p className="font-bold text-[30px] text-body-color dark:text-text-color-light tracking-tighter uppercase">
                # All Games
                </p>

              <p className="font-medium font-DMsans text-[15px] flex items-center justify-between line-clamp-1  text-body-color/90 dark:text-text-color-light capitalize ">
                We Currently have {Games.length} Games in Store
              </p>
              </div>
              <div className="gridRespo pt-3">
                {Games.map((game, index) => (
                  <div
                    key={index}
                    className=" h-full flex flex-col relative group w-full"
                  >
                    <Link
                      to={`/game/${game.id}`}
                      className="transition group-hover:opacity-90 dark:opacity-80 w-full"
                    >
                      <PosterImage src={game.poster} />
                    </Link>

                    <p className="font-normal font-DMsans text-[13px] flex items-center justify-between line-clamp-1  text-body-color/90 dark:text-text-color-light pt-[10px] uppercase">
                      {game.downloadBy}
                      <span className="pr-1">${game.price}</span>
                    </p>
                    <p className="text-[16px] uppercase font-DMsans font-medium truncate pr-2 text-black dark:text-text-color">
                      {game.title}
                    </p>
                    <p className="font-normal font-DMsans text-[13px] line-clamp-2 text-text-color-light pt-[2px] capitalize flex items-center justify-start gap-2 ">
                      <span className="pr-1">{game.size}</span>
                      <span className="flex items-center justify-center text-md">
                        &#x2022;
                      </span>
                      <span className="flex items-center">
                        <LiaDownloadSolid className="text-[14px]  " />
                        {numberFormat(game.downloads)}
                      </span>
                    </p>
                    <button
                      onClick={() => handleCartCount(game.id)}
                      title="Add to cart"
                      className={`absolute top-4 z-10 right-2 hover:scale-105 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-border-line-color/60 backdrop-blur-md p-1 rounded-full`}
                    >
                      <FiPlus className="text-xl   text-white " />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Allgames;
