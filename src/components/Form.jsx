import React from "react";

function Form() {
  return (
    <form className="flex flex-col justify-start items-start w-full">
      <input
        type="text"
        className=" textbase text-black py-3 px-3 ring-1 ring-gray-300 hover:ring-gray-400 transition  "
      />
      <input
        type="password"
        className=" textbase text-black py-3 px-3 ring-1 ring-gray-300 hover:ring-gray-400 transition  "
      />
      <button type="submit">Sign in</button>
    </form>
  );
}

export default Form;
