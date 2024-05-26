import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import { Games } from "../constants/data";

import { HiDownload } from "react-icons/hi";
import { GrStorage } from "react-icons/gr";
import { FaRegFileLines } from "react-icons/fa6";

function Game() {
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(0);

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

  return (
    <div className={` relative h-full flex flex-col  text-text-color  `}>
      <ToastContainer
        className="select-none"
        position="bottom-left"
        draggable
        autoClose={3000}
      />
      <Menu cartCount={cartCount} updateCount={updateCount} />

      <div className="h-full w-full relative grid grid-cols-5 max-md:grid-cols-1 max-w-[1300px] px-5 mx-auto gap-2">
        <div className="flex sticky top-[35px] w-full h-[90vh] pr-2 max-md:hidden">
          <Sidebar />
        </div>
        <section className="w-full col-span-4 h-full flex p-5 ">
          <div className="w-full flex flex-col ">
            <h1 className="font-light text-[45px] font-DMsans ">
              {OpendGame.title}
            </h1>
            <div className="flex gap-5 mt-2">
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
            <button className="px-4 py-3 w-fit border-b-[2px] border-text-color-light font-DMsans font-medium mt-4 ">
              Overview
            </button>
            <div className="aspect-video bg-stone-200 dark:bg-container-color mt-8 ">

            </div>
          </div>
          <div className="w-full min-w-fit max-w-fit bg-green-600"></div>
        </section>
      </div>
    </div>
  );
}

export default Game;
