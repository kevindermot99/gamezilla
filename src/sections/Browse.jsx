import React, { useEffect, useRef, useState } from "react";
import BooksBar from "../components/BooksBar";

function Browse() {

  return (
    <section className=" flex flex-col gap-2 ml-14 mr-9 overflow-clip relative">
      <h1 className="font-bold text-2xl text-black dark:text-primary mb-4">For Kevin Dermot</h1>
      <BooksBar />
    </section>
  );
}

export default Browse;
