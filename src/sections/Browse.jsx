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
    <section className=" flex flex-col gap-2 ml-12 mr-9 overflow-clip relative">

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        Trending this
        week</h1>
      </Reveal>
      <BooksBar count={9} />

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        Recently Played
      </h1>
      </Reveal>
      <BooksBar count={5} />

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        New Releases
      </h1>
      </Reveal>
      <BooksBar count={6} />

      <Reveal keyframes={customAnimation} delay={200} triggerOnce duration={800}>
        <h1 className="font-bold text-2xl text-black dark:text-white mb-1 px-3 capitalize">
        thowback
      </h1>
      </Reveal>
      <BooksBar count={2} />

    </section>
  );
}

export default Browse;
