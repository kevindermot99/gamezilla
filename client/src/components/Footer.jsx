import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="dark:bg-footer-color/40 bg-stone-50 min-h-fit w-full mt-6 ">
      <div className="p-10 flex flex-col items-center justify-start ">
        <h1 className="font-DMsans font-extrabold text-[50px] text-center text-body-color dark:text-text-color ">
          Let's Talk !
        </h1>
        <p className="font-DMsans text-base text-center text-body-color/80 dark:text-text-color/80 max-w-[450px] leading-5 mb-2   ">
        I am available for hire. Feel free to reach out to discuss potential opportunities and collaborations.
        </p>
        <a
          href="mailto:mbonimpayekevin@gmail.com"
          className={`mt-4 w-[90%] mx-auto max-w-[210px] h-[40px] px-4 rounded-md transition text-white bg-main-color text-sm flex items-center justify-center font-bold  `}
          target="_blank"
          
        >
          <div className="flex items-center justify-center gap-1">
            <IoMailOpenOutline className="text-lg " />
            <span className="capitalize">Compose email</span>
          </div>
        </a>
        <hr  className="w-full max-w-[1200px] mx-auto my-10 border-[0px] bg-text-color-light/20 dark:bg-border-line-color/60 h-[2px]"/>
        <div className="text-body-color/80 dark:text-text-color/80 text-sm flex items-center justify-between w-full max-w-[1200px]">
          <span> Gamezilla. 2024 Portfolio Project #1 </span>
          <span>&copy; All rights belongs the game creators</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
