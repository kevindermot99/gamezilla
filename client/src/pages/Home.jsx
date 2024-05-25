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

function Home() {
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
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col  text-text-color  `}
    >
      <ToastContainer
        className="select-none"
        position="bottom-left"
        draggable
        autoClose={3000}
      />
      <Menu cartCount={cartCount} updateCount={updateCount} />

      {/* mini Navbar */}
      <MiniNavBar />

      {/* hero */}
      <div className="w-full mx-auto h-fit  flex items-start justify-start gap-2 max-w-[1300px] px-7">
        <div className="w-[75%] max-md:w-full min-h-full h-fit ">
          <Swiper
            spaceBetween={100}
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
              className="autoplay-progress bg-text-color/20 backdrop-blur shadow rounded-full text-white "
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
                className="h-full w-full flex overflow-clip rounded-md relative "
              >
                <SWPImage src={game.banner} />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-body-color/50  dark:from-body-color/90 to-body-color/20  flex flex-col items-start justify-end p-8 cursor-default ">
                  <h1 className="text-[37px] leading-[40px] font-bold font-montserrat tracking-tight capitalize line-clamp-2 max-w-[80%] text-white">
                    {game.title}
                  </h1>
                  <p className="flex items-center justify-start gap-1 mt-2">
                    {game.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium bg-text-color/20 text-white px-3 py-1 rounded-lg capitalize shadow "
                      >
                        {genre}
                      </span>
                    ))}
                  </p>
                  <p className="text-[15px] leading-[20px] font-medium capitalize line-clamp-2 max-w-[70%] text-text-color pt-[6px]">
                    {game.description}
                  </p>
                  <div className="w-full h-fit flex items-center justify-between mt-5">
                    <Link
                      to={`/`}
                      className="bg-text-color/20 hover:bg-text-color/20 text-white font-semibold tracking-wider text-sm  py-[12px] px-12 rounded-md shadow "
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
        <div className="w-[25%] max-md:hidden h-[450px]">
          <div className="h-[23px] flex items-start justify-start">
            <h1 className="px-2 text-sm font-semibold font-DMsans leading-none text-body-color dark:text-text-color capitalize">
              Top 10 most downloaded
            </h1>
          </div>
          <div className=" flex flex-col gap-1 h-[427px] overflow-y-auto snap-y snap-mandatory pr-1 overscroll-contain ">
            {top5.map((game, index) => (
              <div
                key={index}
                className="h-fit w-full py-1 px-2 snap-start flex items-center gap-2 relative cursor-pointer rounded-md hover:bg-stone-100 dark:hover:bg-container-color/90 "
              >
                <div className=" h-[70px] w-[60px] min-w-[60px] overflow-clip flex justify-center rounded-md">
                  <img
                    src={game.poster}
                    className="h-full w-full min-w-fit object-cover object-top bg-text-color-light/10 dark:bg-text-color-light/40 "
                  />
                </div>
                <div>
                  <h1 className="line-clamp-1 mb-1 text-[15px] font-DMsans text-black dark:text-text-color capitalize font-medium ">
                    {game.title}
                  </h1>
                  <p className=" flex flex-nowrap text-black/50 dark:text-white/60 text-[11px] gap-2 ">
                    {game.genres.slice(0, 2).map((gen, index) => (
                      <span
                        className="whitespace-nowrap py-1 px-2 font-DMsans bg-stone-100 dark:bg-gray-600/20 rounded-md  "
                        key={index}
                      >
                        {gen}
                      </span>
                    ))}
                  </p>
                  <p className="font-bold text-left font-DMsans text-[13px] line-clamp-1 my-1 text-text-color-light uppercase">
                    $0.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" h-full w-full relative flex justify-start items-start max-w-[1300px] px-7 mx-auto gap-2 ">
        <div className="flex sticky top-[60px] w-[15%] py-8 pr-2 max-md:hidden">
          <Sidebar />
        </div>
        <section className="w-[85%] h-fit flex flex-col">
          {/* Discover */}
          <div className={`w-full h-fit `}>
            {/* For you */}
            <div className="w-full h-fit pt-7 ">
              <h1 className="text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight flex items-center justify-between mt-3 text-body-color dark:text-text-color pb-3">
                For You
              </h1>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                loop={false}
                className="h-fit w-full flex relative "
                navigation={true}
                modules={[Navigation]}
              >
                {top5.map((game, index) => (
                  <SwiperSlide
                    key={index}
                    className="h-full flex flex-col relative group w-full max-w-[180px]"
                  >
                    <Link className="transition group-hover:opacity-90 dark:opacity-80 w-full">
                      <PosterImage src={game.poster} />
                    </Link>

                    <p className="font-normal font-DMsans text-[12px] line-clamp-2  text-body-color/90 dark:text-text-color-light max-w-[90%] pt-[10px] uppercase">
                      Base Game
                    </p>
                    <p className="text-[16px] uppercase font-DMsans font-medium truncate pr-2 text-black dark:text-text-color">
                      {game.title}
                    </p>
                    <p className="font-semibold font-DMsans text-[14px] line-clamp-2 text-text-color-light max-w-[90%] pt-[2px] capitalize">
                      $0.00
                    </p>
                    <button
                      onClick={() => handleCartCount(game.id)}
                      title="Add to cart"
                      className={`absolute top-4 z-10 right-2 hover:scale-105 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-border-line-color/60 backdrop-blur-md p-1 rounded-full`}
                    >
                      <FiPlus className="text-xl text-white " />
                    </button>
                  </SwiperSlide>
                ))}

                <SwiperButtons />
              </Swiper>
            </div>
            {/* Tending*/}
            <div className="w-full h-fit pt-4 ">
              <h1 className="text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight flex items-center justify-between mt-3 text-body-color dark:text-text-color pb-3">
                Trending
              </h1>
              <Swiper
                spaceBetween={10}
                slidesPerView={"auto"}
                loop={false}
                className="h-fit w-full flex relative "
                navigation={true}
                modules={[Navigation]}
              >
                {top5.map((game, index) => (
                  <SwiperSlide
                    key={index}
                    className="h-full flex flex-col relative group w-full max-w-[180px]"
                  >
                    <Link className="transition group-hover:opacity-90 dark:opacity-80 w-full">
                      <PosterImage src={game.poster} />
                    </Link>

                    <p className="font-normal font-DMsans text-[12px] line-clamp-2  text-body-color/90 dark:text-text-color-light max-w-[90%] pt-[10px] uppercase">
                      Base Game
                    </p>
                    <p className="text-[16px] font-DMsans font-medium uppercase truncate pr-2 text-black dark:text-text-color">
                      {game.title}
                    </p>
                    <p className="font-semibold font-DMsans text-[14px] line-clamp-2 text-text-color-light max-w-[90%] pt-[2px] capitalize">
                      $0.00
                    </p>
                    <button
                      onClick={() => handleCartCount(game.id)}
                      title="Add to cart"
                      className={`absolute top-4 z-10 right-2 hover:scale-105 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-border-line-color/60 backdrop-blur-md p-1 rounded-full`}
                    >
                      <FiPlus className="text-xl text-white " />
                    </button>
                  </SwiperSlide>
                ))}

                <SwiperButtons />
              </Swiper>
            </div>

            {/* Our Collections */}
            <div className="w-full h-fit pt-7">
              <div className="w-full h-fit flex flex-col max-w-[1100px] mx-auto">
                <h1 className="text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight  text-body-color dark:text-text-color">
                  franchises
                </h1>
                <div className="h-fit mt-5 ">
                  <div className="gridRespoCollection ">
                    {Franchise.map((franchise, index) => (
                      <Link
                        to={`/franchise/${franchise}`}
                        key={index}
                        className="group w-full relative mb-5 "
                      >
                        <div className=" h-[130px] flex justify-center items-start overflow-clip rounded-xl transition dark:opacity-80 group-hover:opacity-95  ">
                          <PosterImage src={franchise.url} />
                        </div>
                        <p className="text-[18px] mt-3 font-DMsans font-bold uppercase truncate pr-2 text-center text-black dark:text-text-color">
                          {franchise.name}
                        </p>
                        <p className="font-bold text-center font-DMsans text-[12px] line-clamp-2  text-body-color/90 dark:text-text-color-light uppercase">
                          {franchise.publisher}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
