import React, { useState, useEffect, useRef } from "react";
import Menu from "../components/Menu";
import { Games } from "../constants/data";
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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Swiper
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import SWPImage from "../components/SWPImage";

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const sortedBydowns = Games.sort((a, b) => b.downloads - a.downloads);
  const top5 = sortedBydowns.slice(0, 5);

  function numberFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleCartCount = (id) => {
    const localStorageCount = localStorage.getItem("cartCount")
    if(localStorageCount){
      const cartCountArray = JSON.parse(localStorageCount)

      // increment cart and save to lcst
      if(!cartCountArray.includes(id)){
        cartCountArray.push(id)
        localStorage.setItem("cartCount", JSON.stringify(cartCountArray))
        setCartCount(cartCount+1)
        toast("Item added to cart")
      }
      else{
        toast("Item already in yout cart")
      }

    } else{
      localStorage.setItem("cartCount", JSON.stringify([id]))
      setCartCount(cartCount+1)
    }
  };

  // get count when page loads 
  useEffect(() => {
    const storedCount = localStorage.getItem("cartCount")
    if(storedCount){
      const storedCountLength = JSON.parse(storedCount)
      setCartCount(storedCountLength.length)
    }
  }, [])

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
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col overflow-x-clip text-text-color  `}
    >
      <ToastContainer
        className="select-none"
        position="bottom-right"
        draggable
        autoClose={3000}
      />
      <Menu cartCount={cartCount} />
      {/* <div className="hero absolute top-0 left-0 w-full h-full -z-10 select-none pointer-events-none opacity-[0] "></div> */}

      {/* <div className="mb-2 w-full h-0"></div> */}

      {/* mini Navbar */}
      <MiniNavBar />

      {/* Discover */}
      <div className={`w-full h-fit `}>
        {/* hero */}
        <div className="w-full max-w-[1200px] px-5 mx-auto h-fit  flex items-start justify-start gap-3 ">
          <div className="w-3/4 max-md:w-full min-h-full h-fit  ">
            <Swiper
              spaceBetween={0}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              // centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectCreative]}
              className="h-[450px] w-full flex relative "
            >
              <div
                className="autoplay-progress bg-text-color/10 dark:bg-body-color/40 backdrop-blur rounded-full text-white "
                slot="container-end"
              >
                <svg
                  viewBox="0 0 48 48"
                  className="stroke-white"
                  ref={progressCircle}
                >
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span
                  ref={progressContent}
                  className="font-montserrat text-sm   "
                ></span>
              </div>
              {top5.map((game, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full w-full flex overflow-clip  relative "
                >
                  <SWPImage src={game.banner} />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-body-color/90 to-transparent flex flex-col items-start justify-end p-8 cursor-default ">
                    <h1 className="text-[37px] leading-[40px] font-bold font-montserrat tracking-tight capitalize line-clamp-2 max-w-[80%] text-white">
                      {game.title}
                    </h1>
                    <p className="text-[15px] leading-[20px] font-medium capitalize line-clamp-2 max-w-[70%] text-text-color pt-[6px]">
                      {game.description}
                    </p>
                    <div className="w-full h-fit flex items-center justify-between pt-5">
                      <Link
                        to={`/`}
                        className="bg-text-color/10 hover:bg-text-color/20 text-white font-semibold tracking-wider text-sm  py-[12px] px-12 rounded-sm "
                      >
                        GET
                      </Link>
                      <div className="flex items-center justify-end gap-2 bg-transparen py-3 px-4 rounded-xl">
                        <span className="flex items-center justify-center text-xs">
                          2008
                        </span>
                        <span className="flex items-center justify-center text-xs">
                          &#x2022;
                        </span>
                        <span className="flex items-center justify-center text-xs">
                          <LiaDownloadSolid className="text-base " />{" "}
                          {numberFormat(game.downloads)}
                        </span>
                        <span className="flex items-center justify-center text-xs">
                          &#x2022;
                        </span>
                        <span className="flex items-center justify-center gap-1 text-xs">
                          <FaRegEye className="text-sm" /> 234K
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-1/4 max-md:hidden flex flex-col gap-3 h-[450px] overflow-y-scroll snap-y snap-mandatory pr-3 overscroll-contain ">
            {sortedBydowns.map((game, index) => (
              <div
                key={index}
                className="min-h-[60px] py-3 w-full snap-start flex items-center gap-2 overflow-clip relative cursor-pointer hover:bg-stone-100 dark:hover:bg-container-color/90 "
              >
                <div className=" h-[70px] w-[50px] overflow-clip flex justify-start">
                  <img
                    src={game.poster}
                    className="h-fit min-h-[100%] min-w-[100%] w-[50px] object-cover "
                    alt=""
                  />
                </div>
                <h1 className="line-clamp-2 max-w-[70%]  text-sm text-black dark:text-text-color ">
                  {game.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* For you */}
        <div className="w-full h-fit pt-7">
          <div className="w-full h-fit flex flex-col max-w-[1200px] px-5 mx-auto">
            <h1 className="text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight  text-body-color dark:text-text-color pb-5">
              For You
            </h1>
            <div className="h-fit ">
              <div className="gridRespo ">
                {Games.slice(0,14).map((game, index) => (
                  <div
                    key={index}
                    className="group h-full w-full rounded-lg cursor-pointer mb-2 relative"
                  >
                    <div
                      // to={`/game/${game.id}`}
                      className="transition group-hover:opacity-90 dark:opacity-80 "
                    >
                      <PosterImage src={game.poster} title={game.title} />
                    </div>
                    <p className="font-normal text-[10px] line-clamp-2  text-body-color/90 dark:text-text-color-light max-w-[90%] pt-[10px] uppercase">
                      Base Game
                    </p>
                    <p className="text-[16px] font-light capitalize line-clamp-1  text-black dark:text-text-color">
                      {game.title}
                    </p>
                    <p className="font-normal text-[13px] line-clamp-2  text-black dark:text-white/60 max-w-[90%] pt-[5px] capitalize">
                      free
                    </p>

                    <button
                      onClick={() => handleCartCount(game.id)}
                      title="Add to cart"
                      className={`absolute top-4 z-10 right-2 hover:scale-105 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-body-color/60 backdrop-blur-md p-1 rounded-full`}
                    >
                      <FiPlus className="text-xl text-white " />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Collections */}
        <div className="w-full h-fit pt-7">
          <div className="w-full h-fit flex flex-col max-w-[1100px] px-5 mx-auto">
            <h1 className="text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight  text-body-color dark:text-text-color">
              Our Collections
            </h1>
            <div className="h-fit mt-5 ">
              <div className="gridRespoCollection ">
                {Games.slice(0, 3).map((game, index) => (
                  <div
                    to={`/game/${game.id}`}
                    key={index}
                    className="group h-full w-full rounded-lg mb-2 relative"
                  >
                    <div className=" h-[160px] ">
                      <CollectionImage src={game.banner} title={game.title} />
                    </div>
                    <p className="text-[16px] font-light capitalize line-clamp-1  text-body-color dark:text-text-color pt-3">
                      {game.title}
                    </p>
                    <p className="font-normal text-sm line-clamp-2  text-body-color dark:text-text-color-light py-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam
                    </p>

                    <Link
                      to={`/`}
                      className="font-montserrat font-normal text-sm w-fit hover:underline text-text-color flex items-center justify-between pt-2 "
                    >
                      Discover
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
