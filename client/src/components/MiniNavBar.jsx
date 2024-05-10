import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MiniNavBar() {
  const location = useLocation();
  return (
    <div className="w-full h-fit bg-white dark:bg-body-color ">
      <div className="h-fit w-full max-w-[1100px] px-5 py-3 mx-auto flex items-center justify-between gap-3 ">
        <div className="w-3/4 flex items-center gap-3 ">
          <Link
            to={`/`}
            className={`px-3 h-[45px] flex items-center justify-center text-[15px] font-DMsans font-medium tracking-tight  ${
              location.pathname === "/"
                ? "text-black dark:text-white border-b-[2px] border-main-color "
                : "text-black dark:text-text-color-light"
            }`}
          >
            Discover
          </Link>
          <Link
            to={`/browse`}
            className={`px-3 h-[45px] flex items-center justify-center text-[15px] font-DMsans font-medium tracking-tight  ${
              location.pathname === "/browse"
                ? "text-black dark:text-white border-b-[2px] border-main-color "
                : "text-black dark:text-text-color-light"
            }`}
          >
            Browse
          </Link>
        </div>
        <form className=" w-1/4">
          <input
            type="search"
            name="search"
            className="h-[45px] w-full bg-stone-100 hover:bg-stone-200/50 focus:bg-stone-200/70 dark:hover:bg-border-line-color/80 dark:focus:bg-border-line-color/80 text-black dark:text-white placeholder:text-text-color-light/80 dark:bg-container-color px-4 font-medium text-sm  "
            autoComplete="off"
            placeholder="Search Game"
          />
        </form>
      </div>
    </div>
  );
}

export default MiniNavBar;
