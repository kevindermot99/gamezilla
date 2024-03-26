import { React, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import screenShoot from "../assets/images/screenshoot.png";
import searchbarvid from "../assets/images/search.mp4";
import phoneMockup from "../assets/images/phone-mockup.png";
import downloadOrOpen from "../assets/images/download or Open.mp4";
import { GoArrowUpRight } from "react-icons/go";
import Feature from "../components/Feature";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ButtonLoader from "../components/ButtonLoader";

function Landing() {
  const time = new Date();
  const [signInForm, setSignInForm] = useState(false);
  const [signUpForm, setSignUpForm] = useState(false);

  //sign in
  const showSignIn = () => {
    setSignInForm(true);
    document.body.style.overflow = "hidden";
  };
  const hideSignIn = () => {
    setSignInForm(false);
    document.body.style.overflow = "";
  };

  // sign up
  const showSignUp = () => {
    setSignUpForm(true);
    document.body.style.overflow = "hidden";
  };
  const hideSignUp = () => {
    setSignUpForm(false);
    document.body.style.overflow = "";
  };

  const HeroGradientText =
    "text-transparent bg-clip-text bg-gradient-to-t from-black to-gray-700 max-sm:to-gray-800";

  return (
    <div className=" overflow-clip relative bg-white text-black overflow-y-hidden custom-scrollbar-theme ">
      <div
        className={`w-full h-full relative duration-300 z-40 ${signInForm ? "fadeIt" : "hideIt"
          }`}
      >
        <SignIn hideSignIn={hideSignIn} showSignUp={showSignUp} />
      </div>

      <div
        className={`w-full h-full relative duration-300 z-40 ${signUpForm ? "fadeIt" : "hideIt"
          }`}
      >
        <SignUp hideSignUp={hideSignUp} showSignIn={showSignIn} />
      </div>

      <nav className="flex justify-between items-center py-5 px-5 max-w-[1200px] m-auto bg-white ">
        <div className="flex justify-center items-center">
          <Link
            to="/"
            className="flex justify-start items-center gap-2 text-base font-medium mr-6 "
          >
            {/* <img src={pagesLogo} alt="Logo" className="h-9" /> */}
            <p className="logoText font-Pacifico ">Pagez</p>
          </Link>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <a href="#overview" className="linkText max-lg:hidden">
            Overview
          </a>
          <a href="#features" className="linkText max-lg:hidden">
            Features
          </a>
          <a href="https://github.com/kevindermot99/Pagez" target="_blank" className="linkText max-lg:hidden">
            Source code <GoArrowUpRight />
          </a>
        </div>
        <div className="flex gap-1 justify-center items-center">

          {/* <div>|</div> */}
          <button onClick={showSignIn} className="linkText">
            Sign in
          </button>
          <button
            onClick={showSignUp}
            className="px-4 py-2 bg-main-color font-medium text-sm text-white rounded-lg transition hover:opacity-90 max-sm:hidden"
          >
            Sign up
          </button>
        </div>
      </nav>

      <section className=" flex flex-col items-center justify-start text-center px-7 relative max-sm:p-0 max-sm:space-y-6 mt-[100px] max-sm:mb-[30px] max-sm:px-9">
        <h1 className="font-extrabold  text-[60px] leading-[60px] text-wrap max-w-[900px] max-sm:text-[40px] max-sm:leading-[45px] max-sm:mt-0">
          <span className={`HeroText`}>Fantastic </span>
          <span className="text-main-color ">Stories, </span> <br />
          <span className={`HeroText`}>All in One Spot.</span>
        </h1>
        <p className="text-base font-normal leading-relaxed max-w-[500px] text-stone-500 text-wrap mt-[20px] max-sm:m-0">
          Listen to Free Audiobooks Online: Unlimited Access, Zero Cost, Pure Enjoyment!
        </p>

        <Link
          to="/"
          className="flex items-center justify-center text-sm gap-1 font-medium py-2 px-7 max-sm:w-full rounded-lg mt-6 transition bg-main-color text-white hover:opacity-90 "
        >
          Open Pagez
        </Link>

        <div className="gradient-moving-bg shadow-3xl flex justify-start items-start max-h-[400px] max-sm:hidden  " id="overview">
          <img
            src={screenShoot}
            loading="lazy"
            className=" w-full max-w-[1000px] rounded-t-xl bg-white "
            alt="screenshot"
          />
        </div>
      </section>

      <section className="w-full bg-white border-t-[1px] max-sm:border-none border-stone-300 flex flex-col items-center justify-start p-7 relative z-10" id="features">
        <h1 className="mt-10 max-sm:mt-0 text-base font-medium leading-8 text-black text-wrap text-center ">
          1,241 People has started using Pagez since the Launch
        </h1>

        <Feature
          position="1"
          tip="Easy Find"
          title="Discover with Ease"
          description="Easily find your favorite novels using our simple and intuitive search feature. Navigate through our vast collection effortlessly and dive into captivating stories with just a few clicks."
          direction="left"
          URL={searchbarvid}
        />
        <Feature
          position="2"
          tip="Free Downloads"
          title="Download for Free"
          description="Indulge in a wealth of captivating novels without spending a penny. Enjoy the freedom of unlimited free downloads and explore a world of literary wonders at no cost. common novel formats are:"
          direction="right"
          showFormats="1"
          URL={downloadOrOpen}
        />
      </section>

      <section className="w-full bg-white  flex flex-col items-center justify-start px-7">
        <h1 className="text-black text-center opacity-90 font-bold text-[35px] leading-[45px] mb-28">
          <span className=" line-through">Free By Adds</span>
          <br />
          No, It's <span className="text-main-color "> 100% Free.</span>
        </h1>
        <div className="flex max-sm:flex-col max-sm:gap-9 items-center justify-evenly  w-full max-w-[900px] z-10">
          <div>
            <h1 className="text-4xl font-extrabold text-black max-sm:text-center  text-wrap max-w-[400px] leading-[50px] mb-4  ">
              Fits seamlessly on{" "}
              <span className="text-main-color ">All Screens</span>
            </h1>
            <p className="font-medium text-base max-w-[420px] leading-relaxed text-stone-400 max-sm:text-center">
              Our web app changes its look to fit small screens. It makes
              everything easy to see and use, no matter if you're using a phone
              or a tablet. So, it's simple and comfortable for everyone to use,
              whether you're on a big computer or a tiny phone.
            </p>
          </div>

          <div className=" overflow-clip ">
            <img
              src={phoneMockup}
              className="w-[242px] h-[430px] max-sm:w-[300px] max-sm:h-auto object-cover object-left-top"
              loading="lazy"
            />
          </div>
        </div>

        <p className="my-16 text-base text-black text-center  ">
          Disclaimer: i don't own any of these books and this is a School Project
        </p>
      </section>

      <footer className=" py-5 px-5 flex items-center justify-between gap-4 max-sm:block">
        <h1 className="text-stone-400 text-sm font-medium text-wrap">
          &copy; All rights belong to book owners.{" "}
        </h1>
        <h1 className="text-stone-400 text-sm font-medium text-wrap">
          {" "}
          2023 - {time.getFullYear()}{" "}
        </h1>
      </footer>
    </div>
  );
}

export default Landing;
