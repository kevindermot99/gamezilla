import React from "react";
import { Link } from "react-router-dom";
import { IoCompass } from "react-icons/io5";
import { HiViewGridAdd } from "react-icons/hi";

function Sidebar() {
  return (
    <div className="w-full h-full overflow-y-auto max-h-[80vh] flex flex-col justify-start items-start">
      <span
        className={`flex items-center justify-start gap-1  text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 text-body-color dark:text-text-color `}
      >
        <IoCompass className="text-[25px]" />
        Explore
      </span>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        Trending
      </Link>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        Most Downloaded
      </Link>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        Wallpapers
      </Link>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        Terms of service
      </Link>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        FAQs
      </Link>

      <span
        className={`flex items-center justify-start gap-1  text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 mt-5 text-body-color dark:text-text-color `}
      >
        <HiViewGridAdd className="text-[25px]" />
        Add Ons
      </span>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        Mods
      </Link>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        DLCs
      </Link>
      <Link
        className={`flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition dark:hover:text-white `}
      >
        Patchs
      </Link>
    </div>
  );
}

export default Sidebar;
