import React, { useEffect, useRef, useState } from "react";
import BooksBar from "../components/BooksBar";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  // from {
  //   opacity: 0;
  //   transform: translateX(-200px);
  // }

  // to {
  //   opacity: 1;
  //   transform: translateX(0);
  // }
`;

function Browse() {

  return (
    <section className=" flex flex-col gap-2 ml-12 mr-9 overflow-clip relative max-md:ml-3 max-md:mr-3">

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        Trending Now
        </h1>
      </Reveal>
      <BooksBar count={9} />

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        Recently added
      </h1>
      </Reveal>
      <BooksBar count={5} />

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        History
      </h1>
      </Reveal>
      <BooksBar count={6} />
      
    </section>
  );
}

export default Browse;
