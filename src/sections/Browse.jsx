import React, { useEffect, useRef, useState } from "react";
import BooksBar from "../components/BooksBar";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-500px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

function Browse() {

  return (
    <section className=" flex flex-col gap-2 ml-14 mr-9 overflow-clip relative">
      
      <Reveal keyframes={customAnimation} delay={200} triggerOnce><h1 className="font-bold text-2xl text-black dark:text-white mb-1 w-fit">Trending this week</h1></Reveal>
      <BooksBar />

      <Reveal keyframes={customAnimation} delay={200} triggerOnce><h1 className="font-bold text-2xl text-black dark:text-white mb-1">Continue Listening</h1></Reveal>
      <BooksBar />

    </section>
  );
}

export default Browse;
