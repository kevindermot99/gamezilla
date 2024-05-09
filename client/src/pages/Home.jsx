import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Games } from "../constants/data";
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { BrowserRouter, Link, useParams } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import Sidebar from "../components/Sidebar";
import { BsCart } from "react-icons/bs";
import ButtonLink from "../components/ButtonLink";
import ButtonClick from "../components/ButtonClick";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { GoGift } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { HiMiniFire } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi2";
import { LuExternalLink } from "react-icons/lu";
import { TbDoorEnter } from "react-icons/tb";
import Footer from "../components/Footer";
import Logo from "../assets/logo.png";
import SquareImage from "../components/SquareImage";
import { FaDownload } from "react-icons/fa";
import PosterImage from "../components/PosterImage";
import VideoSample from "../assets/Cyberpunk 2077.mp4";
import { TbVolume } from "react-icons/tb";
import { TbVolume3 } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
import CollectionImage from "../components/CollectionImage";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa6";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MiniNavBar from "../components/MiniNavBar";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [modal, setModal] = useState(false);
  const [OpenedModalId, setOpendModalId] = useState("");
  const [muted, setMuted] = useState(true);

  // checking logged in user
  useEffect(() => {
    const userId = localStorage.getItem("gamezillaUserId");
    if (userId) {
      setUserId(userId);
    } else {
      setUserId("none");
    }
  }, []);

  const sortedBydowns = Games.sort((a, b) => b.downloads - a.downloads);
  const top5 = sortedBydowns.slice(0, 5);

  const sortedGames = Games.sort(() => Math.random() - 0.5);
  // const swiper = new Swiper('.swiper', {
  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination, Autoplay, FreeMode],
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: false,
  //   slidesPerView: 2.3,
  //   loop: true,
  //   effect: "coverflow",
  //   spaceBetween: 10,
  //   coverflowEffect: {
  //     rotate: 0,
  //     stretch: 0,
  //     depth: 0,
  //     modifier: 1,
  //     slideShadows: false,
  //   },
  //   autoplay: {
  //     delay: 1300,
  //     pauseOnMouseEnter: true
  //   }

  // })

  // loadedr

  function numberFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handlemuted = () => {
    setMuted(!muted);
  };


  return (
    <div
      className={` relative h-fit max-sm:h-svh flex flex-col overflow-x-clip text-text-color  `}
    >
      {/* <div className="hero absolute top-0 left-0 w-full h-full -z-10 select-none pointer-events-none opacity-[0] "></div> */}
      <Menu userId={userId} />

      <div className="mb-2 w-full h-0"></div>

      {/* mini Navbar */}
      <MiniNavBar />

      {/* Discover */}
      <div className={`w-full h-fit mt-3 `}>
        {/* hero */}
        <div className="w-full max-w-[1100px] px-5 mx-auto h-fit  flex items-start justify-start gap-3 ">
          <div className="w-3/4 min-h-full h-fit  ">
            <Swiper
              spaceBetween={0}
              className="h-[400px] w-full flex relative "
            >
              {top5.map((game, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full w-full flex overflow-clip  relative "
                >
                  <img
                    src={game.banner}
                    className="w-full h-full object-cover"
                    alt=""
                  />
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
                        className="bg-text-color/10 hover:bg-text-color/20 text-white font-semibold tracking-wider text-sm  py-[12px] px-12 rounded-xl"
                      >
                        GET
                      </Link>
                      <div className="flex items-center justify-end gap-3 bg-transparen py-3 px-4 rounded-xl">
                        <span className="flex items-center justify-center text-xs">
                          2008
                        </span>
                        <span className="flex items-center justify-center text-xs">
                          &#x2022;
                        </span>
                        <span className="flex items-center justify-center text-xs">
                          <LiaDownloadSolid className="text-sm" />{" "}
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
          <div className="w-1/4 min-w-[230px] flex flex-col gap-3 h-[400px] overflow-y-scroll snap-y snap-mandatory pr-3 overscroll-contain ">
            {Games.map((game, index) => (
              <div
                key={index}
                className="min-h-[60px] py-3 w-full snap-start flex items-center gap-2 overflow-clip relative cursor-pointer hover:bg-stone-100 dark:hover:bg-container-color/90 "
              >
                <div className=" h-[60px] min-w-[50px] overflow-clip flex">
                  <img
                    src={game.poster}
                    className="h-fit min-h-[100%] min-w-[100%] w-[50px]  "
                    alt=""
                  />
                </div>
                <h1 className="line-clamp-2 text-sm text-black dark:text-text-color ">
                  {game.title}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* most downloaded */}
        <div className="w-full h-fit pt-7">
          <div className="w-full h-fit flex flex-col max-w-[1100px] px-5 mx-auto">
            <h1 className="text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight  text-body-color dark:text-text-color pb-5">
              For You
            </h1>
            <div className="h-fit ">
              <div className="gridRespo ">
                {Games.slice(0, 10).map((game, index) => (
                  <Link
                    to={`/game/${game.id}`}
                    key={index}
                    className="group h-full w-full rounded-lg cursor-pointer mb-2 relative"
                  >
                    <div className=" ">
                      <PosterImage src={game.poster} title={game.title} />
                    </div>
                    <p className="font-normal text-[10px] line-clamp-2  text-body-color/90 dark:text-text-color-light max-w-[90%] pt-[10px] uppercase">
                      Base Game
                    </p>
                    <p className="text-[16px] font-light capitalize line-clamp-1  text-black dark:text-text-color">
                      {game.title}
                    </p>

                    <p className="font-montserrat mb-2 font-normal text-[14px] dark:text-text-color text-black flex items-center justify-start gap-2 pt-2 ">
                      {/* <span className="flex items-center gap-1 font-montserrat dark:bg-main-color/50 bg-main-color text-white py-1 px-2 text-[9px] rounded-md">
                      -100%
                    </span> */}
                      <span className="flex items-center gap-2 text-sm">
                        {/* <s></s> */}
                        $0.00
                      </span>
                    </p>
                    <button
                      className={`absolute top-3 right-1 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-white dark:bg-body-color p-2 rounded-full`}
                    >
                      <BsCart className="text-xl " />
                    </button>
                  </Link>
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
