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
            <label className="w-full h-[55px] max-w-[500px] relative ring-8 dark:ring-body-color ring-white dark:bg-body-color bg-stone-100 rounded-2xl">
              <input
                type="search"
                name="search"
                autoComplete="off"
                placeholder="Search for Games"
                className=" placeholder:text-text-color-light bg-text-color/90 py-0 pl-7 pr-28 text-black text-[16px] tracking-tight font-medium rounded-2xl w-full h-[55px] ring-[20px] ring-transparent transition duration-500 focus:ring-8 focus:ring-main-color"
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
                className=" rounded-xl  w-[160px] h-[160px] min-w-[160px] min-h-[160px] "
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
        <div className="w-full h-fit flex flex-col px-10 max-w-[1100px] mx-auto">
          <h1 className="text-[28px] leading-[32px] capitalize font-DMsans font-bold w-full text-center tracking-tight  text-body-color dark:text-text-color">
            Most Downloaded Games <br /> of all time.
          </h1>
          <p className="text-[14px] leading-[15px] capitalize font-DMsans font-medium w-full text-center text-text-color-light pt-2 mb-4">
            Top ranked by downloads count
          </p>
          <div className="h-fit mt-9 ">
            <div className="gridRespo ">
              {Games.slice(0, 10  ).map((game, index) => (
                <Link
                  to={`/game/${game.id}`}
                  key={index}
                  className="group h-full w-full rounded-lg cursor-pointer mb-2 relative"
                >
                  <div className=" h-[230px] ">
                    <PosterImage src={game.poster} title={game.title} />
                  </div>
                  <p className="font-normal text-[11px] line-clamp-2  text-body-color dark:text-text-color-light max-w-[90%] py-1 uppercase">
                    Base Game
                  </p>
                  <p className="font-montserrat font-bold text-base line-clamp-1  text-body-color dark:text-text-color/70">
                    {game.title}
                  </p>

                  <p className="font-montserrat mb-2 font-normal text-[14px] text-text-color flex items-center justify-between pt-3 ">
                    <span className="flex items-center gap-1 font-montserrat bg-main-color/50 text-white py-1 px-2 text-[11px] rounded-md">
                      -100%
                    </span>
                    <span className="flex items-center gap-2 font-montserrat text-[11px]">
                      {/* <s></s> */}
                      $0.00
                    </span>
                  </p>
                  <button
                    className={`absolute top-3 right-1 transition duration-300 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 bg-main-color p-2 rounded-full`}
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
      <div className="w-full h-fit pt-14">
        <div className="w-full h-fit flex flex-col px-10 max-w-[1100px] mx-auto">
          <p className="text-base leading-[15px] capitalize font-DMsans font-medium w-full text-left text-text-color-light pt-2">
            Our Collections
          </p>
          <div className="h-fit mt-7 ">
            <div className="gridRespoCollection ">
              {Games.slice(0, 8).map((game, index) => (
                <div
                  to={`/game/${game.id}`}
                  key={index}
                  className="group h-full w-full rounded-lg mb-2 relative"
                >
                  <div className=" h-[160px] rounded-2xl overflow-clip ">
                    <CollectionImage src={game.banner} title={game.title} />
                  </div>
                  <p className="font-montserrat font-bold text-base line-clamp-1  text-body-color dark:text-text-color/70 pt-3">
                    {game.title}
                  </p>
                  <p className="font-normal text-sm line-clamp-2  text-body-color dark:text-text-color-light max-w-[90%] py-1">
                    Base Game
                  </p>

                  <Link to={`/`} className="font-montserrat font-normal text-base hover:underline text-text-color flex items-center justify-between pt-2 ">Discover</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Growth */}
      <div className=" w-full relative">
        <div className="w-full max-w-[3800px] mx-auto h-fit min-h-[400px] z-10 p-20 flex items-center justify-center gap-[15%]">
          <div className="flex items-center justify-center flex-col gap-2">
            <IoGameControllerOutline className="text-main-color/60  text-[45px]" />
            <h1 className="font-montserrat font-bold dark:text-text-color text-body-color text-[40px] leading-[50px] py-2">
              23,492
            </h1>
            <p className="font-montserrat font-semibold text-text-color-light text-[17px] ">
              Games uploaded
            </p>
          </div>

          <div className="flex items-center justify-center flex-col gap-2">
            <HiOutlineUsers className="text-main-color/60  text-[45px]" />
            <h1 className="font-montserrat font-bold dark:text-text-color text-body-color text-[40px] leading-[50px] py-2">
              492
            </h1>
            <p className="font-montserrat font-semibold text-text-color-light text-[17px] ">
              Gamers joined
            </p>
          </div>

          <div className="flex items-center justify-center flex-col gap-2">
            <GoGift className="text-main-color/60  text-[45px]" />
            <h1 className="font-montserrat font-bold dark:text-text-color text-body-color text-[40px] leading-[50px] py-2">
              100%
            </h1>
            <p className="font-montserrat font-semibold text-text-color-light text-[17px] ">
              Free for all
            </p>
          </div>
        </div>
      </div>

      {/* CAT */}
      <div className="w-full h-fit gap-4 flex justify-between items-start px-10 pb-10 max-w-[1100px] mx-auto ">
        <div className="w-full rounded-tr-[40px] rounded-bl-[40px] h-full bg-gradient-to-br dark:from-container-color/60 from-stone-200/70 to-transparent px-12 py-5 flex items-center justify-center gap-2 relative overflow-clip  ">
          <div className="w-full">
            <div className="flex items-center justify-start gap-1 pb-3 ">
              <div className="relative pb-[2px]">
                <HiOutlineStar className="text-[23px] pointer-events-none dark:text-[#A6A7A8] text-body-color" />
              </div>
              <p className="text-[15px] leading-[18px] pointer-events-none dark:text-[#A6A7A8] text-body-color font-montserrat font-semibold w-full line-clamp-4 text-left  flex items-center gap-3 whitespace-nowrap">
                Star Gamezilla
              </p>
            </div>
            <h1 className="text-[23px] leading-[28px] pointer-events-none capitalize font-montserrat font-bold w-full text-left tracking-tight text-body-color dark:text-text-color ">
              Star us on GitHub
            </h1>
            <p className="text-[15px] leading-[22px] pointer-events-none font-DMsans font-medium w-full max-w-[80%] line-clamp-4 text-left text-text-color-light pt-2 pb-4">
              Please star us on GitHub. Your support encourages us to upload
              more games, expanding our collection and providing even more
              entertainment options for our community.
            </p>
            <div className="flex items-center justify-start gap-5 w-fit mt-1">
              <a
                href=""
                className="text-[15px] leading-[15px] capitalize font-DMsans font-semibold px-5 py-4 rounded-xl w-fit text-left dark:bg-[#333535] bg-stone-300/50 dark:text-[#A6A7A8] text-body-color flex items-center justify-center gap-2 hover:opacity-80 transition-all"
              >
                <LuExternalLink /> Open GitHub
              </a>
            </div>
          </div>

          <div className="w-fit min-w-fit">
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-5562375-4642720.png?f=webp"
              className="h-52 rotate-[25deg] pointer-events-none select-none origin-center dark:opacity-65 opacity-90 pt-4 max-lg:hidden"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Home;
