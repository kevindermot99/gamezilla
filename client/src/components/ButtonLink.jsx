import React from "react";
import { Link } from "react-router-dom";

function ButtonLink({ title, to, icon }) {
  return (
    <Link
      to={to}
      className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity h-[35px] px-4 bg-black text-white font-medium rounded-sm bg-gradient-to-t from-[#a62ce2] to-[#8019a0] text-sm flex items-center gap-1 active:scale-95"
    >
      <span className="text-[17px] pb-[3px]  ">{icon}</span>
      {title}
    </Link>
  );
}

export default ButtonLink;
