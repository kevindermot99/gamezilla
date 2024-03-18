import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


function SignIn() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-35 h-full z-40 overscroll-contain">
      <div className="w-[90%] max-h-[90%] max-w-[370px] h-fit bg-white absolute top-0 left-0 right-0 bottom-0 m-auto rounded-xl shadow-lg flex flex-col justify-start items-center">
        <button className="self-end translate-y-2 mr-2 p-1 rounded-md cursor-pointer hover:bg-gray-100">
          <IoCloseOutline className="text-2xl" />
        </button>
        <h1 className=" font-black tracking-tighter text-[35px] mb-2 select-none">
          Sign in
        </h1>
        <p className="font-medium text-base text-gray-500 mb-6 select-none">
          Sign in with your email here.
        </p>
        <form className="flex flex-col justify-start items-start w-full">
          <input
            type="email"
            required
            name="email"
            // autoComplete="on" 
            className="tracking-tight textbase text-black py-[10px] mb-4 rounded-lg w-[85%] m-auto px-3 ring-1 ring-gray-300 outline-none hover:ring-gray-400 transition focus:ring-main-color  "
            placeholder="Email"
          />
          <input
            type="password"
            required
            name="password"
            className=" tracking-tighte4 textbase text-black py-[10px] mb-4 rounded-lg w-[85%] m-auto px-3 ring-1 ring-gray-300 outline-none hover:ring-gray-400 transition focus:ring-main-color  "
            placeholder="Password"
          />
          <button type="submit" className="h-[47px] w-[85%] m-auto bg-main-color rounded-lg text-white text-base transition mb-5 hover:opacity-90 ">
            Sign in
            </button>
        </form>
        <div className=" border-t border-gray-200 w-full p-3 flex items-center justify-center ">
            <h1 className=" text-sm text-black p-2">Dont have an account? <Link className=" text-main-color font-medium">Sign up</Link></h1>
        </div>  
      </div>
    </div>
  );
}

export default SignIn;
