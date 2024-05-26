import React from "react";
import { Link } from "react-router-dom";
import { IoCompass } from "react-icons/io5";
import { HiViewGridAdd } from "react-icons/hi";
import { BsPeopleFill } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain flex flex-col justify-start items-start py-5 pr-4 hidescrollbar">
      <span
        className={`flex items-center justify-start gap-1  text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 text-body-color dark:text-text-color `}
      >
        <IoCompass className="text-[25px]" />
        Explore
      </span>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Recently added
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Most Downloaded
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Wallpapers
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Upcoming Releases
      </Link>

      <span
        className={`flex items-center justify-start gap-1  text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 mt-5 text-body-color dark:text-text-color `}
      >
        <HiViewGridAdd className="text-[25px]" />
        Add Ons
      </span>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Mods
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        DLCs
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Patchs
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Skins
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Maps
      </Link>
      <span
        className={`flex items-center justify-start gap-1  text-lg capitalize font-DMsans font-medium w-full text-left tracking-tight py-2 mt-5 text-body-color dark:text-text-color `}
      >
        <BsPeopleFill className="text-[25px] min-w-fit" />
        Community
      </span>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Reviews
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Support & Feedback
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        Terms of service
      </Link>
      <Link
        className={`px-2 flex items-center justify-start gap-1 capitalize text-base py-2 font-medium font-DMsans tracking-tight w-full rounded-md text-black/70 hover:text-main-color dark:text-text-color-light transition `}
      >
        FAQs
      </Link>

    </div>
  );
}

export default Sidebar;
