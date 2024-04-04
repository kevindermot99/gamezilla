import React, { useEffect, useRef, useState } from "react";
import BooksBar from "../components/BooksBar";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const id = '9OF3H8G9C3H9'

function Browse() {

  return (
    <section className=" flex flex-col gap-2 ml-12 mr-9 overflow-clip relative max-md:ml-3 max-md:mr-3">

      <Reveal keyframes={customAnimation} triggerOnce duration={400}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize flex items-center justify-between">
          <span>Trending Now</span>
          <span className="flex items-center justify-end ">
            <Link to={`/trending`} className="font-medium text-sm lowercase text-stone-500 dark:text-stone-300 hover:underline ">view all</Link>
          </span>
        </h1>
        <div className=" bookbar w-[100%] h-fit flex overflow-x-scroll overscroll-y-auto overflow-y-clip  overscroll-contain pb-3 mb-3 custom-scrollbar">
          <BooksBar />
        </div>
      </Reveal>

      <Reveal keyframes={customAnimation} triggerOnce duration={400}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize flex items-center justify-between">
          <span>Recently added</span>
          <Link to={`/recentlyadded`} className="font-medium text-sm lowercase text-stone-500 dark:text-stone-300 hover:underline ">view all</Link>
        </h1>
        <div className=" bookbar w-[100%] h-fit flex overflow-x-scroll overscroll-y-auto overflow-y-clip  overscroll-contain pb-3 mb-3 custom-scrollbar">
          <BooksBar />
        </div>
      </Reveal>

      <Reveal keyframes={customAnimation} triggerOnce duration={400}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize flex items-center justify-between">
          <span>History</span>
          <Link to={`/history/${id}`} className="font-medium text-sm lowercase text-stone-500 dark:text-stone-300 hover:underline ">view all</Link>
        </h1>
        <div className=" bookbar w-[100%] h-fit flex overflow-x-scroll overscroll-y-auto overflow-y-clip  overscroll-contain pb-3 mb-3 custom-scrollbar">
          <BooksBar />
        </div>
      </Reveal>

    </section>
  );
}

export default Browse;
