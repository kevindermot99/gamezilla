import React, { useEffect, useRef, useState } from "react";
import BooksBar from "../components/BooksBar";

function Browse() {

  return (
    <section className=" flex flex-col gap-2 px-14 ">
      <h1 className="font-bold text-2xl text-black dark:text-primary mb-4">For Kevin Dermot</h1>
      <BooksBar />
    </section>
  );
}

export default Browse;
