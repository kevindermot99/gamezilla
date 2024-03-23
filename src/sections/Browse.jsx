import React, { useEffect, useRef, useState } from "react";
import BooksBar from "../components/BooksBar";

function Browse() {

  return (
    <section className=" flex flex-col gap-2 pl-14 mr-9 overflow-clip relative">
      
      <h1 className="font-bold text-2xl text-black dark:text-white mb-1">Trending this week</h1>
      <BooksBar />

      <h1 className="font-bold text-2xl text-black dark:text-white mb-1">Continue Listening</h1>
      <BooksBar />

    </section>
  );
}

export default Browse;
