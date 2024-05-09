import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import { Games } from "../constants/data";
import { FaMedal } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { BrowserRouter, Link, useParams } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import Sidebar from "../components/Sidebar";
// import Swiper from 'swiper';
// import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
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

  const sortedGames = Games.sort(() => Math.random() - 0.5);

  // // swiper init
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
      className={` relative h-svh flex flex-col overflow-x-clip text-text-color  `}
    >
      {/* <div className="hero absolute top-0 left-0 w-full h-full -z-10 select-none pointer-events-none opacity-[0] "></div> */}
      <Menu userId={userId} />

      {/* hero */}
      <div className="w-full h-fit flex flex-col py-8 gap-5 mt-12">
        <div className="w-full h-fit flex items-center justify-center flex-col gap-4 z-20">
          <h1 className="text-[60px] leading-[64px] font-montserrat capitalize font-bold tracking-tight text-center text-body-color dark:text-text-color  ">
            Get Access to Hundreds <br /> of Free Games!
          </h1>
          <p className="font-montserrat font-semibold  text-body-color/80 dark:text-text-color-light text-[17px] text-center max-w-[400px]">
            Browse, download, and request games all absolutely free of charge
          </p>
        </div>

        <div className="w-full translate-y-12 z-10 px-4">
          <form className="relative w-full flex items-center justify-center">
            <label className="w-full h-[55px] max-w-[500px] relative ring-4 dark:ring-body-color ring-white dark:bg-body-color bg-stone-100">
              <input
                type="search"
                name="search"
                autoComplete="off"
                placeholder="Search for Games"
                className=" placeholder:text-text-color-light bg-text-color/90 py-0 pl-7 pr-28 text-black text-[16px] tracking-tight font-medium w-full h-[55px] ring-[20px] ring-transparent transition duration-500 focus:ring-4 focus:ring-main-color"
              />
              <span className="absolute top-0 bottom-0 right-2 m-auto flex h-fit  ">
                <ButtonClick
                  title={"Search"}
                  type={"submit"}
                  icon={<HiMagnifyingGlass />}
                />
              </span>
            </label>
          </form>
        </div>

        <div className="flex items-center justify-center flex-col gap-2 overflow-x-clip overflow-y-visible relative ">
          <div className="absolute bottom-0 left-0 right-0 w-full h-[160px] z-10 bg-gradient-to-b dark:from-body-color/70 from-white/70 dark:to-body-color to-white flex justify-end items-center flex-col pb-6">
            <ButtonLink
              to={"/"}
              title={"Browse All Games"}
              icon={<HiMiniFire />}
            />
          </div>
          <div className="flex items-start justify-center gap-2 overflow-clip">
            {sortedGames.slice(9, 19).map((game, index) => (
              <Link
                to={`/game/${game.id}`}
                className="w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
                key={index}
              >
                <SquareImage src={game.poster} title={game.title} />
              </Link>
            ))}
          </div>
          <div className="flex items-start justify-center gap-2 overflow-clip">
            {sortedGames.slice(0, 9).map((game, index) => (
              <Link
                to={`/game/${game.id}`}
                key={index}
                className=" rounded-xl  w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
              >
                <SquareImage src={game.poster} title={game.title} />
              </Link>
            ))}
          </div>
          <div className="flex items-start justify-center gap-2 overflow-clip">
            {sortedGames.slice(8, 16).map((game, index) => (
              <Link
                to={`/game/${game.id}`}
                key={index}
                className=" rounded-xl  w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
              >
                <SquareImage src={game.poster} title={game.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* most downloaded */}
      <div className="w-full h-fit pt-14">
        <div className="w-full h-fit flex flex-col px-11 max-w-[1100px] mx-auto">
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
                  <div className=" h-[250px] ">
                    <PosterImage src={game.poster} title={game.title} />
                  </div>
                  <p className="font-normal text-[10px] line-clamp-2  text-body-color dark:text-text-color-light max-w-[90%] pt-[10px] uppercase">
                    Base Game
                  </p>
                  <p className="text-[16px] font-light capitalize line-clamp-1  text-body-color dark:text-text-color">
                    {game.title}
                  </p>

                  <p className="font-montserrat mb-2 font-normal text-[14px] dark:text-text-color text-black flex items-center justify-start gap-2 pt-3 ">
                    <span className="flex items-center gap-1 font-montserrat dark:bg-main-color/50 bg-main-color text-white py-1 px-2 text-[9px] rounded-md">
                      -100%
                    </span>
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
        <div className="w-full h-fit flex flex-col px-10 max-w-[1100px] mx-auto">
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam 
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

    

      <Footer />
    </div>
  );
}

export default Home;
