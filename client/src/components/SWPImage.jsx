import React, { useState } from "react";
import logo48 from "../assets/logo48.png";

function SWPImage({ src }) {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <div className="w-full h-full relative bg-stone-100 dark:bg-container-color ">
      {loading && (
        <div className="w-full h-full absolute bg-gradient-to-b from-stone-200 dark:from-container-color to-stone-50 dark:to-body-color flex justify-center items-center animate-pulse "></div>
      )}
      <img
        src={src}
        className={` h-fit min-h-[100%] min-w-[100%] object-cover object-top transition ${
          loading ? "opacity-0" : ""
        } `}
        onLoad={handleLoad}
      />
    </div>
  );
}

export default SWPImage;
